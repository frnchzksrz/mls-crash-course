// auth.js — Shared script for MLS Crash Course
// Must be loaded AFTER config.js, BEFORE page-specific scripts.
// Handles: Supabase client, diamonds, theme, search, header auth UI,
//          notification bell + dropdown, message envelope badge.
// Exposes: window.supabaseClient, window.escapeHtml, window.timeAgo
// Fires:   window 'medlab:ready'       -> { detail: { user, supabase } }
//          window 'medlab:authChanged' -> { detail: { user } }

(function () {
  'use strict';

  // ---------- Supabase client (created synchronously, immediately) ----------
  if (typeof SUPABASE_URL === 'undefined' || typeof SUPABASE_ANON_KEY === 'undefined') {
    console.error('[auth.js] config.js not loaded — SUPABASE_URL/SUPABASE_ANON_KEY missing.');
    return;
  }
  if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
    console.error('[auth.js] Supabase library not loaded.');
    return;
  }

  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  window.supabaseClient = sb;

  // ---------- State ----------
  let currentUser = null;

  // ---------- Global helpers ----------
  window.escapeHtml = function (text) {
    if (text == null) return '';
    return String(text)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  };

  window.timeAgo = function (dateStr) {
    const now = new Date(), then = new Date(dateStr);
    const diff = Math.floor((now - then) / 1000);
    if (diff < 60) return 'Just now';
    if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
    if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
    return Math.floor(diff / 86400) + 'd ago';
  };

  // ---------- Diamonds ----------
  function createDiamonds(count) {
    count = count || 20;
    for (let i = 0; i < count; i++) {
      const d = document.createElement('div');
      d.className = 'diamond';
      d.style.left = Math.random() * 100 + '%';
      d.style.top = Math.random() * 100 + '%';
      d.style.animationDelay = Math.random() * 4 + 's';
      d.style.width = (10 + Math.random() * 15) + 'px';
      d.style.height = d.style.width;
      document.body.appendChild(d);
    }
  }

  // ---------- Theme ----------
  function initTheme() {
    const saved = localStorage.getItem('mls-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    updateIcon();
    toggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('mls-theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('mls-theme', 'dark');
      }
      updateIcon();
    });
    function updateIcon() {
      toggle.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    }
  }

  // ---------- Search dropdown ----------
  function initSearch() {
    const container = document.getElementById('search-container');
    const input = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    if (!container || !input || !dropdown) return;

    let allCourses = null;
    async function loadCourses() {
      if (allCourses) return allCourses;
      const { data, error } = await sb.from('courses').select('slug, title');
      allCourses = error ? [] : (data || []);
      return allCourses;
    }
    function renderResults(query) {
      if (!query.trim()) { dropdown.classList.remove('open'); return; }
      const q = query.toLowerCase();
      const matches = (allCourses || []).filter(c =>
        c.title.toLowerCase().includes(q) || c.slug.toLowerCase().includes(q));
      if (matches.length === 0) {
        dropdown.innerHTML = '<p style="color:#8b8b8b; text-align:center; padding:1rem;">No matches</p>';
      } else {
        dropdown.innerHTML = matches.map(c =>
          `<a href="course-${c.slug}.html" class="search-result-item"><div class="title">${window.escapeHtml(c.title)}</div><div class="meta">Course · ${window.escapeHtml(c.slug)}</div></a>`
        ).join('');
      }
      dropdown.classList.add('open');
    }
    input.addEventListener('focus', async () => { await loadCourses(); });
    input.addEventListener('input', () => renderResults(input.value));
    document.addEventListener('click', (e) => {
      if (!container.contains(e.target)) dropdown.classList.remove('open');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { dropdown.classList.remove('open'); input.blur(); }
    });
  }

  // ---------- Auth UI ----------
  function updateAuthUI(user) {
    document.querySelectorAll('.auth-only').forEach(el => {
      el.style.display = user ? 'inline-flex' : 'none';
    });
    document.querySelectorAll('.auth-only .icon-btn').forEach(el => {
      el.style.display = user ? 'inline-flex' : 'none';
    });
    const authBtn = document.getElementById('auth-button');
    if (authBtn) {
      if (user) { authBtn.textContent = 'My Profile'; authBtn.href = 'profile.html'; }
      else { authBtn.textContent = 'Get Access'; authBtn.href = 'signup.html'; }
    }
    const bannerBtn = document.getElementById('banner-cta-button');
    if (bannerBtn) {
      if (user) { bannerBtn.textContent = 'Study Now'; bannerBtn.href = 'courses.html'; }
      else { bannerBtn.textContent = 'Get Access to All Courses'; bannerBtn.href = 'signup.html'; }
    }
  }

  async function updateBadges() {
    const notifBadge = document.getElementById('notif-badge');
    const msgBadge = document.getElementById('msg-badge');
    if (!currentUser) {
      if (notifBadge) notifBadge.textContent = '';
      if (msgBadge) msgBadge.textContent = '';
      return;
    }
    try {
      const [{ count: n }, { count: m }] = await Promise.all([
        sb.from('notifications').select('*', { count: 'exact', head: true })
          .eq('user_id', currentUser.id).eq('read', false),
        sb.from('direct_messages').select('*', { count: 'exact', head: true })
          .eq('to_user_id', currentUser.id).eq('read', false)
      ]);
      if (notifBadge) notifBadge.textContent = n > 0 ? n : '';
      if (msgBadge) msgBadge.textContent = m > 0 ? m : '';
    } catch (e) { /* silent */ }
  }

  async function loadNotifDropdown() {
    const list = document.getElementById('notif-list');
    if (!list) return;
    if (!currentUser) {
      list.innerHTML = '<div class="notif-item" style="color:#8b8b8b;text-align:center;">Login to see notifications</div>';
      return;
    }
    const { data } = await sb.from('notifications')
      .select('id,message,read,created_at')
      .eq('user_id', currentUser.id)
      .order('created_at', { ascending: false })
      .limit(8);
    if (!data || data.length === 0) {
      list.innerHTML = '<div class="notif-item" style="color:#8b8b8b;text-align:center;">No notifications yet</div>';
      return;
    }
    list.innerHTML = data.map(n => `
      <div class="notif-item${n.read ? '' : ' unread'}" data-id="${n.id}" data-read="${n.read}">
        ${window.escapeHtml(n.message)}
        <span class="notif-time">${window.timeAgo(n.created_at)}</span>
      </div>
    `).join('');
    list.querySelectorAll('.notif-item').forEach(item => {
      item.addEventListener('click', async function () {
        if (this.dataset.read === 'false') {
          await sb.from('notifications').update({ read: true }).eq('id', this.dataset.id);
          this.classList.remove('unread');
          this.dataset.read = 'true';
          updateBadges();
        }
      });
    });
  }

  function wireNotifBell() {
    const bell = document.getElementById('notif-bell');
    const dd = document.getElementById('notif-dropdown');
    if (bell) {
      bell.addEventListener('click', async (e) => {
        e.stopPropagation();
        if (!dd) return;
        if (dd.classList.contains('open')) dd.classList.remove('open');
        else { dd.classList.add('open'); await loadNotifDropdown(); }
      });
    }
    const markAll = document.getElementById('mark-all-read-btn');
    if (markAll) {
      markAll.addEventListener('click', async (e) => {
        e.stopPropagation();
        if (!currentUser) return;
        await sb.from('notifications').update({ read: true })
          .eq('user_id', currentUser.id).eq('read', false);
        updateBadges();
        loadNotifDropdown();
      });
    }
    document.addEventListener('click', (e) => {
      if (dd && bell && !dd.contains(e.target) && e.target !== bell) dd.classList.remove('open');
    });
  }

  // ---------- Init ----------
  async function init() {
    createDiamonds();
    initTheme();
    initSearch();
    wireNotifBell();

    const { data: { session } } = await sb.auth.getSession();
    currentUser = session?.user ?? null;
    updateAuthUI(currentUser);
    if (currentUser) {
      await updateBadges();
      setInterval(updateBadges, 60000);
    }

    // Signal to page-specific scripts that everything is ready
    window.dispatchEvent(new CustomEvent('medlab:ready', {
      detail: { user: currentUser, supabase: sb }
    }));

    // Auth state changes
    sb.auth.onAuthStateChange(async (_event, session) => {
      currentUser = session?.user ?? null;
      updateAuthUI(currentUser);
      await updateBadges();
      window.dispatchEvent(new CustomEvent('medlab:authChanged', {
        detail: { user: currentUser }
      }));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();