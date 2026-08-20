/* ============================================================
   NEXO — SERVICE WORKER
   PWA / CACHE / OFFLINE / UPDATES / PUSH
   ============================================================ */

const CACHE_NAME = "nexo-v2.0.0";

/*
 * Archivos principales de NEXO.
 * Añade aquí cualquier archivo local importante que quieras
 * disponible inmediatamente después de instalar la PWA.
 */
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json"
];

/* ============================================================
   INSTALACIÓN
   ============================================================ */

self.addEventListener("install", (event) => {
  console.log("[NEXO SW] Instalando:", CACHE_NAME);

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
      .catch((error) => {
        console.error("[NEXO SW] Error de instalación:", error);
      })
  );
});


/* ============================================================
   ACTIVACIÓN
   ============================================================ */

self.addEventListener("activate", (event) => {
  console.log("[NEXO SW] Activando:", CACHE_NAME);

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter(
              (cacheName) =>
                cacheName.startsWith("nexo-") &&
                cacheName !== CACHE_NAME
            )
            .map((cacheName) => {
              console.log(
                "[NEXO SW] Eliminando caché antigua:",
                cacheName
              );

              return caches.delete(cacheName);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});


/* ============================================================
   FETCH
   ============================================================ */

self.addEventListener("fetch", (event) => {

  const request = event.request;

  /* Solo GET */
  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  /* ==========================================================
     NAVEGACIÓN
     ========================================================== */

  if (request.mode === "navigate") {

    event.respondWith(

      fetch(request)
        .then((response) => {

          if (
            response &&
            response.ok
          ) {

            const clone = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put("./index.html", clone);
              });

          }

          return response;

        })
        .catch(() => {

          return caches.match("./index.html")
            .then((cachedResponse) => {

              if (cachedResponse) {
                return cachedResponse;
              }

              return offlineResponse();

            });

        })

    );

    return;
  }


  /* ==========================================================
     RECURSOS LOCALES
     ========================================================== */

  if (url.origin === self.location.origin) {

    event.respondWith(

      caches.match(request)
        .then((cachedResponse) => {

          const networkRequest = fetch(request)
            .then((response) => {

              if (
                response &&
                response.ok &&
                response.type === "basic"
              ) {

                const clone = response.clone();

                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(request, clone);
                  });

              }

              return response;

            })
            .catch(() => null);


          /*
           * Si tenemos caché:
           * mostramos inmediatamente el recurso.
           */

          if (cachedResponse) {

            /*
             * La red actualiza la caché en segundo plano.
             */

            event.waitUntil(
              networkRequest.catch(() => {})
            );

            return cachedResponse;
          }


          /*
           * Si no hay caché:
           * esperamos a Internet.
           */

          return networkRequest
            .then((response) => {

              if (response) {
                return response;
              }

              return offlineResponse();

            });

        })

    );

    return;
  }


  /* ==========================================================
     RECURSOS EXTERNOS
     ========================================================== */

  const externalDestinations = [
    "image",
    "font",
    "style",
    "script"
  ];

  if (
    externalDestinations.includes(
      request.destination
    )
  ) {

    event.respondWith(

      fetch(request)
        .then((response) => {

          /*
           * Guardamos únicamente respuestas válidas.
           */

          if (
            response &&
            response.ok
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

              return new Response("", {
                status: 503,
                statusText: "Offline"
              });

            });

        })

    );

  }

});


/* ============================================================
   MENSAJES
   ============================================================ */

self.addEventListener("message", (event) => {

  if (!event.data) {
    return;
  }


  /* ----------------------------------------------------------
     ACTUALIZACIÓN
     ---------------------------------------------------------- */

  if (
    event.data.type ===
    "SKIP_WAITING"
  ) {

    self.skipWaiting();

  }


  /* ----------------------------------------------------------
     LIMPIAR CACHÉ
     ---------------------------------------------------------- */

  if (
    event.data.type ===
    "CLEAR_CACHE"
  ) {

    event.waitUntil(

      caches.keys()
        .then((cacheNames) => {

          return Promise.all(
            cacheNames.map(
              (cacheName) =>
                caches.delete(cacheName)
            )
          );

        })

    );

  }


  /* ----------------------------------------------------------
     OBTENER VERSIÓN
     ---------------------------------------------------------- */

  if (
    event.data.type ===
    "GET_VERSION"
  ) {

    if (event.source) {

      event.source.postMessage({
        type: "VERSION",
        version: CACHE_NAME
      });

    }

  }

});


/* ============================================================
   PUSH NOTIFICATIONS
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
      Array.isArray(data.actions)
        ? data.actions
        : []

  };


  event.waitUntil(

    self.registration.showNotification(
      title,
      options
    )

  );

});


/* ============================================================
   CLICK NOTIFICACIÓN
   ============================================================ */

self.addEventListener(
  "notificationclick",
  (event) => {

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

        for (const client of clientList) {

          if (
            "focus" in client &&
            client.url.includes(
              self.location.origin
            )
          ) {

            return client
              .navigate(targetUrl)
              .then(() => client.focus());

          }

        }


        if (
          clients.openWindow
        ) {

          return clients.openWindow(
            targetUrl
          );

        }

      })

    );

  }
);


/* ============================================================
   CERRAR NOTIFICACIÓN
   ============================================================ */

self.addEventListener(
  "notificationclose",
  (event) => {

    console.log(
      "[NEXO SW] Notificación cerrada:",
      event.notification.tag
    );

  }
);


/* ============================================================
   RESPUESTA OFFLINE
   ============================================================ */

function offlineResponse() {

  return new Response(

    offlinePage(),

    {
      status: 503,

      headers: {
        "Content-Type":
          "text/html; charset=utf-8"
      }

    }

  );

}


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
           initial-scale=1.0,
           viewport-fit=cover"
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
  width: 100%;
  min-height: 100%;
}

body {

  min-height: 100vh;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 24px;

  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  color: white;

  background:
    linear-gradient(
      135deg,
      #0b0714,
      #171024
    );

}

.container {

  width: 100%;
  max-width: 430px;

  padding: 40px 26px;

  text-align: center;

  border-radius: 28px;

  background:
    rgba(255,255,255,.06);

  border:
    1px solid
    rgba(255,255,255,.10);

  backdrop-filter:
    blur(20px);

}

.logo {

  width: 82px;
  height: 82px;

  margin:
    0 auto 24px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 24px;

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

button:active {
  transform: scale(.97);
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
   FIN SERVICE WORKER NEXO
   ============================================================ */