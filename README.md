<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#7c3aed">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="NEXO">

  <title>NEXO</title>

  <link rel="manifest" href="manifest.json">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  >

  <style>
    :root {
      --bg: #070711;
      --panel: rgba(19, 19, 34, .88);
      --panel2: #151528;
      --border: rgba(255,255,255,.10);

      --primary: #8b35ff;
      --secondary: #ff168c;
      --blue: #354dff;
      --cyan: #00d9ff;
      --green: #20e59a;
      --yellow: #ffd447;

      --text: #fff;
      --muted: #9999ad;

      --gradient:
        linear-gradient(
          135deg,
          #ff168c 0%,
          #8b35ff 52%,
          #354dff 100%
        );

      --radius: 18px;
      --nav-height: 76px;
    }

    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      min-height: 100vh;
      background:
        radial-gradient(
          circle at 15% 0%,
          rgba(255, 22, 140, .18),
          transparent 30%
        ),
        radial-gradient(
          circle at 90% 20%,
          rgba(53, 77, 255, .18),
          transparent 32%
        ),
        #000;
      color: var(--text);
      font-family: Inter, Arial, sans-serif;
    }

    button,
    input,
    textarea,
    select {
      font: inherit;
    }

    button {
      cursor: pointer;
    }

    input,
    textarea {
      outline: none;
    }

    #app {
      width: 100%;
      max-width: 480px;
      min-height: 100vh;
      margin: auto;
      position: relative;
      overflow: hidden;

      background:
        radial-gradient(
          circle at 80% 0%,
          rgba(139,53,255,.18),
          transparent 35%
        ),
        radial-gradient(
          circle at 0% 40%,
          rgba(255,22,140,.10),
          transparent 30%
        ),
        var(--bg);
    }

    .screen {
      display: none;
      min-height: 100vh;
      padding:
        calc(22px + env(safe-area-inset-top))
        18px
        calc(105px + env(safe-area-inset-bottom));
      overflow-y: auto;
    }

    .screen.active {
      display: block;
      animation: screenIn .22s ease;
    }

    @keyframes screenIn {
      from {
        opacity: 0;
        transform: translateY(8px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .top-header,
    .page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .top-header {
      margin-bottom: 20px;
    }

    .logo {
      display: inline-block;
      font-size: 31px;
      font-weight: 900;
      letter-spacing: -1.8px;

      background: var(--gradient);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;

      filter:
        drop-shadow(0 0 18px rgba(255,22,140,.20));
    }

    h1 {
      margin: 2px 0 0;
      font-size: 22px;
      letter-spacing: -.5px;
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
      font-size: 20px;
      margin: 0;
    }

    .icon-button,
    .plus-small {
      width: 43px;
      height: 43px;
      border: 1px solid var(--border);
      background:
        linear-gradient(
          145deg,
          rgba(255,255,255,.10),
          rgba(255,255,255,.03)
        );
      color: white;
      border-radius: 14px;
      box-shadow:
        0 8px 25px rgba(0,0,0,.20);
    }

    .icon-button:active,
    .plus-small:active,
    .main-button:active,
    .main-plus:active {
      transform: scale(.96);
    }

    .back-button {
      border: 0;
      background: transparent;
      color: white;
      font-size: 38px;
      width: 42px;
      height: 42px;
      line-height: 1;
    }

    .search-box {
      min-height: 48px;
      border: 1px solid var(--border);
      background: rgba(15,15,27,.88);
      border-radius: 15px;
      display: flex;
      align-items: center;
      padding: 0 13px;
      margin-bottom: 20px;
      box-shadow:
        inset 0 1px rgba(255,255,255,.03),
        0 10px 30px rgba(0,0,0,.16);
    }

    .search-box span {
      color: #aaaabe;
      font-size: 22px;
    }

    .search-box input {
      flex: 1;
      min-width: 0;
      border: 0;
      color: white;
      background: transparent;
      padding: 0 10px;
      font-size: 13px;
    }

    .search-box input::placeholder {
      color: #727287;
    }

    .section-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin: 22px 0 12px;
    }

    .section-title h2 {
      margin: 0;
      font-size: 14px;
    }

    .section-title button {
      border: 0;
      color: #d35dff;
      background: transparent;
      font-size: 10px;
      font-weight: 700;
    }

    /* CATEGORÍAS */

    .categories {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 4px;
      scrollbar-width: none;
    }

    .categories::-webkit-scrollbar {
      display: none;
    }

    .category {
      flex-shrink: 0;
      border: 1px solid var(--border);
      background: rgba(18,18,31,.90);
      color: #ddd;
      border-radius: 20px;
      padding: 9px 13px;
      font-size: 10px;
      transition: .2s;
    }

    .category.active {
      background: var(--gradient);
      border-color: transparent;
      color: white;
      box-shadow:
        0 7px 22px rgba(139,53,255,.25);
    }

    /* CARDS */

    .plan-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .plan-card {
      height: 190px;
      border-radius: var(--radius);
      overflow: hidden;
      position: relative;
      background-size: cover;
      background-position: center;
      border: 1px solid rgba(255,255,255,.12);
      box-shadow:
        0 15px 35px rgba(0,0,0,.25);
    }

    .plan-card::after,
    .interest-card::after {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(
          transparent 10%,
          rgba(0,0,0,.88) 100%
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
      bottom: 11px;
      left: 11px;
      right: 11px;
    }

    .card-content h3 {
      font-size: 13px;
      margin: 0 0 7px;
    }

    .card-content p,
    .card-content small {
      margin: 4px 0;
      font-size: 8px;
      color: #dddde6;
    }

    .distance {
      display: inline-block;
      background: rgba(0,70,40,.86);
      border: 1px solid rgba(40,255,160,.25);
      border-radius: 10px;
      padding: 5px 8px;
      font-size: 8px;
      backdrop-filter: blur(10px);
    }

    .distance.pink {
      background: rgba(100,15,70,.86);
      border-color: rgba(255,70,190,.25);
    }

    .image-running {
      background-image:
        url("https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80");
    }

    .image-gym {
      background-image:
        url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80");
    }

    .image-football {
      background-image:
        url("https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80");
    }

    .image-cycling {
      background-image:
        url("https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80");
    }

    .image-yoga {
      background-image:
        url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80");
    }

    .image-cross {
      background-image:
        url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80");
    }

    .image-padel {
      background-image:
        url("https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=80");
    }

    .image-cinema {
      background-image:
        url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80");
    }

    .image-music {
      background-image:
        url("https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=80");
    }

    /* PERSONAS */

    .people-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 9px;
    }

    .person-card,
    .new-person {
      background:
        linear-gradient(
          145deg,
          rgba(27,27,46,.95),
          rgba(14,14,25,.95)
        );
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 12px;
      box-shadow: 0 12px 30px rgba(0,0,0,.16);
    }

    .avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      border: 2px solid #c044ff;
      box-shadow:
        0 0 0 3px rgba(192,68,255,.10);
    }

    .avatar-laura {
      background-image:
        url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80");
    }

    .avatar-marc {
      background-image:
        url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80");
    }

    .avatar-sofia {
      background-image:
        url("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80");
    }

    .avatar-alex {
      background-image:
        url("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80");
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
      border-radius: 9px;
      padding: 7px 10px;
      font-size: 8px;
      font-weight: 700;
      margin-top: 9px;
    }

    /* MENSAJES */

    .message-preview {
      display: flex;
      align-items: center;
      gap: 10px;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 15px;
      padding: 12px;
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

    /* TABS */

    .tabs {
      display: flex;
      background: rgba(13,13,23,.9);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 4px;
      margin-bottom: 15px;
    }

    .tab {
      flex: 1;
      border: 0;
      background: transparent;
      color: #888;
      padding: 9px;
      border-radius: 10px;
      font-size: 9px;
      font-weight: 600;
    }

    .tab.active {
      background: var(--gradient);
      color: white;
    }

    /* PLANES */

    .big-plan-card {
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--panel);
      border: 1px solid var(--border);
      margin-bottom: 12px;
      box-shadow: 0 12px 30px rgba(0,0,0,.18);
    }

    .big-plan-image {
      height: 165px;
      background-size: cover;
      background-position: center;
    }

    .big-plan-info {
      padding: 14px;
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
      font-weight: 700;
    }

    .badge.green {
      background: rgba(7,61,41,.75);
      color: #43ed9a;
    }

    .badge.pink {
      background: rgba(77,16,67,.75);
      color: #ff62d0;
    }

    .badge.yellow {
      background: rgba(70,58,9,.75);
      color: #f5db59;
    }

    .small-plan {
      display: flex;
      align-items: center;
      gap: 10px;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 8px;
      margin-bottom: 8px;
    }

    .small-plan-image {
      width: 60px;
      height: 60px;
      border-radius: 11px;
      background-size: cover;
      background-position: center;
      flex-shrink: 0;
    }

    .small-plan > div:nth-child(2) {
      flex: 1;
      min-width: 0;
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

    /* FORMULARIO */

    #createPlanForm label {
      display: block;
      color: #bdbdcc;
      font-size: 10px;
      margin-bottom: 14px;
    }

    #createPlanForm input,
    #createPlanForm textarea {
      display: block;
      width: 100%;
      margin-top: 7px;
      background: rgba(13,13,23,.92);
      border: 1px solid var(--border);
      color: white;
      border-radius: 13px;
      outline: none;
      padding: 13px;
    }

    #createPlanForm input:focus,
    #createPlanForm textarea:focus {
      border-color: rgba(186,70,255,.65);
      box-shadow:
        0 0 0 3px rgba(139,53,255,.10);
    }

    #createPlanForm textarea {
      height: 105px;
      resize: none;
    }

    .upload-box {
      min-height: 160px;
      border: 1px dashed #c13bda;
      border-radius: 15px;
      background:
        radial-gradient(
          circle,
          rgba(193,59,218,.10),
          transparent 60%
        ),
        #0b0b13;
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
      font-size: 34px;
      color: #ff3bbd;
    }

    #imagePreview strong {
      color: white;
    }

    #imagePreview small {
      color: #777;
    }

    /* AJUSTES */

    .settings-list {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 15px;
      overflow: hidden;
      margin-top: 10px;
    }

    .setting-row {
      width: 100%;
      min-height: 55px;
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

    .setting-row:last-child {
      border-bottom: 0;
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
      width: 27px;
      height: 27px;
      border-radius: 8px;
    }

    .main-button {
      width: 100%;
      margin-top: 18px;
      border: 0;
      color: white;
      background: var(--gradient);
      border-radius: 25px;
      height: 50px;
      font-weight: 800;
      box-shadow:
        0 12px 30px rgba(139,53,255,.25);
    }

    /* CONECTA */

    .active-people {
      display: flex;
      justify-content: space-between;
      text-align: center;
      margin-bottom: 20px;
      gap: 8px;
    }

    .active-people > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      min-width: 0;
    }

    .active-people strong {
      font-size: 9px;
    }

    .active-people small {
      color: var(--muted);
      font-size: 7px;
    }

    .large-avatar {
      width: 57px;
      height: 57px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      border: 2px solid #bd34ff;
    }

    .interest-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 9px;
    }

    .interest-card {
      height: 100px;
      position: relative;
      overflow: hidden;
      border-radius: 15px;
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 11px;
    }

    .interest-card strong,
    .interest-card span {
      position: relative;
      z-index: 2;
    }

    .interest-card strong {
      font-size: 11px;
    }

    .interest-card span {
      font-size: 8px;
      color: #ccc;
      margin-top: 3px;
    }

    /* CHATS */

    .chat-item {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 14px 3px;
      border-bottom: 1px solid var(--border);
    }

    .chat-item > div:nth-child(2) {
      flex: 1;
      min-width: 0;
    }

    .chat-item strong {
      font-size: 11px;
    }

    .chat-item p {
      color: #858593;
      font-size: 8px;
      margin: 5px 0 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .chat-right {
      text-align: right;
    }

    .chat-right small {
      color: var(--muted);
      font-size: 8px;
    }

    /* PERFIL */

    .profile-card {
      overflow: hidden;
      background: rgba(12,12,21,.95);
      border: 1px solid var(--border);
      border-radius: 18px;
      text-align: center;
      padding-bottom: 18px;
    }

    .profile-cover {
      height: 135px;
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
        radial-gradient(
          circle at 50% 100%,
          #354dff,
          transparent 35%
        ),
        linear-gradient(
          135deg,
          #32103d,
          #10101e
        );
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    .profile-avatar {
      width: 92px;
      height: 92px;
      border-radius: 50%;
      transform: translateY(47px);
      border: 3px solid #fff;
      background:
        url("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80")
        center / cover;
      box-shadow:
        0 0 0 5px rgba(181,42,255,.30),
        0 0 30px rgba(181,42,255,.30);
    }

    .profile-card h2 {
      margin-top: 58px;
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
      border-radius: 14px;
      margin-top: 9px;
      padding: 14px 5px;
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
      border-radius: 15px;
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

    /* NAVEGACIÓN */

    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: min(480px,100%);
      height: calc(var(--nav-height) + env(safe-area-inset-bottom));
      padding-bottom: env(safe-area-inset-bottom);
      background: rgba(8,8,15,.94);
      backdrop-filter: blur(22px);
      -webkit-backdrop-filter: blur(22px);
      border-top: 1px solid rgba(255,255,255,.10);
      display: flex;
      align-items: center;
      justify-content: space-around;
      z-index: 100;
    }

    .nav-item {
      width: 65px;
      height: 58px;
      border: 0;
      background: transparent;
      color: #777;
      position: relative;
    }

    .nav-item span {
      display: block;
      font-size: 21px;
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
      width: 56px;
      height: 56px;
      border: 0;
      border-radius: 50%;
      background: var(--gradient);
      color: white;
      font-size: 30px;
      box-shadow:
        0 0 35px rgba(183,30,255,.50);
      transform: translateY(-14px);
    }

    /* TOAST */

    #toast {
      position: fixed;
      left: 50%;
      bottom: 92px;
      transform: translateX(-50%) translateY(20px);
      width: calc(100% - 36px);
      max-width: 430px;
      padding: 13px 16px;
      border-radius: 14px;
      background: rgba(25,25,40,.96);
      border: 1px solid rgba(255,255,255,.12);
      box-shadow: 0 15px 40px rgba(0,0,0,.35);
      color: white;
      font-size: 11px;
      text-align: center;
      opacity: 0;
      pointer-events: none;
      transition: .25s;
      z-index: 300;
    }

    #toast.show {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    @media (min-width:700px) {
      body {
        padding: 30px;
      }

      #app {
        min-height: calc(100vh - 60px);
        border-radius: 26px;
        box-shadow:
          0 0 100px rgba(130,20,255,.18);
      }

      .bottom-nav {
        bottom: 30px;
        border-radius: 0 0 26px 26px;
      }
    }
  </style>
