<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#050509">
  <title>NEXO</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
    rel="stylesheet"
  >

  <style>
    :root {
      --bg: #050509;
      --panel: #0c0c15;
      --panel2: #11111c;
      --border: rgba(255,255,255,.09);
      --purple: #8b35ff;
      --pink: #ff168c;
      --blue: #354dff;
      --text: #ffffff;
      --muted: #8d8d9c;
      --gradient: linear-gradient(135deg,#ff168c,#8b35ff 55%,#354dff);
    }

    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      background: #000;
      color: var(--text);
      font-family: Inter, Arial, sans-serif;
    }

    body {
      min-height: 100vh;
    }

    button,
    input,
    textarea {
      font: inherit;
    }

    button {
      cursor: pointer;
    }

    #app {
      width: 100%;
      max-width: 430px;
      min-height: 100vh;
      margin: auto;
      background:
        radial-gradient(
          circle at 70% 0%,
          rgba(130,20,255,.13),
          transparent 35%
        ),
        var(--bg);
      position: relative;
      overflow: hidden;
    }

    .screen {
      display: none;
      padding: 22px 18px 110px;
      min-height: 100vh;
      overflow-y: auto;
    }

    .screen.active {
      display: block;
    }

    .top-header,
    .page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .top-header {
      margin-bottom: 20px;
    }

    .logo {
      font-size: 27px;
      font-weight: 900;
      letter-spacing: -1px;
      background: var(--gradient);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-bottom: 20px;
    }

    h1 {
      margin: 0;
      font-size: 22px;
    }

    .top-header p {
      color: var(--muted);
      margin: 6px 0 0;
      font-size: 12px;
    }

    .page-header {
      margin-bottom: 20px;
    }

    .page-header h1 {
      font-size: 18px;
    }

    .icon-button,
    .plus-small {
      width: 40px;
      height: 40px;
      border: 1px solid var(--border);
      background: #10101b;
      color: white;
      border-radius: 13px;
    }

    .back-button {
      border: 0;
      background: transparent;
      color: white;
      font-size: 34px;
      width: 40px;
    }

    .search-box {
      height: 45px;
      border: 1px solid var(--border);
      background: #0d0d17;
      border-radius: 13px;
      display: flex;
      align-items: center;
      padding: 0 12px;
      margin-bottom: 22px;
    }

    .search-box span {
      color: #77778a;
      font-size: 21px;
    }

    .search-box input {
      flex: 1;
      border: 0;
      outline: 0;
      color: white;
      background: transparent;
      padding: 0 10px;
    }

    .search-box input::placeholder {
      color: #77778a;
    }

    .search-box button {
      border: 0;
      color: #ca57ff;
      background: transparent;
    }

    .section-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 21px 0 12px;
    }

    .section-title h2 {
      margin: 0;
      font-size: 14px;
    }

    .section-title button {
      border: 0;
      color: #ca57ff;
      background: transparent;
      font-size: 11px;
    }

    .categories {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 5px;
    }

    .categories::-webkit-scrollbar {
      display: none;
    }

    .category {
      flex-shrink: 0;
      border: 1px solid var(--border);
      background: #10101a;
      color: #ddd;
      border-radius: 18px;
      padding: 8px 12px;
      font-size: 10px;
    }

    .category.active {
      background: var(--gradient);
      border: 0;
    }

    .plan-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 9px;
    }

    .plan-card {
      height: 180px;
      border-radius: 15px;
      overflow: hidden;
      position: relative;
      background-size: cover;
      background-position: center;
      border: 1px solid var(--border);
    }

    .plan-card::after,
    .interest-card::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        transparent 15%,
        rgba(0,0,0,.85)
      );
    }

    .plan-top,
    .card-content {
      position: absolute;
      z-index: 2;
    }

    .plan-top {
      top: 10px;
      left: 10px;
    }

    .card-content {
      bottom: 10px;
      left: 10px;
      right: 10px;
    }

    .card-content h3 {
      font-size: 13px;
      margin: 0 0 7px;
    }

    .card-content p,
    .card-content small {
      margin: 3px 0;
      font-size: 8px;
      color: #d0d0d8;
    }

    .distance {
      background: #063f24;
      border-radius: 10px;
      padding: 5px 7px;
      font-size: 8px;
    }

    .distance.pink {
      background: #571343;
    }

    .image-running {
      background-image: url(
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80"
      );
    }

    .image-gym {
      background-image: url(
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
      );
    }

    .image-football {
      background-image: url(
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80"
      );
    }

    .image-cycling {
      background-image: url(
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80"
      );
    }

    .image-yoga {
      background-image: url(
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
      );
    }

    .image-cross {
      background-image: url(
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
      );
    }

    .image-padel {
      background-image: url(
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=80"
      );
    }

    .image-cinema {
      background-image: url(
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80"
      );
    }

    .image-music {
      background-image: url(
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=80"
      );
    }

    .people-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .person-card {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 15px;
      padding: 11px;
    }

    .avatar {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      border: 2px solid #b72cff;
    }

    .avatar-laura {
      background-image: url(
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
      );
    }

    .avatar-marc {
      background-image: url(
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
      );
    }

    .avatar-sofia {
      background-image: url(
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
      );
    }

    .avatar-alex {
      background-image: url(
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
      );
    }

    .person-card strong {
      display: block;
      font-size: 11px;
      margin-top: 8px;
    }

    .person-card span,
    .person-card small {
      display: block;
      color: var(--muted);
      font-size: 8px;
      margin-top: 4px;
    }

    .connect-button {
      border: 0;
      background: var(--gradient);
      color: white;
      border-radius: 8px;
      padding: 6px 9px;
      font-size: 8px;
      margin-top: 8px;
    }

    .message-preview {
      display: flex;
      align-items: center;
      gap: 10px;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 11px;
      cursor: pointer;
    }

    .message-preview p {
      margin: 4px 0 0;
      color: var(--muted);
      font-size: 9px;
    }

    .message-time {
      margin-left: auto;
      color: var(--muted);
      font-size: 8px;
    }

    .tabs {
      display: flex;
      background: #0d0d17;
      border-radius: 12px;
      padding: 4px;
      margin-bottom: 15px;
    }

    .tab {
      flex: 1;
      border: 0;
      background: transparent;
      color: #888;
      padding: 9px;
      border-radius: 9px;
      font-size: 10px;
    }

    .tab.active {
      background: var(--gradient);
      color: white;
    }

    .big-plan-card {
      overflow: hidden;
      border-radius: 16px;
      background: var(--panel);
      border: 1px solid var(--border);
      margin-bottom: 12px;
    }

    .big-plan-image {
      height: 160px;
      background-size: cover;
      background-position: center;
    }

    .big-plan-info {
      padding: 13px;
    }

    .big-plan-info h3 {
      margin: 9px 0;
      font-size: 16px;
    }

    .big-plan-info p {
      color: var(--muted);
      font-size: 9px;
      margin: 5px 0;
    }

    .badge {
      display: inline-block;
      border-radius: 9px;
      padding: 5px 8px;
      font-size: 8px;
    }

    .badge.green {
      background: #073d29;
      color: #43ed9a;
    }

    .badge.pink {
      background: #4d1043;
      color: #ff62d0;
    }

    .badge.yellow {
      background: #463a09;
      color: #f5db59;
    }

    .participants {
      display: flex;
      align-items: center;
      margin-top: 10px;
    }

    .mini-avatar {
      width: 23px;
      height: 23px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      border: 1px solid #fff;
      margin-right: -5px;
    }

    .small-plan {
      display: flex;
      align-items: center;
      gap: 10px;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 13px;
      padding: 8px;
      margin-bottom: 8px;
    }

    .small-plan-image {
      width: 58px;
      height: 58px;
      border-radius: 11px;
      background-size: cover;
      background-position: center;
      flex-shrink: 0;
    }

    .small-plan > div:nth-child(2) {
      flex: 1;
    }

    .small-plan h3 {
      font-size: 10px;
      margin: 0 0 5px;
    }

    .small-plan p,
    .small-plan small {
      color: var(--muted);
      font-size: 8px;
      margin: 3px 0;
    }

    #createPlanForm label {
      display: block;
      color: #b0b0bd;
      font-size: 10px;
      margin-bottom: 14px;
      position: relative;
    }

    #createPlanForm input,
    #createPlanForm textarea {
      display: block;
      width: 100%;
      margin-top: 7px;
      background: #0d0d17;
      border: 1px solid var(--border);
      color: white;
      border-radius: 12px;
      outline: none;
      padding: 13px;
    }

    #createPlanForm textarea {
      height: 105px;
      resize: none;
    }

    .upload-box {
      height: 155px;
      border: 1px dashed #b526c7;
      border-radius: 14px;
      background: #0b0b13;
      display: flex !important;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      overflow: hidden;
    }

    .upload-box input {
      display: none !important;
    }

    #imagePreview {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 7px;
    }

    .upload-icon {
      font-size: 32px;
      color: #ff3bbd;
    }

    #imagePreview strong {
      color: white;
    }

    #imagePreview small {
      color: #777;
    }

    .settings-list {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 14px;
      overflow: hidden;
      margin-top: 10px;
    }

    .setting-row {
      width: 100%;
      min-height: 53px;
      display: flex;
      align-items: center;
      gap: 10px;
      border: 0;
      border-bottom: 1px solid var(--border);
      background: transparent;
      color: white;
      padding: 0 12px;
      text-align: left;
    }

    .setting-row strong {
      font-size: 10px;
    }

    .setting-value {
      margin-left: auto;
      color: #777;
      font-size: 9px;
    }

    .quantity {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .quantity button {
      border: 1px solid var(--border);
      background: #181822;
      color: white;
      width: 25px;
      height: 25px;
      border-radius: 7px;
    }

    .main-button {
      width: 100%;
      margin-top: 18px;
      border: 0;
      color: white;
      background: var(--gradient);
      border-radius: 25px;
      height: 48px;
      font-weight: 700;
    }

    .active-people {
      display: flex;
      justify-content: space-between;
      text-align: center;
      margin-bottom: 20px;
    }

    .active-people > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }

    .large-avatar {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      border: 2px solid #bd34ff;
    }

    .interest-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .interest-card {
      height: 90px;
      position: relative;
      overflow: hidden;
      border-radius: 13px;
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 10px;
    }

    .interest-card strong,
    .interest-card span {
      position: relative;
      z-index: 2;
    }

    .new-person {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 14px;
      margin-bottom: 8px;
    }

    .new-person > div:nth-child(2) {
      flex: 1;
    }

    .story-row {
      display: flex;
      gap: 13px;
      overflow-x: auto;
      padding-bottom: 12px;
    }

    .story {
      width: 51px;
      height: 51px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      border: 2px solid #df26d8;
      margin-bottom: 4px;
    }

    .chat-item {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 13px 3px;
      border-bottom: 1px solid var(--border);
    }

    .chat-item > div:nth-child(2) {
      flex: 1;
    }

    .chat-item strong {
      font-size: 11px;
    }

    .chat-item p {
      color: #858593;
      font-size: 8px;
      margin: 5px 0 0;
    }

    .chat-right {
      text-align: right;
    }

    .profile-card {
      overflow: hidden;
      background: #0c0c15;
      border: 1px solid var(--border);
      border-radius: 17px;
      text-align: center;
      padding-bottom: 17px;
    }

    .profile-cover {
      height: 130px;
      background:
        radial-gradient(
          circle at 20% 30%,
          #ff1d95,
          transparent 28%
        ),
        radial-gradient(
          circle at 80% 40%,
          #8a20ff,
          transparent 35%
        ),
        linear-gradient(135deg,#32103d,#10101e);
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    .profile-avatar {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      transform: translateY(45px);
      border: 3px solid #b52aff;
      background:
        url(
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
        )
        center / cover;
    }

    .profile-card h2 {
      margin-top: 55px;
      margin-bottom: 5px;
    }

    .profile-card p {
      color: var(--muted);
      font-size: 10px;
      margin: 5px;
    }

    .edit-profile {
      margin-top: 10px;
      border: 1px solid var(--border);
      background: #141420;
      color: white;
      border-radius: 10px;
      padding: 8px 14px;
      font-size: 9px;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 13px;
      margin-top: 9px;
      padding: 13px 5px;
    }

    .stats div {
      text-align: center;
    }

    .stats strong,
    .stats span {
      display: block;
    }

    .stats strong {
      font-size: 14px;
    }

    .stats span {
      color: #777;
      font-size: 7px;
      margin-top: 4px;
    }

    .profile-section {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 13px;
      margin-top: 10px;
    }

    .profile-section p {
      color: #b5b5c0;
      font-size: 10px;
      line-height: 1.6;
    }

    .profile-interests {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 6px;
    }

    .profile-interests div {
      text-align: center;
      background: #10101b;
      border-radius: 9px;
      padding: 10px 2px;
      font-size: 7px;
    }

    .profile-interests span {
      display: block;
      font-size: 18px;
      margin-bottom: 4px;
    }

    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: min(430px,100%);
      height: 75px;
      background: rgba(8,8,15,.96);
      backdrop-filter: blur(20px);
      border-top: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: space-around;
      z-index: 100;
    }

    .nav-item {
      width: 65px;
      border: 0;
      background: transparent;
      color: #777;
      position: relative;
    }

    .nav-item span {
      display: block;
      font-size: 20px;
    }

    .nav-item small {
      display: block;
      margin-top: 3px;
      font-size: 7px;
    }

    .nav-item.active {
      color: #d62bff;
    }

    .main-plus {
      width: 54px;
      height: 54px;
      border: 0;
      border-radius: 50%;
      background: var(--gradient);
      color: white;
      font-size: 30px;
      box-shadow: 0 0 30px rgba(183,30,255,.45);
      transform: translateY(-15px);
    }

    @media (min-width:700px) {
      body {
        padding: 30px;
      }

      #app {
        border-radius: 25px;
        box-shadow: 0 0 80px rgba(130,20,255,.18);
      }
    }
  </style>
