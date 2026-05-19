// LYSIS Service Worker - για PWA λειτουργικότητα
const CACHE_NAME = 'lysis-adeia-v1';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

// Network first - πάντα φρέσκα δεδομένα
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
