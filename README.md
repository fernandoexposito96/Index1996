<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

<title>CONECTA</title>

<meta name="description" content="CONECTA - conecta personas, intereses y planes.">
<meta name="theme-color" content="#111111">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="CONECTA">

<link rel="manifest" href="manifest.json">

<style>
:root{
  --accent:#7c3aed;
  --accent2:#a855f7;
  --bg:#09090b;
  --surface:#111114;
  --surface2:#18181c;
  --surface3:#222228;
  --text:#ffffff;
  --muted:#a1a1aa;
  --border:rgba(255,255,255,.09);
  --danger:#ef4444;
  --success:#22c55e;
  --radius:22px;
  --shadow:0 18px 50px rgba(0,0,0,.25);
}

*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

html{
  scroll-behavior:smooth;
}

body{
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;
  background:
    radial-gradient(circle at 15% 10%,rgba(124,58,237,.18),transparent 30%),
    radial-gradient(circle at 85% 25%,rgba(168,85,247,.10),transparent 28%),
    var(--bg);
  color:var(--text);
  min-height:100vh;
  overflow-x:hidden;
}

button,
input,
textarea,
select{
  font:inherit;
}

button{
  border:0;
  cursor:pointer;
}

a{
  color:inherit;
  text-decoration:none;
}

.hidden{
  display:none!important;
}

/* APP */

#app{
  min-height:100vh;
}

.screen{
  display:none;
  min-height:100vh;
  padding-bottom:100px;
}

.screen.active{
  display:block;
}

.container{
  width:min(1100px,92%);
  margin:auto;
}

/* HEADER */

.topbar{
  position:sticky;
  top:0;
  z-index:50;
  backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);
  background:rgba(9,9,11,.78);
  border-bottom:1px solid var(--border);
}

.topbar-inner{
  width:min(1100px,92%);
  min-height:68px;
  margin:auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:15px;
}

.logo{
  font-size:23px;
  font-weight:900;
  letter-spacing:-1px;
}

.logo span{
  color:var(--accent2);
}

.icon-btn{
  width:44px;
  height:44px;
  border-radius:50%;
  background:var(--surface2);
  color:white;
  border:1px solid var(--border);
  display:grid;
  place-items:center;
  font-size:20px;
}

/* HERO */

.hero{
  padding:35px 0 20px;
}

.hero h1{
  font-size:clamp(32px,7vw,58px);
  line-height:1;
  letter-spacing:-2px;
  margin-bottom:12px;
}

.gradient{
  background:linear-gradient(100deg,var(--accent),var(--accent2));
  -webkit-background-clip:text;
  background-clip:text;
  color:transparent;
}

.hero p{
  color:var(--muted);
  font-size:16px;
  line-height:1.5;
}

/* CARDS */

.card{
  background:rgba(24,24,28,.84);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:20px;
  box-shadow:var(--shadow);
  margin-bottom:15px;
}

.card-title{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  margin-bottom:15px;
}

.card-title h2{
  font-size:20px;
}

.card-title span{
  color:var(--muted);
  font-size:13px;
}

/* BUTTONS */

.btn{
  min-height:46px;
  padding:0 18px;
  border-radius:14px;
  color:white;
  font-weight:750;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  transition:.2s;
}

.btn:active{
  transform:scale(.97);
}

.btn-primary{
  background:linear-gradient(135deg,var(--accent),var(--accent2));
}

.btn-secondary{
  background:var(--surface3);
  border:1px solid var(--border);
}

.btn-danger{
  background:rgba(239,68,68,.13);
  color:#f87171;
  border:1px solid rgba(239,68,68,.2);
}

.btn-success{
  background:rgba(34,197,94,.13);
  color:#4ade80;
  border:1px solid rgba(34,197,94,.2);
}

.full{
  width:100%;
}

/* GRID */

.grid{
  display:grid;
  gap:15px;
}

.grid-2{
  grid-template-columns:repeat(2,minmax(0,1fr));
}

.grid-3{
  grid-template-columns:repeat(3,minmax(0,1fr));
}

@media(max-width:700px){
  .grid-2,
  .grid-3{
    grid-template-columns:1fr;
  }
}

/* QUICK ACTIONS */

.actions{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:10px;
}

.action{
  min-height:95px;
  border-radius:18px;
  background:var(--surface2);
  border:1px solid var(--border);
  color:white;
  padding:12px;
  text-align:center;
}

.action .emoji{
  display:block;
  font-size:27px;
  margin-bottom:7px;
}

.action small{
  color:var(--muted);
}

@media(max-width:600px){
  .actions{
    grid-template-columns:repeat(2,1fr);
  }
}

