
// Set a name for the current cache
var cacheName = 'v1'; 

// Default files to always cache
var cacheFiles = [
'./',
  'index.html',
  './index.html',
    './css/styles.css',
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/11.0.0/nouislider.min.css',
    './css/c-style.css',
    './css/fonts/icons.woff',
    './css/fonts/icons.eot',
    './css/fonts/icons.svg',
    './css/fonts/icons.ttf',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/wnumb/1.1.0/wNumb.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js',
    'https://unpkg.com/vue',
    'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/11.0.0/nouislider.min.js',
    './js/sticky-sidebar.min.js',
    './js/tether.min.js',
    './js/vue-touch.min.js',
    './js/rate.vue',
    './js/custom.js'
]


self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Installed');

    // e.waitUntil Delays the event until the Promise is resolved
    e.waitUntil(

      // Open the cache
      caches.open(cacheName).then(function(cache) {

        // Add all the default files to the cache
      console.log('[ServiceWorker] Caching cacheFiles');
      return cache.addAll(cacheFiles);
      })
  ); // end e.waitUntil
});


self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activated');

    e.waitUntil(

      // Get all the cache keys (cacheName)
    caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames.map(function(thisCacheName) {

        // If a cached item is saved under a previous cacheName
        if (thisCacheName !== cacheName) {

          // Delete that cached file
          console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
          return caches.delete(thisCacheName);
        }
      }));
    })
  ); // end e.waitUntil

});


self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);

  // e.respondWidth Responds to the fetch event
  e.respondWith(

    // Check in cache for the request being made
    caches.match(e.request)


      .then(function(response) {

        // If the request is in the cache
        if ( response ) {
          console.log("[ServiceWorker] Found in Cache", e.request.url, response);
          // Return the cached version
          return response;
        }

        // If the request is NOT in the cache, fetch and cache

        var requestClone = e.request.clone();
        fetch(requestClone)
          .then(function(response) {

            if ( !response ) {
              console.log("[ServiceWorker] No response from fetch ")
              return response;
            }

            var responseClone = response.clone();

            //  Open the cache
            caches.open(cacheName).then(function(cache) {

              // Put the fetched response in the cache
              cache.put(e.request, responseClone);
              console.log('[ServiceWorker] New Data Cached', e.request.url);

              // Return the response
              return response;
      
                }); // end caches.open

          })
          .catch(function(err) {
            console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
          });


      }) // end caches.match(e.request)
  ); // end e.respondWith
});