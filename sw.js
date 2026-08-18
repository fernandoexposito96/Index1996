/* =========================================================
   CONECTA — SERVICE WORKER V2
   PWA / OFFLINE / CACHE / UPDATES
========================================================= */

const CACHE_VERSION = "conecta-2026-08-18-v2";

const CORE_FILES = [
  "./",
  "./index.html",
  "./manifest.json"
];


/* =========================================================
   INSTALL
========================================================= */

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_VERSION)
      .then(cache => {

        return cache.addAll(CORE_FILES);

      })

  );

  /*
    Activamos inmediatamente la nueva versión.
  */

  self.skipWaiting();

});


/* =========================================================
   ACTIVATE
========================================================= */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys()

      .then(cacheNames => {

        return Promise.all(

          cacheNames
            .filter(cacheName => cacheName !== CACHE_VERSION)
            .map(cacheName => caches.delete(cacheName))

        );

      })

      .then(() => {

        return self.clients.claim();

      })

  );

});


/* =========================================================
   FETCH
========================================================= */

self.addEventListener("fetch", event => {

  const request = event.request;

  /*
    Solo procesamos peticiones GET.
  */

  if (request.method !== "GET") {
    return;
  }


  /*
    No interferimos con extensiones del navegador.
  */

  if (
    request.url.startsWith("chrome-extension://") ||
    request.url.startsWith("moz-extension://")
  ) {
    return;
  }


  /* =======================================================
     NAVEGACIÓN / HTML
     NETWORK FIRST
  ======================================================= */

  if (
    request.mode === "navigate" ||
    request.destination === "document"
  ) {

    event.respondWith(

      fetch(request, {
        cache: "no-store"
      })

      .then(response => {

        /*
          Solo guardamos respuestas correctas.
        */

        if (!response || !response.ok) {
          throw new Error("Respuesta de red no válida");
        }

        const responseClone = response.clone();

        caches.open(CACHE_VERSION)
          .then(cache => {

            cache.put(request, responseClone);

          });

        return response;

      })

      .catch(() => {

        /*
          Si no hay Internet,
          intentamos recuperar la página.
        */

        return caches.match(request)

          .then(cachedResponse => {

            if (cachedResponse) {
              return cachedResponse;
            }

            return caches.match("./index.html");

          });

      })

    );

    return;
  }


  /* =======================================================
     RECURSOS ESTÁTICOS
     CACHE FIRST
  ======================================================= */

  if (
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "image" ||
    request.destination === "font" ||
    request.destination === "manifest"
  ) {

    event.respondWith(

      caches.match(request)

        .then(cachedResponse => {

          /*
            Si ya existe en caché,
            lo usamos inmediatamente.
          */

          if (cachedResponse) {
            return cachedResponse;
          }


          /*
            Si no existe,
            lo descargamos de Internet.
          */

          return fetch(request)

            .then(networkResponse => {

              if (
                !networkResponse ||
                !networkResponse.ok
              ) {

                return networkResponse;

              }


              const responseClone =
                networkResponse.clone();


              caches.open(CACHE_VERSION)

                .then(cache => {

                  cache.put(
                    request,
                    responseClone
                  );

                });


              return networkResponse;

            });

        })

    );

    return;
  }


  /* =======================================================
     RESTO DE PETICIONES
     NETWORK FIRST + FALLBACK CACHE
  ======================================================= */

  event.respondWith(

    fetch(request)

      .then(networkResponse => {

        /*
          Solo almacenamos respuestas válidas.
        */

        if (
          networkResponse &&
          networkResponse.ok &&
          new URL(request.url).origin === self.location.origin
        ) {

          const responseClone =
            networkResponse.clone();

          caches.open(CACHE_VERSION)

            .then(cache => {

              cache.put(
                request,
                responseClone
              );

            });

        }

        return networkResponse;

      })

      .catch(() => {

        return caches.match(request);

      })

  );

});


/* =========================================================
   MESSAGE
========================================================= */

self.addEventListener("message", event => {

  if (!event.data) {
    return;
  }


  /*
    Permite activar manualmente
    una nueva versión.
  */

  if (event.data.type === "SKIP_WAITING") {

    self.skipWaiting();

  }

});


/* =========================================================
   ERROR HANDLING
========================================================= */

self.addEventListener("error", event => {

  console.error(
    "CONECTA Service Worker error:",
    event.error
  );

});


self.addEventListener("unhandledrejection", event => {

  console.error(
    "CONECTA Service Worker promise error:",
    event.reason
  );

});