</head>

<body>

<div id="app">

  <!-- ================= INICIO ================= -->

  <section class="screen active" id="screen-home">

    <header class="top-header">
      <div>
        <div class="logo">NEXO</div>
        <h1>Hola Fernando 👋</h1>
        <p>¿Qué planes tienes hoy?</p>
      </div>

      <button class="icon-button" id="notificationButton" type="button">
        🔔
      </button>
    </header>

    <div class="search-box">
      <span>⌕</span>
      <input id="homeSearch" type="text" placeholder="Buscar en NEXO...">
    </div>

    <div class="section-title">
      <h2>Explora NEXO</h2>
    </div>

    <div class="categories">
      <button class="category active" data-category="todos">✨ Para ti</button>
      <button class="category" data-category="Deporte">🏃 Deporte</button>
      <button class="category" data-category="Idiomas">🌎 Idiomas</button>
      <button class="category" data-category="Ocio">🎬 Ocio</button>
      <button class="category" data-category="Música">🎵 Música</button>
      <button class="category" data-category="Viajes">✈️ Viajes</button>
      <button class="category" data-category="Comida">🍔 Comida</button>
    </div>

    <div class="section-title">
      <h2>Planes cerca de ti</h2>
      <button data-screen="plans">Ver todos</button>
    </div>

    <div class="plan-grid">

      <article class="plan-card image-running">
        <div class="plan-top">
          <span class="distance">● 6 km · Fácil</span>
        </div>

        <div class="card-content">
          <h3>🏃 Running al atardecer</h3>
          <p>📍 Tarragona · Domingo 10:00</p>
          <small>👥 4/8 participantes</small>
        </div>
      </article>

      <article class="plan-card image-gym">
        <div class="plan-top">
          <span class="distance pink">● 5 plazas</span>
        </div>

        <div class="card-content">
          <h3>💪 Pecho y tríceps</h3>
          <p>📍 Fitness Park · Hoy 19:00</p>
          <small>Intermedio</small>
        </div>
      </article>

    </div>

    <div class="section-title">
      <h2>Personas para ti</h2>
      <button data-screen="connect">Ver más</button>
    </div>

    <div class="people-row">

      <article class="person-card">
        <div class="avatar avatar-laura"></div>
        <strong>Laura · 24</strong>
        <span>🏃 Running · 🎵 Música</span>
        <small>📍 2 km</small>
        <button class="connect-button" type="button">Conectar</button>
      </article>

      <article class="person-card">
        <div class="avatar avatar-marc"></div>
        <strong>Marc · 27</strong>
        <span>🏋️ Gym · ⚽ Fútbol</span>
        <small>📍 3 km</small>
        <button class="connect-button" type="button">Conectar</button>
      </article>

    </div>

    <div class="section-title">
      <h2>Mensajes recientes</h2>
      <button data-screen="chats">Ver todos</button>
    </div>

    <div class="message-preview" data-screen="chats">
      <div class="avatar avatar-laura"></div>

      <div>
        <strong>Laura</strong>
        <p>¡Genial! Entonces quedamos el domingo 👋</p>
      </div>

      <span class="message-time">10:30</span>
    </div>

  </section>


  <!-- ================= PLANES ================= -->

  <section class="screen" id="screen-plans">

    <header class="page-header">

      <button class="back-button" data-screen="home" type="button">‹</button>

      <h1>Planes</h1>

      <button class="plus-small" data-screen="create" type="button">+</button>

    </header>

    <div class="tabs">
      <button class="tab active" type="button">Descubrir</button>
      <button class="tab" type="button">Mis planes</button>
      <button class="tab" type="button">Creados</button>
    </div>

    <div class="search-box">
      <span>⌕</span>
      <input id="planSearch" type="text" placeholder="Buscar planes...">
    </div>

    <div id="plansList">

      <article class="big-plan-card searchable-plan" data-name="futbol deporte">

        <div class="big-plan-image image-football"></div>

        <div class="big-plan-info">

          <span class="badge green">6 plazas</span>

          <h3>Partido de fútbol</h3>

          <p>📍 Camp Municipal · Sábado 18:00</p>
          <p>⚽ Fútbol · Intermedio</p>

        </div>

      </article>


      <article class="big-plan-card searchable-plan" data-name="bicicleta ciclismo">

        <div class="big-plan-image image-cycling"></div>

        <div class="big-plan-info">

          <span class="badge yellow">5 km · Medio</span>

          <h3>Ruta en bicicleta</h3>

          <p>📍 Ruta de Salou · Domingo 09:00</p>
          <p>🚴 Ciclismo · Medio</p>

        </div>

      </article>


      <div class="section-title">
        <h2>Cerca de ti</h2>
      </div>


      <article class="small-plan searchable-plan" data-name="yoga playa">

        <div class="small-plan-image image-yoga"></div>

        <div>
          <h3>Yoga en la playa</h3>
          <p>📍 La Pineda · Hoy 08:00</p>
          <small>🧘 Todos los niveles</small>
        </div>

        <span class="badge green">4 plazas</span>

      </article>


      <article class="small-plan searchable-plan" data-name="cross gimnasio">

        <div class="small-plan-image image-cross"></div>

        <div>
          <h3>Cross Training</h3>
          <p>📍 Fitness Park · Mañana 18:30</p>
          <small>🏋️ Intermedio</small>
        </div>

        <span class="badge pink">2 plazas</span>

      </article>


      <article class="small-plan searchable-plan" data-name="padel">

        <div class="small-plan-image image-padel"></div>

        <div>
          <h3>Pádel nocturno</h3>
          <p>📍 Club Pádel · Viernes 21:00</p>
          <small>🎾 Intermedio</small>
        </div>

        <span class="badge green">3 plazas</span>

      </article>

    </div>

  </section>


  <!-- ================= CREAR PLAN ================= -->

  <section class="screen" id="screen-create">

    <header class="page-header">

      <button class="back-button" data-screen="plans" type="button">‹</button>

      <h1>Crear plan</h1>

      <span></span>

    </header>

    <form id="createPlanForm">

      <label class="upload-box">

        <input type="file" id="planImage" accept="image/png,image/jpeg">

        <div id="imagePreview">

          <span class="upload-icon">▧</span>

          <strong>Añadir imagen</strong>

          <small>JPG, PNG · Máx 5MB</small>

        </div>

      </label>


      <label>
        Título del plan

        <input
          id="title"
          required
          maxlength="70"
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

        <button type="button" class="setting-row">
          <span>🏃</span>
          <strong>Deporte</strong>
          <span class="setting-value">Seleccionar ›</span>
        </button>

        <button type="button" class="setting-row">
          <span>◈</span>
          <strong>Nivel</strong>
          <span class="setting-value">Seleccionar ›</span>
        </button>

        <button type="button" class="setting-row">
          <span>📅</span>
          <strong>Fecha</strong>
          <span class="setting-value">Seleccionar ›</span>
        </button>

        <button type="button" class="setting-row">
          <span>◷</span>
          <strong>Hora</strong>
          <span class="setting-value">Seleccionar ›</span>
        </button>

        <button type="button" class="setting-row">
          <span>📍</span>
          <strong>Ubicación</strong>
          <span class="setting-value">Añadir ›</span>
        </button>

        <div class="setting-row">

          <span>👥</span>

          <strong>Número de plazas</strong>

          <span class="quantity">

            <button type="button" id="minus">−</button>

            <b id="places">6</b>

            <button type="button" id="plus">+</button>

          </span>

        </div>

      </div>


      <button class="main-button" type="submit">
        Crear plan
      </button>

    </form>

  </section>


  <!-- ================= CONECTA ================= -->

  <section class="screen" id="screen-connect">

    <header class="page-header">

      <h1>Conecta</h1>

      <button class="icon-button" id="connectFilters" type="button">
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
      <h2>Personas activas cerca</h2>
    </div>


    <div class="active-people">

      <div>
        <div class="large-avatar avatar-laura"></div>
        <strong>Laura</strong>
        <small>24 · 2 km</small>
      </div>

      <div>
        <div class="large-avatar avatar-marc"></div>
        <strong>Marc</strong>
        <small>27 · 3 km</small>
      </div>

      <div>
        <div class="large-avatar avatar-sofia"></div>
        <strong>Sofia</strong>
        <small>24 · 4 km</small>
      </div>

      <div>
        <div class="large-avatar avatar-alex"></div>
        <strong>Álex</strong>
        <small>25 · 5 km</small>
      </div>

    </div>


    <div class="section-title">
      <h2>Intereses compartidos</h2>
    </div>


    <div class="interest-grid">

      <div class="interest-card image-running">
        <strong>🏃 Running</strong>
        <span>168 personas</span>
      </div>

      <div class="interest-card image-gym">
        <strong>💪 Gym</strong>
        <span>98 personas</span>
      </div>

      <div class="interest-card image-padel">
        <strong>🎾 Pádel</strong>
        <span>76 personas</span>
      </div>

      <div class="interest-card image-yoga">
        <strong>🧘 Yoga</strong>
        <span>64 personas</span>
      </div>

      <div class="interest-card image-cinema">
        <strong>🎬 Cine</strong>
        <span>52 personas</span>
      </div>

      <div class="interest-card image-music">
        <strong>🎵 Música</strong>
        <span>91 personas</span>
      </div>

    </div>

  </section>


  <!-- ================= CHATS ================= -->

  <section class="screen" id="screen-chats">

    <header class="page-header">

      <h1>Chats</h1>

      <button class="icon-button" id="newChat" type="button">
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
          <strong>Laura</strong>
          <p>¡Genial! Entonces quedamos el domingo 👋</p>
        </div>

        <div class="chat-right">
          <small>10:30</small>
        </div>

      </div>


      <div class="chat-item">

        <div class="avatar avatar-marc"></div>

        <div>
          <strong>Marc</strong>
          <p>¿Entrenamos mañana? 💪</p>
        </div>

        <div class="chat-right">
          <small>Ayer</small>
        </div>

      </div>

    </div>

  </section>


  <!-- ================= PERFIL ================= -->

  <section class="screen" id="screen-profile">

    <header class="page-header">

      <h1>Mi perfil</h1>

      <button class="icon-button" id="settingsButton" type="button">
        ⚙
      </button>

    </header>


    <div class="profile-card">

      <div class="profile-cover">
        <div class="profile-avatar"></div>
      </div>

      <h2>Fernando ✓</h2>

      <p>@fernando.nexo</p>

      <p>📍 Tarragona</p>

      <button class="edit-profile" type="button">
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
        <h2>Sobre mí</h2>
      </div>

      <p>
        Apasionado del deporte, la música y los buenos planes.
        Siempre listo para nuevas aventuras 🚀
      </p>

    </div>


    <div class="profile-section">

      <div class="section-title">
        <h2>Mis intereses</h2>
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


  <!-- ================= NAVEGACIÓN ================= -->

  <nav class="bottom-nav">

    <button class="nav-item active" data-screen="home" type="button">
      <span>⌂</span>
      <small>Inicio</small>
    </button>

    <button class="nav-item" data-screen="connect" type="button">
      <span>⌕</span>
      <small>Conecta</small>
    </button>

    <button class="main-plus" data-screen="create" type="button">
      +
    </button>

    <button class="nav-item" data-screen="chats" type="button">
      <span>◌</span>
      <small>Chats</small>
    </button>

    <button class="nav-item" data-screen="profile" type="button">
      <span>♙</span>
      <small>Perfil</small>
    </button>

  </nav>

