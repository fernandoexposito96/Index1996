/* =====================================================
   NEXO — SERVICE WORKER
   VERSIÓN SEGURA
===================================================== */

const CACHE_NAME = "nexo-v6";


/* =====================================================
   INSTALACIÓN
===================================================== */

self.addEventListener("install", event => {

  self.skipWaiting();

});


/* =====================================================
   ACTIVACIÓN
===================================================== */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys => {

      return Promise.all(

        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))

      );

    })

  );

  self.clients.claim();

});


/* =====================================================
   PETICIONES
===================================================== */

self.addEventListener("fetch", event => {

  /*
   * Solo GET.
   */

  if(event.request.method !== "GET") {
    return;
  }


  /*
   * Primero Internet.
   * Así siempre intentamos cargar
   * la versión actualizada de NEXO.
   */

  event.respondWith(

    fetch(event.request)

      .then(response => {

        return response;

      })

      .catch(() => {

        /*
         * Si no hay Internet,
         * intentamos utilizar caché.
         */

        return caches.match(event.request);

      })

  );

});