/* PROFILE */

.profile-head{
  display:flex;
  align-items:center;
  gap:15px;
}

.avatar{
  width:70px;
  height:70px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,var(--accent),var(--accent2));
  font-size:30px;
  font-weight:900;
  flex-shrink:0;
}

.profile-head h2{
  margin-bottom:5px;
}

.muted{
  color:var(--muted);
}

.tags{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:13px;
}

.tag{
  padding:8px 12px;
  background:var(--surface3);
  border-radius:999px;
  color:#ddd;
  font-size:13px;
}

/* PEOPLE */

.person{
  display:flex;
  align-items:center;
  gap:13px;
}

.person-avatar{
  width:54px;
  height:54px;
  border-radius:50%;
  background:linear-gradient(135deg,var(--accent),var(--accent2));
  display:grid;
  place-items:center;
  font-size:22px;
  flex-shrink:0;
}

.person-info{
  flex:1;
}

.person-info strong{
  display:block;
  margin-bottom:3px;
}

.person-info small{
  color:var(--muted);
}

/* PLANS */

.plan{
  position:relative;
}

.plan-top{
  display:flex;
  align-items:flex-start;
  gap:14px;
}

.plan-icon{
  width:54px;
  height:54px;
  border-radius:16px;
  background:var(--surface3);
  display:grid;
  place-items:center;
  font-size:25px;
  flex-shrink:0;
}

.plan h3{
  margin-bottom:5px;
}

.plan-info{
  color:var(--muted);
  font-size:14px;
  line-height:1.6;
}

.plan-actions{
  display:flex;
  gap:8px;
  margin-top:15px;
}

/* INPUTS */

.input-group{
  margin-bottom:15px;
}

.input-group label{
  display:block;
  font-size:13px;
  color:var(--muted);
  margin-bottom:7px;
}

.input,
textarea,
select{
  width:100%;
  min-height:47px;
  background:var(--surface2);
  color:white;
  border:1px solid var(--border);
  border-radius:14px;
  padding:12px 14px;
  outline:none;
}

textarea{
  min-height:100px;
  resize:vertical;
}

.input:focus,
textarea:focus,
select:focus{
  border-color:var(--accent);
}

/* SEARCH */

.search{
  position:relative;
  margin:15px 0;
}

.search input{
  padding-left:45px;
}

.search-icon{
  position:absolute;
  left:15px;
  top:13px;
}

/* SETTINGS */

.setting{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:15px;
  padding:15px 0;
  border-bottom:1px solid var(--border);
}

.setting:last-child{
  border-bottom:0;
}

.setting-info{
  flex:1;
}

.setting-info strong{
  display:block;
  margin-bottom:4px;
}

.setting-info small{
  color:var(--muted);
  line-height:1.4;
}

.switch{
  position:relative;
  width:50px;
  height:28px;
  flex-shrink:0;
}

.switch input{
  opacity:0;
  width:0;
  height:0;
}

.slider{
  position:absolute;
  inset:0;
  background:#3f3f46;
  border-radius:999px;
  transition:.2s;
}

.slider:before{
  content:"";
  position:absolute;
  width:22px;
  height:22px;
  left:3px;
  top:3px;
  background:white;
  border-radius:50%;
  transition:.2s;
}

.switch input:checked+.slider{
  background:var(--accent);
}

.switch input:checked+.slider:before{
  transform:translateX(22px);
}

/* COLOR PICKER */

.color-options{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
}

.color{
  width:42px;
  height:42px;
  border-radius:50%;
  border:3px solid transparent;
}

.color.selected{
  border-color:white;
}

/* BOTTOM NAV */

.bottom-nav{
  position:fixed;
  left:50%;
  bottom:12px;
  transform:translateX(-50%);
  z-index:100;
  width:min(700px,94%);
  display:grid;
  grid-template-columns:repeat(5,1fr);
  background:rgba(20,20,24,.92);
  border:1px solid var(--border);
  border-radius:22px;
  padding:7px;
  backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);
  box-shadow:0 20px 60px rgba(0,0,0,.4);
}

.nav-item{
  min-height:58px;
  border-radius:16px;
  background:transparent;
  color:#a1a1aa;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:3px;
  font-size:11px;
}

.nav-item .nav-icon{
  font-size:20px;
}

.nav-item.active{
  background:rgba(124,58,237,.18);
  color:white;
}

/* MODAL */

.modal{
  position:fixed;
  inset:0;
  z-index:300;
  background:rgba(0,0,0,.7);
  backdrop-filter:blur(8px);
  display:none;
  align-items:flex-end;
  justify-content:center;
  padding:15px;
}