</head>

<body>

  <div id="app">

    <!-- ==================== INICIO ==================== -->

    <section class="screen active" id="screen-home">

      <header class="top-header">
        <div>
          <div class="logo">NEXO</div>
          <h1>Hola Fernando 👋</h1>
          <p>¿Qué planes tienes hoy?</p>
        </div>

        <button class="icon-button" type="button">
          🔔
        </button>
      </header>

      <div class="search-box">
        <span>⌕</span>
        <input
          id="homeSearch"
          type="text"
          placeholder="Buscar en NEXO..."
        >
      </div>

      <div class="section-title">
        <h2>Explora NEXO</h2>
      </div>

      <div class="categories">
        <button
          class="category active"
          data-category="todos"
          type="button"
        >
          ✨ Para ti
        </button>

        <button
          class="category"
          data-category="Deporte"
          type="button"
        >
          🏃 Deporte
        </button>

        <button
          class="category"
          data-category="Idiomas"
          type="button"
        >
          🌎 Idiomas
        </button>

        <button
          class="category"
          data-category="Ocio"
          type="button"
        >
          🎬 Ocio
        </button>

        <button
          class="category"
          data-category="Música"
          type="button"
        >
          🎵 Música
        </button>
      </div>

      <div class="section-title">
        <h2>Planes cerca de ti</h2>

        <button
          data-screen="plans"
          type="button"
        >
          Ver todos
        </button>
      </div>

      <div class="plan-grid">

        <article class="plan-card image-running">
          <div class="plan-top">
            <span class="distance">
              ● 6 km · Fácil
            </span>
          </div>

          <div class="card-content">
            <h3>
              🏃 Running al atardecer
            </h3>

            <p>
              📍 Tarragona · Domingo 10:00
            </p>

            <small>
              👥 4/8 participantes
            </small>
          </div>
        </article>

        <article class="plan-card image-gym">
          <div class="plan-top">
            <span class="distance pink">
              ● 5 plazas
            </span>
          </div>

          <div class="card-content">
            <h3>
              💪 Pecho y tríceps
            </h3>

            <p>
              📍 Fitness Park · Hoy 19:00
            </p>

            <small>
              Intermedio
            </small>
          </div>
        </article>

      </div>

      <div class="section-title">
        <h2>Personas para ti</h2>
      </div>

      <div class="people-row">

        <article class="person-card">

          <div class="avatar avatar-laura"></div>

          <strong>
            Laura · 24
          </strong>

          <span>
            🏃 Running · 🎵 Música
          </span>

          <small>
            📍 2 km
          </small>

          <button
            class="connect-button"
            type="button"
          >
            Conectar
          </button>

        </article>

        <article class="person-card">

          <div class="avatar avatar-marc"></div>

          <strong>
            Marc · 27
          </strong>

          <span>
            🏋️ Gym · ⚽ Fútbol
          </span>

          <small>
            📍 3 km
          </small>

          <button
            class="connect-button"
            type="button"
          >
            Conectar
          </button>

        </article>

      </div>

      <div class="section-title">
        <h2>Mensajes recientes</h2>

        <button
          data-screen="chats"
          type="button"
        >
          Ver todos
        </button>
      </div>

      <div
        class="message-preview"
        data-screen="chats"
      >
        <div class="avatar avatar-laura"></div>

        <div>
          <strong>Laura</strong>

          <p>
            ¡Genial! Entonces quedamos el domingo 👋
          </p>
        </div>

        <span class="message-time">
          10:30
        </span>
      </div>

    </section>


    <!-- ==================== PLANES ==================== -->

    <section class="screen" id="screen-plans">

      <header class="page-header">

        <button
          class="back-button"
          data-screen="home"
          type="button"
        >
          ‹
        </button>

        <h1>Planes</h1>

        <button
          class="plus-small"
          data-screen="create"
          type="button"
        >
          +
        </button>

      </header>

      <div class="tabs">

        <button
          class="tab active"
          type="button"
        >
          Descubrir
        </button>

        <button
          class="tab"
          type="button"
        >
          Mis planes
        </button>

        <button
          class="tab"
          type="button"
        >
          Creados
        </button>

      </div>

      <div class="search-box">

        <span>⌕</span>

        <input
          id="planSearch"
          type="text"
          placeholder="Buscar planes..."
        >

      </div>

      <div id="plansList">

        <article
          class="big-plan-card searchable-plan"
          data-name="futbol deporte"
        >

          <div
            class="big-plan-image image-football"
          ></div>

          <div class="big-plan-info">

            <span class="badge green">
              6 plazas
            </span>

            <h3>
              Partido de fútbol
            </h3>

            <p>
              📍 Camp Municipal · Sábado 18:00
            </p>

            <p>
              ⚽ Fútbol · Intermedio
            </p>

          </div>

        </article>


        <article
          class="big-plan-card searchable-plan"
          data-name="bicicleta ciclismo"
        >

          <div
            class="big-plan-image image-cycling"
          ></div>

          <div class="big-plan-info">

            <span class="badge yellow">
              5 km · Medio
            </span>

            <h3>
              Ruta en bicicleta
            </h3>

            <p>
              📍 Ruta de Salou · Domingo 09:00
            </p>

            <p>
              🚴 Ciclismo · Medio
            </p>

          </div>

        </article>


        <div class="section-title">
          <h2>Cerca de ti</h2>
        </div>


        <article
          class="small-plan searchable-plan"
          data-name="yoga playa"
        >

          <div
            class="small-plan-image image-yoga"
          ></div>

          <div>

            <h3>
              Yoga en la playa
            </h3>

            <p>
              📍 La Pineda · Hoy 08:00
            </p>

            <small>
              🧘 Todos los niveles
            </small>

          </div>

          <span class="badge green">
            4 plazas
          </span>

        </article>


        <article
          class="small-plan searchable-plan"
          data-name="cross gimnasio"
        >

          <div
            class="small-plan-image image-cross"
          ></div>

          <div>

            <h3>
              Cross Training
            </h3>

            <p>
              📍 Fitness Park · Mañana 18:30
            </p>

            <small>
              🏋️ Intermedio
            </small>

          </div>

          <span class="badge pink">
            2 plazas
          </span>

        </article>


        <article
          class="small-plan searchable-plan"
          data-name="padel"
        >

          <div
            class="small-plan-image image-padel"
          ></div>

          <div>

            <h3>
              Pádel nocturno
            </h3>

            <p>
              📍 Club Pádel · Viernes 21:00
            </p>

            <small>
              🎾 Intermedio
            </small>

          </div>

          <span class="badge green">
            3 plazas
          </span>

        </article>

      </div>

    </section>


    <!-- ==================== CREAR PLAN ==================== -->

    <section class="screen" id="screen-create">

      <header class="page-header">

        <button
          class="back-button"
          data-screen="plans"
          type="button"
        >
          ‹
        </button>

        <h1>Crear plan</h1>

        <span></span>

      </header>


      <form id="createPlanForm">

        <label class="upload-box">

          <input
            type="file"
            id="planImage"
            accept="image/png,image/jpeg"
          >

          <div id="imagePreview">

            <span class="upload-icon">
              ▧
            </span>

            <strong>
              Añadir imagen
            </strong>

            <small>
              JPG, PNG · Máx 5MB
            </small>

          </div>

        </label>


        <label>

          Título del plan

          <input
            id="title"
            required
            placeholder="Ej: Running por la costa"
          >

        </label>


        <label>

          Descripción

          <textarea
            id="description"
            maxlength="200"
            placeholder="Describe tu plan..."
          ></textarea>

        </label>


        <div class="settings-list">

          <button
            type="button"
            class="setting-row"
          >

            <span>🏃</span>

            <strong>
              Deporte
            </strong>

            <span class="setting-value">
              Seleccionar ›
            </span>

          </button>


          <button
            type="button"
            class="setting-row"
          >

            <span>◈</span>

            <strong>
              Nivel
            </strong>

            <span class="setting-value">
              Seleccionar ›
            </span>

          </button>


          <button
            type="button"
            class="setting-row"
          >

            <span>📅</span>

            <strong>
              Fecha
            </strong>

            <span class="setting-value">
              Seleccionar ›
            </span>

          </button>


          <button
            type="button"
            class="setting-row"
          >

            <span>◷</span>

            <strong>
              Hora
            </strong>

            <span class="setting-value">
              Seleccionar ›
            </span>

          </button>


          <button
            type="button"
            class="setting-row"
          >

            <span>📍</span>

            <strong>
              Ubicación
            </strong>

            <span class="setting-value">
              Añadir ›
            </span>

          </button>


          <div class="setting-row">

            <span>👥</span>

            <strong>
              Número de plazas
            </strong>

            <span class="quantity">

              <button
                type="button"
                id="minus"
              >
                −
              </button>

              <b id="places">
                6
              </b>

              <button
                type="button"
                id="plus"
              >
                +
              </button>

            </span>

          </div>

        </div>


        <button
          class="main-button"
          type="submit"
        >
          Crear plan
        </button>

      </form>

    </section>


    <!-- ==================== CONECTA ==================== -->

    <section class="screen" id="screen-connect">

      <header class="page-header">

        <h1>Conecta</h1>

        <button
          class="icon-button"
          type="button"
        >
          ☷
        </button>

      </header>


      <div class="search-box">

        <span>⌕</span>

        <input
          id="connectSearch"
          type="text"
          placeholder="Buscar personas..."
        >

      </div>


      <div class="section-title">
        <h2>
          Personas activas cerca
        </h2>
      </div>


      <div class="active-people">

        <div>

          <div class="large-avatar avatar-laura"></div>

          <strong>
            Laura
          </strong>

          <small>
            24 · 2 km
          </small>

        </div>


        <div>

          <div class="large-avatar avatar-marc"></div>

          <strong>
            Marc
          </strong>

          <small>
            27 · 3 km
          </small>

        </div>


        <div>

          <div class="large-avatar avatar-sofia"></div>

          <strong>
            Sofia
          </strong>

          <small>
            24 · 4 km
          </small>

        </div>


        <div>

          <div class="large-avatar avatar-alex"></div>

          <strong>
            Álex
          </strong>

          <small>
            25 · 5 km
          </small>

        </div>

      </div>


      <div class="section-title">

        <h2>
          Intereses compartidos
        </h2>

      </div>


      <div class="interest-grid">

        <div class="interest-card image-running">

          <strong>
            🏃 Running
          </strong>

          <span>
            168 personas
          </span>

        </div>


        <div class="interest-card image-gym">

          <strong>
            💪 Gym
          </strong>

          <span>
            98 personas
          </span>

        </div>


        <div class="interest-card image-padel">

          <strong>
            🎾 Pádel
          </strong>

          <span>
            76 personas
          </span>

        </div>


        <div class="interest-card image-yoga">

          <strong>
            🧘 Yoga
          </strong>

          <span>
            64 personas
          </span>

        </div>


        <div class="interest-card image-cinema">

          <strong>
            🎬 Cine
          </strong>

          <span>
            52 personas
          </span>

        </div>


        <div class="interest-card image-music">

          <strong>
            🎵 Música
          </strong>

          <span>
            91 personas
          </span>

        </div>

      </div>

    </section>


    <!-- ==================== CHATS ==================== -->

    <section class="screen" id="screen-chats">

      <header class="page-header">

        <h1>Chats</h1>

        <button
          class="icon-button"
          type="button"
        >
          ✎
        </button>

      </header>


      <div class="search-box">

        <span>⌕</span>

        <input
          id="chatSearch"
          type="text"
          placeholder="Buscar chats..."
        >

      </div>


      <div class="chat-list">

        <div class="chat-item">

          <div class="avatar avatar-laura"></div>

          <div>

            <strong>
              Laura
            </strong>

            <p>
              ¡Genial! Entonces quedamos el domingo 👋
            </p>

          </div>

          <div class="chat-right">

            <small>
              10:30
            </small>

          </div>

        </div>


        <div class="chat-item">

          <div class="avatar avatar-marc"></div>

          <div>

            <strong>
              Marc
            </strong>

            <p>
              ¿Entrenamos mañana? 💪
            </p>

          </div>

          <div class="chat-right">

            <small>
              Ayer
            </small>

          </div>

        </div>

      </div>

    </section>


    <!-- ==================== PERFIL ==================== -->

    <section class="screen" id="screen-profile">

      <header class="page-header">

        <h1>
          Mi perfil
        </h1>

        <button
          class="icon-button"
          type="button"
        >
          ⚙
        </button>

      </header>


      <div class="profile-card">

        <div class="profile-cover">

          <div class="profile-avatar"></div>

        </div>


        <h2>
          Fernando ✓
        </h2>

        <p>
          @fernando.nexo
        </p>

        <p>
          📍 Tarragona
        </p>


        <button
          class="edit-profile"
          type="button"
        >
          Editar perfil
        </button>

      </div>


      <div class="stats">

        <div>
          <strong>48</strong>
          <span>Planes</span>
        </div>

        <div>
          <strong>127</strong>
          <span>Amigos</span>
        </div>

        <div>
          <strong>32</strong>
          <span>Grupos</span>
        </div>

        <div>
          <strong>15</strong>
          <span>Eventos</span>
        </div>

      </div>


      <div class="profile-section">

        <div class="section-title">

          <h2>
            Sobre mí
          </h2>

        </div>

        <p>
          Apasionado del deporte, la música y los buenos planes.
          Siempre listo para nuevas aventuras 🚀
        </p>

      </div>


      <div class="profile-section">

        <div class="section-title">

          <h2>
            Mis intereses
          </h2>

        </div>


        <div class="profile-interests">

          <div>
            <span>🏃</span>
            Running
          </div>

          <div>
            <span>💪</span>
            Gym
          </div>

          <div>
            <span>🎾</span>
            Pádel
          </div>

          <div>
            <span>🎵</span>
            Música
          </div>

        </div>

      </div>

    </section>


    <!-- ==================== NAVEGACIÓN ==================== -->

    <nav class="bottom-nav">

      <button
        class="nav-item active"
        data-screen="home"
        type="button"
      >

        <span>⌂</span>

        <small>
          Inicio
        </small>

      </button>


      <button
        class="nav-item"
        data-screen="connect"
        type="button"
      >

        <span>⌕</span>

        <small>
          Conecta
        </small>

      </button>


      <button
        class="main-plus"
        data-screen="create"
        type="button"
      >
        +
      </button>


      <button
        class="nav-item"
        data-screen="chats"
        type="button"
      >

        <span>◌</span>

        <small>
          Chats
        </small>

      </button>


      <button
        class="nav-item"
        data-screen="profile"
        type="button"
      >

        <span>♙</span>

        <small>
          Perfil
        </small>

      </button>

    </nav>

  </div>


  <!-- ==================== JAVASCRIPT ==================== -->

  <script>
    const screens =
      document.querySelectorAll(".screen");

    const navItems =
      document.querySelectorAll(".nav-item");

    const navigationButtons =
      document.querySelectorAll("[data-screen]");


    /* ==================== NAVEGACIÓN ==================== */

    function navigateTo(screenName) {

      screens.forEach(screen => {
        screen.classList.remove("active");
      });

      const target =
        document.getElementById(
          "screen-" + screenName
        );

      if (target) {
        target.classList.add("active");
      }

      navItems.forEach(item => {

        item.classList.remove("active");

        if (
          item.dataset.screen === screenName
        ) {
          item.classList.add("active");
        }

      });

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }


    navigationButtons.forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const screen =
            button.dataset.screen;

          if (screen) {
            navigateTo(screen);
          }

        }
      );

    });


    /* ==================== CATEGORÍAS ==================== */

    document
      .querySelectorAll(".category")
      .forEach(category => {

        category.addEventListener(
          "click",
          () => {

            document
              .querySelectorAll(".category")
              .forEach(item => {

                item.classList.remove(
                  "active"
                );

              });

            category.classList.add("active");

          }
        );

      });


    /* ==================== BÚSQUEDA DE PLANES ==================== */

    const planSearch =
      document.getElementById("planSearch");

    if (planSearch) {

      planSearch.addEventListener(
        "input",
        () => {

          const text =
            planSearch.value
              .toLowerCase()
              .trim();

          document
            .querySelectorAll(".searchable-plan")
            .forEach(plan => {

              const name =
                (
                  plan.dataset.name || ""
                ).toLowerCase();

              plan.style.display =
                !text ||
                name.includes(text)
                  ? ""
                  : "none";

            });

        }
      );

    }


    /* ==================== BÚSQUEDA HOME ==================== */

    const homeSearch =
      document.getElementById("homeSearch");

    if (homeSearch) {

      homeSearch.addEventListener(
        "input",
        () => {

          const text =
            homeSearch.value
              .toLowerCase()
              .trim();

          if (!text) {
            return;
          }

          const found =
            Array.from(
              document.querySelectorAll(
                ".plan-card, .person-card"
              )
            ).some(card =>
              card.textContent
                .toLowerCase()
                .includes(text)
            );

          if (found) {
            console.log(
              "Resultado encontrado:",
              text
            );
          }

        }
      );

    }


    /* ==================== CONECTAR ==================== */

    document
      .querySelectorAll(".connect-button")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            if (
              button.dataset.connected ===
              "true"
            ) {

              button.textContent =
                "Conectar";

              button.dataset.connected =
                "false";

            } else {

              button.textContent =
                "Conectado ✓";

              button.dataset.connected =
                "true";

            }

          }
        );

      });


    /* ==================== PLAZAS ==================== */

    let places = 6;

    const placesElement =
      document.getElementById("places");

    const minusButton =
      document.getElementById("minus");

    const plusButton =
      document.getElementById("plus");


    if (minusButton) {

      minusButton.addEventListener(
        "click",
        () => {

          if (places > 1) {

            places--;

            placesElement.textContent =
              places;

          }

        }
      );

    }


    if (plusButton) {

      plusButton.addEventListener(
        "click",
        () => {

          if (places < 50) {

            places++;

            placesElement.textContent =
              places;

          }

        }
      );

    }


    /* ==================== IMAGEN DEL PLAN ==================== */

    const imageInput =
      document.getElementById("planImage");

    if (imageInput) {

      imageInput.addEventListener(
        "change",
        event => {

          const file =
            event.target.files[0];

          if (!file) {
            return;
          }


          if (
            !file.type.startsWith("image/")
          ) {

            alert(
              "Selecciona una imagen JPG o PNG."
            );

            imageInput.value = "";

            return;
          }


          if (
            file.size >
            5 * 1024 * 1024
          ) {

            alert(
              "La imagen supera los 5 MB."
            );

            imageInput.value = "";

            return;
          }


          const reader =
            new FileReader();


          reader.onload =
            event => {

              document
                .getElementById(
                  "imagePreview"
                )
                .innerHTML = `

                  <img
                    src="${event.target.result}"
                    alt="Vista previa"
                    style="
                      width:100%;
                      height:155px;
                      object-fit:cover;
                      border-radius:13px;
                    "
                  >

                `;

            };


          reader.readAsDataURL(file);

        }
      );

    }


    /* ==================== CREAR PLAN ==================== */

    const createPlanForm =
      document.getElementById(
        "createPlanForm"
      );


    if (createPlanForm) {

      createPlanForm.addEventListener(
        "submit",
        event => {

          event.preventDefault();


          const title =
            document
              .getElementById("title")
              .value
              .trim();


          const description =
            document
              .getElementById("description")
              .value
              .trim();


          if (!title) {

            alert(
              "Escribe un título."
            );

            return;
          }


          const plan = {

            id: Date.now(),

            title: title,

            description: description,

            places: places,

            date:
              new Date()
                .toLocaleDateString(
                  "es-ES"
                )

          };


          const plans =
            JSON.parse(
              localStorage.getItem(
                "nexoPlans"
              ) || "[]"
            );


          plans.push(plan);


          localStorage.setItem(
            "nexoPlans",
            JSON.stringify(plans)
          );


          alert(
            "🎉 Plan creado correctamente."
          );


          createPlanForm.reset();


          places = 6;


          if (placesElement) {

            placesElement.textContent =
              places;

          }


          document.getElementById(
            "imagePreview"
          ).innerHTML = `

            <span class="upload-icon">
              ▧
            </span>

            <strong>
              Añadir imagen
            </strong>

            <small>
              JPG, PNG · Máx 5MB
            </small>

          `;


          navigateTo("plans");

        }
      );

    }


    /* ==================== TABS ==================== */

    document
      .querySelectorAll(".tab")
      .forEach(tab => {

        tab.addEventListener(
          "click",
          () => {

            document
              .querySelectorAll(".tab")
              .forEach(item => {

                item.classList.remove(
                  "active"
                );

              });

            tab.classList.add("active");

          }
        );

      });


    /* ==================== BÚSQUEDA DE PERSONAS ==================== */

    const connectSearch =
      document.getElementById(
        "connectSearch"
      );


    if (connectSearch) {

      connectSearch.addEventListener(
        "input",
        () => {

          const text =
            connectSearch.value
              .toLowerCase()
              .trim();


          document
            .querySelectorAll(
              "#screen-connect .active-people > div"
            )
            .forEach(person => {

              const name =
                person.textContent
                  .toLowerCase();

              person.style.display =
                !text ||
                name.includes(text)
                  ? "flex"
                  : "none";

            });

        }
      );

    }


    /* ==================== BÚSQUEDA DE CHATS ==================== */

    const chatSearch =
      document.getElementById(
        "chatSearch"
      );


    if (chatSearch) {

      chatSearch.addEventListener(
        "input",
        () => {

          const text =
            chatSearch.value
              .toLowerCase()
              .trim();


          document
            .querySelectorAll(
              ".chat-item"
            )
            .forEach(chat => {

              const content =
                chat.textContent
                  .toLowerCase();

              chat.style.display =
                !text ||
                content.includes(text)
                  ? "flex"
                  : "none";

            });

        }
      );

    }


    /* ==================== AJUSTES DEL PLAN ==================== */

    document
      .querySelectorAll(
        "#createPlanForm .setting-row"
      )
      .forEach(row => {

        row.addEventListener(
          "click",
          event => {

            if (
              event.target.closest(
                ".quantity"
              )
            ) {
              return;
            }


            const value =
              row.querySelector(
                ".setting-value"
              );


            if (!value) {
              return;
            }


            value.textContent =
              value.textContent
                .includes("Añadir")
                ? "Añadido ✓"
                : "Seleccionado ✓";

          }
        );

      });


    /* ==================== EDITAR PERFIL ==================== */

    const editProfile =
      document.querySelector(
        ".edit-profile"
      );


    if (editProfile) {

      editProfile.addEventListener(
        "click",
        () => {

          alert(
            "La edición de perfil estará disponible en la siguiente versión de NEXO."
          );

        }
      );

    }


    /* ==================== INICIO ==================== */

    navigateTo("home");

    console.log(
      "NEXO iniciado correctamente."
    );
  </script>

</body>
</html>