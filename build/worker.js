const CACHE_VERSION = 6;

let CACHES_TO_BE_CLEARED = [
    'xyz.animealchemist'
];

for (let i = 1; i < CACHE_VERSION; i++) {
    CACHES_TO_BE_CLEARED += ['xyz.animealchemist.' + i];
}

for (let i of CACHES_TO_BE_CLEARED) {
    caches.open(i)
        .then(cache => {
            cache.delete('./');
        });
}

let CACHE_NAME = 'xyz.animealchemist.' + CACHE_VERSION;

let URLS_TO_CACHE = [
    './',
    './logo.png',
    './logo_alt.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(URLS_TO_CACHE);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                } else {
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.add(event.request);
                        })
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    let cacheWhiteList = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});