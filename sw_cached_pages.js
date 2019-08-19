
const cacheName = 'v1';

const cacheAssets = [
    "polychamps.html",
    "style.css"
]

//call install event
self.addEventListener('install', (e) => {
    console.log('Service Worker: Installed');

    e.waitUntil(
        caches
         .open(cacheName)
         .then(cache => {
             console.log("Service Worker: Caching Files");
             cache.addAll(cacheAssets);
         })
         .then(() => self.skipWaiting())
  );      
});

//call activate event
self.addEventListener('activate', (e) => {
    console.log('Service Worker: Activated');
    //remove old caches
    e.waitUntill(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        console.log("Service Worker: Clesring Old Cache");
                        return caches.delete(cache);
                    }
                })
            )
            
        })
    )
});

