
const cacheName = 'v1';

const cacheAssets = [
    "polychamps.html",
    "news.html",
    "rules.html",
    "season.html",
    "tactics.html",
    "../css/news.css",
    "../css/rules.css",
    "../css/season.css",
    "../css/style.css",
    "../css/tactics.css",
    "../js/main.js",
    "../js/sw_cached_pages.js"
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
    e.waitUntil(
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

