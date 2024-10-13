var CACHE_FILES = [
    '/',
    'introduction.html',
    'js/app.js',
    'js/custom.js',
    'js/jquery.min.js',
    'js/bootstrap.bundle.min.js',
    'css/bootstrap.min.css',
    'css/custom.css',
    'la-pizzeria.ico',
    'manifest.json',
    'images/icon/icon-72x72.png',
    'images/icon/icon-96x96.png',
    'images/icon/icon-144x144.png',
    'images/icon/icon-192x192.png'
];

var staticCacheName = "pwa";

self.addEventListener("install", function (e) {
e.waitUntil(
  caches.open(staticCacheName).then(function (cache) {
  return cache.addAll(["/"]);
  })
);
});

self.addEventListener("fetch", function (event) {
console.log(event.request.url);

event.respondWith(
  caches.match(event.request).then(function (response) {
  return response || fetch(event.request);
  })
);
});
