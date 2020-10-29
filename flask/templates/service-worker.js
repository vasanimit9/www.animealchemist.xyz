caches.open('vasanimit9.github.io.2')
  .then(cache => {
    cache.delete('/');
  });

caches.open('xyz.animealchemist')
  .then(cache => {
    cache.delete('/');
  });