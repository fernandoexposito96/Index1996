const CACHE_NAME = "nexo-v1000";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./sw.js"
];

/* ================================
   INSTALACIÓN
================================ */

self.addEventListener("install", event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))
      .catch(error => {
        console.error(
          "NEXO: error instalando caché",
          error
        );
      })
  );

});


/* ================================
   ACTIVACIÓN
================================ */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys => {

      return Promise.all(

        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))

      );

    }).then(() => {

      return self.clients.claim();

    })

  );

});


/* ================================
   MENSAJES
================================ */

self.addEventListener("message", event => {

  if (!event.data) return;

  if (event.data.type === "SKIP_WAITING") {

    self.skipWaiting();

  }

  if (event.data.type === "CLEAR_CACHE") {

    caches.keys().then(keys => {

      return Promise.all(
        keys.map(key => caches.delete(key))
      );

    });

  }

});


/* ================================
   FETCH
================================ */

self.addEventListener("fetch", event => {

  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  /*
   * HTML:
   * Siempre intentamos obtener la versión
   * más reciente del servidor.
   */

  if (
    request.mode === "navigate" ||
    request.destination === "document"
  ) {

    event.respondWith(

      fetch(request, {
        cache: "no-store"
      })

      .then(response => {

        if (
          response &&
          response.status === 200
        ) {

          const copy = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(request, copy);
            });

        }

        return response;

      })

      .catch(() => {

        return caches.match(request)
          .then(cached => {

            return cached ||
              caches.match("./index.html");

          });

      })

    );

    return;
  }


  /*
   * CSS / JS / imágenes / manifest:
   * Primero red → caché como respaldo.
   */

  event.respondWith(

    fetch(request)

      .then(response => {

        if (
          response &&
          response.status === 200
        ) {

          const copy = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(request, copy);
            });

        }

        return response;

      })

      .catch(() => {

        return caches.match(request);

      })

  );

});