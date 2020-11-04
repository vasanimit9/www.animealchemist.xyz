
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./worker.js').then(function (registration) {
            console.log('Worker registration successful', registration.scope);
        }, function (err) {
            console.log('Worker registration failed', err);
        }).catch(function (err) {
            console.log(err);
        });
    });
} else {
    console.log('Service Worker is not supported by browser.');
}

const CACHE_VERSION = 15;

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