.modal.open{
  display:flex;
}

.modal-box{
  width:min(600px,100%);
  max-height:90vh;
  overflow:auto;
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:28px;
  padding:22px;
}

.modal-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
}

/* TOAST */

.toast{
  position:fixed;
  left:50%;
  top:20px;
  transform:translate(-50%,-20px);
  z-index:500;
  opacity:0;
  pointer-events:none;
  background:#18181b;
  color:white;
  border:1px solid var(--border);
  border-radius:14px;
  padding:13px 18px;
  transition:.25s;
}

.toast.show{
  opacity:1;
  transform:translate(-50%,0);
}

/* EMPTY */

.empty{
  text-align:center;
  padding:35px 15px;
  color:var(--muted);
}

.empty-icon{
  font-size:40px;
  margin-bottom:10px;
}

/* BADGES */

.badge{
  display:inline-flex;
  align-items:center;
  gap:5px;
  padding:5px 9px;
  border-radius:999px;
  font-size:11px;
  background:rgba(34,197,94,.12);
  color:#4ade80;
}

/* LOGIN */

#welcome{
  position:fixed;
  inset:0;
  z-index:1000;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:20px;
  background:
    radial-gradient(circle at 20% 20%,rgba(124,58,237,.3),transparent 30%),
    radial-gradient(circle at 80% 70%,rgba(168,85,247,.2),transparent 30%),
    #09090b;
}

.welcome-box{
  width:min(500px,100%);
  text-align:center;
}

.welcome-logo{
  font-size:52px;
  font-weight:950;
  letter-spacing:-3px;
  margin-bottom:12px;
}

.welcome-logo span{
  color:var(--accent2);
}

.welcome-box p{
  color:var(--muted);
  line-height:1.6;
  margin-bottom:25px;
}

/* CHAT */

.chat-list{
  display:flex;
  flex-direction:column;
  gap:8px;
}

.chat{
  display:flex;
  align-items:center;
  gap:12px;
  padding:13px;
  background:var(--surface2);
  border-radius:17px;
}

.chat-text{
  flex:1;
}

.chat-text strong{
  display:block;
}

.chat-text small{
  color:var(--muted);
}

/* STATS */

.stats{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
}

.stat{
  text-align:center;
  background:var(--surface2);
  border-radius:17px;
  padding:15px 8px;
}

.stat strong{
  font-size:24px;
  display:block;
}

.stat small{
  color:var(--muted);
}

@media(max-width:500px){
  .stats{
    grid-template-columns:1fr;
  }
}

/* LIGHT MODE */

body.light{
  --bg:#f4f4f5;
  --surface:#ffffff;
  --surface2:#f1f1f3;
  --surface3:#e4e4e7;
  --text:#18181b;
  --muted:#71717a;
  --border:rgba(0,0,0,.09);
  background:
    radial-gradient(circle at 10% 10%,rgba(124,58,237,.12),transparent 30%),
    var(--bg);
}

body.light .topbar{
  background:rgba(255,255,255,.82);
}

body.light .bottom-nav{
  background:rgba(255,255,255,.92);
}

body.light .icon-btn{
  color:#18181b;
}

/* CUSTOM BACKGROUNDS */

body.bg-gradient{
  background:
    radial-gradient(circle at 10% 20%,rgba(124,58,237,.28),transparent 30%),
    radial-gradient(circle at 90% 80%,rgba(236,72,153,.2),transparent 30%),
    #09090b;
}

body.bg-blue{
  background:
    radial-gradient(circle at 20% 10%,rgba(37,99,235,.3),transparent 30%),
    #05070d;
}

body.bg-green{
  background:
    radial-gradient(circle at 20% 10%,rgba(16,185,129,.25),transparent 30%),
    #050b09;
}

body.bg-red{
  background:
    radial-gradient(circle at 80% 10%,rgba(239,68,68,.25),transparent 30%),
    #0b0505;
}

body.bg-pink{
  background:
    radial-gradient(circle at 20% 10%,rgba(236,72,153,.3),transparent 30%),
    #0b0509;
}
</style>
</head>

<body>

<div id="welcome">
  <div class="welcome-box">
    <div class="welcome-logo">CONECTA<span>.</span></div>

    <p>
      Conecta con personas, intereses y planes.
      Descubre gente, crea actividades y construye tu propia comunidad.
    </p>

    <button class="btn btn-primary full" onclick="enterApp()">
      Entrar en CONECTA
    </button>
  </div>
</div>

