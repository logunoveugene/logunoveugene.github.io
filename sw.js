
var PRECACHE = 'precache-v1';
var RUNTIME = 'runtime';

// list the files you want cached by the service worker
PRECACHE_URLS = [
'./',
'index.html',
'css/styles.css',
'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css',
'https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/11.0.0/nouislider.min.css',
'css/c-style.css',
'css/fonts/icons.woff',
'css/fonts/icons.eot',
'css/fonts/icons.svg',
'css/fonts/icons.ttf',
'js/jquery.min.js',
'js/wNumb.min.js',
'js/bootstrap.min.js',
'js/vue.js',
'js/hammer.min.js',
'js/swiper.min.js',
'js/nouislider.min.js',
'js/sticky-sidebar.min.js',
'js/tether.min.js',
'js/vue-touch.min.js',
'js/rate.vue',
'js/custom.js'
];


// the rest below handles the installing and caching
self.addEventListener('install', event => {
  event.waitUntil(
   caches.open(PRECACHE).then(cache => cache.addAll(PRECACHE_URLS)).then(self.skipWaiting())
   );
});

self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
      );
  }
});