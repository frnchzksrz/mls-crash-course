// auth.js — Shared script for MLS Crash Course
// Must be loaded AFTER config.js, BEFORE page-specific scripts.
// Handles: Supabase client, diamonds, theme, search, header auth UI,
//          notification bell + dropdown, message envelope badge,
//          in-browser push notifications, update popup,
//          install-app reminder, PWA registration.
// Exposes: window.supabaseClient, window.escapeHtml, window.timeAgo, window.track
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

  window.track = function (eventName, metadata) {
    try {
      const payload = {
        event_name: String(eventName).slice(0, 80),
        page: window.location.pathname,
        metadata: metadata || null,
        user_id: currentUser ? currentUser.id : null
      };
      // Fire-and-forget — never block the UI on analytics
      sb.from('analytics_events').insert(payload).then(() => {}).catch(() => {});
    } catch (e) { /* silent */ }
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

  async function updateLastActive() {
    if (!currentUser) return;
    try {
      const now = new Date();
      const todayLocal = now.toLocaleDateString('en-CA'); // YYYY-MM-DD, local timezone
      await sb.from('profiles').update({
        last_active: now.toISOString(),
        last_active_date: todayLocal
      }).eq('id', currentUser.id);
    } catch (e) { /* silent — never block the page on this */ }
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

  // ---------- In-browser push notifications ----------
  function notificationsSupported() {
    return typeof window.Notification !== 'undefined' && window.isSecureContext;
  }

  async function ensureNotificationPermission() {
    if (!notificationsSupported()) return false;
    if (Notification.permission === 'granted') return true;
    if (Notification.permission === 'denied') return false;
    const result = await Notification.requestPermission();
    return result === 'granted';
  }

  function showBrowserNotification(title, body, url) {
    if (!notificationsSupported() || Notification.permission !== 'granted') return;
    try {
      const n = new Notification(title, {
        body: body || '',
        icon: '/assets/icons/icon-192.png',
        badge: '/assets/icons/icon-192.png',
        tag: 'mls-' + Date.now(),
        renotify: false
      });
      n.onclick = () => {
        window.focus();
        if (url) window.location.href = url;
        n.close();
      };
    } catch (e) { /* some browsers require SW notification, ignore */ }
  }

  function subscribeToLiveUpdates() {
    if (!currentUser) return;

    // Notifications for this user
    sb.channel('live-notifications')
      .on('postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'notifications', filter: `user_id=eq.${currentUser.id}` },
        (payload) => {
          const row = payload.new || {};
          showBrowserNotification('MLS Crash Course', row.message || 'You have a new notification.', row.link || 'notifications.html');
          updateBadges();
        })
      .subscribe();

    // Direct messages addressed to this user
    sb.channel('live-messages')
      .on('postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'direct_messages', filter: `to_user_id=eq.${currentUser.id}` },
        (payload) => {
          const row = payload.new || {};
          showBrowserNotification('New message', row.message ? String(row.message).slice(0, 100) : 'You have a new message.', 'messages.html');
          updateBadges();
        })
      .subscribe();
  }

  // ---------- Update popup ----------
  function injectUpdatePopupStyles() {
    if (document.getElementById('mls-update-popup-styles')) return;
    const style = document.createElement('style');
    style.id = 'mls-update-popup-styles';
    style.textContent = `
      .mls-update-popup {
        position: fixed;
        top: 88px;
        right: 24px;
        width: 340px;
        max-width: calc(100vw - 32px);
        background: linear-gradient(135deg, #1e3b5a 0%, #2d4a6b 100%);
        color: #ffffff;
        border-radius: 16px;
        padding: 1.1rem 1.15rem 1.4rem;
        box-shadow: 0 25px 60px rgba(15,26,38,0.35);
        z-index: 9999;
        transform: translateX(120%);
        opacity: 0;
        transition: transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease;
        overflow: hidden;
        font-family: 'Inter', sans-serif;
        border: 1px solid rgba(246,196,69,0.35);
        box-sizing: border-box;
      }
      .mls-update-popup.visible {
        transform: translateX(0);
        opacity: 1;
      }
      .mls-update-close {
        position: absolute;
        top: 8px;
        right: 10px;
        background: none;
        border: none;
        color: rgba(255,255,255,0.55);
        font-size: 1.4rem;
        line-height: 1;
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 50%;
        transition: background 0.2s, color 0.2s;
      }
      .mls-update-close:hover {
        background: rgba(255,255,255,0.1);
        color: #fff;
      }
      .mls-update-header {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        margin-bottom: 0.7rem;
        padding-right: 1.5rem;
      }
      .mls-update-icon {
        font-size: 1.2rem;
        line-height: 1;
      }
      .mls-update-title {
        font-family: 'Playfair Display', serif;
        font-size: 1.1rem;
        font-weight: 700;
        color: #f6c445;
        letter-spacing: 0.01em;
      }
      .mls-update-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
      }
      .mls-update-list li {
        display: flex;
        gap: 0.55rem;
        align-items: flex-start;
        font-size: 0.82rem;
        line-height: 1.4;
        color: #e8eef5;
      }
      .mls-update-list li .mls-update-item-icon {
        flex-shrink: 0;
        font-size: 0.95rem;
        line-height: 1.35;
      }
      @media (max-width: 600px) {
        .mls-update-popup {
          top: auto;
          bottom: 20px;
          left: 16px;
          right: 16px;
          width: auto;
          transform: translateY(120%);
        }
        .mls-update-popup.visible {
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
  }

  function showUpdatePopup(data) {
    if (!data || !Array.isArray(data.items) || data.items.length === 0) return;
    injectUpdatePopupStyles();

    const popup = document.createElement('div');
    popup.className = 'mls-update-popup';
    popup.innerHTML = `
      <button class="mls-update-close" aria-label="Dismiss">×</button>
      <div class="mls-update-header">
        <span class="mls-update-icon">✨</span>
        <span class="mls-update-title">${window.escapeHtml(data.title || "What's new")}</span>
      </div>
      <ul class="mls-update-list">
        ${data.items.map(i => `
          <li>
            <span class="mls-update-item-icon">${window.escapeHtml(i.icon || '•')}</span>
            <span>${window.escapeHtml(i.text || '')}</span>
          </li>
        `).join('')}
      </ul>
    `;
    document.body.appendChild(popup);
    requestAnimationFrame(() => popup.classList.add('visible'));

    let dismissed = false;
    function dismiss() {
      if (dismissed) return;
      dismissed = true;
      popup.classList.remove('visible');
      setTimeout(() => popup.remove(), 500);
    }

    popup.querySelector('.mls-update-close').addEventListener('click', dismiss);
  }

  async function checkForUpdates() {
    try {
      const res = await fetch('/updates.json', { cache: 'no-cache' });
      if (!res.ok) return;
      const data = await res.json();
      if (!data || !data.version) return;
      const seen = localStorage.getItem('mls-seen-update-version');
      if (seen === data.version) return;
      // Mark as seen immediately so a page navigation mid-popup doesn't repeat it
      localStorage.setItem('mls-seen-update-version', data.version);
      // Delay slightly so it doesn't fight with page load
      setTimeout(() => showUpdatePopup(data), 800);
    } catch (e) { /* silent */ }
  }

  // ---------- Install app reminder ----------
  let deferredInstallPrompt = null;
  let appInstalledFlag = false;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
  });

  window.addEventListener('appinstalled', () => {
    appInstalledFlag = true;
    deferredInstallPrompt = null;
    const popup = document.querySelector('.mls-install-popup');
    if (popup) {
      popup.classList.remove('visible');
      setTimeout(() => popup.remove(), 500);
    }
  });

  function isAppInstalled() {
    if (appInstalledFlag) return true;
    try {
      if (window.matchMedia('(display-mode: standalone)').matches) return true;
      if (window.matchMedia('(display-mode: fullscreen)').matches) return true;
      if (window.matchMedia('(display-mode: minimal-ui)').matches) return true;
    } catch (e) { /* older browsers */ }
    if (window.navigator.standalone === true) return true; // iOS Safari
    return false;
  }

  function isIosSafari() {
    const ua = window.navigator.userAgent || '';
    const isIos = /iPhone|iPad|iPod/.test(ua);
    const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS|mercury/i.test(ua);
    return isIos && isSafari;
  }

  function todayLocalDate() {
    return new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD local
  }

  function injectInstallPopupStyles() {
    if (document.getElementById('mls-install-popup-styles')) return;
    const style = document.createElement('style');
    style.id = 'mls-install-popup-styles';
    style.textContent = `
      .mls-install-popup .mls-install-body {
        font-size: 0.85rem;
        line-height: 1.45;
        color: #e8eef5;
        margin-bottom: 0.9rem;
      }
      .mls-install-popup .mls-install-actions {
        display: flex;
        gap: 0.55rem;
        align-items: center;
      }
      .mls-install-popup .mls-install-btn {
        flex: 1;
        background: #f6c445;
        color: #4a3403;
        border: none;
        border-radius: 30px;
        padding: 9px 18px;
        font-family: inherit;
        font-size: 0.85rem;
        font-weight: 700;
        cursor: pointer;
        transition: transform 0.15s, box-shadow 0.15s;
        letter-spacing: 0.02em;
      }
      .mls-install-popup .mls-install-btn:hover:not(:disabled) {
        transform: translateY(-1px);
        box-shadow: 0 6px 18px rgba(246,196,69,0.4);
      }
      .mls-install-popup .mls-install-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .mls-install-popup .mls-install-hint {
        font-size: 0.72rem;
        color: #b8c5d1;
        margin-top: 0.5rem;
        line-height: 1.45;
      }
      .mls-install-popup .mls-install-hint strong {
        color: #f6c445;
      }
    `;
    document.head.appendChild(style);
  }

  async function triggerInstall() {
    if (!deferredInstallPrompt) return false;
    try {
      deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice;
      if (choice && choice.outcome === 'accepted') {
        window.track('pwa_install_accepted');
        return true;
      }
      window.track('pwa_install_dismissed');
      return false;
    } catch (e) {
      return false;
    } finally {
      deferredInstallPrompt = null;
    }
  }

  function showInstallPopup() {
    if (document.querySelector('.mls-install-popup')) return;

    const canPrompt = !!deferredInstallPrompt;
    const iosSafari = isIosSafari();
    if (!canPrompt && !iosSafari) return;

    injectInstallPopupStyles();

    // Stack below any visible update popup (desktop only)
    const isMobile = window.matchMedia('(max-width: 600px)').matches;
    const visibleUpdates = document.querySelectorAll('.mls-update-popup.visible:not(.mls-install-popup)').length;

    const popup = document.createElement('div');
    popup.className = 'mls-update-popup mls-install-popup';
    if (!isMobile && visibleUpdates > 0) {
      popup.style.top = (88 + visibleUpdates * 200) + 'px';
    }

    let bodyHtml;
    if (canPrompt) {
      bodyHtml = `
        <div class="mls-install-body">
          Add MLS x RF to your home screen for one-tap access, offline reading, and a full-screen experience.
        </div>
        <div class="mls-install-actions">
          <button class="mls-install-btn" id="mls-install-trigger">Install App</button>
        </div>
      `;
    } else {
      bodyHtml = `
        <div class="mls-install-body">
          Add MLS x RF to your home screen for one-tap access and a full-screen experience.
        </div>
        <div class="mls-install-hint">
          Tap <strong>Share</strong>, then <strong>Add to Home Screen</strong>.
        </div>
      `;
    }

    popup.innerHTML = `
      <button class="mls-update-close" aria-label="Dismiss">×</button>
      <div class="mls-update-header">
        <span class="mls-update-icon">📱</span>
        <span class="mls-update-title">Install the App</span>
      </div>
      ${bodyHtml}
    `;

    document.body.appendChild(popup);
    requestAnimationFrame(() => popup.classList.add('visible'));

    popup.querySelector('.mls-update-close').addEventListener('click', () => {
      localStorage.setItem('mls-install-reminder-shown', todayLocalDate());
      popup.classList.remove('visible');
      setTimeout(() => popup.remove(), 500);
    });

    const installBtn = popup.querySelector('#mls-install-trigger');
    if (installBtn) {
      installBtn.addEventListener('click', async () => {
        installBtn.disabled = true;
        installBtn.textContent = 'Opening installer…';
        const accepted = await triggerInstall();
        if (accepted) return; // appinstalled event will remove the popup
        installBtn.disabled = false;
        installBtn.textContent = 'Install App';
      });
    }

    window.track('pwa_install_prompt_shown', { canPrompt, iosSafari });
  }

  function maybeShowInstallReminder() {
    if (isAppInstalled()) return;
    const today = todayLocalDate();
    if (localStorage.getItem('mls-install-reminder-shown') === today) return;

    // Give beforeinstallprompt a moment to fire (Chrome needs a beat)
    setTimeout(() => {
      if (isAppInstalled()) return;
      const canPrompt = !!deferredInstallPrompt;
      const iosSafari = isIosSafari();
      // If we can't actually offer an install here, retry on the next page load
      if (!canPrompt && !iosSafari) return;
      showInstallPopup();
      localStorage.setItem('mls-install-reminder-shown', today);
    }, 4000);
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
      updateLastActive();
    }

    // Ask for notification permission once per session, if the user is logged in
    if (currentUser && notificationsSupported() && Notification.permission === 'default') {
      setTimeout(() => { ensureNotificationPermission(); }, 5000);
    }

    // Start live updates if logged in
    if (currentUser) subscribeToLiveUpdates();

    // Auto page-view event
    window.track('page_view', {
      referrer: document.referrer || null,
      title: document.title
    });

    // Update popup (once per version, non-blocking)
    checkForUpdates();

    // Install reminder (once per day for non-installed users, non-blocking)
    maybeShowInstallReminder();

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

  // ---------- Bootstrap ----------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ---------- PWA service worker ----------
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(() => {
          // Ask the SW to silently refresh its offline cache of the core pages
          navigator.serviceWorker.ready.then((reg) => {
            if (reg.active) reg.active.postMessage({ type: 'REFRESH_CACHE' });
          });
        })
        .catch((err) => {
          console.warn('[auth.js] SW registration failed:', err && err.message);
        });
    });
  }
})();