<div id="app">

  <!-- INICIO -->

  <section id="home" class="screen active">

    <header class="topbar">
      <div class="topbar-inner">
        <div class="logo">CONECTA<span>.</span></div>

        <button class="icon-btn" onclick="showScreen('settings')">
          ⚙️
        </button>
      </div>
    </header>

    <main class="container">

      <div class="hero">
        <h1>Tu mundo.<br><span class="gradient">Tu gente.</span></h1>
        <p>
          Descubre personas, crea planes y conecta según tus intereses.
        </p>
      </div>

      <div class="card">
        <div class="profile-head">
          <div class="avatar" id="homeAvatar">C</div>

          <div>
            <h2 id="homeName">Tu perfil</h2>
            <p class="muted" id="homeBio">
              Completa tu perfil para empezar.
            </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">
          <h2>Accesos rápidos</h2>
        </div>

        <div class="actions">

          <button class="action" onclick="showScreen('connect')">
            <span class="emoji">🤝</span>
            <small>Conectar</small>
          </button>

          <button class="action" onclick="showScreen('plans')">
            <span class="emoji">📅</span>
            <small>Planes</small>
          </button>

          <button class="action" onclick="showScreen('chat')">
            <span class="emoji">💬</span>
            <small>Chat</small>
          </button>

          <button class="action" onclick="showScreen('profile')">
            <span class="emoji">👤</span>
            <small>Perfil</small>
          </button>

        </div>
      </div>

      <div class="card">

        <div class="card-title">
          <h2>Planes cerca de ti</h2>
          <button class="btn btn-secondary" onclick="showScreen('plans')">
            Ver todos
          </button>
        </div>

        <div id="homePlans"></div>

      </div>

      <div class="card">

        <div class="card-title">
          <h2>Personas para ti</h2>
          <span>Según tus intereses</span>
        </div>

        <div id="homePeople"></div>

      </div>

    </main>
  </section>


  <!-- CONECTAR -->

  <section id="connect" class="screen">

    <header class="topbar">
      <div class="topbar-inner">
        <div class="logo">CONECTA<span>.</span></div>
        <button class="icon-btn" onclick="showScreen('settings')">⚙️</button>
      </div>
    </header>

    <main class="container">

      <div class="hero">
        <h1>Conectar</h1>
        <p>Encuentra personas que compartan tus intereses.</p>
      </div>

      <div class="search">
        <span class="search-icon">🔎</span>
        <input
          id="peopleSearch"
          class="input"
          placeholder="Buscar personas, intereses..."
          oninput="renderPeople()">
      </div>

      <div class="card">

        <div class="card-title">
          <h2>Descubre personas</h2>
        </div>

        <div id="peopleList"></div>

      </div>

    </main>
  </section>


  <!-- PLANES -->

  <section id="plans" class="screen">

    <header class="topbar">
      <div class="topbar-inner">
        <div class="logo">CONECTA<span>.</span></div>
        <button class="btn btn-primary" onclick="openPlanModal()">
          + Crear
        </button>
      </div>
    </header>

    <main class="container">

      <div class="hero">
        <h1>Planes</h1>
        <p>Haz algo. Encuentra gente. CONECTA.</p>
      </div>

      <div id="plansList"></div>

    </main>
  </section>


  <!-- CHAT -->

  <section id="chat" class="screen">

    <header class="topbar">
      <div class="topbar-inner">
        <div class="logo">CONECTA<span>.</span></div>
      </div>
    </header>

    <main class="container">

      <div class="hero">
        <h1>Chat</h1>
        <p>Tus conversaciones y conexiones.</p>
      </div>

      <div class="card">

        <div class="chat-list" id="chatList"></div>

      </div>

      <div class="card">

        <div class="card-title">
          <h2>Funciones sociales</h2>
        </div>

        <div class="grid grid-2">

          <button class="btn btn-secondary" onclick="futureFeature('Llamadas')">
            📞 Llamadas
          </button>

          <button class="btn btn-secondary" onclick="futureFeature('Videollamadas')">
            🎥 Videollamadas
          </button>

          <button class="btn btn-secondary" onclick="futureFeature('Grupos')">
            👥 Grupos
          </button>

          <button class="btn btn-secondary" onclick="futureFeature('Mensajes de voz')">
            🎙️ Voz
          </button>

        </div>

      </div>

    </main>
  </section>


  <!-- PERFIL -->

  <section id="profile" class="screen">

    <header class="topbar">
      <div class="topbar-inner">
        <div class="logo">CONECTA<span>.</span></div>
        <button class="btn btn-primary" onclick="openProfileModal()">
          Editar
        </button>
      </div>
    </header>

    <main class="container">

      <div class="hero">
        <h1>Mi perfil</h1>
        <p>Tu identidad dentro de CONECTA.</p>
      </div>

      <div class="card">

        <div class="profile-head">

          <div class="avatar" id="profileAvatar">
            C
          </div>

          <div>
            <h2 id="profileName">Tu nombre</h2>
            <p class="muted" id="profileLocation">
              📍 Ubicación no definida
            </p>
          </div>

        </div>

        <div class="tags" id="profileTags"></div>

        <p class="muted" id="profileDescription" style="margin-top:15px;">
          Añade una descripción.
        </p>

      </div>

      <div class="card">

        <div class="card-title">
          <h2>Mi actividad</h2>
        </div>

        <div class="stats">

          <div class="stat">
            <strong id="statConnections">0</strong>
            <small>Conexiones</small>
          </div>

          <div class="stat">
            <strong id="statPlans">0</strong>
            <small>Planes</small>
          </div>

          <div class="stat">
            <strong id="statGroups">0</strong>
            <small>Grupos</small>
          </div>

        </div>

      </div>

    </main>
  </section>


  <!-- AJUSTES -->

  <section id="settings" class="screen">

    <header class="topbar">
      <div class="topbar-inner">
        <div class="logo">CONECTA<span>.</span></div>
      </div>
    </header>

    <main class="container">

      <div class="hero">
        <h1>Ajustes</h1>
        <p>Personaliza CONECTA como quieras.</p>
      </div>


      <!-- APARIENCIA -->

      <div class="card">

        <div class="card-title">
          <h2>🎨 Apariencia</h2>
        </div>

        <div class="setting">

          <div class="setting-info">
            <strong>Modo oscuro</strong>
            <small>Cambia entre interfaz clara y oscura.</small>
          </div>

          <label class="switch">
            <input id="darkToggle" type="checkbox" checked onchange="toggleDarkMode()">
            <span class="slider"></span>
          </label>

        </div>

        <div class="setting">

          <div class="setting-info">
            <strong>Color principal</strong>
            <small>Elige el color de CONECTA.</small>
          </div>

        </div>

        <div class="color-options">

          <button class="color" style="background:#7c3aed"
            onclick="setAccent('#7c3aed','#a855f7')"></button>

          <button class="color" style="background:#2563eb"
            onclick="setAccent('#2563eb','#60a5fa')"></button>

          <button class="color" style="background:#059669"
            onclick="setAccent('#059669','#34d399')"></button>

          <button class="color" style="background:#dc2626"
            onclick="setAccent('#dc2626','#fb7185')"></button>

          <button class="color" style="background:#db2777"
            onclick="setAccent('#db2777','#f472b6')"></button>

          <button class="color" style="background:#ea580c"
            onclick="setAccent('#ea580c','#fb923c')"></button>

        </div>

        <br>

        <div class="setting">

          <div class="setting-info">
            <strong>Fondo</strong>
            <small>Personaliza el ambiente visual.</small>
          </div>

          <select id="backgroundSelect" onchange="setBackground(this.value)">
            <option value="default">Original</option>
            <option value="gradient">Gradiente</option>
            <option value="blue">Azul</option>
            <option value="green">Verde</option>
            <option value="red">Rojo</option>
            <option value="pink">Rosa</option>
          </select>

        </div>

      </div>


      <!-- PRIVACIDAD -->

      <div class="card">

        <div class="card-title">
          <h2>🔐 Privacidad</h2>
        </div>

        <div class="setting">

          <div class="setting-info">
            <strong>Perfil privado</strong>
            <small>Limita quién puede ver tu perfil.</small>
          </div>

          <label class="switch">
            <input id="privateProfile" type="checkbox"
              onchange="savePrivacy()">
            <span class="slider"></span>
          </label>

        </div>

        <div class="setting">

          <div class="setting-info">
            <strong>Mostrar ubicación</strong>
            <small>Permite mostrar una ubicación aproximada.</small>
          </div>

          <label class="switch">
            <input id="showLocation" type="checkbox"
              onchange="savePrivacy()">
            <span class="slider"></span>
          </label>

        </div>

        <div class="setting">

          <div class="setting-info">
            <strong>Permitir mensajes</strong>
            <small>Controla quién puede iniciar conversaciones.</small>
          </div>

          <select id="messagePermission" onchange="savePrivacy()">
            <option value="everyone">Todo el mundo</option>
            <option value="connections">Solo conexiones</option>
            <option value="nobody">Nadie</option>
          </select>

        </div>

      </div>


      <!-- SEGURIDAD -->

      <div class="card">

        <div class="card-title">
          <h2>🛡️ Seguridad</h2>
        </div>

        <button class="btn btn-secondary full"
          onclick="showSecurityInfo()">
          Ver herramientas de seguridad
        </button>

        <br><br>

        <button class="btn btn-danger full"
          onclick="showToast('Sistema de bloqueo preparado.')">
          🚫 Gestionar bloqueados
        </button>

      </div>


      <!-- DATOS -->

      <div class="card">

        <div class="card-title">
          <h2>📦 Mis datos</h2>
        </div>

        <button class="btn btn-secondary full"
          onclick="exportData()">
          Exportar mis datos
        </button>

        <br><br>

        <button class="btn btn-danger full"
          onclick="deleteLocalData()">
          Eliminar datos locales
        </button>

      </div>


      <!-- LEGAL -->

      <div class="card">

        <div class="card-title">
          <h2>📜 Información legal</h2>
        </div>

        <button class="btn btn-secondary full"
          onclick="openLegal('rules')">
          Normas de la comunidad
        </button>

        <br><br>

        <button class="btn btn-secondary full"
          onclick="openLegal('privacy')">
          Privacidad y protección de datos
        </button>

        <br><br>

        <button class="btn btn-secondary full"
          onclick="openLegal('terms')">
          Términos y condiciones
        </button>

      </div>

    </main>
  </section>

