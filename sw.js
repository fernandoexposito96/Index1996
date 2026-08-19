/* =====================================================
   NEXO — SERVICE WORKER
   PWA / CACHE / ACTUALIZACIONES
===================================================== */

const CACHE_NAME = "nexo-v4";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json"
];


/* =====================================================
   INSTALAR
===================================================== */

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => {

        return cache.addAll(APP_FILES);

      })

  );

  /*
   * Activa inmediatamente la nueva versión.
   */

  self.skipWaiting();

});


/* =====================================================
   ACTIVAR
===================================================== */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys()
      .then(keys => {

        return Promise.all(

          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))

        );

      })

  );

  /*
   * Controla inmediatamente las páginas abiertas.
   */

  self.clients.claim();

});


/* =====================================================
   PETICIONES
===================================================== */

self.addEventListener("fetch", event => {

  /*
   * Solo gestionamos GET.
   */

  if(event.request.method !== "GET") {
    return;
  }


  event.respondWith(

    fetch(event.request)

      .then(response => {

        /*
         * Guardamos la versión más reciente.
         */

        const copy = response.clone();

        caches.open(CACHE_NAME)
          .then(cache => {

            cache.put(
              event.request,
              copy
            );

          });

        return response;

      })

      .catch(() => {

        /*
         * Sin conexión:
         * utilizamos la versión guardada.
         */

        return caches.match(
          event.request
        );

      })

  );

});


/* =====================================================
   ACTUALIZACIÓN MANUAL
===================================================== */

self.addEventListener("message", event => {

  if(event.data === "SKIP_WAITING") {

    self.skipWaiting();

  }

});