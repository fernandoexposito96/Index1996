const CACHE_VERSION = "nexo-2026-08-18-v4";

const CORE_FILES = [
  "./",
  "./index.html",
  "./manifest.json"
];


/* =========================
   INSTALL
========================= */

self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(CORE_FILES))
  );

  self.skipWaiting();

});


/* =========================
   ACTIVATE
========================= */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys()
      .then(cacheNames => {

        return Promise.all(
          cacheNames
            .filter(name => name !== CACHE_VERSION)
            .map(name => caches.delete(name))
        );

      })
      .then(() => self.clients.claim())

  );

});


/* =========================
   FETCH
========================= */

self.addEventListener("fetch", event => {

  const request = event.request;

  if (request.method !== "GET") {
    return;
  }


  /* =========================
     HTML / NAVEGACIÓN
     NETWORK FIRST
  ========================= */

  if (
    request.mode === "navigate" ||
    request.destination === "document"
  ) {

    event.respondWith(

      fetch(request, {
        cache: "no-store"
      })

      .then(response => {

        const copy = response.clone();

        caches.open(CACHE_VERSION)
          .then(cache => {
            cache.put(request, copy);
          });

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


  /* =========================
     RESTO DE RECURSOS
     CACHE FIRST
  ========================= */

  event.respondWith(

    caches.match(request)
      .then(cachedResponse => {

        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request)
          .then(networkResponse => {

            if (
              networkResponse &&
              networkResponse.status === 200
            ) {

              const copy = networkResponse.clone();

              caches.open(CACHE_VERSION)
                .then(cache => {
                  cache.put(request, copy);
                });

            }

            return networkResponse;

          });

      })

  );

});


/* =========================
   MESSAGE
========================= */

self.addEventListener("message", event => {

  if (!event.data) return;

  if (event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }

});