</div>


<!-- NAVEGACIÓN -->

<nav class="bottom-nav">

  <button class="nav-item active"
    data-screen="home"
    onclick="showScreen('home')">
    <span class="nav-icon">🏠</span>
    Inicio
  </button>

  <button class="nav-item"
    data-screen="connect"
    onclick="showScreen('connect')">
    <span class="nav-icon">🤝</span>
    Conectar
  </button>

  <button class="nav-item"
    data-screen="plans"
    onclick="showScreen('plans')">
    <span class="nav-icon">📅</span>
    Planes
  </button>

  <button class="nav-item"
    data-screen="chat"
    onclick="showScreen('chat')">
    <span class="nav-icon">💬</span>
    Chat
  </button>

  <button class="nav-item"
    data-screen="profile"
    onclick="showScreen('profile')">
    <span class="nav-icon">👤</span>
    Perfil
  </button>

</nav>


<!-- MODAL -->

<div id="modal" class="modal" onclick="closeModalOutside(event)">

  <div class="modal-box">

    <div class="modal-header">

      <h2 id="modalTitle">CONECTA</h2>

      <button class="icon-btn" onclick="closeModal()">
        ✕
      </button>

    </div>

    <div id="modalContent"></div>

  </div>

</div>


<div id="toast" class="toast"></div>


