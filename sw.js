// LYSIS Service Worker
// Network-only: δεν κάνει cache τίποτα ώστε τα δεδομένα να είναι πάντα φρέσκα

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Καθαρισμός παλιών caches
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => caches.delete(key)))
    ).then(() => clients.claim())
  );
});

// Network only - ποτέ από cache
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
