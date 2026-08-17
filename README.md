<!-- BLOQUE 1: index.html
     NEXO V2
     Sustituye COMPLETAMENTE el contenido de tu index.html por este archivo.
-->

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#8b35ff">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="NEXO">

  <title>NEXO</title>

  <link rel="manifest" href="./manifest.json">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  >

  <style>
    :root {
      --bg:#070711;
      --bg2:#0d0d19;
      --panel:#151528;
      --panel2:#1b1b31;
      --border:rgba(255,255,255,.10);

      --primary:#8b35ff;
      --secondary:#ff168c;
      --accent:#354dff;

      --text:#fff;
      --muted:#9696aa;
      --success:#20e59a;
      --danger:#ff4d67;
      --warning:#ffd447;

      --gradient:
        linear-gradient(
          135deg,
          var(--secondary),
          var(--primary) 52%,
          var(--accent)
        );

      --radius:18px;
      --nav-height:76px;
    }

    [data-theme="pink"] {
      --primary:#ff168c;
      --secondary:#ff4bb5;
      --accent:#8b35ff;
    }

    [data-theme="blue"] {
      --primary:#354dff;
      --secondary:#0077ff;
      --accent:#00d9ff;
    }

    [data-theme="cyan"] {
      --primary:#00d9ff;
      --secondary:#0077ff;
      --accent:#354dff;
    }

    [data-theme="green"] {
      --primary:#20e59a;
      --secondary:#00b879;
      --accent:#00d9ff;
    }

    [data-theme="red"] {
      --primary:#ff304f;
      --secondary:#ff168c;
      --accent:#8b35ff;
    }

    [data-theme="gold"] {
      --primary:#ffd447;
      --secondary:#ff9f1c;
      --accent:#ff5c35;
    }

    [data-theme="sunset"] {
      --primary:#ff5c35;
      --secondary:#ff168c;
      --accent:#8b35ff;
    }

    [data-theme="mono"] {
      --primary:#ffffff;
      --secondary:#aaaaaa;
      --accent:#555555;
    }

    * {
      box-sizing:border-box;
      -webkit-tap-highlight-color:transparent;
    }

    html {
      scroll-behavior:smooth;
    }

    body {
      margin:0;
      min-height:100vh;
      background:#000;
      color:var(--text);
      font-family:Inter,Arial,sans-serif;
    }

    button,
    input,
    textarea,
    select {
      font:inherit;
    }

    button {
      cursor:pointer;
    }

    button:active {
      transform:scale(.97);
    }

    input,
    textarea,
    select {
      outline:none;
    }

    #app {
      width:100%;
      max-width:520px;
      min-height:100vh;
      margin:auto;
      position:relative;
      overflow:hidden;

      background:
        radial-gradient(
          circle at 90% 0%,
          color-mix(in srgb,var(--primary) 18%,transparent),
          transparent 34%
        ),
        radial-gradient(
          circle at 0% 35%,
          color-mix(in srgb,var(--secondary) 10%,transparent),
          transparent 30%
        ),
        var(--bg);
    }

    .screen {
      display:none;
      min-height:100vh;
      padding:
        calc(20px + env(safe-area-inset-top))
        18px
        calc(110px + env(safe-area-inset-bottom));
      overflow-y:auto;
    }

    .screen.active {
      display:block;
      animation:screenIn .22s ease;
    }

    @keyframes screenIn {
      from {
        opacity:0;
        transform:translateY(7px);
      }

      to {
        opacity:1;
        transform:none;
      }
    }

    .top-header,
    .page-header {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
    }

    .top-header {
      margin-bottom:20px;
    }

    .logo {
      display:inline-block;
      font-size:32px;
      font-weight:900;
      letter-spacing:-2px;
      background:var(--gradient);
      -webkit-background-clip:text;
      background-clip:text;
      color:transparent;
    }

    h1 {
      margin:4px 0 0;
      font-size:22px;
      letter-spacing:-.6px;
    }

    h2 {
      font-size:15px;
      margin:0;
    }

    h3 {
      margin:0;
    }

    p {
      line-height:1.45;
    }

    .top-header p {
      color:var(--muted);
      margin:5px 0 0;
      font-size:12px;
    }

    .page-header {
      margin-bottom:18px;
    }

    .page-header h1 {
      font-size:20px;
    }

    .icon-button,
    .plus-small {
      width:44px;
      height:44px;
      border:1px solid var(--border);
      border-radius:14px;
      background:rgba(255,255,255,.06);
      color:white;
    }

    .back-button {
      width:42px;
      height:42px;
      border:0;
      background:transparent;
      color:white;
      font-size:38px;
      line-height:1;
    }

    .search-box {
      min-height:50px;
      display:flex;
      align-items:center;
      padding:0 13px;
      margin-bottom:20px;
      border:1px solid var(--border);
      border-radius:15px;
      background:rgba(13,13,23,.88);
    }

    .search-box span {
      color:#aaa;
      font-size:22px;
    }

    .search-box input {
      width:100%;
      min-width:0;
      border:0;
      background:transparent;
      color:white;
      padding:0 10px;
      font-size:13px;
    }

    .search-box input::placeholder {
      color:#6f6f82;
    }

    .section-title {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      margin:22px 0 12px;
    }

    .section-title button {
      border:0;
      background:transparent;
      color:#d45dff;
      font-size:10px;
      font-weight:800;
    }

    .categories {
      display:flex;
      gap:8px;
      overflow-x:auto;
      scrollbar-width:none;
      padding-bottom:3px;
    }

    .categories::-webkit-scrollbar {
      display:none;
    }

    .category {
      flex-shrink:0;
      border:1px solid var(--border);
      border-radius:20px;
      padding:9px 13px;
      color:#ddd;
      background:rgba(18,18,31,.9);
      font-size:10px;
    }

    .category.active {
      background:var(--gradient);
      border-color:transparent;
      color:white;
    }

    .plan-grid {
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:10px;
    }

    .plan-card {
      height:195px;
      overflow:hidden;
      position:relative;
      border-radius:var(--radius);
      border:1px solid rgba(255,255,255,.12);
      background-size:cover;
      background-position:center;
    }

    .plan-card::after,
    .interest-card::after {
      content:"";
      position:absolute;
      inset:0;
      background:linear-gradient(
        transparent 20%,
        rgba(0,0,0,.92)
      );
    }

    .plan-top,
    .card-content {
      position:absolute;
      z-index:2;
    }

    .plan-top {
      top:10px;
      left:10px;
    }

    .card-content {
      left:11px;
      right:11px;
      bottom:11px;
    }

    .card-content h3 {
      font-size:13px;
      margin-bottom:7px;
    }

    .card-content p,
    .card-content small {
      display:block;
      color:#ddd;
      font-size:8px;
      margin:4px 0;
    }

    .distance,
    .badge {
      display:inline-block;
      border-radius:10px;
      padding:5px 8px;
      font-size:8px;
      font-weight:700;
    }

    .distance {
      background:rgba(0,60,40,.88);
      border:1px solid rgba(40,255,160,.2);
    }

    .distance.pink {
      background:rgba(100,15,70,.88);
    }

    .badge.green {
      background:rgba(7,61,41,.75);
      color:#43ed9a;
    }

    .badge.pink {
      background:rgba(77,16,67,.75);
      color:#ff62d0;
    }

    .badge.yellow {
      background:rgba(70,58,9,.75);
      color:#f5db59;
    }

    .image-running {
      background-image:url("https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80");
    }

    .image-gym {
      background-image:url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80");
    }

    .image-football {
      background-image:url("https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80");
    }

    .image-cycling {
      background-image:url("https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80");
    }

    .image-yoga {
      background-image:url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80");
    }

    .image-cross {
      background-image:url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80");
    }

    .image-padel {
      background-image:url("https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=900&q=80");
    }

    .image-cinema {
      background-image:url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80");
    }

    .image-music {
      background-image:url("https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=80");
    }

    .people-row {
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:9px;
    }

    .person-card {
      padding:12px;
      border:1px solid var(--border);
      border-radius:var(--radius);
      background:linear-gradient(
        145deg,
        rgba(27,27,46,.96),
        rgba(14,14,25,.96)
      );
    }

    .avatar {
      width:46px;
      height:46px;
      border-radius:50%;
      background-size:cover;
      background-position:center;
      border:2px solid var(--primary);
    }

    .avatar-laura {
      background-image:url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80");
    }

    .avatar-marc {
      background-image:url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80");
    }

    .avatar-sofia {
      background-image:url("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80");
    }

    .avatar-alex {
      background-image:url("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80");
    }

    .person-card strong {
      display:block;
      margin-top:8px;
      font-size:11px;
    }

    .person-card span,
    .person-card small {
      display:block;
      margin-top:4px;
      color:var(--muted);
      font-size:8px;
    }

    .connect-button,
    .main-button {
      border:0;
      color:white;
      background:var(--gradient);
      font-weight:800;
    }

    .connect-button {
      margin-top:9px;
      padding:7px 10px;
      border-radius:9px;
      font-size:8px;
    }

    .message-preview,
    .big-plan-card,
    .small-plan,
    .settings-list,
    .profile-section,
    .stats {
      border:1px solid var(--border);
      background:var(--panel);
      box-shadow:0 10px 30px rgba(0,0,0,.15);
    }

    .message-preview {
      display:flex;
      align-items:center;
      gap:10px;
      padding:12px;
      border-radius:15px;
      cursor:pointer;
    }

    .message-preview > div:nth-child(2) {
      flex:1;
    }

    .message-preview p {
      color:var(--muted);
      font-size:9px;
      margin:4px 0 0;
    }

    .message-time {
      color:var(--muted);
      font-size:8px;
    }

    .tabs {
      display:flex;
      gap:4px;
      padding:4px;
      margin-bottom:15px;
      border:1px solid var(--border);
      border-radius:14px;
      background:rgba(13,13,23,.9);
    }

    .tab {
      flex:1;
      border:0;
      border-radius:10px;
      padding:9px 4px;
      background:transparent;
      color:#888;
      font-size:9px;
      font-weight:700;
    }

    .tab.active {
      color:white;
      background:var(--gradient);
    }

    .big-plan-card {
      overflow:hidden;
      margin-bottom:12px;
      border-radius:var(--radius);
    }

    .big-plan-image {
      height:170px;
      background-size:cover;
      background-position:center;
    }

    .big-plan-info {
      padding:14px;
    }

    .big-plan-info h3 {
      margin:9px 0;
      font-size:16px;
    }

    .big-plan-info p {
      color:var(--muted);
      font-size:9px;
      margin:5px 0;
    }

    .small-plan {
      display:flex;
      align-items:center;
      gap:10px;
      padding:8px;
      margin-bottom:8px;
      border-radius:14px;
    }

    .small-plan-image {
      width:62px;
      height:62px;
      flex-shrink:0;
      border-radius:11px;
      background-size:cover;
      background-position:center;
    }

    .small-plan > div:nth-child(2) {
      flex:1;
      min-width:0;
    }

    .small-plan h3 {
      font-size:10px;
      margin-bottom:5px;
    }

    .small-plan p,
    .small-plan small {
      display:block;
      color:var(--muted);
      font-size:8px;
      margin:3px 0;
    }

    #createPlanForm label {
      display:block;
      color:#bdbdcc;
      font-size:10px;
      margin-bottom:14px;
    }

    #createPlanForm input,
    #createPlanForm textarea,
    .form-input {
      width:100%;
      display:block;
      margin-top:7px;
      padding:13px;
      border:1px solid var(--border);
      border-radius:13px;
      background:#0d0d17;
      color:white;
    }

    #createPlanForm textarea {
      min-height:105px;
      resize:none;
    }

    .upload-box {
      min-height:165px;
      display:flex!important;
      align-items:center;
      justify-content:center;
      text-align:center;
      border:1px dashed var(--primary);
      border-radius:15px;
      background:#0b0b13;
      cursor:pointer;
      overflow:hidden;
    }

    .upload-box input {
      display:none!important;
    }

    #imagePreview {
      width:100%;
      min-height:165px;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      gap:7px;
    }

    .upload-icon {
      font-size:34px;
      color:var(--secondary);
    }

    .settings-list {
      overflow:hidden;
      border-radius:15px;
    }

    .setting-row {
      width:100%;
      min-height:56px;
      display:flex;
      align-items:center;
      gap:10px;
      padding:0 12px;
      border:0;
      border-bottom:1px solid var(--border);
      background:transparent;
      color:white;
      text-align:left;
    }

    .setting-row:last-child {
      border-bottom:0;
    }

    .setting-row strong {
      font-size:10px;
    }

    .setting-value {
      margin-left:auto;
      color:#777;
      font-size:9px;
    }

    .quantity {
      margin-left:auto;
      display:flex;
      align-items:center;
      gap:10px;
    }

    .quantity button {
      width:28px;
      height:28px;
      border:1px solid var(--border);
      border-radius:8px;
      background:#181822;
      color:white;
    }

    .main-button {
      width:100%;
      height:51px;
      margin-top:18px;
      border-radius:26px;
      box-shadow:0 12px 30px color-mix(in srgb,var(--primary) 30%,transparent);
    }

    .active-people {
      display:flex;
      justify-content:space-between;
      gap:8px;
      text-align:center;
    }

    .active-people > div {
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:5px;
    }

    .large-avatar {
      width:57px;
      height:57px;
      border-radius:50%;
      background-size:cover;
      background-position:center;
      border:2px solid var(--primary);
    }

    .active-people strong {
      font-size:9px;
    }

    .active-people small {
      color:var(--muted);
      font-size:7px;
    }

    .interest-grid {
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:9px;
    }

    .interest-card {
      height:105px;
      position:relative;
      overflow:hidden;
      display:flex;
      flex-direction:column;
      justify-content:flex-end;
      padding:11px;
      border-radius:15px;
      background-size:cover;
      background-position:center;
    }

    .interest-card strong,
    .interest-card span {
      position:relative;
      z-index:2;
    }

    .interest-card strong {
      font-size:11px;
    }

    .interest-card span {
      margin-top:3px;
      color:#ccc;
      font-size:8px;
    }

    .chat-item {
      display:flex;
      align-items:center;
      gap:10px;
      padding:14px 3px;
      border-bottom:1px solid var(--border);
    }

    .chat-item > div:nth-child(2) {
      flex:1;
      min-width:0;
    }

    .chat-item strong {
      font-size:11px;
    }

    .chat-item p {
      color:#858593;
      font-size:8px;
      margin:5px 0 0;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }

    .chat-right {
      text-align:right;
    }

    .chat-right small {
      color:var(--muted);
      font-size:8px;
    }

    .profile-card {
      overflow:hidden;
      text-align:center;
      padding-bottom:18px;
      border:1px solid var(--border);
      border-radius:18px;
      background:#0c0c15;
    }

    .profile-cover {
      height:140px;
      display:flex;
      align-items:flex-end;
      justify-content:center;
      background:
        radial-gradient(circle at 20% 30%,#ff1d95,transparent 28%),
        radial-gradient(circle at 80% 40%,#8a20ff,transparent 35%),
        radial-gradient(circle at 50% 100%,#354dff,transparent 35%),
        linear-gradient(135deg,#32103d,#10101e);
    }

    .profile-avatar {
      width:94px;
      height:94px;
      transform:translateY(48px);
      border:3px solid white;
      border-radius:50%;
      background:url("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80") center/cover;
      box-shadow:0 0 0 5px rgba(181,42,255,.3);
    }

    .profile-card h2 {
      margin-top:58px;
      margin-bottom:5px;
    }

    .profile-card p {
      color:var(--muted);
      font-size:10px;
      margin:5px;
    }

    .edit-profile {
      margin-top:10px;
      padding:8px 14px;
      border:1px solid var(--border);
      border-radius:10px;
      background:#141420;
      color:white;
      font-size:9px;
    }

    .stats {
      display:grid;
      grid-template-columns:repeat(4,1fr);
      margin-top:9px;
      padding:14px 5px;
      border-radius:14px;
    }

    .stats div {
      text-align:center;
    }

    .stats strong,
    .stats span {
      display:block;
    }

    .stats strong {
      font-size:14px;
    }

    .stats span {
      margin-top:4px;
      color:#777;
      font-size:7px;
    }

    .profile-section {
      margin-top:10px;
      padding:13px;
      border-radius:15px;
    }

    .profile-section p {
      color:#b5b5c0;
      font-size:10px;
      line-height:1.6;
    }

    .profile-interests {
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:6px;
    }

    .profile-interests div {
      padding:10px 2px;
      border-radius:9px;
      background:#10101b;
      text-align:center;
      font-size:7px;
    }

    .profile-interests span {
      display:block;
      margin-bottom:4px;
      font-size:18px;
    }

    .bottom-nav {
      position:fixed;
      bottom:0;
      left:50%;
      transform:translateX(-50%);
      width:min(520px,100%);
      height:calc(var(--nav-height) + env(safe-area-inset-bottom));
      padding-bottom:env(safe-area-inset-bottom);
      display:flex;
      align-items:center;
      justify-content:space-around;
      z-index:100;
      background:rgba(8,8,15,.94);
      backdrop-filter:blur(22px);
      -webkit-backdrop-filter:blur(22px);
      border-top:1px solid var(--border);
    }

    .nav-item {
      width:65px;
      height:58px;
      border:0;
      background:transparent;
      color:#777;
    }

    .nav-item span {
      display:block;
      font-size:21px;
    }

    .nav-item small {
      display:block;
      margin-top:3px;
      font-size:7px;
    }

    .nav-item.active {
      color:var(--primary);
    }

    .main-plus {
      width:57px;
      height:57px;
      transform:translateY(-14px);
      border:0;
      border-radius:50%;
      background:var(--gradient);
      color:white;
      font-size:30px;
      box-shadow:0 0 35px color-mix(in srgb,var(--primary) 50%,transparent);
    }

    .overlay {
      position:fixed;
      inset:0;
      z-index:200;
      display:none;
      align-items:flex-end;
      justify-content:center;
      background:rgba(0,0,0,.68);
      backdrop-filter:blur(7px);
    }

    .overlay.open {
      display:flex;
    }

    .modal {
      width:min(520px,100%);
      max-height:88vh;
      overflow:auto;
      padding:20px;
      border:1px solid var(--border);
      border-radius:24px 24px 0 0;
      background:#10101c;
      box-shadow:0 -20px 70px rgba(0,0,0,.4);
      animation:modalIn .22s ease;
    }

    @keyframes modalIn {
      from {
        transform:translateY(100%);
      }

      to {
        transform:none;
      }
    }

    .modal-header {
      display:flex;
      align-items:center;
      justify-content:space-between;
      margin-bottom:16px;
    }

    .modal-header h2 {
      font-size:17px;
    }

    .close-modal {
      width:38px;
      height:38px;
      border:0;
      border-radius:11px;
      background:#20202d;
      color:white;
    }

    .theme-grid {
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:9px;
    }

    .theme-option {
      min-height:58px;
      display:flex;
      align-items:center;
      gap:10px;
      padding:10px;
      border:1px solid var(--border);
      border-radius:13px;
      background:#151522;
      color:white;
      text-align:left;
    }

    .theme-dot {
      width:28px;
      height:28px;
      flex-shrink:0;
      border-radius:50%;
      background:var(--gradient);
    }

    .theme-option strong {
      font-size:10px;
    }

    .theme-option small {
      display:block;
      margin-top:3px;
      color:var(--muted);
      font-size:7px;
    }

    .toast {
      position:fixed;
      left:50%;
      bottom:95px;
      z-index:300;
      width:calc(100% - 36px);
      max-width:440px;
      padding:13px 16px;
      transform:translate(-50%,20px);
      opacity:0;
      pointer-events:none;
      border:1px solid var(--border);
      border-radius:14px;
      background:rgba(25,25,40,.97);
      color:white;
      text-align:center;
      font-size:11px;
      transition:.25s;
    }

    .toast.show {
      opacity:1;
      transform:translate(-50%,0);
    }

    .empty {
      padding:35px 15px;
      color:var(--muted);
      text-align:center;
      font-size:11px;
    }

    .empty strong {
      display:block;
      margin-bottom:6px;
      color:white;
      font-size:14px;
    }

    .danger {
      color:var(--danger)!important;
    }

    .setting-switch {
      margin-left:auto;
      width:40px;
      height:23px;
      position:relative;
      border:0;
      border-radius:20px;
      background:#333344;
    }

    .setting-switch::after {
      content:"";
      position:absolute;
      top:3px;
      left:3px;
      width:17px;
      height:17px;
      border-radius:50%;
      background:white;
      transition:.2s;
    }

    .setting-switch.active {
      background:var(--primary);
    }

    .setting-switch.active::after {
      left:20px;
    }

    @media (min-width:700px) {
      body {
        padding:30px;
      }

      #app {
        min-height:calc(100vh - 60px);
        border-radius:26px;
        box-shadow:0 0 100px color-mix(in srgb,var(--primary) 18%,transparent);
      }

      .bottom-nav {
        bottom:30px;
        border-radius:0 0 26px 26px;
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

      <button class="icon-button" id="notificationButton">🔔</button>
    </header>

    <div class="search-box">
      <span>⌕</span>
      <input id="homeSearch" placeholder="Buscar en NEXO...">
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
          <small>👥 Intermedio</small>
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
        <button class="connect-button">Conectar</button>
      </article>

      <article class="person-card">
        <div class="avatar avatar-marc"></div>
        <strong>Marc · 27</strong>
        <span>💪 Gym · ⚽ Fútbol</span>
        <small>📍 3 km</small>
        <button class="connect-button">Conectar</button>
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

      <button class="back-button" data-screen="home">‹</button>

      <h1>Planes</h1>

      <button class="plus-small" data-screen="create">+</button>

    </header>

    <div class="tabs">
      <button class="tab active">Descubrir</button>
      <button class="tab">Mis planes</button>
      <button class="tab">Creados</button>
    </div>

    <div class="search-box">
      <span>⌕</span>
      <input id="planSearch" placeholder="Buscar planes...">
    </div>

    <div id="plansList">

      <article class="big-plan-card searchable-plan" data-name="futbol deporte">

        <div class="big-plan-image image-football"></div>

        <div class="big-plan-info">

          <span class="badge green">6 plazas</span>

          <h3>Partido de fútbol</h3>

          <p>📍 Camp Municipal · Sábado 18:00</p>
          <p>⚽ Fútbol · Intermedio</p>

          <button class="main-button join-plan" style="height:42px;margin-top:10px">
            Unirme al plan
          </button>

        </div>

      </article>


      <article class="big-plan-card searchable-plan" data-name="bicicleta ciclismo">

        <div class="big-plan-image image-cycling"></div>

        <div class="big-plan-info">

          <span class="badge yellow">5 km · Medio</span>

          <h3>Ruta en bicicleta</h3>

          <p>📍 Ruta de Salou · Domingo 09:00</p>
          <p>🚴 Ciclismo · Medio</p>

          <button class="main-button join-plan" style="height:42px;margin-top:10px">
            Unirme al plan
          </button>

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

      <button class="back-button" data-screen="plans">‹</button>

      <h1>Crear plan</h1>

      <span></span>

    </header>

    <form id="createPlanForm">

      <label class="upload-box">

        <input type="file" id="planImage" accept="image/png,image/jpeg,image/webp">

        <div id="imagePreview">

          <span class="upload-icon">▧</span>

          <strong>Añadir imagen</strong>

          <small>JPG, PNG, WEBP · Máx 5MB</small>

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
          maxlength="500"
          placeholder="Describe tu plan..."
        ></textarea>
      </label>


      <div class="settings-list">

        <button type="button" class="setting-row plan-setting">
          <span>🏃</span>
          <strong>Categoría</strong>
          <span class="setting-value">Deporte ›</span>
        </button>

        <button type="button" class="setting-row plan-setting">
          <span>◈</span>
          <strong>Nivel</strong>
          <span class="setting-value">Todos ›</span>
        </button>

        <button type="button" class="setting-row plan-setting">
          <span>📅</span>
          <strong>Fecha</strong>
          <span class="setting-value">Seleccionar ›</span>
        </button>

        <button type="button" class="setting-row plan-setting">
          <span>◷</span>
          <strong>Hora</strong>
          <span class="setting-value">Seleccionar ›</span>
        </button>

        <button type="button" class="setting-row plan-setting">
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
        🚀 Publicar plan
      </button>

    </form>

  </section>


  <!-- ================= CONECTA ================= -->

  <section class="screen" id="screen-connect">

    <header class="page-header">

      <h1>Conecta</h1>

      <button class="icon-button" id="connectFilters">
        ☷
      </button>

    </header>


    <div class="search-box">

      <span>⌕</span>

      <input
        id="connectSearch"
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

      <button class="icon-button" id="newChat">
        ✎
      </button>

    </header>


    <div class="search-box">

      <span>⌕</span>

      <input
        id="chatSearch"
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

      <button class="icon-button" id="settingsButton">
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

      <button class="edit-profile">
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
        <span>Conexiones</span>
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


  <!-- ================= AJUSTES ================= -->

  <section class="screen" id="screen-settings">

    <header class="page-header">

      <button class="back-button" data-screen="profile">‹</button>

      <h1>Ajustes</h1>

      <span></span>

    </header>


    <div class="section-title">
      <h2>Apariencia</h2>
    </div>

    <div class="settings-list">

      <button class="setting-row" id="openThemes">
        <span>🎨</span>
        <strong>Tema de NEXO</strong>
        <span class="setting-value" id="currentTheme">Purple ›</span>
      </button>

      <button class="setting-row" id="darkModeSetting">
        <span>🌙</span>
        <strong>Modo oscuro</strong>
        <button class="setting-switch active" type="button"></button>
      </button>

      <button class="setting-row" id="animationsSetting">
        <span>✨</span>
        <strong>Animaciones</strong>
        <button class="setting-switch active" type="button"></button>
      </button>

    </div>


    <div class="section-title">
      <h2>Notificaciones</h2>
    </div>

    <div class="settings-list">

      <button class="setting-row toggle-row">
        <span>🔔</span>
        <strong>Notificaciones</strong>
        <button class="setting-switch active" type="button"></button>
      </button>

      <button class="setting-row toggle-row">
        <span>💬</span>
        <strong>Nuevos mensajes</strong>
        <button class="setting-switch active" type="button"></button>
      </button>

      <button class="setting-row toggle-row">
        <span>🤝</span>
        <strong>Nuevas conexiones</strong>
        <button class="setting-switch active" type="button"></button>
      </button>

      <button class="setting-row toggle-row">
        <span>📅</span>
        <strong>Recordatorios</strong>
        <button class="setting-switch active" type="button"></button>
      </button>

    </div>


    <div class="section-title">
      <h2>Privacidad</h2>
    </div>

    <div class="settings-list">

      <button class="setting-row">
        <span>📍</span>
        <strong>Ubicación</strong>
        <span class="setting-value">Aproximada ›</span>
      </button>

      <button class="setting-row">
        <span>👤</span>
        <strong>Perfil</strong>
        <span class="setting-value">Público ›</span>
      </button>

      <button class="setting-row">
        <span>🟢</span>
        <strong>Estado activo</strong>
        <span class="setting-value">Visible ›</span>
      </button>

    </div>


    <div class="section-title">
      <h2>Cuenta</h2>
    </div>

    <div class="settings-list">

      <button class="setting-row" id="editAccount">
        <span>👤</span>
        <strong>Editar perfil</strong>
        <span class="setting-value">›</span>
      </button>

      <button class="setting-row" id="changePassword">
        <span>🔐</span>
        <strong>Seguridad y contraseña</strong>
        <span class="setting-value">›</span>
      </button>

      <button class="setting-row danger" id="logoutButton">
        <span>🚪</span>
        <strong>Cerrar sesión</strong>
        <span class="setting-value">›</span>
      </button>

    </div>

  </section>


  <!-- ================= NAVEGACIÓN ================= -->

  <nav class="bottom-nav">

    <button class="nav-item active" data-screen="home">
      <span>⌂</span>
      <small>Inicio</small>
    </button>

    <button class="nav-item" data-screen="connect">
      <span>⌕</span>
      <small>Conecta</small>
    </button>

    <button class="main-plus" data-screen="create">
      +
    </button>

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


<!-- ================= MODAL TEMAS ================= -->

<div class="overlay" id="themeModal">

  <div class="modal">

    <div class="modal-header">

      <h2>Elige tu estilo NEXO</h2>

      <button class="close-modal" data-close-modal>
        ✕
      </button>

    </div>

    <div class="theme-grid">

      <button class="theme-option" data-theme-choice="purple">
        <span class="theme-dot"></span>
        <span>
          <strong>Purple</strong>
          <small>NEXO original</small>
        </span>
      </button>

      <button class="theme-option" data-theme-choice="pink">
        <span class="theme-dot"></span>
        <span>
          <strong>Pink</strong>
          <small>Rosa intenso</small>
        </span>
      </button>

      <button class="theme-option" data-theme-choice="blue">
        <span class="theme-dot"></span>
        <span>
          <strong>Blue</strong>
          <small>Azul eléctrico</small>
        </span>
      </button>

      <button class="theme-option" data-theme-choice="cyan">
        <span class="theme-dot"></span>
        <span>
          <strong>Cyan</strong>
          <small>Cian tecnológico</small>
        </span>
      </button>

      <button class="theme-option" data-theme-choice="green">
        <span class="theme-dot"></span>
        <span>
          <strong>Green</strong>
          <small>Verde energía</small>
        </span>
      </button>

      <button class="theme-option" data-theme-choice="red">
        <span class="theme-dot"></span>
        <span>
          <strong>Red</strong>
          <small>Rojo intenso</small>
        </span>
      </button>

      <button class="theme-option" data-theme-choice="gold">
        <span class="theme-dot"></span>
        <span>
          <strong>Gold</strong>
          <small>Dorado premium</small>
        </span>
      </button>

      <button class="theme-option" data-theme-choice="sunset">
        <span class="theme-dot"></span>
        <span>
          <strong>Sunset</strong>
          <small>Atardecer</small>
        </span>
      </button>

      <button class="theme-option" data-theme-choice="mono">
        <span class="theme-dot"></span>
        <span>
          <strong>Mono</strong>
          <small>Minimalista</small>
        </span>
      </button>

    </div>

  </div>

</div>


<div class="toast" id="toast"></div>


<script>

  /* =====================================================
     NEXO V2 — MOTOR PRINCIPAL
     ===================================================== */

  const state = {
    currentScreen: "home",
    places: Number(localStorage.getItem("nexoPlaces") || 6),
    theme: localStorage.getItem("nexoTheme") || "purple",
    animations: localStorage.getItem("nexoAnimations") !== "false"
  };


  /* ================= ELEMENTOS ================= */

  const screens =
    document.querySelectorAll(".screen");

  const navItems =
    document.querySelectorAll(".nav-item");

  const navigationButtons =
    document.querySelectorAll("[data-screen]");


  /* ================= NAVEGACIÓN ================= */

  function navigateTo(screenName) {

    const target =
      document.getElementById("screen-" + screenName);

    if (!target) return;

    screens.forEach(screen => {
      screen.classList.remove("active");
    });

    target.classList.add("active");

    state.currentScreen = screenName;

    navItems.forEach(item => {

      item.classList.toggle(
        "active",
        item.dataset.screen === screenName
      );

    });

    window.scrollTo({
      top:0,
      behavior:state.animations ? "smooth" : "auto"
    });

    history.replaceState(
      null,
      "",
      "#" + screenName
    );
  }


  navigationButtons.forEach(button => {

    button.addEventListener("click", event => {

      if (
        event.target.closest(".quantity") ||
        event.target.closest(".setting-switch")
      ) {
        return;
      }

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
      },2500);
  }


  /* ================= TEMA ================= */

  function applyTheme(theme) {

    state.theme = theme;

    document.documentElement.dataset.theme =
      theme === "purple" ? "" : theme;

    localStorage.setItem(
      "nexoTheme",
      theme
    );

    const names = {
      purple:"Purple",
      pink:"Pink",
      blue:"Blue",
      cyan:"Cyan",
      green:"Green",
      red:"Red",
      gold:"Gold",
      sunset:"Sunset",
      mono:"Mono"
    };

    const current =
      document.getElementById("currentTheme");

    if (current) {
      current.textContent =
        (names[theme] || "Purple") + " ›";
    }

    const meta =
      document.querySelector(
        'meta[name="theme-color"]'
      );

    const colors = {
      purple:"#8b35ff",
      pink:"#ff168c",
      blue:"#354dff",
      cyan:"#00d9ff",
      green:"#20e59a",
      red:"#ff304f",
      gold:"#ffd447",
      sunset:"#ff5c35",
      mono:"#ffffff"
    };

    if (meta) {
      meta.setAttribute(
        "content",
        colors[theme] || colors.purple
      );
    }
  }


  applyTheme(state.theme);


  /* ================= MODAL ================= */

  const themeModal =
    document.getElementById("themeModal");


  document
    .getElementById("openThemes")
    ?.addEventListener("click", () => {

      themeModal.classList.add("open");

    });


  document
    .querySelectorAll("[data-close-modal]")
    .forEach(button => {

      button.addEventListener("click", () => {

        themeModal.classList.remove("open");

      });

    });


  themeModal?.addEventListener("click", event => {

    if (event.target === themeModal) {
      themeModal.classList.remove("open");
    }

  });


  document
    .querySelectorAll("[data-theme-choice]")
    .forEach(button => {

      button.addEventListener("click", () => {

        applyTheme(
          button.dataset.themeChoice
        );

        themeModal.classList.remove("open");

        showToast(
          "🎨 Tema cambiado"
        );

      });

    });


  /* ================= CATEGORÍAS ================= */

  document
    .querySelectorAll(".category")
    .forEach(category => {

      category.addEventListener("click", () => {

        document
          .querySelectorAll(".category")
          .forEach(item =>
            item.classList.remove("active")
          );

        category.classList.add("active");

        showToast(
          "Explorando " +
          category.textContent.trim()
        );

      });

    });


  /* ================= CONEXIONES ================= */

  document
    .querySelectorAll(".connect-button")
    .forEach(button => {

      button.addEventListener("click", () => {

        const connected =
          button.dataset.connected === "true";

        if (connected) {

          button.dataset.connected = "false";

          button.textContent =
            "Conectar";

          showToast(
            "Conexión cancelada"
          );

        } else {

          button.dataset.connected = "true";

          button.textContent =
            "Conectado ✓";

          showToast(
            "🤝 Solicitud enviada"
          );

        }

      });

    });


  /* ================= BUSCAR PLANES ================= */

  document
    .getElementById("planSearch")
    ?.addEventListener("input", event => {

      const text =
        event.target.value
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
            !text || name.includes(text)
              ? ""
              : "none";

        });

    });


  /* ================= BUSCAR DESDE INICIO ================= */

  document
    .getElementById("homeSearch")
    ?.addEventListener("keydown", event => {

      if (event.key !== "Enter") return;

      const text =
        event.target.value.trim();

      if (!text) return;

      navigateTo("plans");

      const search =
        document.getElementById("planSearch");

      search.value = text;

      search.dispatchEvent(
        new Event("input")
      );

    });


  /* ================= PLAZAS ================= */

  const placesElement =
    document.getElementById("places");

  function updatePlaces() {

    if (placesElement) {
      placesElement.textContent =
        state.places;
    }

    localStorage.setItem(
      "nexoPlaces",
      state.places
    );

  }


  document
    .getElementById("minus")
    ?.addEventListener("click", () => {

      if (state.places > 1) {
        state.places--;
        updatePlaces();
      }

    });


  document
    .getElementById("plus")
    ?.addEventListener("click", () => {

      if (state.places < 50) {
        state.places++;
        updatePlaces();
      }

    });


  updatePlaces();


  /* ================= IMAGEN ================= */

  document
    .getElementById("planImage")
    ?.addEventListener("change", event => {

      const file =
        event.target.files[0];

      if (!file) return;

      if (!file.type.startsWith("image/")) {

        showToast(
          "Selecciona una imagen válida."
        );

        event.target.value = "";

        return;
      }

      if (file.size > 5 * 1024 * 1024) {

        showToast(
          "La imagen supera los 5 MB."
        );

        event.target.value = "";

        return;
      }

      const reader =
        new FileReader();

      reader.onload = loadEvent => {

        document
          .getElementById("imagePreview")
          .innerHTML = `

            <img
              src="${loadEvent.target.result}"
              alt="Vista previa"
              style="
                width:100%;
                height:165px;
                object-fit:cover;
                border-radius:14px;
              "
            >

          `;

      };

      reader.readAsDataURL(file);

    });


  /* ================= CREAR PLAN ================= */

  document
    .getElementById("createPlanForm")
    ?.addEventListener("submit", event => {

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

        id:Date.now(),

        title,

        description,

        places:state.places,

        createdAt:
          new Date().toISOString()

      };


      const savedPlans =
        JSON.parse(
          localStorage.getItem(
            "nexoPlans"
          ) || "[]"
        );


      savedPlans.push(plan);


      localStorage.setItem(
        "nexoPlans",
        JSON.stringify(savedPlans)
      );


      showToast(
        "🎉 Plan publicado correctamente"
      );


      event.target.reset();

      state.places = 6;

      updatePlaces();


      document
        .getElementById("imagePreview")
        .innerHTML = `

          <span class="upload-icon">▧</span>

          <strong>Añadir imagen</strong>

          <small>
            JPG, PNG, WEBP · Máx 5MB
          </small>

        `;


      setTimeout(() => {
        navigateTo("plans");
      },500);

    });


  /* ================= AJUSTES PLAN ================= */

  document
    .querySelectorAll(".plan-setting")
    .forEach(row => {

      row.addEventListener("click", () => {

        const value =
          row.querySelector(
            ".setting-value"
          );

        if (!value) return;

        value.textContent =
          value.textContent.includes("✓")
            ? value.textContent
            : "Seleccionado ✓";

        showToast(
          "Configuración actualizada"
        );

      });

    });


  /* ================= TABS ================= */

  document
    .querySelectorAll(".tab")
    .forEach(tab => {

      tab.addEventListener("click", () => {

        document
          .querySelectorAll(".tab")
          .forEach(item =>
            item.classList.remove("active")
          );

        tab.classList.add("active");

        showToast(
          tab.textContent.trim()
        );

      });

    });


  /* ================= PERSONAS ================= */

  document
    .getElementById("connectSearch")
    ?.addEventListener("input", event => {

      const text =
        event.target.value
          .toLowerCase()
          .trim();

      document
        .querySelectorAll(
          "#screen-connect .active-people > div"
        )
        .forEach(person => {

          const content =
            person.textContent.toLowerCase();

          person.style.display =
            !text || content.includes(text)
              ? "flex"
              : "none";

        });

    });


  /* ================= CHATS ================= */

  document
    .getElementById("chatSearch")
    ?.addEventListener("input", event => {

      const text =
        event.target.value
          .toLowerCase()
          .trim();

      document
        .querySelectorAll(".chat-item")
        .forEach(chat => {

          const content =
            chat.textContent.toLowerCase();

          chat.style.display =
            !text || content.includes(text)
              ? "flex"
              : "none";

        });

    });


  /* ================= BOTONES ================= */

  document
    .getElementById("notificationButton")
    ?.addEventListener("click", () => {

      showToast(
        "🔔 No tienes notificaciones nuevas"
      );

    });


  document
    .getElementById("connectFilters")
    ?.addEventListener("click", () => {

      showToast(
        "☷ Filtros de personas preparados"
      );

    });


  document
    .getElementById("newChat")
    ?.addEventListener("click", () => {

      showToast(
        "✉️ Nueva conversación"
      );

    });


  document
    .querySelectorAll(".join-plan")
    .forEach(button => {

      button.addEventListener("click", () => {

        const joined =
          button.dataset.joined === "true";

        button.dataset.joined =
          joined ? "false" : "true";

        button.textContent =
          joined
            ? "Unirme al plan"
            : "✓ Unido al plan";

        showToast(
          joined
            ? "Has salido del plan"
            : "🎉 Te has unido al plan"
        );

      });

    });


  /* ================= PERFIL / AJUSTES ================= */

  document
    .getElementById("settingsButton")
    ?.addEventListener("click", () => {

      navigateTo("settings");

    });


  document
    .getElementById("editAccount")
    ?.addEventListener("click", () => {

      showToast(
        "✏️ Editor de perfil"
      );

    });


  document
    .querySelector(".edit-profile")
    ?.addEventListener("click", () => {

      showToast(
        "✏️ Editor de perfil"
      );

    });


  document
    .getElementById("changePassword")
    ?.addEventListener("click", () => {

      showToast(
        "🔐 Seguridad preparada para conectar con la cuenta"
      );

    });


  document
    .getElementById("logoutButton")
    ?.addEventListener("click", () => {

      if (
        confirm(
          "¿Quieres cerrar la sesión de NEXO?"
        )
      ) {

        showToast(
          "Sesión cerrada"
        );

      }

    });


  /* ================= SWITCHES ================= */

  document
    .querySelectorAll(".setting-switch")
    .forEach(switchButton => {

      switchButton.addEventListener("click", event => {

        event.stopPropagation();

        switchButton.classList.toggle("active");

      });

    });


  /* ================= ANIMACIONES ================= */

  document
    .getElementById("animationsSetting")
    ?.addEventListener("click", event => {

      const button =
        event.currentTarget
          .querySelector(".setting-switch");

      state.animations =
        !state.animations;

      button.classList.toggle(
        "active",
        state.animations
      );

      localStorage.setItem(
        "nexoAnimations",
        state.animations
      );

      showToast(
        state.animations
          ? "✨ Animaciones activadas"
          : "Animaciones desactivadas"
      );

    });


  /* ================= SERVICE WORKER ================= */

  if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

      navigator.serviceWorker
        .register("./sw.js")
        .then(() => {

          console.log(
            "NEXO V2: Service Worker activo."
          );

        })
        .catch(error => {

          console.error(
            "NEXO PWA:",
            error
          );

        });

    });

  }


  /* ================= ARRANQUE ================= */

  const initialScreen =
    location.hash
      ? location.hash.substring(1)
      : "home";

  navigateTo(
    document.getElementById(
      "screen-" + initialScreen
    )
      ? initialScreen
      : "home"
  );


  console.log(
    "NEXO V2 iniciado correctamente."
  );

</script>

</body>
</html>