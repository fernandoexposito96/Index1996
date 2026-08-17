<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#7c3cff">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="NEXO">
<title>NEXO — Conecta. Comparte. Vive.</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

<style>
:root{
  --bg:#070711;
  --bg2:#0d0d19;
  --panel:#11111f;
  --panel2:#171729;
  --border:rgba(255,255,255,.10);
  --text:#fff;
  --muted:#9292a8;
  --accent:#8b35ff;
  --accent2:#ff168c;
  --accent3:#354dff;
  --success:#32e89b;
  --warning:#ffd34d;
  --danger:#ff4f6d;
  --gradient:linear-gradient(135deg,var(--accent2),var(--accent),var(--accent3));
  --shadow:0 15px 50px rgba(0,0,0,.35);
}

*{box-sizing:border-box}

html,body{
  margin:0;
  padding:0;
  min-height:100%;
  background:#000;
  color:var(--text);
  font-family:Inter,Arial,sans-serif;
}

body{
  min-height:100vh;
  overflow-x:hidden;
}

button,input,textarea,select{font:inherit}

button{cursor:pointer}

button:active{transform:scale(.97)}

#app{
  width:100%;
  max-width:480px;
  min-height:100vh;
  margin:auto;
  position:relative;
  overflow:hidden;
  background:
    radial-gradient(circle at 10% 0%,rgba(255,22,140,.18),transparent 28%),
    radial-gradient(circle at 100% 15%,rgba(53,77,255,.18),transparent 30%),
    var(--bg);
}

.screen{
  display:none;
  min-height:100vh;
  padding:22px 17px 110px;
  overflow-y:auto;
}

.screen.active{
  display:block;
  animation:screenIn .25s ease;
}

@keyframes screenIn{
  from{opacity:0;transform:translateY(8px)}
  to{opacity:1;transform:none}
}

.logo{
  display:inline-block;
  font-size:31px;
  line-height:1;
  font-weight:900;
  letter-spacing:-1.8px;
  background:var(--gradient);
  -webkit-background-clip:text;
  background-clip:text;
  color:transparent;
}

.header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
}

.header-left h1{
  margin:10px 0 4px;
  font-size:23px;
}

.header-left p{
  margin:0;
  color:var(--muted);
  font-size:12px;
}

.icon-btn{
  width:43px;
  height:43px;
  border:1px solid var(--border);
  border-radius:14px;
  color:#fff;
  background:rgba(255,255,255,.06);
}

.gradient-btn{
  border:0;
  color:#fff;
  background:var(--gradient);
  border-radius:14px;
  padding:12px 17px;
  font-weight:800;
  box-shadow:0 8px 25px rgba(139,53,255,.25);
}

.outline-btn{
  border:1px solid var(--border);
  color:#fff;
  background:rgba(255,255,255,.05);
  border-radius:12px;
  padding:10px 14px;
}

.search{
  display:flex;
  align-items:center;
  gap:8px;
  height:48px;
  border:1px solid var(--border);
  border-radius:15px;
  padding:0 13px;
  background:rgba(255,255,255,.045);
  margin-bottom:20px;
}

