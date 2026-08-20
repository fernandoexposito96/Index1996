/* ============================================================
   NEXO — SERVICE WORKER
   Versión 1.0.0
   PWA / Caché / Offline / Actualizaciones
   ============================================================ */

const CACHE_NAME = "nexo-v1.0.0";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json"
];

/* ============================================================
   INSTALACIÓN
   ============================================================ */

self.addEventListener("install", (event) => {
  console.log("[NEXO SW] Instalando Service Worker...");

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(APP_SHELL);
      })
      .then(() => {
        console.log("[NEXO SW] Archivos principales almacenados.");
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error(
          "[NEXO SW] Error durante la instalación:",
          error
        );
      })
  );
});


/* ============================================================
   ACTIVACIÓN
   ============================================================ */

self.addEventListener("activate", (event) => {
  console.log("[NEXO SW] Activando Service Worker...");

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {

        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName.startsWith("nexo-") &&
                     cacheName !== CACHE_NAME;
            })
            .map((cacheName) => {
              console.log(
                "[NEXO SW] Eliminando caché antigua:",
                cacheName
              );

              return caches.delete(cacheName);
            })
        );

      })
      .then(() => {
        return self.clients.claim();
      })
  );
});


/* ============================================================
   PETICIONES
   ============================================================ */

self.addEventListener("fetch", (event) => {

  const request = event.request;

  /*
   * Solo gestionamos peticiones GET.
   */
  if (request.method !== "GET") {
    return;
  }

  /*
   * Algunas peticiones externas pueden no ser adecuadas
   * para ser interceptadas por este Service Worker.
   */
  const url = new URL(request.url);

  /*
   * Navegación principal:
   * primero intenta red y, si falla, utiliza index.html.
   */
  if (request.mode === "navigate") {

    event.respondWith(

      fetch(request)
        .then((response) => {

          /*
           * Guardamos una copia actualizada.
           */
          const responseClone = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put("./index.html", responseClone);
            });

          return response;
        })

        .catch(() => {

          return caches.match("./index.html")
            .then((cachedResponse) => {

              if (cachedResponse) {
                return cachedResponse;
              }

              return new Response(
                offlinePage(),
                {
                  headers: {
                    "Content-Type": "text/html; charset=utf-8"
                  }
                }
              );

            });

        })
    );

    return;
  }


  /* ==========================================================
     ARCHIVOS LOCALES
     ========================================================== */

  if (url.origin === self.location.origin) {

    event.respondWith(

      caches.match(request)
        .then((cachedResponse) => {

          /*
           * Si existe en caché:
           * lo mostramos inmediatamente y tratamos de
           * actualizarlo desde internet.
           */

          const networkFetch = fetch(request)
            .then((networkResponse) => {

              if (
                networkResponse &&
                networkResponse.status === 200 &&
                networkResponse.type === "basic"
              ) {

                const clone = networkResponse.clone();

                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(request, clone);
                  });

              }

              return networkResponse;

            })
            .catch(() => null);


          if (cachedResponse) {

            /*
             * Actualización en segundo plano.
             */
            networkFetch.catch(() => {});

            return cachedResponse;
          }


          /*
           * Si no está en caché, usamos la red.
           */

          return networkFetch.then((response) => {

            if (response) {
              return response;
            }

            return new Response(
              offlinePage(),
              {
                headers: {
                  "Content-Type": "text/html; charset=utf-8"
                }
              }
            );

          });

        })
    );

    return;
  }


  /* ==========================================================
     RECURSOS EXTERNOS
     ========================================================== */

  /*
   * Imágenes externas, fuentes, APIs, etc.
   *
   * Se utiliza una estrategia:
   * NETWORK → CACHE
   */

  if (
    request.destination === "image" ||
    request.destination === "font" ||
    request.destination === "style" ||
    request.destination === "script"
  ) {

    event.respondWith(

      fetch(request)
        .then((response) => {

          if (
            response &&
            response.status === 200 &&
            response.type !== "opaque"
          ) {

            const clone = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, clone);
              });

          }

          return response;

        })
        .catch(() => {

          return caches.match(request)
            .then((cachedResponse) => {

              if (cachedResponse) {
                return cachedResponse;
              }

              return new Response(
                "",
                {
                  status: 503,
                  statusText: "Offline"
                }
              );

            });

        })
    );
  }

});


/* ============================================================
   MENSAJE DESDE LA APLICACIÓN
   ============================================================ */

