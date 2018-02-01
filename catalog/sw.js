const
  cacheName = 'v2',
  cacheFiles = [
    './',
    './css/styles.css',
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/11.0.0/nouislider.min.css',
    './css/c-style.css',
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


  ];

function install(e) {
 console.info('[sw] Установка sw');
  e.waitUntil(
    caches.open(cacheName)
    .then(cachedFiles)
    .catch(cachedError)
  );
}

function cachedFiles(cache) {
  console.info('[sw] Кэширование данных');
  return cache.addAll(cacheFiles);
}

function cachedError(error) {
  console.error(`[sw] Ошибка кэширования: ${error}`);
}

function activate(e) {
  console.info('[sw] Активация sw');
  e.waitUntil(
    caches.keys()
    .then(cacheActual)
  )
}

function cacheActual(cacheNames) {
  return Promise.all(cacheNames.map(outdatedCache));
}

function outdatedCache(thisCacheName) {
  if (thisCacheName !== cacheName) {
   console.info('[sw] Удаление кэшированных файлов:', thisCacheName);
    return caches.delete(thisCacheName);
  }
}

function fetched(e) {
  console.info('[sw] Получение данных', e.request.url);
  e.respondWith(
    caches.match(e.request)
    .then(response => {
      if (response) {
        console.info("[sw] Найдено в кэше: ", e.request.url, response);
        return response;
      }

      let requestClone = e.request.clone();
      fetch(requestClone)
      .then(response => {
        if (!response) {
          console.info("[sw] Нет ответа из кэша");
          return response;
        }

        let responseClone = response.clone();

        caches.open(cacheName)
        .then(cache => {
          cache.put(e.request, responseClone);
          console.info('[sw] Кэширование новых данных: ', e.request.url);

          return response;

        });

      })
      .catch(fetchError);
    })
  )
}

function fetchError(error) {
  console.error(`[sw] Ошибка получения & кэширования новых данных: ${error}`);
}

self.addEventListener('install', install);
self.addEventListener('activate', activate);
self.addEventListener('fetch', fetched);