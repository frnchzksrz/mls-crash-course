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
    const forced = document.documentElement.getAttribute('data-force-theme');
    const saved = localStorage.getItem('mls-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = forced || saved || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    if (forced) { toggle.style.display = 'none'; return; }
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

  // ---------- Search dropdown (courses + people) ----------
  function initSearch() {
    const container = document.getElementById('search-container');
    const input = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    if (!container || !input || !dropdown) return;

    // Inject small style block for the search section labels and person rows (once per page)
    if (!document.getElementById('search-dynamic-style')) {
      const s = document.createElement('style');
      s.id = 'search-dynamic-style';
      s.textContent = `
        .search-section-label {
          padding: 0.5rem 0.9rem 0.25rem;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #8b8b8b;
          font-weight: 600;
        }
        .search-person-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .search-person-avatar {
          width: 28px; height: 28px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }
        .search-person-avatar-fallback {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: #e4ecf2;
          color: #1e3b5a;
          font-weight: 600;
          font-size: 0.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        html[data-theme="dark"] .search-person-avatar-fallback {
          background: #23374b;
          color: #8ab4d9;
        }
      `;
      document.head.appendChild(s);
    }

    let allCourses = null;
    async function loadCourses() {
      if (allCourses) return allCourses;
      const { data, error } = await sb.from('courses').select('slug, title');
      allCourses = error ? [] : (data || []);
      return allCourses;
    }

    async function searchPeople(q) {
      const { data, error } = await sb.rpc('search_users', { q });
      return error ? [] : (data || []);
    }

    // Simple stale-request guard: if the user types again before this render
    // finishes, the older render bails out so the newest one always wins.
    let renderToken = 0;
    async function renderResults(query) {
      const token = ++renderToken;
      const trimmed = query.trim();
      if (!trimmed) { dropdown.classList.remove('open'); return; }

      const q = trimmed.toLowerCase();
      await loadCourses();
      const people = await searchPeople(trimmed);

      if (token !== renderToken) return; // a newer render has taken over

      const courseMatches = (allCourses || []).filter(c =>
        c.title.toLowerCase().includes(q) || c.slug.toLowerCase().includes(q));

      let html = '';
      if (courseMatches.length) {
        html += '<div class="search-section-label">Courses</div>';
        html += courseMatches.map(c =>
          `<a href="course-${c.slug}.html" class="search-result-item"><div class="title">${window.escapeHtml(c.title)}</div><div class="meta">Course · ${window.escapeHtml(c.slug)}</div></a>`
        ).join('');
      }
      if (people.length) {
        html += '<div class="search-section-label">People</div>';
        html += people.map(p => {
          const name = p.full_name || 'Anonymous';
          const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
          const avatar = p.avatar_url
            ? `<img src="${p.avatar_url}" alt="" class="search-person-avatar">`
            : `<span class="search-person-avatar-fallback">${initials}</span>`;
          return `<a href="profile.html?id=${p.id}" class="search-result-item"><div class="search-person-row">${avatar}<div><div class="title">${window.escapeHtml(name)}</div><div class="meta">View profile</div></div></div></a>`;
        }).join('');
      }

      if (!html) {
        html = '<p style="color:#8b8b8b; text-align:center; padding:1rem;">No matches</p>';
      }
      dropdown.innerHTML = html;
      dropdown.classList.add('open');
    }

    input.addEventListener('focus', async () => {
      await loadCourses();
      if (input.value.trim()) renderResults(input.value);
    });
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

    window.dispatchEvent(new CustomEvent('medlab:ready', {
      detail: { user: currentUser, supabase: sb }
    }));

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