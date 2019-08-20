
const cacheName = 'v9';

const cacheAssets = [
    "polychamps.html",
    "news.html",
    "rules.html",
    "season.html",
    "tactics.html",
    "sw_cached_pages.js",
    "css",
    "css/style.css",
    "css/news.css",
    "css/rules.css",
    "css/season.css",
    "css/tactics.css",
    "img",
    "img/ambhipion.png",
    "img/background.png",
    "img/header.png",
    "img/bombers.png",
    "img/cosmonauts.png",
    "img/crawfish.png",
    "img/jets.png",
    "img/lightning.png",
    "img/mallard.png",
    "img/plague.png",
    "img/ronin.png",
    "img/sparkies.png",
    "img/wildfire.png",
    "js",
    "js/main.js",
    "favicon.ico"
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
                        console.log("Service Worker: Clearing Old Cache");
                        return caches.delete(cache);
                    }
                })
            )
            
        })
    )
});

