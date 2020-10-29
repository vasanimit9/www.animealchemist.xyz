caches.open('vasanimit9.github.io.2')
  .then(cache => {
    cache.delete('/');
  });