<script>
/* =========================================================
   CONECTA
   APP CORE
========================================================= */

const STORAGE_KEY = "conecta_app_v1";

const defaultData = {
  entered:false,

  profile:{
    name:"Tu nombre",
    bio:"Estoy en CONECTA.",
    location:"",
    interests:["Deporte","Música","Amigos"]
  },

  privacy:{
    private:false,
    location:true,
    messages:"everyone"
  },

  appearance:{
    dark:true,
    accent:"#7c3aed",
    accent2:"#a855f7",
    background:"default"
  },

  connections:[],

  plans:[
    {
      id:1,
      title:"Entrenamiento",
      icon:"🏋️",
      date:"Hoy",
      time:"19:00",
      place:"Zona deportiva",
      description:"Entrenamiento y deporte con gente de CONECTA.",
      people:4
    },
    {
      id:2,
      title:"Running",
      icon:"🏃",
      date:"Mañana",
      time:"20:00",
      place:"Parque",
      description:"Salida tranquila para correr y conocer gente.",
      people:7
    },
    {
      id:3,
      title:"Fútbol",
      icon:"⚽",
      date:"Sábado",
      time:"18:00",
      place:"Campo municipal",
      description:"Partido entre usuarios de CONECTA.",
      people:10
    }
  ],

  chats:[],

  groups:[],

  stats:{
    connections:0,
    plans:0,
    groups:0
  }
};

let data = loadData();


/* =========================================================
   STORAGE
========================================================= */

function loadData(){

  try{

    const saved = localStorage.getItem(STORAGE_KEY);

    if(!saved){
      return structuredClone(defaultData);
    }

    const parsed = JSON.parse(saved);

    return mergeData(structuredClone(defaultData),parsed);

  }catch(error){

    console.error(error);

    return structuredClone(defaultData);

  }

}


