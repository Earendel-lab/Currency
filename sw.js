const CACHE_NAME = 'currency-v1';
const ASSETS = [
  '/Currency/',
  '/Currency/index.html',
  '/Currency/manifest.json',
  '/Currency/icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