.search span{font-size:21px;color:#aaa}

.search input{
  flex:1;
  min-width:0;
  border:0;
  outline:0;
  color:#fff;
  background:transparent;
}

.search input::placeholder{color:#77778b}

.section-head{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:21px 0 12px;
}

.section-head h2{
  margin:0;
  font-size:15px;
}

.section-head button{
  border:0;
  background:none;
  color:#bd75ff;
  font-size:10px;
}

.categories{
  display:flex;
  gap:8px;
  overflow-x:auto;
  padding-bottom:3px;
  scrollbar-width:none;
}

.categories::-webkit-scrollbar{display:none}

.category{
  flex:0 0 auto;
  border:1px solid var(--border);
  color:#ddd;
  background:rgba(255,255,255,.05);
  border-radius:30px;
  padding:9px 13px;
  font-size:10px;
}

.category.active{
  color:#fff;
  border-color:transparent;
  background:var(--gradient);
}

.hero{
  position:relative;
  overflow:hidden;
  border-radius:22px;
  padding:20px;
  margin-top:18px;
  background:
    radial-gradient(circle at 90% 0%,rgba(255,255,255,.25),transparent 22%),
    linear-gradient(135deg,#ff168c,#7838ff 55%,#3154ff);
  box-shadow:0 15px 45px rgba(111,40,255,.28);
}

.hero h2{
  margin:0 0 8px;
  font-size:21px;
}

.hero p{
  margin:0;
  max-width:290px;
  color:rgba(255,255,255,.83);
  font-size:11px;
  line-height:1.5;
}

.hero .hero-icon{
  position:absolute;
  right:-5px;
  bottom:-18px;
  font-size:95px;
  opacity:.22;
}

.plan-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}

.card-image{
  position:relative;
  min-height:180px;
  overflow:hidden;
  border-radius:17px;
  background-size:cover;
  background-position:center;
  border:1px solid var(--border);
}

.card-image:after{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(transparent 30%,rgba(0,0,0,.9));
}

.card-content{
  position:absolute;
  z-index:2;
  left:11px;
  right:11px;
  bottom:11px;
}

.card-content h3{
  margin:0 0 7px;
  font-size:12px;
}

.card-content p{
  margin:3px 0;
  color:#d2d2dc;
  font-size:8px;
}

.badge{
  display:inline-flex;
  align-items:center;
  gap:4px;
  padding:5px 8px;
  border-radius:9px;
  font-size:8px;
  background:rgba(0,0,0,.5);
  backdrop-filter:blur(10px);
}

.badge.green{color:#5affb1;background:rgba(9,83,53,.75)}
.badge.pink{color:#ff82dc;background:rgba(104,17,77,.75)}
.badge.yellow{color:#ffe56e;background:rgba(92,70,5,.75)}
.badge.blue{color:#91b8ff;background:rgba(25,45,100,.75)}

.image-running{background-image:url("https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85")}
.image-gym{background-image:url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85")}
.image-football{background-image:url("https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85")}
.image-cycling{background-image:url("https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=85")}
.image-yoga{background-image:url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85")}
.image-padel{background-image:url("https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=900&q=85")}
.image-cinema{background-image:url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=85")}
.image-music{background-image:url("https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=85")}
.image-food{background-image:url("https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85")}
.image-travel{background-image:url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85")}

.people{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:9px;
}

.person{
  padding:12px;
  border:1px solid var(--border);
  border-radius:17px;
  background:linear-gradient(145deg,rgba(255,255,255,.065),rgba(255,255,255,.025));
}

.avatar{
  width:46px;
  height:46px;
  border-radius:50%;
  background-size:cover;
  background-position:center;
  border:2px solid var(--accent);
}

.avatar-laura{background-image:url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=85")}
.avatar-marc{background-image:url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=85")}
.avatar-sofia{background-image:url("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=85")}
.avatar-alex{background-image:url("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=85")}

.person strong{
  display:block;
  margin-top:8px;
  font-size:11px;
}

.person small{
  display:block;
  margin-top:4px;
  color:var(--muted);
  font-size:8px;
}

.connect{
  width:100%;
  margin-top:9px;
  border:0;
  border-radius:10px;
  padding:8px;
  color:#fff;
  background:var(--gradient);
  font-size:9px;
  font-weight:700;
}

.connect.connected{
  background:rgba(50,232,155,.15);
  color:#5affb1;
  border:1px solid rgba(50,232,155,.3);
}

.story-row{
  display:flex;
  gap:14px;
  overflow-x:auto;
  padding-bottom:5px;
}

.story-row::-webkit-scrollbar{display:none}

.story-item{
  flex:0 0 auto;
  text-align:center;
  font-size:8px;
  color:#aaa;
}

.story{
  width:54px;
  height:54px;
  border-radius:50%;
  padding:2px;
  background:var(--gradient);
  margin-bottom:5px;
}

.story img{
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:50%;
  border:2px solid var(--bg);
}

.bottom-nav{
  position:fixed;
  z-index:100;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  width:min(480px,100%);
  height:76px;
  padding-bottom:env(safe-area-inset-bottom);
  background:rgba(8,8,17,.88);
  backdrop-filter:blur(25px);
  border-top:1px solid var(--border);
  display:flex;
  align-items:center;
  justify-content:space-around;
}

.nav-item{
  width:62px;
  border:0;
  background:transparent;
  color:#77778a;
}

.nav-item span{
  display:block;
  font-size:20px;
}

.nav-item small{
  display:block;
  margin-top:3px;
  font-size:7px;
}

.nav-item.active{color:#d768ff}

.plus{
  width:56px;
  height:56px;
  border:0;
  border-radius:50%;
  color:#fff;
  background:var(--gradient);
  font-size:29px;
  transform:translateY(-14px);
  box-shadow:0 12px 35px rgba(139,53,255,.5);
}

.back{
  border:0;
  background:none;
  color:#fff;
  font-size:35px;
  width:42px;
}

.page-title{
  font-size:20px;
  margin:0;
}

.form-card{
  border:1px solid var(--border);
  border-radius:18px;
  background:rgba(255,255,255,.04);
  padding:14px;
}

label{
  display:block;
  color:#bdbdca;
  font-size:10px;
  margin-bottom:14px;
}

input,textarea,select{
  width:100%;
  margin-top:7px;
  border:1px solid var(--border);
  outline:none;
  color:#fff;
  background:#0c0c17;
  border-radius:12px;
  padding:12px;
}

textarea{
  min-height:100px;
  resize:vertical;
}

.upload{
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:150px;
  border:1px dashed #c33dff;
  border-radius:16px;
  text-align:center;
  cursor:pointer;
  margin-bottom:17px;
}

.upload input{display:none}

.upload strong{
  display:block;
  color:#fff;
  font-size:12px;
}

.upload span{
  display:block;
  font-size:34px;
  margin-bottom:7px;
}

.settings{
  overflow:hidden;
  border:1px solid var(--border);
  border-radius:17px;
  background:rgba(255,255,255,.035);
}

.setting{
  min-height:56px;
  width:100%;
  display:flex;
  align-items:center;
  gap:11px;
  padding:0 13px;
  border:0;
  border-bottom:1px solid var(--border);
  background:transparent;
  color:#fff;
  text-align:left;
}

.setting:last-child{border-bottom:0}

.setting strong{font-size:10px}

.setting-value{
  margin-left:auto;
  color:#858599;
  font-size:9px;
}

.big-plan{
  margin-bottom:12px;
  overflow:hidden;
  border:1px solid var(--border);
  border-radius:18px;
  background:var(--panel);
}

.big-image{
  height:165px;
  background-size:cover;
  background-position:center;
}

.big-info{padding:13px}

.big-info h3{
  margin:9px 0;
  font-size:16px;
}

.big-info p{
  margin:5px 0;
  color:var(--muted);
  font-size:9px;
}

.tabs{
  display:flex;
  gap:4px;
  padding:4px;
  margin-bottom:15px;
  border-radius:14px;
  background:#0c0c17;
}

.tab{
  flex:1;
  border:0;
  border-radius:10px;
  padding:9px 4px;
  color:#858597;
  background:transparent;
  font-size:9px;
}

.tab.active{
  color:#fff;
  background:var(--gradient);
}

.active-people{
  display:flex;
  justify-content:space-between;
  text-align:center;
  margin:15px 0 24px;
}

.active-person{
  font-size:8px;
}

.active-person strong{
  display:block;
  margin-top:5px;
  font-size:9px;
}

.large-avatar{
  width:54px;
  height:54px;
  margin:auto;
  border-radius:50%;
  background-size:cover;
  background-position:center;
  border:2px solid var(--accent);
}

.interests{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:9px;
}

.interest{
  height:100px;
  position:relative;
  overflow:hidden;
  border-radius:15px;
  background-size:cover;
  background-position:center;
  padding:10px;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
}

.interest:after{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(transparent,rgba(0,0,0,.8));
}

.interest strong,.interest span{
  position:relative;
  z-index:2;
}

.interest strong{font-size:11px}

.interest span{
  margin-top:4px;
  color:#ddd;
  font-size:8px;
}

.chat-item{
  display:flex;
  align-items:center;
  gap:11px;
  padding:13px 2px;
  border-bottom:1px solid var(--border);
}

.chat-item > div:nth-child(2){flex:1}

.chat-item strong{font-size:11px}

.chat-item p{
  margin:5px 0 0;
  color:var(--muted);
  font-size:8px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

.chat-time{
  color:#777;
  font-size:8px;
}

.profile{
  overflow:hidden;
  border:1px solid var(--border);
  border-radius:20px;
  background:var(--panel);
  text-align:center;
}

.cover{
  height:150px;
  background:
    radial-gradient(circle at 20% 30%,#ff168c,transparent 25%),
    radial-gradient(circle at 80% 20%,#354dff,transparent 30%),
    linear-gradient(135deg,#241034,#0c0c18);
  display:flex;
  align-items:flex-end;
  justify-content:center;
}

.profile-avatar{
  width:92px;
  height:92px;
  border-radius:50%;
  transform:translateY(46px);
  border:3px solid #d34dff;
  background:url("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=85") center/cover;
}

.profile h2{
  margin:58px 0 5px;
  font-size:19px;
}

.profile p{
  margin:5px;
  color:var(--muted);
  font-size:9px;
}

.stats{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  margin-top:10px;
  padding:14px 4px;
  border:1px solid var(--border);
  border-radius:15px;
  background:var(--panel);
}

.stats div{text-align:center}

.stats strong{
  display:block;
  font-size:14px;
}

.stats span{
  display:block;
  margin-top:4px;
  color:#777;
  font-size:7px;
}

.profile-section{
  margin-top:10px;
  padding:14px;
  border:1px solid var(--border);
  border-radius:16px;
  background:var(--panel);
}

.profile-section h3{
  margin:0 0 10px;
  font-size:13px;
}

.profile-section p{
  color:#aaaabc;
  font-size:10px;
  line-height:1.6;
}

.interest-mini{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:6px;
}

.interest-mini div{
  padding:10px 2px;
  border-radius:10px;
  text-align:center;
  background:#0c0c18;
  font-size:7px;
}

.interest-mini span{
  display:block;
  margin-bottom:4px;
  font-size:19px;
}

.modal{
  display:none;
  position:fixed;
  inset:0;
  z-index:300;
  background:rgba(0,0,0,.7);
  backdrop-filter:blur(10px);
  align-items:flex-end;
  justify-content:center;
}

.modal.show{display:flex}

.modal-box{
  width:min(480px,100%);
  max-height:88vh;
  overflow:auto;
  padding:20px;
  border-radius:25px 25px 0 0;
  border:1px solid var(--border);
  background:#11111e;
  box-shadow:0 -20px 60px rgba(0,0,0,.5);
}

.modal-head{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:15px;
}

.modal-head h2{
  margin:0;
  font-size:18px;
}

.close{
  border:0;
  background:#222234;
  color:#fff;
  width:35px;
  height:35px;
  border-radius:10px;
}

.color-grid{
  display:grid;
  grid-template-columns:repeat(5,1fr);
  gap:9px;
  margin:15px 0;
}

.color{
  height:42px;
  border:3px solid transparent;
  border-radius:13px;
}

.color.selected{
  border-color:#fff;
  transform:scale(1.05);
}

.switch{
  margin-left:auto;
  width:43px;
  height:24px;
  padding:3px;
  border:0;
  border-radius:20px;
  background:#333344;
}

.switch:after{
  content:"";
  display:block;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#aaa;
  transition:.2s;
}

.switch.on{
  background:var(--accent);
}

.switch.on:after{
  transform:translateX(19px);
  background:#fff;
}

.toast{
  position:fixed;
  z-index:500;
  left:50%;
  bottom:92px;
  transform:translateX(-50%) translateY(20px);
  width:calc(100% - 35px);
  max-width:440px;
  padding:13px 15px;
  border:1px solid var(--border);
  border-radius:14px;
  background:#171727;
  box-shadow:var(--shadow);
  opacity:0;
  pointer-events:none;
  transition:.25s;
  font-size:10px;
}

.toast.show{
  opacity:1;
  transform:translateX(-50%) translateY(0);
}

.notification-dot{
  position:absolute;
  top:-2px;
  right:7px;
  width:8px;
  height:8px;
  border-radius:50%;
  background:#ff3d80;
}

.empty{
  padding:35px 15px;
  text-align:center;
  color:var(--muted);
  font-size:10px;
}

@media(min-width:700px){
  body{padding:25px}
  #app{
    border-radius:25px;
    box-shadow:0 0 100px rgba(125,40,255,.2);
  }
}
</style>
</head>

<body>

<div id="app">

<!-- ================= HOME ================= -->

<section class="screen active" id="screen-home">

<header class="header">
  <div class="header-left">
    <div class="logo">NEXO</div>
    <h1>Hola Fernando 👋</h1>
    <p>Conecta con personas y descubre nuevos planes.</p>
  </div>

  <button class="icon-btn" onclick="openNotifications()">🔔</button>
</header>

<div class="search">
  <span>⌕</span>
  <input id="homeSearch" placeholder="Buscar en NEXO...">
</div>

<div class="hero">
  <h2>Tu mundo empieza aquí ✨</h2>
  <p>Encuentra personas con tus mismos intereses, crea planes y vive experiencias nuevas.</p>
  <div class="hero-icon">✦</div>
</div>

<div class="section-head">
  <h2>Explora NEXO</h2>
</div>

<div class="categories">
  <button class="category active" data-filter="all">✨ Para ti</button>
  <button class="category" data-filter="deporte">🏃 Deporte</button>
  <button class="category" data-filter="ocio">🎬 Ocio</button>
  <button class="category" data-filter="musica">🎵 Música</button>
  <button class="category" data-filter="viajes">✈️ Viajes</button>
  <button class="category" data-filter="comida">🍕 Comida</button>
</div>

<div class="section-head">
  <h2>Planes cerca de ti</h2>
  <button onclick="navigateTo('plans')">Ver todos →</button>
</div>

<div class="plan-grid" id="homePlans">

<article class="card-image image-running searchable" data-text="running deporte">
  <div class="card-content">
    <span class="badge green">● 4/8 plazas</span>
    <h3>🏃 Running al atardecer</h3>
    <p>📍 Tarragona · Domingo 10:00</p>
    <p>6 km · Fácil</p>
  </div>
</article>

<article class="card-image image-gym searchable" data-text="gym deporte gimnasio">
  <div class="card-content">
    <span class="badge pink">● 5 plazas</span>
    <h3>💪 Pecho y tríceps</h3>
    <p>📍 Fitness Park · Hoy 19:00</p>
    <p>Intermedio</p>
  </div>
</article>

</div>

<div class="section-head">
  <h2>Personas para ti</h2>
  <button onclick="navigateTo('connect')">Descubrir →</button>
</div>

<div class="people">

<article class="person searchable" data-text="laura running musica">
  <div class="avatar avatar-laura"></div>
  <strong>Laura · 24</strong>
  <small>🏃 Running · 🎵 Música</small>
  <small>📍 2 km</small>
  <button class="connect" onclick="toggleConnection(this,'Laura')">Conectar</button>
</article>

<article class="person searchable" data-text="marc gym futbol">
  <div class="avatar avatar-marc"></div>
  <strong>Marc · 27</strong>
  <small>💪 Gym · ⚽ Fútbol</small>
  <small>📍 3 km</small>
  <button class="connect" onclick="toggleConnection(this,'Marc')">Conectar</button>
</article>

</div>

<div class="section-head">
  <h2>Personas activas</h2>
</div>

<div class="story-row">

<div class="story-item">
<div class="story"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"></div>
Laura
</div>

<div class="story-item">
<div class="story"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"></div>
Marc
</div>

<div class="story-item">
<div class="story"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"></div>
Sofia
</div>

<div class="story-item">
<div class="story"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"></div>
Álex
</div>

</div>

</section>


<!-- ================= PLANES ================= -->

<section class="screen" id="screen-plans">

<header class="header">
<button class="back" onclick="navigateTo('home')">‹</button>
<h1 class="page-title">Planes</h1>
<button class="icon-btn" onclick="navigateTo('create')">＋</button>
</header>

<div class="tabs">
<button class="tab active">Descubrir</button>
<button class="tab">Mis planes</button>
<button class="tab">Guardados</button>
</div>

<div class="search">
<span>⌕</span>
<input id="planSearch" placeholder="Buscar planes...">
</div>

<div id="plansList">

<article class="big-plan searchable" data-text="futbol deporte fútbol">
<div class="big-image image-football"></div>
<div class="big-info">
<span class="badge green">6 plazas</span>
<h3>⚽ Partido de fútbol</h3>
<p>📍 Camp Municipal · Sábado 18:00</p>
<p>Fútbol · Intermedio</p>
<button class="gradient-btn" onclick="joinPlan('Partido de fútbol')">Me apunto</button>
</div>
</article>

<article class="big-plan searchable" data-text="bicicleta ciclismo deporte">
<div class="big-image image-cycling"></div>
<div class="big-info">
<span class="badge yellow">5 km · Medio</span>
<h3>🚴 Ruta en bicicleta</h3>
<p>📍 Salou · Domingo 09:00</p>
<p>Ciclismo · Medio</p>
<button class="gradient-btn" onclick="joinPlan('Ruta en bicicleta')">Me apunto</button>
</div>
</article>

<article class="big-plan searchable" data-text="yoga playa">
<div class="big-image image-yoga"></div>
<div class="big-info">
<span class="badge green">4 plazas</span>
<h3>🧘 Yoga en la playa</h3>
<p>📍 La Pineda · Hoy 08:00</p>
<p>Todos los niveles</p>
<button class="gradient-btn" onclick="joinPlan('Yoga en la playa')">Me apunto</button>
</div>
</article>

<article class="big-plan searchable" data-text="padel deporte">
<div class="big-image image-padel"></div>
<div class="big-info">
<span class="badge pink">3 plazas</span>
<h3>🎾 Pádel nocturno</h3>
<p>📍 Club Pádel · Viernes 21:00</p>
<p>Intermedio</p>
<button class="gradient-btn" onclick="joinPlan('Pádel nocturno')">Me apunto</button>
</div>
</article>

</div>

</section>


<!-- ================= CREATE ================= -->

<section class="screen" id="screen-create">

<header class="header">
<button class="back" onclick="navigateTo('plans')">‹</button>
<h1 class="page-title">Crear plan</h1>
<span></span>
</header>

<form class="form-card" id="createPlanForm">

<label class="upload">
<input type="file" id="planImage" accept="image/*">
<div id="uploadContent">
<span>📸</span>
<strong>Añadir imagen</strong>
<small>JPG, PNG · Máx. 5 MB</small>
</div>
</label>

<label>
Título
<input id="planTitle" required placeholder="Ej: Running por la costa">
</label>

<label>
Descripción
<textarea id="planDescription" placeholder="Cuéntale a la gente qué vais a hacer..."></textarea>
</label>

<label>
Categoría
<select id="planCategory">
<option>Deporte</option>
<option>Ocio</option>
<option>Música</option>
<option>Viajes</option>
<option>Comida</option>
<option>Idiomas</option>
<option>Otros</option>
</select>
</label>

<label>
Fecha
<input id="planDate" type="date">
</label>

<label>
Hora
<input id="planTime" type="time">
</label>

<label>
Ubicación
<input id="planLocation" placeholder="Ej: Tarragona">
</label>

<label>
Número de plazas
<input id="planPlaces" type="number" min="1" max="100" value="6">
</label>

<div class="settings">

<button type="button" class="setting" onclick="toast('Privacidad del plan: Público')">
<span>🌐</span>
<strong>Privacidad</strong>
<span class="setting-value">Público ›</span>
</button>

<button type="button" class="setting" onclick="toast('Nivel: todos los niveles')">
<span>⭐</span>
<strong>Nivel</strong>
<span class="setting-value">Todos ›</span>
</button>

</div>

<button class="gradient-btn" style="width:100%;margin-top:15px" type="submit">
🚀 Crear plan
</button>

</form>

</section>


<!-- ================= CONNECT ================= -->

<section class="screen" id="screen-connect">

<header class="header">
<div>
<div class="logo">NEXO</div>
<h1 style="margin:9px 0 0;font-size:20px">Conecta</h1>
</div>
<button class="icon-btn" onclick="openFilters()">☷</button>
</header>

<div class="search">
<span>⌕</span>
<input id="connectSearch" placeholder="Buscar personas...">
</div>

<div class="section-head">
<h2>Personas activas cerca</h2>
</div>

<div class="active-people">

<div class="active-person">
<div class="large-avatar avatar-laura"></div>
<strong>Laura</strong>
<span>24 · 2 km</span>
</div>

<div class="active-person">
<div class="large-avatar avatar-marc"></div>
<strong>Marc</strong>
<span>27 · 3 km</span>
</div>

<div class="active-person">
<div class="large-avatar avatar-sofia"></div>
<strong>Sofia</strong>
<span>24 · 4 km</span>
</div>

<div class="active-person">
<div class="large-avatar avatar-alex"></div>
<strong>Álex</strong>
<span>25 · 5 km</span>
</div>

</div>

<div class="section-head">
<h2>Intereses compartidos</h2>
</div>

<div class="interests">

<div class="interest image-running">
<strong>🏃 Running</strong>
<span>168 personas</span>
</div>

<div class="interest image-gym">
<strong>💪 Gym</strong>
<span>98 personas</span>
</div>

<div class="interest image-padel">
<strong>🎾 Pádel</strong>
<span>76 personas</span>
</div>

<div class="interest image-yoga">
<strong>🧘 Yoga</strong>
<span>64 personas</span>
</div>

<div class="interest image-cinema">
<strong>🎬 Cine</strong>
<span>52 personas</span>
</div>

<div class="interest image-music">
<strong>🎵 Música</strong>
<span>91 personas</span>
</div>

<div class="interest image-travel">
<strong>✈️ Viajes</strong>
<span>84 personas</span>
</div>

<div class="interest image-food">
<strong>🍕 Comida</strong>
<span>72 personas</span>
</div>

</div>

</section>


<!-- ================= CHATS ================= -->

<section class="screen" id="screen-chats">

<header class="header">
<h1 class="page-title">Chats</h1>
<button class="icon-btn" onclick="toast('Nuevo chat')">✎</button>
</header>

<div class="search">
<span>⌕</span>
<input id="chatSearch" placeholder="Buscar chats...">
</div>

<div id="chatList">

<div class="chat-item searchable" data-text="laura">
<div class="avatar avatar-laura"></div>
<div>
<strong>Laura</strong>
<p>¡Genial! Entonces quedamos el domingo 👋</p>
</div>
<span class="chat-time">10:30</span>
</div>

<div class="chat-item searchable" data-text="marc">
<div class="avatar avatar-marc"></div>
<div>
<strong>Marc</strong>
<p>¿Entrenamos mañana? 💪</p>
</div>
<span class="chat-time">Ayer</span>
</div>

<div class="chat-item searchable" data-text="sofia">
<div class="avatar avatar-sofia"></div>
<div>
<strong>Sofia</strong>
<p>¿Te apuntas al plan de cine?</p>
</div>
<span class="chat-time">Lun</span>
</div>

</div>

</section>


<!-- ================= PROFILE ================= -->

<section class="screen" id="screen-profile">

<header class="header">
<h1 class="page-title">Mi perfil</h1>
<button class="icon-btn" onclick="openSettings()">⚙️</button>
</header>

<div class="profile">

<div class="cover">
<div class="profile-avatar"></div>
</div>

<h2>Fernando ✓</h2>
<p>@fernando.nexo</p>
<p>📍 Tarragona</p>

<button class="outline-btn onclick" onclick="openEditProfile()">Editar perfil</button>

</div>

<div class="stats">
<div><strong id="statPlans">48</strong><span>Planes</span></div>
<div><strong id="statFriends">127</strong><span>Conexiones</span></div>
<div><strong>32</strong><span>Grupos</span></div>
<div><strong>15</strong><span>Eventos</span></div>
</div>

<div class="profile-section">
<h3>Sobre mí</h3>
<p id="bioText">Apasionado del deporte, la música y los buenos planes. Siempre listo para nuevas aventuras 🚀</p>
</div>

<div class="profile-section">
<h3>Mis intereses</h3>

<div class="interest-mini">
<div><span>🏃</span>Running</div>
<div><span>💪</span>Gym</div>
<div><span>🎾</span>Pádel</div>
<div><span>🎵</span>Música</div>
</div>

</div>

<div class="profile-section">
<h3>Mi actividad</h3>
<p>🔥 Activo esta semana</p>
<p>🏆 48 planes creados</p>
<p>🤝 127 conexiones</p>
</div>

</section>


<!-- ================= SETTINGS ================= -->

<section class="screen" id="screen-settings">

<header class="header">
<button class="back" onclick="navigateTo('profile')">‹</button>
<h1 class="page-title">Ajustes</h1>
<span></span>
</header>

<div class="settings">

<button class="setting" onclick="openEditProfile()">
<span>👤</span>
<strong>Editar perfil</strong>
<span class="setting-value">›</span>
</button>

<button class="setting" onclick="openAppearance()">
<span>🎨</span>
<strong>Apariencia y colores</strong>
<span class="setting-value">›</span>
</button>

<button class="setting" onclick="openPrivacy()">
<span>🔐</span>
<strong>Privacidad</strong>
<span class="setting-value">›</span>
</button>

<button class="setting" onclick="toggleSetting(this)">
<span>📍</span>
<strong>Mostrar distancia</strong>
<span class="switch on"></span>
</button>

<button class="setting" onclick="toggleSetting(this)">
<span>🟢</span>
<strong>Mostrar estado activo</strong>
<span class="switch on"></span>
</button>

<button class="setting" onclick="toggleSetting(this)">
<span>🔔</span>
<strong>Notificaciones</strong>
<span class="switch on"></span>
</button>

<button class="setting" onclick="toast('Preferencias guardadas')">
<span>💾</span>
<strong>Guardar preferencias</strong>
<span class="setting-value">›</span>
</button>

<button class="setting" onclick="toast('NEXO v2.0 · Prototipo avanzado')">
<span>ℹ️</span>
<strong>Acerca de NEXO</strong>
<span class="setting-value">v2.0</span>
</button>

</div>

</section>


<!-- ================= NAV ================= -->

<nav class="bottom-nav">

<button class="nav-item active" data-screen="home">
<span>⌂</span>
<small>Inicio</small>
</button>

<button class="nav-item" data-screen="connect">
<span>♧</span>
<small>Conecta</small>
</button>

<button class="plus" onclick="navigateTo('create')">+</button>

<button class="nav-item" data-screen="chats">
<span>◌</span>
<small>Chats</small>
</button>

<button class="nav-item" data-screen="profile">
<span>♙</span>
<small>Perfil</small>
</button>

</nav>

</div>


<!-- ================= MODAL SETTINGS ================= -->

<div class="modal" id="settingsModal">

<div class="modal-box">

<div class="modal-head">
<h2>Ajustes rápidos</h2>
<button class="close" onclick="closeModal('settingsModal')">×</button>
</div>

<button class="setting" onclick="openAppearance()">
<span>🎨</span>
<strong>Personalizar NEXO</strong>
<span class="setting-value">›</span>
</button>

<button class="setting" onclick="openPrivacy()">
<span>🔐</span>
<strong>Privacidad</strong>
<span class="setting-value">›</span>
</button>

<button class="setting" onclick="toast('Notificaciones activadas')">
<span>🔔</span>
<strong>Notificaciones</strong>
<span class="setting-value">Activadas</span>
</button>

</div>
</div>


<!-- ================= APPEARANCE MODAL ================= -->

<div class="modal" id="appearanceModal">

<div class="modal-box">

<div class="modal-head">
<h2>🎨 Personaliza NEXO</h2>
<button class="close" onclick="closeModal('appearanceModal')">×</button>
</div>

<p style="font-size:10px;color:#999">Elige el color principal de tu aplicación.</p>

<div class="color-grid">

<button class="color selected" style="background:#8b35ff" data-color="#8b35ff"></button>
<button class="color" style="background:#ff168c" data-color="#ff168c"></button>
<button class="color" style="background:#354dff" data-color="#354dff"></button>
<button class="color" style="background:#00c2ff" data-color="#00c2ff"></button>
<button class="color" style="background:#00d084" data-color="#00d084"></button>
<button class="color" style="background:#ff7a00" data-color="#ff7a00"></button>
<button class="color" style="background:#ffd000" data-color="#ffd000"></button>
<button class="color" style="background:#ff3b30" data-color="#ff3b30"></button>
<button class="color" style="background:#00e5ff" data-color="#00e5ff"></button>
<button class="color" style="background:#a855f7" data-color="#a855f7"></button>

</div>

<div class="setting" onclick="toggleLightMode(this)">
<span>☀️</span>
<strong>Modo claro</strong>
<span class="switch" id="lightSwitch"></span>
</div>

<button class="gradient-btn" style="width:100%;margin-top:15px" onclick="closeModal('appearanceModal')">
Guardar apariencia
</button>

</div>
</div>


<!-- ================= PRIVACY MODAL ================= -->

<div class="modal" id="privacyModal">

<div class="modal-box">

<div class="modal-head">
<h2>🔐 Privacidad</h2>
<button class="close" onclick="closeModal('privacyModal')">×</button>
</div>

<div class="setting">
<span>👁️</span>
<strong>Perfil visible</strong>
<span class="switch on" onclick="toggleSwitch(this)"></span>
</div>

<div class="setting">
<span>📍</span>
<strong>Mostrar ubicación</strong>
<span class="switch on" onclick="toggleSwitch(this)"></span>
</div>

<div class="setting">
<span>🟢</span>
<strong>Mostrar estado activo</strong>
<span class="switch on" onclick="toggleSwitch(this)"></span>
</div>

<div class="setting">
<span>👥</span>
<strong>Permitir conexiones</strong>
<span class="switch on" onclick="toggleSwitch(this)"></span>
</div>

<div class="setting">
<span>💬</span>
<strong>Recibir mensajes</strong>
<span class="switch on" onclick="toggleSwitch(this)"></span>
</div>

<button class="gradient-btn" style="width:100%;margin-top:15px" onclick="closeModal('privacyModal')">
Guardar privacidad
</button>

</div>
</div>


<!-- ================= EDIT PROFILE ================= -->

<div class="modal" id="profileModal">

<div class="modal-box">

<div class="modal-head">
<h2>👤 Editar perfil</h2>
<button class="close" onclick="closeModal('profileModal')">×</button>
</div>

<label>
Nombre
<input id="editName" value="Fernando">
</label>

<label>
Usuario
<input id="editUsername" value="fernando.nexo">
</label>

<label>
Ciudad
<input id="editCity" value="Tarragona">
</label>

<label>
Descripción
<textarea id="editBio">Apasionado del deporte, la música y los buenos planes. Siempre listo para nuevas aventuras 🚀</textarea>
</label>

<button class="gradient-btn" style="width:100%" onclick="saveProfile()">
Guardar perfil
</button>

</div>
</div>


<div class="toast" id="toast"></div>


<script>
/* ================= CORE ================= */

const screens=document.querySelectorAll(".screen");
const navItems=document.querySelectorAll(".nav-item");

function navigateTo(name){

  screens.forEach(s=>s.classList.remove("active"));

  const target=document.getElementById("screen-"+name);

  if(target) target.classList.add("active");

  navItems.forEach(item=>{
    item.classList.toggle(
      "active",
      item.dataset.screen===name
    );
  });

  window.scrollTo({top:0,behavior:"smooth"});
}

document.querySelectorAll("[data-screen]").forEach(button=>{
  button.addEventListener("click",()=>{
    if(button.dataset.screen) navigateTo(button.dataset.screen);
  });
});


/* ================= TOAST ================= */

let toastTimer;

function toast(message){

  const box=document.getElementById("toast");

  box.textContent=message;
  box.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer=setTimeout(()=>{
    box.classList.remove("show");
  },2400);
}


/* ================= CONNECTIONS ================= */

function toggleConnection(button,name){

  const connected=button.classList.toggle("connected");

  if(connected){
    button.textContent="Conectado ✓";
    toast("Ahora estás conectado con "+name+" 🤝");

    const friends=document.getElementById("statFriends");

    if(friends){
      friends.textContent=
        parseInt(friends.textContent)+1;
    }

  }else{
    button.textContent="Conectar";
    toast("Conexión eliminada");
  }
}


/* ================= PLAN JOIN ================= */

function joinPlan(name){
  toast("🎉 Te has apuntado a: "+name);
}


/* ================= SEARCH ================= */

function setupSearch(inputId,selector){

  const input=document.getElementById(inputId);

  if(!input)return;

  input.addEventListener("input",()=>{

    const text=input.value.toLowerCase().trim();

    document.querySelectorAll(selector).forEach(item=>{

      const content=(
        item.dataset.text ||
        item.textContent
      ).toLowerCase();

      item.style.display=
        !text || content.includes(text)
        ? ""
        : "none";

    });

  });
}

setupSearch("homeSearch","#homePlans .searchable, #screen-home .person");
setupSearch("planSearch","#plansList .searchable");
setupSearch("connectSearch","#screen-connect .active-person");
setupSearch("chatSearch","#chatList .chat-item");


/* ================= CATEGORIES ================= */

document.querySelectorAll(".category").forEach(category=>{

  category.addEventListener("click",()=>{

    document.querySelectorAll(".category")
      .forEach(c=>c.classList.remove("active"));

    category.classList.add("active");

    const filter=category.dataset.filter;

    document.querySelectorAll("#homePlans .card-image")
      .forEach(card=>{

        const text=card.dataset.text || "";

        card.style.display=
          filter==="all" ||
          text.includes(filter)
          ? ""
          : "none";

      });

  });

});


/* ================= IMAGE PREVIEW ================= */

const planImage=document.getElementById("planImage");

if(planImage){

  planImage.addEventListener("change",event=>{

    const file=event.target.files[0];

    if(!file)return;

    if(!file.type.startsWith("image/")){
      toast("Selecciona una imagen válida");
      return;
    }

    if(file.size>5*1024*1024){
      toast("La imagen supera los 5 MB");
      planImage.value="";
      return;
    }

    const reader=new FileReader();

    reader.onload=e=>{

      document.getElementById("uploadContent").innerHTML=`

        <img
          src="${e.target.result}"
          style="
            width:100%;
            height:150px;
            object-fit:cover;
            border-radius:13px;
          "
        >

      `;

    };

    reader.readAsDataURL(file);

  });

}


/* ================= CREATE PLAN ================= */

const createForm=document.getElementById("createPlanForm");

if(createForm){

  createForm.addEventListener("submit",event=>{

    event.preventDefault();

    const title=document
      .getElementById("planTitle")
      .value.trim();

    if(!title){
      toast("Escribe un título para el plan");
      return;
    }

    const plan={
      id:Date.now(),
      title,
      description:
        document.getElementById("planDescription").value,
      category:
        document.getElementById("planCategory").value,
      date:
        document.getElementById("planDate").value,
      time:
        document.getElementById("planTime").value,
      location:
        document.getElementById("planLocation").value,
      places:
        document.getElementById("planPlaces").value
    };

    const saved=
      JSON.parse(
        localStorage.getItem("nexoPlans")||"[]"
      );

    saved.push(plan);

    localStorage.setItem(
      "nexoPlans",
      JSON.stringify(saved)
    );

    const stat=document.getElementById("statPlans");

    if(stat){
      stat.textContent=
        parseInt(stat.textContent)+1;
    }

    toast("🚀 ¡Plan creado correctamente!");

    createForm.reset();

    document.getElementById("planPlaces").value=6;

    document.getElementById("uploadContent").innerHTML=`
      <span>📸</span>
      <strong>Añadir imagen</strong>
      <small>JPG, PNG · Máx. 5 MB</small>
    `;

    navigateTo("plans");

  });

}


/* ================= TABS ================= */

document.querySelectorAll(".tab").forEach(tab=>{

  tab.addEventListener("click",()=>{

    document.querySelectorAll(".tab")
      .forEach(t=>t.classList.remove("active"));

    tab.classList.add("active");

    toast(tab.textContent+" seleccionado");

  });

});


/* ================= MODALS ================= */

function openModal(id){
  document.getElementById(id).classList.add("show");
}

function closeModal(id){
  document.getElementById(id).classList.remove("show");
}

function openSettings(){
  openModal("settingsModal");
}

function openAppearance(){
  closeModal("settingsModal");
  openModal("appearanceModal");
}

function openPrivacy(){
  closeModal("settingsModal");
  openModal("privacyModal");
}

function openEditProfile(){
  openModal("profileModal");
}

function openNotifications(){
  toast("🔔 No tienes nuevas notificaciones");
}

function openFilters(){
  toast("Filtros de búsqueda disponibles");
}


/* ================= COLORS ================= */

document.querySelectorAll(".color").forEach(color=>{

  color.addEventListener("click",()=>{

    document.querySelectorAll(".color")
      .forEach(c=>c.classList.remove("selected"));

    color.classList.add("selected");

    const value=color.dataset.color;

    document.documentElement.style
      .setProperty("--accent",value);

    localStorage.setItem(
      "nexoAccent",
      value
    );

  });

});


/* ================= LIGHT MODE ================= */

function toggleLightMode(){

  const sw=document.getElementById("lightSwitch");

  sw.classList.toggle("on");

  const light=sw.classList.contains("on");

  if(light){

    document.documentElement.style.setProperty("--bg","#f4f4f8");
    document.documentElement.style.setProperty("--panel","#ffffff");
    document.documentElement.style.setProperty("--panel2","#f0f0f5");
    document.documentElement.style.setProperty("--text","#15151c");
    document.documentElement.style.setProperty("--muted","#666675");

    document.body.style.background="#f4f4f8";

    localStorage.setItem("nexoLight","true");

    toast("☀️ Modo claro activado");

  }else{

    document.documentElement.style.setProperty("--bg","#070711");
    document.documentElement.style.setProperty("--panel","#11111f");
    document.documentElement.style.setProperty("--panel2","#171729");
    document.documentElement.style.setProperty("--text","#fff");
    document.documentElement.style.setProperty("--muted","#9292a8");

    document.body.style.background="#000";

    localStorage.setItem("nexoLight","false");

    toast("🌙 Modo oscuro activado");
  }
}


/* ================= SWITCHES ================= */

function toggleSwitch(element){
  element.classList.toggle("on");
}

function toggleSetting(row){

  const sw=row.querySelector(".switch");

  if(sw){
    sw.classList.toggle("on");

    toast(
      sw.classList.contains("on")
      ? "Activado ✓"
      : "Desactivado"
    );
  }
}


/* ================= PROFILE ================= */

function saveProfile(){

  const name=document.getElementById("editName").value.trim();
  const bio=document.getElementById("editBio").value.trim();

  if(name){

    document.querySelector(".profile h2").textContent=
      name+" ✓";

  }

  if(bio){

    document.getElementById("bioText").textContent=bio;

  }

  localStorage.setItem(
    "nexoProfile",
    JSON.stringify({
      name,
      bio,
      username:
        document.getElementById("editUsername").value,
      city:
        document.getElementById("editCity").value
    })
  );

  closeModal("profileModal");

  toast("👤 Perfil actualizado");

}


/* ================= LOAD LOCAL DATA ================= */

function loadData(){

  const accent=
    localStorage.getItem("nexoAccent");

  if(accent){
    document.documentElement.style
      .setProperty("--accent",accent);

    document.querySelectorAll(".color")
      .forEach(c=>{
        c.classList.toggle(
          "selected",
          c.dataset.color===accent
        );
      });
  }

  const profile=
    JSON.parse(
      localStorage.getItem("nexoProfile")||"null"
    );

  if(profile){

    if(profile.name){
      document.querySelector(".profile h2")
        .textContent=profile.name+" ✓";

      document.getElementById("editName")
        .value=profile.name;
    }

    if(profile.bio){
      document.getElementById("bioText")
        .textContent=profile.bio;

      document.getElementById("editBio")
        .value=profile.bio;
    }

    if(profile.username){
      document.getElementById("editUsername")
        .value=profile.username;
    }

    if(profile.city){
      document.getElementById("editCity")
        .value=profile.city;
    }

  }

}


/* ================= CLOSE MODAL OUTSIDE ================= */

document.querySelectorAll(".modal").forEach(modal=>{

  modal.addEventListener("click",event=>{

    if(event.target===modal){
      modal.classList.remove("show");
    }

  });

});


/* ================= PWA DETECTION ================= */

window.addEventListener("beforeinstallprompt",event=>{

  event.preventDefault();

  window.nexoInstallPrompt=event;

  toast("📲 NEXO puede instalarse como aplicación");

});


/* ================= START ================= */

loadData();

navigateTo("home");

console.log("NEXO iniciado correctamente 🚀");

</script>

</body>
</html>