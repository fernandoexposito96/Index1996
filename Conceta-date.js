window.CONECTA_DATA = {

    categories: [
        ["running", "🏃", "Running"],
        ["gym", "💪", "Gym"],
        ["cine", "🎬", "Cine"],
        ["comida", "🍽️", "Comida"],
        ["cafe", "☕", "Café"],
        ["futbol", "⚽", "Fútbol"],
        ["musica", "🎵", "Música"],
        ["fiesta", "🎉", "Fiesta"],
        ["viajes", "✈️", "Viajes"],
        ["excursion", "🥾", "Excursiones"],
        ["playa", "🏖️", "Playa"],
        ["gaming", "🎮", "Gaming"],
        ["compras", "🛍️", "Compras"],
        ["fotografia", "📷", "Fotografía"],
        ["arte", "🎨", "Arte"],
        ["mascotas", "🐶", "Mascotas"],
        ["bicicleta", "🚲", "Bicicleta"],
        ["padel", "🎾", "Pádel"]
    ],

    plans: [
        ["Running 5K", "running", "Hoy · 19:00", "Tarragona"],
        ["Running al atardecer", "running", "Mañana · 20:00", "Tarragona"],
        ["Gym juntos", "gym", "Hoy · 18:30", "Vila-seca"],
        ["Cine esta noche", "cine", "Hoy · 21:30", "Tarragona"],
        ["Comer y conocer gente", "comida", "Hoy · 14:00", "Tarragona"],
        ["Café + conversación", "cafe", "Mañana · 17:30", "Reus"],
        ["Partido de fútbol", "futbol", "Sábado · 20:00", "Tarragona"],
        ["Concierto Sunset", "musica", "Viernes · 21:30", "Salou"],
        ["Fiesta Conecta", "fiesta", "Sábado · 23:00", "Salou"],
        ["Escapada de montaña", "viajes", "Domingo · 08:00", "Costa Dorada"],
        ["Ruta de senderismo", "excursion", "Sábado · 09:00", "Prades"],
        ["Playa + atardecer", "playa", "Hoy · 19:30", "La Pineda"],
        ["Gaming Night", "gaming", "Viernes · 21:00", "Online"],
        ["Tarde de compras", "compras", "Sábado · 17:00", "Tarragona"],
        ["Ruta fotográfica", "fotografia", "Domingo · 10:00", "Tarragona"],
        ["Taller creativo", "arte", "Sábado · 11:00", "Reus"],
        ["Paseo con perros", "mascotas", "Hoy · 18:00", "Vila-seca"],
        ["Ruta en bici", "bicicleta", "Domingo · 09:00", "Costa Dorada"],
        ["Pádel principiantes", "padel", "Mañana · 19:00", "Tarragona"]
    ]

};
(function () {
    "use strict";

    const IMAGES = {
        running: [
            "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=85"
        ],

        gym: [
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1a?auto=format&fit=crop&w=1200&q=85"
        ],

        cine: [
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=85"
        ],

        comida: [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85"
        ],

        cafe: [
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"
        ],

        futbol: [
            "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=85"
        ],

        musica: [
            "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85"
        ],

        fiesta: [
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85"
        ],

        viajes: [
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85"
        ],

        excursion: [
            "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85"
        ],

        playa: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
        ],

        gaming: [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85"
        ],

        compras: [
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
        ],

        fotografia: [
            "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1200&q=85"
        ],

        arte: [
            "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85"
        ],

        mascotas: [
            "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85"
        ],

        bicicleta: [
            "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1200&q=85"
        ],

        padel: [
            "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=85"
        ]
    };

    function fallback(titulo) {
        const letra = String(titulo || "C")
            .trim()
            .charAt(0)
            .toUpperCase();

        const svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="1200"
             height="800">

            <defs>
                <linearGradient
                    id="g"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1">

                    <stop
                        offset="0%"
                        stop-color="#7C3AED"/>

                    <stop
                        offset="100%"
                        stop-color="#C084FC"/>
                </linearGradient>
            </defs>

            <rect
                width="1200"
                height="800"
                fill="url(#g)"/>

            <circle
                cx="600"
                cy="310"
                r="150"
                fill="#ffffff22"/>

            <text
                x="600"
                y="375"
                text-anchor="middle"
                fill="white"
                font-family="Arial"
                font-size="190"
                font-weight="900">
                ${letra}
            </text>

            <text
                x="600"
                y="650"
                text-anchor="middle"
                fill="white"
                font-family="Arial"
                font-size="60"
                font-weight="900">
                CONECTA
            </text>

        </svg>`;

        return "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(svg);
    }

    function obtenerImagen(categoria, titulo) {

        const lista =
            IMAGES[categoria] ||
            IMAGES.fiesta;

        return lista[0] ||
            fallback(titulo);
    }

    function crearImagen(categoria, titulo) {

        const img =
            document.createElement("img");

        img.className =
            "conecta-image";

        img.alt =
            titulo || "Conecta";

        img.loading =
            "lazy";

        const lista =
            (
                IMAGES[categoria] ||
                IMAGES.fiesta
            ).slice();

        let posicion = 0;

        function cargar() {

            if (posicion < lista.length) {

                img.src =
                    lista[posicion];

                posicion++;

            } else {

                img.onerror = null;

                img.src =
                    fallback(titulo);
            }
        }

        img.onerror = cargar;

        cargar();

        return img;
    }

    window.ConectaImages = {

        get: obtenerImagen,

        create: crearImagen,

        apply: function (root) {

            root =
                root ||
                document;

            root
                .querySelectorAll(
                    "[data-conecta-image]"
                )
                .forEach(function (elemento) {

                    if (
                        elemento.dataset
                            .conectaReady === "1"
                    ) {
                        return;
                    }

                    const categoria =
                        elemento.dataset
                            .conectaImage;

                    const titulo =
                        elemento.dataset
                            .conectaTitle ||
                        elemento.textContent;

                    const imagen =
                        crearImagen(
                            categoria,
                            titulo
                        );

                    elemento
                        .replaceChildren(
                            imagen
                        );

                    elemento.dataset
                        .conectaReady = "1";
                });
        }
    };

})();

(function () {

    "use strict";

    const STORAGE =
        "conecta_theme_v1";

    let settings;

    try {

        settings =
            JSON.parse(
                localStorage.getItem(
                    STORAGE
                )
            ) || {

                color: "#8B5CF6",

                mode: "system"

            };

    } catch {

        settings = {

            color: "#8B5CF6",

            mode: "system"

        };

    }

    function aplicar() {

        document.documentElement
            .style
            .setProperty(
                "--primary",
                settings.color
            );

        document.documentElement
            .style
            .setProperty(
                "--primary-dark",
                settings.color
            );

        if (
            settings.mode === "dark"
        ) {

            document.body
                .classList
                .add("dark");

        }

        else if (
            settings.mode === "light"
        ) {

            document.body
                .classList
                .remove("dark");

        }

        else {

            document.body
                .classList
                .toggle(
                    "dark",
                    window.matchMedia(
                        "(prefers-color-scheme: dark)"
                    ).matches
                );
        }
    }

    function guardar() {

        localStorage.setItem(
            STORAGE,
            JSON.stringify(settings)
        );

        aplicar();
    }

    window.ConectaTheme = {

        setColor: function (color) {

            settings.color =
                color;

            guardar();

        },

        setMode: function (mode) {

            settings.mode =
                mode;

            guardar();

        },

        open: function () {

            const panel =
                document.createElement(
                    "div"
                );

            panel.className =
                "conecta-theme-overlay";

            panel.innerHTML = `

                <div
                    class="conecta-theme-panel"
                >

                    <div
                        class="conecta-theme-head"
                    >

                        <h2>
                            🎨 Personaliza Conecta
                        </h2>

                        <button
                            id="cerrarTema"
                        >
                            ×
                        </button>

                    </div>

                    <h3>
                        Color
                    </h3>

                    <div
                        class="conecta-colors"
                    >

                        <button
                            data-color="#8B5CF6"
                            style="background:#8B5CF6"
                        ></button>

                        <button
                            data-color="#2563EB"
                            style="background:#2563EB"
                        ></button>

                        <button
                            data-color="#EC4899"
                            style="background:#EC4899"
                        ></button>

                        <button
                            data-color="#16A34A"
                            style="background:#16A34A"
                        ></button>

                        <button
                            data-color="#F97316"
                            style="background:#F97316"
                        ></button>

                        <button
                            data-color="#EF4444"
                            style="background:#EF4444"
                        ></button>

                        <button
                            data-color="#0EA5E9"
                            style="background:#0EA5E9"
                        ></button>

                    </div>

                    <h3>
                        Apariencia
                    </h3>

                    <div
                        class="conecta-modes"
                    >

                        <button
                            data-mode="light"
                        >
                            ☀️ Claro
                        </button>

                        <button
                            data-mode="dark"
                        >
                            🌙 Oscuro
                        </button>

                        <button
                            data-mode="system"
                        >
                            🌓 Automático
                        </button>

                    </div>

                </div>
            `;

            document.body
                .appendChild(panel);

            document
                .getElementById(
                    "cerrarTema"
                )
                .onclick =
                function () {

                    panel.remove();

                };

            panel
                .querySelectorAll(
                    "[data-color]"
                )
                .forEach(
                    function (boton) {

                        boton.onclick =
                            function () {

                                settings.color =
                                    boton.dataset
                                        .color;

                                guardar();

                            };

                    }
                );

            panel
                .querySelectorAll(
                    "[data-mode]"
                )
                .forEach(
                    function (boton) {

                        boton.onclick =
                            function () {

                                settings.mode =
                                    boton.dataset
                                        .mode;

                                guardar();

                            };

                    }
                );
        }
    };

    aplicar();

})();

(function () {

    "use strict";

    function escapar(texto) {

        return String(
            texto || ""
        ).replace(
            /[&<>"']/g,
            function (c) {

                return {

                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#039;"

                }[c];

            }
        );
    }

    function crearTarjeta(plan) {

        const titulo =
            plan[0];

        const categoria =
            plan[1];

        const fecha =
            plan[2];

        const lugar =
            plan[3];

        return `

        <article
            class="conecta-plan-card"
        >

            <div
                class="conecta-plan-photo"
            >

                <div
                    data-conecta-image="${categoria}"
                    data-conecta-title="${escapar(titulo)}"
                ></div>

                <span
                    class="conecta-badge"
                >
                    ${categoria}
                </span>

            </div>

            <div
                class="conecta-plan-body"
            >

                <h3>
                    ${escapar(titulo)}
                </h3>

                <p>
                    📍 ${escapar(lugar)}
                </p>

                <p>
                    🕒 ${escapar(fecha)}
                </p>

                <div
                    class="conecta-actions"
                >

                    <button
                        class="conecta-primary"
                        data-action="interest"
                    >
                        Me interesa
                    </button>

                    <button
                        class="conecta-secondary"
                        data-action="favorite"
                    >
                        ♡
                    </button>

                </div>

            </div>

        </article>

        `;
    }

    function iniciar() {

        if (
            document.getElementById(
                "conectaEnhancements"
            )
        ) {
            return;
        }

        const planes =
            window.CONECTA_DATA &&
            window.CONECTA_DATA.plans
                ? window.CONECTA_DATA.plans
                : [];

        const modulo =
            document.createElement(
                "section"
            );

        modulo.id =
            "conectaEnhancements";

        modulo.innerHTML = `

            <div
                class="conecta-brand-hero"
            >

                <div>

                    <small>
                        ✨ NUEVA EXPERIENCIA
                    </small>

                    <h1>
                        Conecta
                    </h1>

                    <p>
                        Personas, planes y
                        experiencias que encajan
                        contigo.
                    </p>

                </div>

                <button
                    id="conectaCustomize"
                >
                    🎨
                </button>

            </div>

            <div
                class="conecta-section-head"
            >

                <h2>
                    🔥 Descubre planes
                </h2>

            </div>

            <div
                class="conecta-plan-grid"
            >

                ${planes
                    .map(crearTarjeta)
                    .join("")}

            </div>
        `;

        const destino =
            document.querySelector(
                "#app"
            ) ||
            document.body;

        destino.appendChild(
            modulo
        );

        const personalizar =
            document.getElementById(
                "conectaCustomize"
            );

        if (personalizar) {

            personalizar.onclick =
                function () {

                    if (
                        window.ConectaTheme
                    ) {

                        window
                            .ConectaTheme
                            .open();

                    }

                };

        }

        if (
            window.ConectaImages
        ) {

            window
                .ConectaImages
                .apply(
                    modulo
                );

        }

        modulo
            .querySelectorAll(
                "[data-action]"
            )
            .forEach(
                function (boton) {

                    boton.onclick =
                        function () {

                            if (
                                boton.dataset
                                    .action ===
                                "favorite"
                            ) {

                                boton
                                    .classList
                                    .toggle(
                                        "active"
                                    );

                                boton.textContent =
                                    boton
                                        .classList
                                        .contains(
                                            "active"
                                        )
                                        ? "♥"
                                        : "♡";

                            } else {

                                boton.textContent =
                                    "✓ Añadido";

                            }

                        };

                }
            );
    }

    document.addEventListener(
        "DOMContentLoaded",
        iniciar
    );

})();

:root {

    --primary: #8B5CF6;

    --primary-dark: #7C3AED;

    --conecta-card: #ffffff;

    --conecta-text: #17151f;

    --conecta-muted: #777383;

    --conecta-border: #e8e4f0;

}

#conectaEnhancements {

    max-width: 950px;

    margin:
        20px auto 120px;

    padding:
        0 16px;

}

.conecta-brand-hero {

    display:
        flex;

    justify-content:
        space-between;

    align-items:
        center;

    gap:
        20px;

    padding:
        25px;

    border-radius:
        30px;

    color:
        white;

    background:
        linear-gradient(
            135deg,
            var(--primary),
            #C084FC
        );

    box-shadow:
        0 18px 45px
        rgba(124,58,237,.25);

}

.conecta-brand-hero h1 {

    font-size:
        40px;

    margin:
        5px 0;

}

.conecta-brand-hero p {

    margin:
        0;

    opacity:
        .9;

}

.conecta-brand-hero button {

    width:
        50px;

    height:
        50px;

    border:
        0;

    border-radius:
        50%;

    background:
        rgba(255,255,255,.2);

    color:
        white;

    font-size:
        22px;

}

.conecta-section-head {

    margin:
        25px 0 14px;

}

.conecta-plan-grid {

    display:
        grid;

    grid-template-columns:
        repeat(
            2,
            minmax(0,1fr)
        );

    gap:
        15px;

}

.conecta-plan-card {

    overflow:
        hidden;

    border:
        1px solid
        var(--conecta-border);

    background:
        var(--conecta-card);

    color:
        var(--conecta-text);

    border-radius:
        23px;

    box-shadow:
        0 10px 30px
        rgba(20,10,50,.09);

}

.conecta-plan-photo {

    height:
        190px;

    position:
        relative;

    overflow:
        hidden;

    background:
        linear-gradient(
            135deg,
            var(--primary),
            #C084FC
        );

}

.conecta-plan-photo
[data-conecta-image] {

    height:
        100%;

}

.conecta-image {

    width:
        100%;

    height:
        100%;

    display:
        block;

    object-fit:
        cover;

}

.conecta-badge {

    position:
        absolute;

    top:
        10px;

    left:
        10px;

    padding:
        6px 10px;

    border-radius:
        999px;

    background:
        rgba(255,255,255,.9);

    color:
        var(--primary-dark);

    font-size:
        10px;

    font-weight:
        900;

}

.conecta-plan-body {

    padding:
        14px;

}

.conecta-plan-body h3 {

    margin:
        0 0 6px;

}

.conecta-plan-body p {

    margin:
        3px 0;

    color:
        var(--conecta-muted);

    font-size:
        12px;

}

.conecta-actions {

    display:
        flex;

    gap:
        8px;

    margin-top:
        13px;

}

.conecta-primary,
.conecta-secondary {

    border:
        0;

    border-radius:
        13px;

    padding:
        10px 13px;

    font-weight:
        800;

}

.conecta-primary {

    flex:
        1;

    background:
        var(--primary);

    color:
        white;

}

.conecta-secondary {

    background:
        #f0ebff;

    color:
        var(--primary-dark);

}

.conecta-secondary.active {

    background:
        #fee2e2;

    color:
        #dc2626;

}

.conecta-theme-overlay {

    position:
        fixed;

    inset:
        0;

    z-index:
        999999;

    background:
        rgba(0,0,0,.55);

    display:
        flex;

    align-items:
        flex-end;

    justify-content:
        center;

    padding:
        12px;

}

.conecta-theme-panel {

    width:
        min(560px,100%);

    background:
        var(--conecta-card);

    color:
        var(--conecta-text);

    border-radius:
        28px;

    padding:
        22px;

}

.conecta-theme-head {

    display:
        flex;

    justify-content:
        space-between;

    align-items:
        center;

}

.conecta-theme-head button {

    width:
        38px;

    height:
        38px;

    border:
        0;

    border-radius:
        50%;

    font-size:
        22px;

}

.conecta-colors {

    display:
        flex;

    flex-wrap:
        wrap;

    gap:
        12px;

}

.conecta-colors button {

    width:
        43px;

    height:
        43px;

    border:
        3px solid white;

    border-radius:
        50%;

}

.conecta-modes {

    display:
        grid;

    grid-template-columns:
        repeat(3,1fr);

    gap:
        8px;

}

.conecta-modes button {

    padding:
        12px 8px;

    border:
        1px solid
        var(--conecta-border);

    border-radius:
        13px;

    background:
        transparent;

    color:
        inherit;

}

body.dark {

    --conecta-card:
        #17151f;

    --conecta-text:
        #ffffff;

    --conecta-muted:
        #aaa5b5;

    --conecta-border:
        #332d3d;

}

@media (max-width:600px) {

    .conecta-plan-grid {

        grid-template-columns:
            repeat(2,minmax(0,1fr));

    }

    .conecta-plan-photo {

        height:
            155px;

    }

    .conecta-brand-hero h1 {

        font-size:
            32px;

    }

}

@media (max-width:380px) {

    .conecta-plan-grid {

        grid-template-columns:
            1fr;

    }

}

