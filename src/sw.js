var cacheName = "myapp-cache2";

self.addEventListener('install', function(event) {
  console.log("SW installed");
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/app/app.module.ts',
        '/manifest.json',
        '/main.js',
        '/app/dashboard.component.ts',
        '/app/my-app-database.ts',
        '/app/my-app-database.service.js',
        '/app/heroes.component.ts',
        '/app/heroes.component.html',
        '/app/heroes.component.css',
        '/app/hero.ts',
        '/app/hero.service.ts',
        '/app/hero-detail.component.ts',
        '/app/hero-detail.component.html',
        '/app/dashboard.component.html',
        '/app/app.component.ts',
        '/app/app-routing.module.ts',
        '/systemjs.config.js',
        '/tsconfig.json',
        '/launcher-icon-4x.png',
        '/node_modules/offline-js/offline.min.js'
      ]);
    })
  )
  self.skipWaiting()
});

self.addEventListener('activate', function(event) {
  console.log("SW activated");
  event.waitUntil(
    caches.keys().then(function(names) {
      Promise.all(
        names.filter(function(name) {
          return name !== cacheName;
        }).map(function(name) {
          return caches.delete(name);
        })
      )
    })
  )
});

self.addEventListener('update', function(event) {
  self.skipWaiting();
})

// self.addEventListener('fetch', function(event) {
//   console.log("Caught a fetch!");
//   event.respondWith(
//     caches.open(cacheName).then(function(cache) {
//       // return cache.match(event.request);
//       console.log(event.request);
//     })
//   )
// });