function mergeData(base, extra){

  if(!extra || typeof extra !== "object"){
    return base;
  }

  for(const key of Object.keys(extra)){

    if(
      extra[key] &&
      typeof extra[key] === "object" &&
      !Array.isArray(extra[key]) &&
      typeof base[key] === "object"
    ){

      base[key] = mergeData(base[key],extra[key]);

    }else{

      base[key] = extra[key];

    }

  }

  return base;

}


function saveData(){

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );

}


/* =========================================================
   INIT
========================================================= */

document.addEventListener("DOMContentLoaded",()=>{

  applyAppearance();

  renderAll();

  if(data.entered){

    document.getElementById("welcome").style.display="none";

  }

});


function renderAll(){

  renderProfile();

  renderPeople();

  renderPlans();

  renderHome();

  renderChats();

  renderPrivacy();

  updateStats();

}


/* =========================================================
   ENTER
========================================================= */

function enterApp(){

  data.entered=true;

  saveData();

  document.getElementById("welcome").style.display="none";

  showToast("Bienvenido a CONECTA 👋");

  renderAll();

}


/* =========================================================
   NAVIGATION
========================================================= */

function showScreen(screen){

  document.querySelectorAll(".screen").forEach(el=>{
    el.classList.remove("active");
  });

  const target=document.getElementById(screen);

  if(target){
    target.classList.add("active");
  }

  document.querySelectorAll(".nav-item").forEach(el=>{
    el.classList.toggle(
      "active",
      el.dataset.screen===screen
    );
  });

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

  renderAll();

}


/* =========================================================
   PROFILE
========================================================= */

function renderProfile(){

  const name=data.profile.name || "Tu nombre";

  const initial=name.trim()
    ? name.trim().charAt(0).toUpperCase()
    : "C";

  const elements=[
    document.getElementById("profileAvatar"),
    document.getElementById("homeAvatar")
  ];

  elements.forEach(el=>{
    if(el) el.textContent=initial;
  });

  const profileName=document.getElementById("profileName");

  if(profileName){
    profileName.textContent=name;
  }

  const homeName=document.getElementById("homeName");

  if(homeName){
    homeName.textContent=name;
  }

  const description=
    data.profile.bio || "Añade una descripción.";

  const profileDescription=
    document.getElementById("profileDescription");

  if(profileDescription){
    profileDescription.textContent=description;
  }

  const homeBio=
    document.getElementById("homeBio");

  if(homeBio){
    homeBio.textContent=description;
  }

  const location=
    document.getElementById("profileLocation");

  if(location){

    if(
      data.privacy.location &&
      data.profile.location
    ){
      location.textContent=
        "📍 "+data.profile.location;
    }else{
      location.textContent=
        "📍 Ubicación privada";
    }

  }

  const tags=
    document.getElementById("profileTags");

  if(tags){

    tags.innerHTML=
      (data.profile.interests || [])
      .map(i=>`<span class="tag">${escapeHTML(i)}</span>`)
      .join("");

  }

}


function openProfileModal(){

  openModal(
    "Editar perfil",
    `
      <div class="input-group">
        <label>Nombre</label>
        <input id="editName"
          class="input"
          value="${escapeAttribute(data.profile.name)}">
      </div>

      <div class="input-group">
        <label>Descripción</label>
        <textarea id="editBio">${escapeHTML(data.profile.bio)}</textarea>
      </div>

      <div class="input-group">
        <label>Ubicación</label>
        <input id="editLocation"
          class="input"
          placeholder="Ej. Tarragona"
          value="${escapeAttribute(data.profile.location)}">
      </div>

      <div class="input-group">
        <label>Intereses</label>
        <input id="editInterests"
          class="input"
          value="${escapeAttribute(
            data.profile.interests.join(", ")
          )}">
      </div>

      <button class="btn btn-primary full"
        onclick="saveProfile()">
        Guardar perfil
      </button>
    `
  );

}


function saveProfile(){

  data.profile.name=
    document.getElementById("editName").value.trim()
    || "Tu nombre";

  data.profile.bio=
    document.getElementById("editBio").value.trim()
    || "Estoy en CONECTA.";

  data.profile.location=
    document.getElementById("editLocation").value.trim();

  data.profile.interests=
    document.getElementById("editInterests")
      .value
      .split(",")
      .map(x=>x.trim())
      .filter(Boolean)
      .slice(0,12);

  saveData();

  closeModal();

  renderAll();

  showToast("Perfil actualizado ✓");

}


/* =========================================================
   PEOPLE
========================================================= */

