// VOIDRUN offline cache service worker
// Safe for GitHub Pages: all paths are relative to the repository scope.
const VOIDRUN_CACHE = 'voidrun-static-v3.1.0';
const VOIDRUN_ASSETS = [
  './',
  './index.html',
  './voidrun-command-center.js',
  './nix-brand.html',
  './README.md',
  './docs/READINESS.md',
  './manifest.webmanifest',
  './.nojekyll'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VOIDRUN_CACHE)
      .then(cache => cache.addAll(VOIDRUN_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        .filter(key => key.startsWith('voidrun-static-') && key !== VOIDRUN_CACHE)
        .map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      const network = fetch(event.request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(VOIDRUN_CACHE).then(cache => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached || caches.match('./index.html'));
      return cached || network;
    })
  );
});
