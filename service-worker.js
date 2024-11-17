self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('astro-app').then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './styles.css', // add your CSS if needed
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

