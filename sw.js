// sw.js — MLS Crash Course service worker (network-first + background refresh)
const CACHE_NAME = 'mls-cache-v1';
const PRECACHE = [
  '/',
  '/index.html',
  '/courses.html',
  '/focus.html',
  '/daily.html',
  '/community.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Background refresh — silently refetches precache list
async function refreshPrecache() {
  const cache = await caches.open(CACHE_NAME);
  for (const url of PRECACHE) {
    try {
      const res = await fetch(url, { cache: 'reload' });
      if (res && res.status === 200 && res.type === 'basic') {
        await cache.put(url, res);
      }
    } catch (e) { /* offline, skip */ }
  }
}

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'REFRESH_CACHE') {
    event.waitUntil(refreshPrecache());
  }
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {});
        }
        return response;
      })
      .catch(() => caches.match(request).then((cached) => {
        if (cached) return cached;
        if (request.headers.get('accept')?.includes('text/html')) {
          return caches.match('/index.html');
        }
      }))
  );
});