</div>

<div id="toast"></div>


<script>

  /* ================= NAVEGACIÓN ================= */

  const screens =
    document.querySelectorAll(".screen");

  const navItems =
    document.querySelectorAll(".nav-item");

  const navigationButtons =
    document.querySelectorAll("[data-screen]");


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

      if (item.dataset.screen === screenName) {
        item.classList.add("active");
      }

    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  navigationButtons.forEach(button => {

    button.addEventListener("click", () => {

      const screen =
        button.dataset.screen;

      if (screen) {
        navigateTo(screen);
      }

    });

  });


  /* ================= TOAST ================= */

  let toastTimer;

  function showToast(message) {

    const toast =
      document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
      setTimeout(() => {
        toast.classList.remove("show");
      }, 2500);
  }


  /* ================= CATEGORÍAS ================= */

  document
    .querySelectorAll(".category")
    .forEach(category => {

      category.addEventListener("click", () => {

        document
          .querySelectorAll(".category")
          .forEach(item => {
            item.classList.remove("active");
          });

        category.classList.add("active");

        showToast(
          "Explorando " +
          category.textContent.trim()
        );

      });

    });


  /* ================= CONECTAR ================= */

  document
    .querySelectorAll(".connect-button")
    .forEach(button => {

      button.addEventListener("click", () => {

        if (button.dataset.connected === "true") {

          button.textContent = "Conectar";

          button.dataset.connected = "false";

          showToast("Conexión cancelada");

        } else {

          button.textContent = "Conectado ✓";

          button.dataset.connected = "true";

          showToast("¡Conexión enviada! 🤝");

        }

      });

    });


  /* ================= BUSCAR PLANES ================= */

  const planSearch =
    document.getElementById("planSearch");

  if (planSearch) {

    planSearch.addEventListener("input", () => {

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

    });

  }


  /* ================= BUSCAR HOME ================= */

  const homeSearch =
    document.getElementById("homeSearch");

  if (homeSearch) {

    homeSearch.addEventListener("keydown", event => {

      if (event.key === "Enter") {

        const text =
          homeSearch.value
            .trim();

        if (text) {

          navigateTo("plans");

          const planSearch =
            document.getElementById("planSearch");

          if (planSearch) {

            planSearch.value = text;

            planSearch.dispatchEvent(
              new Event("input")
            );

          }

        }

      }

    });

  }


  /* ================= PLAZAS ================= */

  let places = 6;

  const placesElement =
    document.getElementById("places");

  const minusButton =
    document.getElementById("minus");

  const plusButton =
    document.getElementById("plus");


  if (minusButton) {

    minusButton.addEventListener("click", () => {

      if (places > 1) {

        places--;

        placesElement.textContent =
          places;

      }

    });

  }


  if (plusButton) {

    plusButton.addEventListener("click", () => {

      if (places < 50) {

        places++;

        placesElement.textContent =
          places;

      }

    });

  }


  /* ================= IMAGEN ================= */

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

        if (!file.type.startsWith("image/")) {

          showToast(
            "Selecciona una imagen válida."
          );

          imageInput.value = "";

          return;
        }

        if (file.size > 5 * 1024 * 1024) {

          showToast(
            "La imagen supera los 5 MB."
          );

          imageInput.value = "";

          return;
        }

        const reader =
          new FileReader();

        reader.onload = event => {

          document
            .getElementById("imagePreview")
            .innerHTML = `

              <img
                src="${event.target.result}"
                alt="Vista previa"
                style="
                  width:100%;
                  height:160px;
                  object-fit:cover;
                  border-radius:14px;
                "
              >

            `;

        };

        reader.readAsDataURL(file);

      }
    );

  }


  /* ================= CREAR PLAN ================= */

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

          showToast(
            "Escribe un título."
          );

          return;
        }

        const plan = {

          id: Date.now(),

          title,

          description,

          places,

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


        showToast(
          "🎉 Plan creado correctamente"
        );


        createPlanForm.reset();

        places = 6;

        placesElement.textContent =
          places;


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


        setTimeout(() => {
          navigateTo("plans");
        }, 500);

      }
    );

  }


  /* ================= TABS ================= */

  document
    .querySelectorAll(".tab")
    .forEach(tab => {

      tab.addEventListener("click", () => {

        document
          .querySelectorAll(".tab")
          .forEach(item => {
            item.classList.remove("active");
          });

        tab.classList.add("active");

      });

    });


  /* ================= BUSCAR PERSONAS ================= */

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


  /* ================= BUSCAR CHATS ================= */

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
          .querySelectorAll(".chat-item")
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


  /* ================= AJUSTES PLAN ================= */

  document
    .querySelectorAll(
      "#createPlanForm .setting-row"
    )
    .forEach(row => {

      row.addEventListener("click", event => {

        if (
          event.target.closest(".quantity")
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
          value.textContent.includes("Añadir")
            ? "Añadido ✓"
            : "Seleccionado ✓";

      });

    });


  /* ================= BOTONES ================= */

  document
    .getElementById("notificationButton")
    ?.addEventListener(
      "click",
      () => {
        showToast("🔔 No tienes notificaciones nuevas");
      }
    );


  document
    .getElementById("connectFilters")
    ?.addEventListener(
      "click",
      () => {
        showToast("Filtros de búsqueda de NEXO");
      }
    );


  document
    .getElementById("newChat")
    ?.addEventListener(
      "click",
      () => {
        showToast("✉️ Nueva conversación");
      }
    );


  document
    .getElementById("settingsButton")
    ?.addEventListener(
      "click",
      () => {
        showToast("⚙️ Ajustes de perfil");
      }
    );


  document
    .querySelector(".edit-profile")
    ?.addEventListener(
      "click",
      () => {
        showToast("✏️ Editor de perfil");
      }
    );


  /* ================= SERVICE WORKER ================= */

  if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

      navigator.serviceWorker
        .register("./sw.js")
        .then(() => {
          console.log(
            "NEXO PWA: Service Worker activo."
          );
        })
        .catch(error => {
          console.log(
            "NEXO PWA:",
            error
          );
        });

    });

  }


  /* ================= INICIO ================= */

  navigateTo("home");

  console.log(
    "NEXO iniciado correctamente."
  );

</script>

</body>
</html>