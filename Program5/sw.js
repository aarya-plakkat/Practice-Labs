const CACHE_NAME = 'Aarya';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/assets/img1.jpg',
  '/assets/img2.jpg',
  '/assets/img3.jpg',
  '/sw.js'
];

// Install event: cache all static assets
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('[Service Worker] Caching static assets');
          return cache.addAll(ASSETS_TO_CACHE)
            .then(() => console.log('[Service Worker] All assets cached!'))
            .catch(err => console.error('[Service Worker] Caching failed:', err));
        })
    );
    self.skipWaiting();
  });
// Activate event: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim(); // Take control of all clients
});

// Fetch event: respond from cache, then network fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedRes => {
      return cachedRes || fetch(event.request).then(networkRes => {
        return caches.open(CACHE_NAME).then(cache => {
          // Optional: only cache GET requests from same-origin
          if (event.request.method === 'GET' && event.request.url.startsWith(location.origin)) {
            cache.put(event.request, networkRes.clone());
          }
          return networkRes;
        });
      });
    }).catch(() => {
      // Optional fallback for offline
      if (event.request.destination === 'document') {
        return caches.match('/index.html');
      }
    })
  );
});