self.addEventListener("message", (event) => {

  if (!event.data) {
    return;
  }


  /* ----------------------------------------------------------
     FORZAR ACTUALIZACIÓN
     ---------------------------------------------------------- */

  if (event.data.type === "SKIP_WAITING") {

    self.skipWaiting();

  }


  /* ----------------------------------------------------------
     LIMPIAR CACHÉ
     ---------------------------------------------------------- */

  if (event.data.type === "CLEAR_CACHE") {

    event.waitUntil(

      caches.keys()
        .then((cacheNames) => {

          return Promise.all(
            cacheNames.map((cacheName) => {
              return caches.delete(cacheName);
            })
          );

        })

    );

  }


  /* ----------------------------------------------------------
     OBTENER VERSIÓN
     ---------------------------------------------------------- */

  if (event.data.type === "GET_VERSION") {

    if (event.source) {

      event.source.postMessage({
        type: "VERSION",
        version: CACHE_NAME
      });

    }

  }

});


/* ============================================================
   NOTIFICACIONES PUSH
   ============================================================ */

self.addEventListener("push", (event) => {

  let data = {};

  try {

    data = event.data
      ? event.data.json()
      : {};

  } catch (error) {

    data = {
      title: "NEXO",
      body: event.data
        ? event.data.text()
        : "Tienes una nueva notificación."
    };

  }


  const title =
    data.title ||
    "NEXO";


  const options = {

    body:
      data.body ||
      "Tienes una nueva notificación.",

    icon:
      "./icons/icon-192.png",

    badge:
      "./icons/icon-192.png",

    image:
      data.image || undefined,

    data:
      data.data || {},

    vibrate: [
      200,
      100,
      200
    ],

    actions:
      data.actions || []

  };


  event.waitUntil(

    self.registration.showNotification(
      title,
      options
    )

  );

});


/* ============================================================
   CLICK EN NOTIFICACIONES
   ============================================================ */

self.addEventListener("notificationclick", (event) => {

  event.notification.close();


  const notificationData =
    event.notification.data || {};


  const targetUrl =
    notificationData.url ||
    "./index.html";


  event.waitUntil(

    clients.matchAll({
      type: "window",
      includeUncontrolled: true
    })
      .then((clientList) => {

        /*
         * Si NEXO ya está abierto, intentamos reutilizar
         * la ventana existente.
         */

        for (const client of clientList) {

          if (
            "focus" in client &&
            client.url.includes(self.location.origin)
          ) {

            return client
              .navigate(targetUrl)
              .then(() => client.focus());

          }

        }


        /*
         * Si no está abierto, creamos una ventana nueva.
         */

        if (clients.openWindow) {
          return clients.openWindow(targetUrl);
        }

      })

  );

});


/* ============================================================
   CERRAR NOTIFICACIÓN
   ============================================================ */

self.addEventListener("notificationclose", (event) => {

  console.log(
    "[NEXO SW] Notificación cerrada:",
    event.notification.tag
  );

});


/* ============================================================
   PÁGINA OFFLINE
   ============================================================ */

function offlinePage() {

  return `
<!DOCTYPE html>

<html lang="es">

<head>

<meta charset="UTF-8">

<meta
  name="viewport"
  content="width=device-width,
           initial-scale=1.0"
>

<meta
  name="theme-color"
  content="#8B5CF6"
>

<title>NEXO — Sin conexión</title>

<style>

* {
  box-sizing: border-box;
}

html,
body {

  margin: 0;
  padding: 0;

  width: 100%;
  min-height: 100%;

  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

}

body {

  min-height: 100vh;

  display: flex;

  align-items: center;

  justify-content: center;

  background:
    linear-gradient(
      135deg,
      #0b0714,
      #171024
    );

  color: white;

  padding: 24px;

}

.container {

  width: 100%;
  max-width: 420px;

  text-align: center;

  padding: 40px 25px;

  border-radius: 28px;

  background:
    rgba(255,255,255,0.06);

  border:
    1px solid
    rgba(255,255,255,0.10);

  backdrop-filter:
    blur(20px);

}

.logo {

  width: 82px;
  height: 82px;

  margin:
    0 auto 24px;

  border-radius: 24px;

  display: flex;

  align-items: center;
  justify-content: center;

  background:
    linear-gradient(
      135deg,
      #8B5CF6,
      #A78BFA
    );

  font-size: 34px;

  font-weight: 900;

  box-shadow:
    0 15px 40px
    rgba(139,92,246,.35);

}

h1 {

  margin:
    0 0 12px;

  font-size: 30px;

}

p {

  margin:
    0 0 26px;

  color:
    rgba(255,255,255,.65);

  line-height: 1.5;

}

button {

  border: 0;

  border-radius: 16px;

  padding:
    14px 24px;

  background:
    #8B5CF6;

  color: white;

  font-size: 16px;

  font-weight: 700;

  cursor: pointer;

}

</style>

</head>

<body>

<div class="container">

  <div class="logo">
    N
  </div>

  <h1>
    NEXO
  </h1>

  <p>
    No tienes conexión a Internet.
    Comprueba tu conexión y vuelve a intentarlo.
  </p>

  <button
    onclick="location.reload()"
  >
    Reintentar
  </button>

</div>

</body>

</html>
`;

}


/* ============================================================
   FIN DEL SERVICE WORKER
   ============================================================ */