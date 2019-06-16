const staticCacheName = 'site-static-v2'
const assets = [
   '/',
   '/index.html',
   '/js/app.js',
   '/js/ui.js',
   '/js/materialize.min.js',
   '/css/styles.css',
   '/css/materialize.min.css',
   '/img/dish.png',
   'https://fonts.googleapis.com/icon?family=Material+Icons',
   'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2'
]
self.addEventListener('install', evt => {
   // console.log('service worker has been installed')
   evt.waitUntil(
      caches.open(staticCacheName).then(cache => {
         console.log('caching shell assets')
         cache.addAll(assets)
      })
   )
})

self.addEventListener('activate', evt => {
   // console.log('service woker has been activated')
   evt.waitUntil(
      caches.keys().then(keys => {
         return Promise.all(
            keys
               .filter(key => key !== staticCacheName)
               .map(key => caches.delete(key))
         )
      })
   )
})

//fetch events
self.addEventListener('fetch', evt => {
   //   console.log('fetch event', evt)
   evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
         return cacheRes || fetch(evt.request)
      })
   )
})