const people=[

  {
    id:1,
    name:"Álex",
    age:29,
    city:"Tarragona",
    interests:["Gym","Running","Música"]
  },

  {
    id:2,
    name:"Laura",
    age:27,
    city:"Reus",
    interests:["Viajes","Fitness","Cine"]
  },

  {
    id:3,
    name:"David",
    age:31,
    city:"Salou",
    interests:["Fútbol","Gym","Gaming"]
  },

  {
    id:4,
    name:"Marta",
    age:28,
    city:"Vila-seca",
    interests:["Running","Música","Viajes"]
  },

  {
    id:5,
    name:"Carlos",
    age:30,
    city:"Tarragona",
    interests:["Deporte","Tecnología","Cocina"]
  }

];


function renderPeople(){

  const searchEl=
    document.getElementById("peopleSearch");

  const search=
    searchEl
      ? searchEl.value.toLowerCase().trim()
      : "";

  const filtered=people.filter(person=>{

    if(!search) return true;

    const text=[
      person.name,
      person.city,
      ...person.interests
    ].join(" ").toLowerCase();

    return text.includes(search);

  });

  const html=filtered.map(person=>{

    const connected=
      data.connections.includes(person.id);

    return `
      <div class="card" style="margin-bottom:10px;">

        <div class="person">

          <div class="person-avatar">
            ${person.name.charAt(0)}
          </div>

          <div class="person-info">

            <strong>
              ${escapeHTML(person.name)}, ${person.age}
            </strong>

            <small>
              📍 ${escapeHTML(person.city)}
            </small>

            <div class="tags">
              ${person.interests
                .map(i=>`<span class="tag">${escapeHTML(i)}</span>`)
                .join("")}
            </div>

          </div>

          <button
            class="btn ${connected
              ? "btn-success"
              : "btn-primary"}"
            onclick="toggleConnection(${person.id})">

            ${connected ? "✓ Conectado" : "Conectar"}

          </button>

        </div>

      </div>
    `;

  }).join("");

  const list=document.getElementById("peopleList");

  if(list){
    list.innerHTML=
      html ||
      `<div class="empty">
        <div class="empty-icon">🔎</div>
        No se encontraron personas.
      </div>`;
  }

}


function toggleConnection(id){

  const index=data.connections.indexOf(id);

  if(index>=0){

    data.connections.splice(index,1);

    showToast("Conexión eliminada");

  }else{

    data.connections.push(id);

    showToast("¡Nueva conexión! 🤝");

  }

  data.stats.connections=data.connections.length;

  saveData();

  renderAll();

}


/* =========================================================
   PLANS
========================================================= */

function renderPlans(){

  const list=document.getElementById("plansList");

  if(!list) return;

  if(data.plans.length===0){

    list.innerHTML=`
      <div class="card">
        <div class="empty">
          <div class="empty-icon">📅</div>
          Todavía no hay planes.
        </div>
      </div>
    `;

    return;

  }

  list.innerHTML=data.plans.map(plan=>`

    <div class="card plan">

      <div class="plan-top">

        <div class="plan-icon">
          ${escapeHTML(plan.icon)}
        </div>

        <div>

          <h3>${escapeHTML(plan.title)}</h3>

          <div class="plan-info">
            📅 ${escapeHTML(plan.date)}
            · 🕐 ${escapeHTML(plan.time)}
            <br>
            📍 ${escapeHTML(plan.place)}
            <br>
            👥 ${plan.people} personas
          </div>

        </div>

      </div>

      <p class="muted" style="margin-top:13px;">
        ${escapeHTML(plan.description)}
      </p>

      <div class="plan-actions">

        <button class="btn btn-primary"
          onclick="joinPlan(${plan.id})">
          Participar
        </button>

        <button class="btn btn-secondary"
          onclick="sharePlan(${plan.id})">
          Compartir
        </button>

      </div>

    </div>

  `).join("");

}


function openPlanModal(){

  openModal(
    "Crear nuevo plan",
    `
      <div class="input-group">
        <label>Nombre del plan</label>
        <input id="planTitle"
          class="input"
          placeholder="Ej. Running">
      </div>

      <div class="input-group">
        <label>Icono</label>
        <input id="planIcon"
          class="input"
          value="📅">
      </div>

      <div class="grid grid-2">

        <div class="input-group">
          <label>Fecha</label>
          <input id="planDate"
            class="input"
            placeholder="Hoy">
        </div>

        <div class="input-group">
          <label>Hora</label>
          <input id="planTime"
            class="input"
            placeholder="19:00">
        </div>

      </div>

      <div class="input-group">
        <label>Lugar</label>
        <input id="planPlace"
          class="input"
          placeholder="Lugar">
      </div>

      <div class="input-group">
        <label>Descripción</label>
        <textarea id="planDescription"
          placeholder="Cuenta qué vais a hacer..."></textarea>
      </div>

     