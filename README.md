<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#8b35ff">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="NEXO">
<meta name="mobile-web-app-capable" content="yes">

<title>NEXO</title>

<link rel="manifest" href="manifest.json">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

<style>
:root{
  --bg:#070711;
  --bg2:#0d0d19;
  --panel:#121221;
  --panel2:#19192d;
  --border:rgba(255,255,255,.10);
  --primary:#8b35ff;
  --secondary:#ff168c;
  --accent:#354dff;
  --success:#20e59a;
  --warning:#ffd447;
  --danger:#ff4d67;
  --text:#fff;
  --muted:#9292a8;
  --gradient:linear-gradient(135deg,var(--secondary),var(--primary) 52%,var(--accent));
  --radius:18px;
  --nav:76px;
  --shadow:0 18px 50px rgba(0,0,0,.28);
}

[data-theme="pink"]{
 --primary:#ff168c;--secondary:#ff58ba;--accent:#9b35ff;
}
[data-theme="purple"]{
 --primary:#8b35ff;--secondary:#c026ff;--accent:#354dff;
}
[data-theme="blue"]{
 --primary:#354dff;--secondary:#0077ff;--accent:#00d9ff;
}
[data-theme="cyan"]{
 --primary:#00d9ff;--secondary:#0077ff;--accent:#354dff;
}
[data-theme="green"]{
 --primary:#20e59a;--secondary:#00b879;--accent:#00d9ff;
}
[data-theme="red"]{
 --primary:#ff304f;--secondary:#ff168c;--accent:#8b35ff;
}
[data-theme="gold"]{
 --primary:#ffd447;--secondary:#ff9f1c;--accent:#ff5c35;
}
[data-theme="sunset"]{
 --primary:#ff5c35;--secondary:#ff168c;--accent:#8b35ff;
}
[data-theme="mono"]{
 --primary:#fff;--secondary:#aaa;--accent:#555;
}
[data-theme="ocean"]{
 --primary:#00d9ff;--secondary:#354dff;--accent:#7c3aed;
}
[data-theme="lime"]{
 --primary:#b7ff3c;--secondary:#20e59a;--accent:#00d9ff;
}

*{
 box-sizing:border-box;
 -webkit-tap-highlight-color:transparent;
}

html{
 scroll-behavior:smooth;
}

body{
 margin:0;
 min-height:100vh;
 background:#000;
 color:var(--text);
 font-family:Inter,Arial,sans-serif;
}

button,input,textarea,select{
 font:inherit;
}

button{
 cursor:pointer;
}

button:active{
 transform:scale(.97);
}

input,textarea,select{
 outline:none;
}

#app{
 width:100%;
 max-width:520px;
 min-height:100vh;
 margin:auto;
 position:relative;
 overflow:hidden;
 background:
 radial-gradient(circle at 85% 0%,color-mix(in srgb,var(--primary) 22%,transparent),transparent 34%),
 radial-gradient(circle at 0% 35%,color-mix(in srgb,var(--secondary) 13%,transparent),transparent 31%),
 var(--bg);
}

.screen{
 display:none;
 min-height:100vh;
 padding:
 calc(20px + env(safe-area-inset-top))
 17px
 calc(105px + env(safe-area-inset-bottom));
 overflow-y:auto;
}

.screen.active{
 display:block;
 animation:screenIn .22s ease;
}

@keyframes screenIn{
 from{opacity:0;transform:translateY(8px)}
 to{opacity:1;transform:translateY(0)}
}

.hidden{
 display:none!important;
}

.logo{
 font-size:32px;
 font-weight:900;
 letter-spacing:-2px;
 background:var(--gradient);
 -webkit-background-clip:text;
 background-clip:text;
 color:transparent;
}

.top-header,.page-header{
 display:flex;
 align-items:center;
 justify-content:space-between;
 gap:12px;
}

.top-header{
 margin-bottom:20px;
}

.top-header h1{
 font-size:20px;
 margin:5px 0 0;
}

.top-header p{
 margin:5px 0 0;
 color:var(--muted);
 font-size:11px;
}

.page-header{
 margin-bottom:18px;
}

.page-header h1{
 font-size:21px;
 margin:0;
}

.icon-button,.plus-small{
 width:44px;
 height:44px;
 border-radius:14px;
 border:1px solid var(--border);
 color:white;
 background:rgba(255,255,255,.06);
}

.back-button{
 width:42px;
 height:42px;
 border:0;
 background:transparent;
 color:white;
 font-size:38px;
 line-height:1;
}

.search-box{
 min-height:49px;
 display:flex;
 align-items:center;
 gap:8px;
 padding:0 13px;
 margin-bottom:18px;
 border:1px solid var(--border);
 border-radius:15px;
 background:rgba(15,15,27,.88);
 box-shadow:inset 0 1px rgba(255,255,255,.03);
}

.search-box span{
 color:#aaaabe;
 font-size:22px;
}

.search-box input{
 flex:1;
 min-width:0;
 border:0;
 background:transparent;
 color:white;
 font-size:13px;
}

.search-box input::placeholder{
 color:#707087;
}

.section-title{
 display:flex;
 align-items:center;
 justify-content:space-between;
 gap:10px;
 margin:21px 0 11px;
}

.section-title h2{
 margin:0;
 font-size:14px;
}

.section-title button{
 border:0;
 background:transparent;
 color:var(--primary);
 font-size:10px;
 font-weight:700;
}

.categories{
 display:flex;
 gap:8px;
 overflow-x:auto;
 scrollbar-width:none;
 padding-bottom:4px;
}

.categories::-webkit-scrollbar{
 display:none;
}

.category{
 flex-shrink:0;
 border:1px solid var(--border);
 background:rgba(18,18,31,.9);
 color:#ddd;
 border-radius:22px;
 padding:9px 13px;
 font-size:10px;
}

.category.active{
 background:var(--gradient);
 border-color:transparent;
 color:white;
 box-shadow:0 8px 25px color-mix(in srgb,var(--primary) 30%,transparent);
}

.plan-grid{
 display:grid;
 grid-template-columns:1fr 1fr;
 gap:10px;
}

.plan-card{
 height:195px;
 position:relative;
 overflow:hidden;
 border-radius:var(--radius);
 background-size:cover;
 background-position:center;
 border:1px solid rgba(255,255,255,.12);
 box-shadow:var(--shadow);
}

.plan-card:after,
.interest-card:after{
 content:"";
 position:absolute;
 inset:0;
 background:linear-gradient(transparent 10%,rgba(0,0,0,.9));
}

.plan-top,.card-content{
 position:absolute;
 z-index:2;
}

.plan-top{
 top:10px;
 left:10px;
}

.card-content{
 left:11px;
 right:11px;
 bottom:11px;
}

.card-content h3{
 margin:0 0 6px;
 font-size:13px;
}

.card-content p,.card-content small{
 display:block;
 margin:4px 0;
 font-size:8px;
 color:#dddde6;
}

.distance{
 display:inline-block;
 padding:5px 8px;
 border-radius:10px;
 font-size:8px;
 background:rgba(0,70,40,.86);
 border:1px solid rgba(40,255,160,.25);
}

.distance.pink{
 background:rgba(100,15,70,.86);
 border-color:rgba(255,70,190,.25);
}

.image-running{
 background-image:url("https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80");
}

.image-gym{
 background-image:url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80");
}

.image-football{
 background-image:url("https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80");
}

.image-cycling{
 background-image:url("https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80");
}

.image-yoga{
 background-image:url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80");
}

.image-cross{
 background-image:url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80");
}

.image-padel{
 background-image:url("https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=900&q=80");
}

.image-cinema{
 background-image:url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80");
}

.image-music{
 background-image:url("https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=80");
}

.people-row{
 display:grid;
 grid-template-columns:1fr 1fr;
 gap:9px;
}

.person-card{
 padding:12px;
 border:1px solid var(--border);
 border-radius:var(--radius);
 background:linear-gradient(145deg,rgba(27,27,46,.95),rgba(14,14,25,.95));
}

.avatar{
 width:45px;
 height:45px;
 border-radius:50%;
 background-size:cover;
 background-position:center;
 border:2px solid var(--primary);
 box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 12%,transparent);
}

.avatar-laura{
 background-image:url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80");
}

.avatar-marc{
 background-image:url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80");
}

.avatar-sofia{
 background-image:url("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80");
}

.avatar-alex{
 background-image:url("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80");
}

.person-card strong{
 display:block;
 margin-top:8px;
 font-size:11px;
}

.person-card span,.person-card small{
 display:block;
 color:var(--muted);
 font-size:8px;
 margin-top:4px;
}

.connect-button{
 margin-top:9px;
 padding:7px 10px;
 border:0;
 border-radius:9px;
 background:var(--gradient);
 color:white;
 font-size:8px;
 font-weight:700;
}

.message-preview{
 display:flex;
 align-items:center;
 gap:10px;
 padding:12px;
 border:1px solid var(--border);
 border-radius:15px;
 background:var(--panel);
 cursor:pointer;
}

.message-preview p{
 margin:4px 0 0;
 color:var(--muted);
 font-size:9px;
}

.message-time{
 margin-left:auto;
 color:var(--muted);
 font-size:8px;
}

.tabs{
 display:flex;
 padding:4px;
 margin-bottom:15px;
 border:1px solid var(--border);
 border-radius:14px;
 background:rgba(13,13,23,.9);
}

.tab{
 flex:1;
 border:0;
 background:transparent;
 color:#888;
 padding:9px 4px;
 border-radius:10px;
 font-size:9px;
 font-weight:700;
}

.tab.active{
 background:var(--gradient);
 color:white;
}

.big-plan-card{
 overflow:hidden;
 margin-bottom:12px;
 border:1px solid var(--border);
 border-radius:var(--radius);
 background:var(--panel);
 box-shadow:var(--shadow);
}

.big-plan-image{
 height:170px;
 background-size:cover;
 background-position:center;
}

.big-plan-info{
 padding:14px;
}

.big-plan-info h3{
 margin:9px 0;
 font-size:16px;
}

.big-plan-info p{
 margin:5px 0;
 color:var(--muted);
 font-size:9px;
}

.badge{
 display:inline-block;
 padding:5px 8px;
 border-radius:9px;
 font-size:8px;
 font-weight:700;
}

.badge.green{
 background:rgba(7,61,41,.75);
 color:#43ed9a;
}

.badge.pink{
 background:rgba(77,16,67,.75);
 color:#ff62d0;
}

.badge.yellow{
 background:rgba(70,58,9,.75);
 color:#f5db59;
}

.small-plan{
 display:flex;
 align-items:center;
 gap:10px;
 margin-bottom:8px;
 padding:8px;
 border:1px solid var(--border);
 border-radius:14px;
 background:var(--panel);
}

.small-plan-image{
 width:62px;
 height:62px;
 flex-shrink:0;
 border-radius:11px;
 background-size:cover;
 background-position:center;
}

.small-plan>div:nth-child(2){
 flex:1;
 min-width:0;
}

.small-plan h3{
 margin:0 0 5px;
 font-size:10px;
}

.small-plan p,.small-plan small{
 display:block;
 margin:3px 0;
 color:var(--muted);
 font-size:8px;
}

#createPlanForm label{
 display:block;
 margin-bottom:14px;
 color:#bdbdcc;
 font-size:10px;
}

#createPlanForm input,
#createPlanForm textarea,
#createPlanForm select{
 display:block;
 width:100%;
 margin-top:7px;
 padding:13px;
 border:1px solid var(--border);
 border-radius:13px;
 background:rgba(13,13,23,.92);
 color:white;
}

#createPlanForm textarea{
 height:105px;
 resize:none;
}

#createPlanForm input:focus,
#createPlanForm textarea:focus,
#createPlanForm select:focus{
 border-color:var(--primary);
 box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 12%,transparent);
}

.upload-box{
 min-height:160px;
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

.upload-box input{
 display:none!important;
}

#imagePreview{
 display:flex;
 flex-direction:column;
 align-items:center;
 gap:7px;
}

.upload-icon{
 font-size:34px;
 color:var(--secondary);
}

#imagePreview small{
 color:#777;
}

.settings-list{
 margin-top:4px;
 overflow:hidden;
 border:1px solid var(--border);
 border-radius:15px;
 background:var(--panel);
}

.setting-row{
 width:100%;
 min-height:55px;
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

.setting-row:last-child{
 border-bottom:0;
}

.setting-row strong{
 font-size:10px;
}

.setting-value{
 margin-left:auto;
 color:#777;
 font-size:9px;
}

.quantity{
 margin-left:auto;
 display:flex;
 align-items:center;
 gap:10px;
}

.quantity button{
 width:27px;
 height:27px;
 border:1px solid var(--border);
 border-radius:8px;
 background:#181822;
 color:white;
}

.main-button{
 width:100%;
 height:51px;
 margin-top:18px;
 border:0;
 border-radius:25px;
 background:var(--gradient);
 color:white;
 font-weight:800;
 box-shadow:0 14px 35px color-mix(in srgb,var(--primary) 24%,transparent);
}

.active-people{
 display:grid;
 grid-template-columns:repeat(4,1fr);
 gap:8px;
 margin-bottom:20px;
 text-align:center;
}

.active-people>div{
 display:flex;
 flex-direction:column;
 align-items:center;
 gap:5px;
 min-width:0;
}

.active-people strong{
 font-size:9px;
}

.active-people small{
 color:var(--muted);
 font-size:7px;
}

.large-avatar{
 width:58px;
 height:58px;
 border-radius:50%;
 background-size:cover;
 background-position:center;
 border:2px solid var(--primary);
}

.interest-grid{
 display:grid;
 grid-template-columns:1fr 1fr;
 gap:9px;
}

.interest-card{
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

.interest-card strong,.interest-card span{
 position:relative;
 z-index:2;
}

.interest-card strong{
 font-size:11px;
}

.interest-card span{
 margin-top:3px;
 color:#ccc;
 font-size:8px;
}

.chat-item{
 display:flex;
 align-items:center;
 gap:10px;
 padding:14px 3px;
 border-bottom:1px solid var(--border);
}

.chat-item>div:nth-child(2){
 flex:1;
 min-width:0;
}

.chat-item strong{
 font-size:11px;
}

.chat-item p{
 margin:5px 0 0;
 color:#858593;
 font-size:8px;
 white-space:nowrap;
 overflow:hidden;
 text-overflow:ellipsis;
}

.chat-right{
 text-align:right;
}

.chat-right small{
 color:var(--muted);
 font-size:8px;
}

.profile-card{
 overflow:hidden;
 padding-bottom:18px;
 border:1px solid var(--border);
 border-radius:18px;
 background:rgba(12,12,21,.95);
 text-align:center;
}

.profile-cover{
 height:145px;
 display:flex;
 align-items:flex-end;
 justify-content:center;
 background:
 radial-gradient(circle at 20% 30%,var(--secondary),transparent 28%),
 radial-gradient(circle at 80% 40%,var(--primary),transparent 35%),
 radial-gradient(circle at 50% 100%,var(--accent),transparent 35%),
 linear-gradient(135deg,#32103d,#10101e);
}

.profile-avatar{
 width:94px;
 height:94px;
 transform:translateY(48px);
 border:3px solid white;
 border-radius:50%;
 background:url("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80") center/cover;
 box-shadow:0 0 0 5px color-mix(in srgb,var(--primary) 30%,transparent);
}

.profile-card h2{
 margin-top:58px;
 margin-bottom:5px;
}

.profile-card p{
 margin:5px;
 color:var(--muted);
 font-size:10px;
}

.edit-profile{
 margin-top:10px;
 padding:8px 14px;
 border:1px solid var(--border);
 border-radius:10px;
 background:#141420;
 color:white;
 font-size:9px;
}

.stats{
 display:grid;
 grid-template-columns:repeat(4,1fr);
 margin-top:9px;
 padding:14px 5px;
 border:1px solid var(--border);
 border-radius:14px;
 background:var(--panel);
}

.stats div{
 text-align:center;
}

.stats strong,.stats span{
 display:block;
}

.stats strong{
 font-size:14px;
}

.stats span{
 margin-top:4px;
 color:#777;
 font-size:7px;
}

.profile-section{
 margin-top:10px;
 padding:13px;
 border:1px solid var(--border);
 border-radius:15px;
 background:var(--panel);
}

.profile-section p{
 color:#b5b5c0;
 font-size:10px;
 line-height:1.6;
}

.profile-interests{
 display:grid;
 grid-template-columns:repeat(4,1fr);
 gap:6px;
}

.profile-interests div{
 padding:10px 2px;
 border-radius:9px;
 background:#10101b;
 text-align:center;
 font-size:7px;
}

.profile-interests span{
 display:block;
 margin-bottom:4px;
 font-size:18px;
}

.settings-card{
 margin-bottom:10px;
 padding:4px;
 border:1px solid var(--border);
 border-radius:17px;
 background:var(--panel);
}

.settings-row{
 min-height:55px;
 display:flex;
 align-items:center;
 gap:12px;
 padding:8px 10px;
 border-bottom:1px solid var(--border);
}

.settings-row:last-child{
 border-bottom:0;
}

.settings-row .setting-icon{
 width:34px;
 height:34px;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-shrink:0;
 border-radius:10px;
 background:rgba(255,255,255,.06);
 font-size:16px;
}

.settings-row .setting-main{
 flex:1;
 min-width:0;
}

.settings-row strong{
 display:block;
 font-size:11px;
}

.settings-row small{
 display:block;
 margin-top:3px;
 color:var(--muted);
 font-size:8px;
}

.settings-row .arrow{
 color:#777;
}

.toggle{
 width:43px;
 height:25px;
 padding:3px;
 border:0;
 border-radius:20px;
 background:#343444;
}

.toggle i{
 display:block;
 width:19px;
 height:19px;
 border-radius:50%;
 background:white;
 transition:.2s;
}

.toggle.on{
 background:var(--primary);
}

.toggle.on i{
 transform:translateX(18px);
}

.theme-grid{
 display:grid;
 grid-template-columns:repeat(4,1fr);
 gap:8px;
 padding:12px;
}

.theme{
 height:54px;
 position:relative;
 border:2px solid transparent;
 border-radius:13px;
 cursor:pointer;
}

.theme.selected{
 border-color:white;
}

.theme span{
 position:absolute;
 left:7px;
 bottom:6px;
 color:white;
 font-size:7px;
 font-weight:800;
 text-shadow:0 1px 4px #000;
}

.theme-purple{background:linear-gradient(135deg,#ff168c,#8b35ff,#354dff)}
.theme-pink{background:linear-gradient(135deg,#ff168c,#ff58ba,#9b35ff)}
.theme-blue{background:linear-gradient(135deg,#354dff,#0077ff,#00d9ff)}
.theme-cyan{background:linear-gradient(135deg,#00d9ff,#0077ff,#354dff)}
.theme-green{background:linear-gradient(135deg,#20e59a,#00b879,#00d9ff)}
.theme-red{background:linear-gradient(135deg,#ff304f,#ff168c,#8b35ff)}
.theme-gold{background:linear-gradient(135deg,#ffd447,#ff9f1c,#ff5c35)}
.theme-sunset{background:linear-gradient(135deg,#ff5c35,#ff168c,#8b35ff)}
.theme-mono{background:linear-gradient(135deg,#fff,#888,#222)}
.theme-ocean{background:linear-gradient(135deg,#00d9ff,#354dff,#7c3aed)}
.theme-lime{background:linear-gradient(135deg,#b7ff3c,#20e59a,#00d9ff)}

.empty{
 padding:30px 15px;
 border:1px dashed var(--border);
 border-radius:16px;
 color:var(--muted);
 text-align:center;
 font-size:11px;
}

.modal{
 position:fixed;
 inset:0;
 z-index:250;
 display:none;
 align-items:flex-end;
 justify-content:center;
 background:rgba(0,0,0,.68);
 backdrop-filter:blur(8px);
}

.modal.show{
 display:flex;
}

.modal-box{
 width:min(520px,100%);
 max-height:88vh;
 overflow-y:auto;
 padding:18px;
 border:1px solid var(--border);
 border-radius:24px 24px 0 0;
 background:#11111e;
 box-shadow:0 -20px 80px rgba(0,0,0,.45);
 animation:modalIn .22s ease;
}

@keyframes modalIn{
 from{transform:translateY(100%)}
 to{transform:translateY(0)}
}

.modal-head{
 display:flex;
 align-items:center;
 justify-content:space-between;
 margin-bottom:16px;
}

.modal-head h2{
 margin:0;
 font-size:18px;
}

.close{
 width:36px;
 height:36px;
 border:0;
 border-radius:10px;
 background:#222232;
 color:white;
 font-size:20px;
}

.form-group{
 margin-bottom:13px;
}

.form-group label{
 display:block;
 margin-bottom:6px;
 color:#bbb;
 font-size:9px;
}

.form-group input,
.form-group textarea,
.form-group select{
 width:100%;
 padding:12px;
 border:1px solid var(--border);
 border-radius:11px;
 background:#0b0b14;
 color:white;
}

.form-group textarea{
 min-height:90px;
 resize:vertical;
}

.modal-actions{
 display:flex;
 gap:8px;
 margin-top:15px;
}

.secondary-button{
 flex:1;
 height:45px;
 border:1px solid var(--border);
 border-radius:22px;
 background:#20202e;
 color:white;
}

.primary-button{
 flex:1;
 height:45px;
 border:0;
 border-radius:22px;
 background:var(--gradient);
 color:white;
 font-weight:800;
}

.bottom-nav{
 position:fixed;
 left:50%;
 bottom:0;
 transform:translateX(-50%);
 width:min(520px,100%);
 height:calc(var(--nav) + env(safe-area-inset-bottom));
 padding-bottom:env(safe-area-inset-bottom);
 display:flex;
 align-items:center;
 justify-content:space-around;
 z-index:100;
 border-top:1px solid rgba(255,255,255,.1);
 background:rgba(8,8,15,.95);
 backdrop-filter:blur(22px);
 -webkit-backdrop-filter:blur(22px);
}

.nav-item{
 width:65px;
 height:58px;
 border:0;
 background:transparent;
 color:#777;
}

.nav-item span{
 display:block;
 font-size:21px;
}

.nav-item small{
 display:block;
 margin-top:3px;
 font-size:7px;
}

.nav-item.active{
 color:var(--primary);
}

.main-plus{
 width:56px;
 height:56px;
 transform:translateY(-14px);
 border:0;
 border-radius:50%;
 background:var(--gradient);
 color:white;
 font-size:30px;
 box-shadow:0 0 35px color-mix(in srgb,var(--primary) 50%,transparent);
}

#toast{
 position:fixed;
 left:50%;
 bottom:94px;
 transform:translateX(-50%) translateY(20px);
 width:calc(100% - 34px);
 max-width:450px;
 padding:13px 16px;
 border:1px solid rgba(255,255,255,.12);
 border-radius:14px;
 background:rgba(25,25,40,.97);
 box-shadow:0 15px 40px rgba(0,0,0,.35);
 color:white;
 font-size:11px;
 text-align:center;
 opacity:0;
 pointer-events:none;
 transition:.25s;
 z-index:400;
}

#toast.show{
 opacity:1;
 transform:translateX(-50%) translateY(0);
}

.notification-dot{
 position:absolute;
 top:5px;
 right:5px;
 width:7px;
 height:7px;
 border-radius:50%;
 background:var(--secondary);
}

.relative{
 position:relative;
}

.online{
 width:9px;
 height:9px;
 border:2px solid #111;
 border-radius:50%;
 background:var(--success);
 position:absolute;
 right:0;
 bottom:1px;
}

.avatar-wrap{
 position:relative;
 width:max-content;
}

@media(min-width:700px){
 body{
  padding:30px;
 }

 #app{
  min-height:calc(100vh - 60px);
  border-radius:26px;
  box-shadow:0 0 100px color-mix(in srgb,var(--primary) 18%,transparent);
 }

 .bottom-nav{
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
<h1 id="welcomeName">Hola 👋</h1>
<p>¿Qué planes tienes hoy?</p>
</div>

<button class="icon-button relative" id="notificationButton" type="button">
🔔
<span class="notification-dot" id="notificationDot"></span>
</button>
</header>

<div class="search-box">
<span>⌕</span>
<input id="homeSearch" type="search" placeholder="Buscar en NEXO...">
</div>

<div class="section-title">
<h2>Explora NEXO</h2>
<button id="allCategoriesButton" type="button">Ver todo</button>
</div>

<div class="categories" id="categories">
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
<button data-screen="plans" type="button">Ver todos</button>
</div>

<div class="plan-grid" id="homePlans">

<article class="plan-card image-running" data-category="Deporte" data-name="running">
<div class="plan-top"><span class="distance">● 6 km · Fácil</span></div>
<div class="card-content">
<h3>🏃 Running al atardecer</h3>
<p>📍 Tarragona · Domingo 10:00</p>
<small>👥 4/8 participantes</small>
</div>
</article>

<article class="plan-card image-gym" data-category="Deporte" data-name="gym pecho triceps">
<div class="plan-top"><span class="distance pink">● 5 plazas</span></div>
<div class="card-content">
<h3>💪 Pecho y tríceps</h3>
<p>📍 Fitness Park · Hoy 19:00</p>
<small>Intermedio</small>
</div>
</article>

</div>

<div class="section-title">
<h2>Personas para ti</h2>
<button data-screen="connect" type="button">Ver más</button>
</div>

<div class="people-row">

<article class="person-card">
<div class="avatar-wrap">
<div class="avatar avatar-laura"></div>
<span class="online"></span>
</div>
<strong>Laura · 24</strong>
<span>🏃 Running · 🎵 Música</span>
<small>📍 2 km</small>
<button class="connect-button" data-person="Laura" type="button">Conectar</button>
</article>

<article class="person-card">
<div class="avatar-wrap">
<div class="avatar avatar-marc"></div>
<span class="online"></span>
</div>
<strong>Marc · 27</strong>
<span>🏋️ Gym · ⚽ Fútbol</span>
<small>📍 3 km</small>
<button class="connect-button" data-person="Marc" type="button">Conectar</button>
</article>

</div>

<div class="section-title">
<h2>Mensajes recientes</h2>
<button data-screen="chats" type="button">Ver todos</button>
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

<div class="tabs" id="planTabs">
<button class="tab active" data-tab="discover" type="button">Descubrir</button>
<button class="tab" data-tab="mine" type="button">Mis planes</button>
<button class="tab" data-tab="created" type="button">Creados</button>
</div>

<div class="search-box">
<span>⌕</span>
<input id="planSearch" type="search" placeholder="Buscar planes...">
</div>

<div id="plansList">

<article class="big-plan-card searchable-plan" data-name="futbol deporte fútbol" data-owner="other">
<div class="big-plan-image image-football"></div>
<div class="big-plan-info">
<span class="badge green">6 plazas</span>
<h3>Partido de fútbol</h3>
<p>📍 Camp Municipal · Sábado 18:00</p>
<p>⚽ Fútbol · Intermedio</p>
</div>
</article>

<article class="big-plan-card searchable-plan" data-name="bicicleta ciclismo ruta" data-owner="other">
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

<article class="small-plan searchable-plan" data-name="yoga playa" data-owner="other">
<div class="small-plan-image image-yoga"></div>
<div>
<h3>Yoga en la playa</h3>
<p>📍 La Pineda · Hoy 08:00</p>
<small>🧘 Todos los niveles</small>
</div>
<span class="badge green">4 plazas</span>
</article>

<article class="small-plan searchable-plan" data-name="cross gimnasio" data-owner="other">
<div class="small-plan-image image-cross"></div>
<div>
<h3>Cross Training</h3>
<p>📍 Fitness Park · Mañana 18:30</p>
<small>🏋️ Intermedio</small>
</div>
<span class="badge pink">2 plazas</span>
</article>

<article class="small-plan searchable-plan" data-name="padel" data-owner="other">
<div class="small-plan-image image-padel"></div>
<div>
<h3>Pádel nocturno</h3>
<p>📍 Club Pádel · Viernes 21:00</p>
<small>🎾 Intermedio</small>
</div>
<span class="badge green">3 plazas</span>
</article>

</div>

<div id="createdPlans"></div>

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
<input type="file" id="planImage" accept="image/png,image/jpeg,image/webp">
<div id="imagePreview">
<span class="upload-icon">▧</span>
<strong>Añadir imagen</strong>
<small>JPG, PNG o WEBP · Máx. 5 MB</small>
</div>
</label>

<label>
Título del plan
<input id="title" required maxlength="70" placeholder="Ej: Running por la costa">
</label>

<label>
Descripción
<textarea id="description" maxlength="300" placeholder="Describe tu plan..."></textarea>
</label>

<label>
Categoría
<select id="planCategory">
<option>Deporte</option>
<option>Idiomas</option>
<option>Ocio</option>
<option>Música</option>
<option>Viajes</option>
<option>Comida</option>
<option>Otros</option>
</select>
</label>

<label>
Nivel
<select id="planLevel">
<option>Todos los niveles</option>
<option>Principiante</option>
<option>Intermedio</option>
<option>Avanzado</option>
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
<input id="planLocation" placeholder="Ej: Tarragona, La Pineda...">
</label>

<div class="settings-list">

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
🚀 Crear plan
</button>

</form>

</section>


<!-- ================= CONECTA ================= -->

<section class="screen" id="screen-connect">

<header class="page-header">
<h1>Conecta</h1>
<button class="icon-button" id="connectFilters" type="button">☷</button>
</header>

<div class="search-box">
<span>⌕</span>
<input id="connectSearch" type="search" placeholder="Buscar personas...">
</div>

<div class="section-title">
<h2>Personas activas cerca</h2>
</div>

<div class="active-people" id="activePeople">

<div data-name="laura">
<div class="avatar-wrap">
<div class="large-avatar avatar-laura"></div>
<span class="online"></span>
</div>
<strong>Laura</strong>
<small>24 · 2 km</small>
</div>

<div data-name="marc">
<div class="avatar-wrap">
<div class="large-avatar avatar-marc"></div>
<span class="online"></span>
</div>
<strong>Marc</strong>
<small>27 · 3 km</small>
</div>

<div data-name="sofia">
<div class="large-avatar avatar-sofia"></div>
<strong>Sofia</strong>
<small>24 · 4 km</small>
</div>

<div data-name="alex">
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
<button class="icon-button" id="newChat" type="button">✎</button>
</header>

<div class="search-box">
<span>⌕</span>
<input id="chatSearch" type="search" placeholder="Buscar chats...">
</div>

<div class="chat-list" id="chatList">

<div class="chat-item" data-name="laura">
<div class="avatar avatar-laura"></div>
<div>
<strong>Laura</strong>
<p>¡Genial! Entonces quedamos el domingo 👋</p>
</div>
<div class="chat-right"><small>10:30</small></div>
</div>

<div class="chat-item" data-name="marc">
<div class="avatar avatar-marc"></div>
<div>
<strong>Marc</strong>
<p>¿Entrenamos mañana? 💪</p>
</div>
<div class="chat-right"><small>Ayer</small></div>
</div>

</div>

<div id="emptyChats" class="empty hidden">
No tienes conversaciones que coincidan con la búsqueda.
</div>

</section>


<!-- ================= PERFIL ================= -->

<section class="screen" id="screen-profile">

<header class="page-header">
<h1>Mi perfil</h1>
<button class="icon-button" id="settingsButton" type="button">⚙</button>
</header>

<div class="profile-card">

<div class="profile-cover">
<div class="profile-avatar"></div>
</div>

<h2 id="profileName">Fernando ✓</h2>
<p id="profileUsername">@fernando.nexo</p>
<p id="profileLocation">📍 Tarragona</p>

<button class="edit-profile" id="editProfileButton" type="button">
✏️ Editar perfil
</button>

</div>

<div class="stats">

<div>
<strong id="statPlans">48</strong>
<span>Planes</span>
</div>

<div>
<strong id="statFriends">127</strong>
<span>Amigos</span>
</div>

<div>
<strong id="statGroups">32</strong>
<span>Grupos</span>
</div>

<div>
<strong id="statEvents">15</strong>
<span>Eventos</span>
</div>

</div>

<div class="profile-section">

<div class="section-title">
<h2>Sobre mí</h2>
</div>

<p id="profileBio">
Apasionado del deporte, la música y los buenos planes.
Siempre listo para nuevas aventuras 🚀
</p>

</div>

<div class="profile-section">

<div class="section-title">
<h2>Mis intereses</h2>
</div>

<div class="profile-interests">

<div><span>🏃</span>Running</div>
<div><span>💪</span>Gym</div>
<div><span>🎾</span>Pádel</div>
<div><span>🎵</span>Música</div>

</div>

</div>

</section>


<!-- ================= AJUSTES ================= -->

<section class="screen" id="screen-settings">

<header class="page-header">
<button class="back-button" data-screen="profile" type="button">‹</button>
<h1>Ajustes</h1>
<span></span>
</header>

<div class="settings-card">

<div class="settings-row" id="editSettingsProfile">
<div class="setting-icon">👤</div>
<div class="setting-main">
<strong>Editar perfil</strong>
<small>Nombre, descripción y ubicación</small>
</div>
<span class="arrow">›</span>
</div>

<div class="settings-row">
<div class="setting-icon">🔔</div>
<div class="setting-main">
<strong>Notificaciones</strong>
<small>Mensajes, conexiones y planes</small>
</div>
<button class="toggle on" data-setting="notifications" type="button"><i></i></button>
</div>

<div class="settings-row">
<div class="setting-icon">📍</div>
<div class="setting-main">
<strong>Ubicación</strong>
<small>Mostrar personas y planes cercanos</small>
</div>
<button class="toggle on" data-setting="location" type="button"><i></i></button>
</div>

<div class="settings-row">
<div class="setting-icon">🌙</div>
<div class="setting-main">
<strong>Modo oscuro</strong>
<small>Interfaz oscura de NEXO</small>
</div>
<button class="toggle on" data-setting="dark" type="button"><i></i></button>
</div>

</div>

<div class="section-title">
<h2>Personalización</h2>
</div>

<div class="settings-card">

<div class="settings-row">
<div class="setting-icon">🎨</div>
<div class="setting-main">
<strong>Color de NEXO</strong>
<small>Elige tu combinación favorita</small>
</div>
</div>

<div class="theme-grid" id="themeGrid">

<div class="theme theme-purple selected" data-theme-choice="purple"><span>Púrpura</span></div>
<div class="theme theme-pink" data-theme-choice="pink"><span>Rosa</span></div>
<div class="theme theme-blue" data-theme-choice="blue"><span>Azul</span></div>
<div class="theme theme-cyan" data-theme-choice="cyan"><span>Cian</span></div>
<div class="theme theme-green" data-theme-choice="green"><span>Verde</span></div>
<div class="theme theme-red" data-theme-choice="red"><span>Rojo</span></div>
<div class="theme theme-gold" data-theme-choice="gold"><span>Dorado</span></div>
<div class="theme theme-sunset" data-theme-choice="sunset"><span>Sunset</span></div>
<div class="theme theme-ocean" data-theme-choice="ocean"><span>Ocean</span></div>
<div class="theme theme-lime" data-theme-choice="lime"><span>Lime</span></div>
<div class="theme theme-mono" data-theme-choice="mono"><span>Mono</span></div>

</div>

</div>

<div class="settings-card">

<div class="settings-row" id="languageSetting">
<div class="setting-icon">🌎</div>
<div class="setting-main">
<strong>Idioma</strong>
<small>Español</small>
</div>
<span class="arrow">›</span>
</div>

<div class="settings-row" id="privacySetting">
<div class="setting-icon">🔒</div>
<div class="setting-main">
<strong>Privacidad</strong>
<small>Controla quién puede encontrarte</small>
</div>
<span class="arrow">›</span>
</div>

<div class="settings-row" id="helpSetting">
<div class="setting-icon">❓</div>
<div class="setting-main">
<strong>Ayuda y soporte</strong>
<small>Preguntas frecuentes y soporte</small>
</div>
<span class="arrow">›</span>
</div>

<div class="settings-row" id="aboutSetting">
<div class="setting-icon">ℹ️</div>
<div class="setting-main">
<strong>Sobre NEXO</strong>
<small>Información de la aplicación</small>
</div>
<span class="arrow">›</span>
</div>

</div>

<button class="main-button" id="resetApp" type="button">
Restablecer datos locales
</button>

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

<button class="main-plus" data-screen="create" type="button">+</button>

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


<!-- ================= TOAST ================= -->

<div id="toast"></div>


<!-- ================= MODAL PERFIL ================= -->

<div class="modal" id="profileModal">

<div class="modal-box">

<div class="modal-head">
<h2>Editar perfil</h2>
<button class="close" data-close="profileModal" type="button">×</button>
</div>

<div class="form-group">
<label>Nombre</label>
<input id="editName" maxlength="40">
</div>

<div class="form-group">
<label>Usuario</label>
<input id="editUsername" maxlength="40">
</div>

<div class="form-group">
<label>Ubicación</label>
<input id="editLocation" maxlength="60">
</div>

<div class="form-group">
<label>Sobre mí</label>
<textarea id="editBio" maxlength="300"></textarea>
</div>

<div class="modal-actions">
<button class="secondary-button" data-close="profileModal" type="button">Cancelar</button>
<button class="primary-button" id="saveProfile" type="button">Guardar</button>
</div>

</div>
</div>


<!-- ================= MODAL FILTROS ================= -->

<div class="modal" id="filtersModal">

<div class="modal-box">

<div class="modal-head">
<h2>Filtros</h2>
<button class="close" data-close="filtersModal" type="button">×</button>
</div>

<div class="form-group">
<label>Distancia máxima</label>
<select id="distanceFilter">
<option value="2">2 km</option>
<option value="5" selected>5 km</option>
<option value="10">10 km</option>
<option value="25">25 km</option>
<option value="50">50 km</option>
</select>
</div>

<div class="form-group">
<label>Interés</label>
<select id="interestFilter">
<option>Todos</option>
<option>Deporte</option>
<option>Idiomas</option>
<option>Ocio</option>
<option>Música</option>
<option>Viajes</option>
<option>Comida</option>
</select>
</div>

<div class="modal-actions">
<button class="secondary-button" data-close="filtersModal" type="button">Cancelar</button>
<button class="primary-button" id="applyFilters" type="button">Aplicar</button>
</div>

</div>
</div>


<!-- ================= MODAL NUEVO CHAT ================= -->

<div class="modal" id="chatModal">

<div class="modal-box">

<div class="modal-head">
<h2>Nueva conversación</h2>
<button class="close" data-close="chatModal" type="button">×</button>
</div>

<div class="form-group">
<label>Buscar persona</label>
<input id="newChatName" placeholder="Nombre...">
</div>

<div class="modal-actions">
<button class="secondary-button" data-close="chatModal" type="button">Cancelar</button>
<button class="primary-button" id="startChat" type="button">Iniciar chat</button>
</div>

</div>
</div>


<script>
"use strict";

/* =========================================================
   NEXO — MOTOR PRINCIPAL
========================================================= */

const NEXO = {
  version:"2.0.0",
  storage:{
    profile:"nexoProfile",
    plans:"nexoPlans",
    settings:"nexoSettings",
    theme:"nexoTheme",
    connections:"nexoConnections",
    chats:"nexoChats"
  }
};

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);


/* =========================================================
   DATOS
========================================================= */

const defaultProfile = {
  name:"Fernando",
  username:"fernando.nexo",
  location:"Tarragona",
  bio:"Apasionado del deporte, la música y los buenos planes. Siempre listo para nuevas aventuras 🚀"
};

const defaultSettings = {
  notifications:true,
  location:true,
  dark:true
};


/* =========================================================
   STORAGE SEGURO
========================================================= */

function getStorage(key,fallback){
  try{
    const value=localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  }catch{
    return fallback;
  }
}

function setStorage(key,value){
  try{
    localStorage.setItem(key,JSON.stringify(value));
  }catch{
    showToast("No se pudo guardar el cambio");
  }
}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function showToast(message){
  const toast=$("#toast");
  if(!toast)return;

  toast.textContent=message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer=setTimeout(()=>{
    toast.classList.remove("show");
  },2600);
}


/* =========================================================
   NAVEGACIÓN
========================================================= */

const screens=$$(".screen");
const navItems=$$(".nav-item");
const navigationButtons=$("[data-screen]") ? $$("[data-screen]") : [];

function navigateTo(name){

  screens.forEach(screen=>{
    screen.classList.toggle(
      "active",
      screen.id==="screen-"+name
    );
  });

  navItems.forEach(item=>{
    item.classList.toggle(
      "active",
      item.dataset.screen===name
    );
  });

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

  if(name==="plans"){
    renderCreatedPlans();
  }

  if(name==="profile"){
    renderProfile();
  }
}

navigationButtons.forEach(button=>{
  button.addEventListener("click",()=>{
    const screen=button.dataset.screen;
    if(screen)navigateTo(screen);
  });
});


/* =========================================================
   PERFIL
========================================================= */

let profile=getStorage(
  NEXO.storage.profile,
  defaultProfile
);

function renderProfile(){

  $("#welcomeName").textContent=
    "Hola "+profile.name+" 👋";

  $("#profileName").textContent=
    profile.name+" ✓";

  $("#profileUsername").textContent=
    "@"+profile.username.replace("@","");

  $("#profileLocation").textContent=
    "📍 "+profile.location;

  $("#profileBio").textContent=
    profile.bio;
}

renderProfile();


function openProfileEditor(){

  $("#editName").value=profile.name;
  $("#editUsername").value=profile.username;
  $("#editLocation").value=profile.location;
  $("#editBio").value=profile.bio;

  $("#profileModal").classList.add("show");
}

$("#editProfileButton")?.addEventListener(
  "click",
  openProfileEditor
);

$("#editSettingsProfile")?.addEventListener(
  "click",
  openProfileEditor
);

$("#saveProfile")?.addEventListener("click",()=>{

  const name=$("#editName").value.trim();

  if(!name){
    showToast("Escribe tu nombre");
    return;
  }

  profile={
    name,
    username:$("#editUsername").value.trim() || "fernando.nexo",
    location:$("#editLocation").value.trim() || "Tarragona",
    bio:$("#editBio").value.trim() || "¡Hola! Soy nuevo en NEXO."
  };

  setStorage(NEXO.storage.profile,profile);

  renderProfile();

  closeModal("profileModal");

  showToast("✅ Perfil actualizado");
});


/* =========================================================
   MODALES
========================================================= */

function closeModal(id){
  const modal=$("#"+id);
  if(modal)modal.classList.remove("show");
}

$$("[data-close]").forEach(button=>{
  button.addEventListener("click",()=>{
    closeModal(button.dataset.close);
  });
});

$$(".modal").forEach(modal=>{
  modal.addEventListener("click",event=>{
    if(event.target===modal){
      modal.classList.remove("show");
    }
  });
});


/* =========================================================
   CATEGORÍAS
========================================================= */

$$(".category").forEach(category=>{

  category.addEventListener("click",()=>{

    $$(".category").forEach(item=>
      item.classList.remove("active")
    );

    category.classList.add("active");

    const selected=category.dataset.category;

    if(selected==="todos"){
      $$("#homePlans .plan-card").forEach(card=>{
        card.style.display="";
      });
    }else{
      $$("#homePlans .plan-card").forEach(card=>{
        card.style.display=
          card.dataset.category===selected
          ? ""
          : "none";
      });
    }

    showToast("Explorando "+category.textContent.trim());
  });

});


/* =========================================================
   BÚSQUEDA HOME
========================================================= */

$("#homeSearch")?.addEventListener(
  "keydown",
  event=>{

    if(event.key!=="Enter")return;

    const value=event.target.value.trim();

    if(!value)return;

    navigateTo("plans");

    $("#planSearch").value=value;

    filterPlans(value);
  }
);


/* =========================================================
   BÚSQUEDA PLANES
========================================================= */

function filterPlans(value){

  const text=value.toLowerCase().trim();

  const cards=$$(".searchable-plan");

  let visible=0;

  cards.forEach(card=>{

    const name=(
      card.dataset.name+
      " "+
      card.textContent
    ).toLowerCase();

    const match=!text||name.includes(text);

    card.style.display=match?"":"none";

    if(match)visible++;
  });

  if(!visible && text){
    showToast("No encontramos planes para esa búsqueda");
  }
}

$("#planSearch")?.addEventListener(
  "input",
  event=>filterPlans(event.target.value)
);


/* =========================================================
   TABS PLANES
========================================================= */

$$(".tab").forEach(tab=>{

  tab.addEventListener("click",()=>{

    $$(".tab").forEach(item=>
      item.classList.remove("active")
    );

    tab.classList.add("active");

    const type=tab.dataset.tab;

    const existing=$$(".searchable-plan");

    if(type==="discover"){
      existing.forEach(item=>item.style.display="");
      $("#createdPlans").style.display="";
      $("#plansList").style.display="";
    }

    if(type==="mine"){
      $("#plansList").style.display="none";
      $("#createdPlans").style.display="";
      renderCreatedPlans();
    }

    if(type==="created"){
      $("#plansList").style.display="none";
      $("#createdPlans").style.display="";
      renderCreatedPlans();
    }
  });

});


/* =========================================================
   CONEXIONES
========================================================= */

let connections=getStorage(
  NEXO.storage.connections,
  {}
);

$$(".connect-button").forEach(button=>{

  const person=button.dataset.person;

  if(connections[person]){
    button.textContent="Conectado ✓";
  }

  button.addEventListener("click",()=>{

    if(connections[person]){

      delete connections[person];

      button.textContent="Conectar";

      showToast("Conexión cancelada");

    }else{

      connections[person]=true;

      button.textContent="Conectado ✓";

      showToast("🤝 Conexión enviada a "+person);

    }

    setStorage(
      NEXO.storage.connections,
      connections
    );
  });

});


/* =========================================================
   BÚSQUEDA PERSONAS
========================================================= */

$("#connectSearch")?.addEventListener(
  "input",
  event=>{

    const text=event.target.value
      .toLowerCase()
      .trim();

    $$("#activePeople > div").forEach(person=>{

      const name=person.dataset.name || "";

      person.style.display=
        !text || name.includes(text)
        ? "flex"
        : "none";
    });
  }
);


/* =========================================================
   FILTROS
========================================================= */

$("#connectFilters")?.addEventListener(
  "click",
  ()=>{
    $("#filtersModal").classList.add("show");
  }
);

$("#applyFilters")?.addEventListener(
  "click",
  ()=>{
    closeModal("filtersModal");

    const distance=$("#distanceFilter").value;
    const interest=$("#interestFilter").value;

    showToast(
      "Filtros aplicados · "+
      distance+" km · "+
      interest
    );
  }
);


/* =========================================================
   CHATS
========================================================= */

let chats=getStorage(
  NEXO.storage.chats,
  []
);

$("#chatSearch")?.addEventListener(
  "input",
  event=>{

    const text=event.target.value
      .toLowerCase()
      .trim();

    let visible=0;

    $$(".chat-item").forEach(chat=>{

      const content=chat.textContent.toLowerCase();

      const match=!text||content.includes(text);

      chat.style.display=match?"flex":"none";

      if(match)visible++;
    });

    $("#emptyChats").classList.toggle(
      "hidden",
      visible!==0
    );
  }
);


$("#newChat")?.addEventListener(
  "click",
  ()=>{
    $("#newChatName").value="";
    $("#chatModal").classList.add("show");
  }
);

$("#startChat")?.addEventListener(
  "click",
  ()=>{

    const name=$("#newChatName").value.trim();

    if(!name){
      showToast("Escribe el nombre de una persona");
      return;
    }

    chats.push({
      id:Date.now(),
      name,
      message:"Nueva conversación",
      time:"Ahora"
    });

    setStorage(NEXO.storage.chats,chats);

    closeModal("chatModal");

    renderChats();

    navigateTo("chats");

    showToast("💬 Conversación creada");
  }
);

function renderChats(){

  const list=$("#chatList");

  chats.forEach(chat=>{

    const exists=
      list.querySelector(
        `[data-chat-id="${chat.id}"]`
      );

    if(exists)return;

    const row=document.createElement("div");

    row.className="chat-item";

    row.dataset.chatId=chat.id;

    row.innerHTML=`
      <div class="avatar avatar-alex"></div>
      <div>
        <strong>${escapeHTML(chat.name)}</strong>
        <p>${escapeHTML(chat.message)}</p>
      </div>
      <div class="chat-right">
        <small>${escapeHTML(chat.time)}</small>
      </div>
    `;

    row.addEventListener("click",()=>{
      showToast("💬 Chat con "+chat.name);
    });

    list.appendChild(row);
  });
}

renderChats();


/* =========================================================
   CREAR PLAN
========================================================= */

let places=6;

$("#minus")?.addEventListener("click",()=>{
  if(places>1){
    places--;
    $("#places").textContent=places;
  }
});

$("#plus")?.addEventListener("click",()=>{
  if(places<50){
    places++;
    $("#places").textContent=places;
  }
});


/* =========================================================
   IMAGEN DEL PLAN
========================================================= */

let uploadedImage="";

$("#planImage")?.addEventListener(
  "change",
  event=>{

    const file=event.target.files[0];

    if(!file)return;

    if(!file.type.startsWith("image/")){
      showToast("Selecciona una imagen válida");
      event.target.value="";
      return;
    }

    if(file.size>5*1024*1024){
      showToast("La imagen supera los 5 MB");
      event.target.value="";
      return;
    }

    const reader=new FileReader();

    reader.onload=e=>{

      uploadedImage=e.target.result;

      $("#imagePreview").innerHTML=`
        <img
          src="${uploadedImage}"
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


/* =========================================================
   CREAR PLAN — LOCAL
========================================================= */

let createdPlans=getStorage(
  NEXO.storage.plans,
  []
);

$("#createPlanForm")?.addEventListener(
  "submit",
  event=>{

    event.preventDefault();

    const title=$("#title").value.trim();

    if(!title){
      showToast("Escribe un título");
      return;
    }

    const plan={
      id:Date.now(),
      title,
      description:$("#description").value.trim(),
      category:$("#planCategory").value,
      level:$("#planLevel").value,
      date:$("#planDate").value,
      time:$("#planTime").value,
      location:$("#planLocation").value.trim(),
      places,
      image:uploadedImage,
      createdAt:new Date().toISOString()
    };

    createdPlans.unshift(plan);

    setStorage(
      NEXO.storage.plans,
      createdPlans
    );

    $("#createPlanForm").reset();

    places=6;
    $("#places").textContent="6";

    uploadedImage="";

    $("#imagePreview").innerHTML=`
      <span class="upload-icon">▧</span>
      <strong>Añadir imagen</strong>
      <small>JPG, PNG o WEBP · Máx. 5 MB</small>
    `;

    showToast("🎉 Plan creado correctamente");

    setTimeout(()=>{
      navigateTo("plans");
      renderCreatedPlans();
    },500);
  }
);


/* =========================================================
   MOSTRAR PLANES CREADOS
========================================================= */

function renderCreatedPlans(){

  const container=$("#createdPlans");

  if(!container)return;

  if(!createdPlans.length){

    container.innerHTML=`
      <div class="section-title">
        <h2>Mis planes</h2>
      </div>

      <div class="empty">
        <div style="font-size:32px;margin-bottom:8px">📅</div>
        Todavía no has creado ningún plan.
        <br><br>
        Pulsa <strong>+</strong> para crear el primero.
      </div>
    `;

    return;
  }

  container.innerHTML=`
    <div class="section-title">
      <h2>Mis planes</h2>
      <button type="button" id="deleteAllPlans">Borrar todos</button>
    </div>
  `;

  createdPlans.forEach(plan=>{

    const article=document.createElement("article");

    article.className="big-plan-card";

    const background=
      plan.image ||
      getCategoryImage(plan.category);

    article.innerHTML=`

      <div
        class="big-plan-image"
        style="
          background-image:url('${background}');
        "
      ></div>

      <div class="big-plan-info">

        <span class="badge green">
          ${plan.places} plazas
        </span>

        <h3>${escapeHTML(plan.title)}</h3>

        <p>📍 ${escapeHTML(plan.location || "Ubicación por confirmar")}</p>

        <p>
          ${escapeHTML(plan.category)}
          ·
          ${escapeHTML(plan.level)}
        </p>

        ${
          plan.date
          ? `<p>📅 ${escapeHTML(formatDate(plan.date))}${plan.time ? " · "+escapeHTML(plan.time) : ""}</p>`
          : ""
        }

        ${
          plan.description
          ? `<p>${escapeHTML(plan.description)}</p>`
          : ""
        }

        <button
          class="secondary-button delete-plan"
          data-id="${plan.id}"
          type="button"
          style="width:100%;margin-top:10px;height:38px"
        >
          🗑️ Eliminar plan
        </button>

      </div>
    `;

    container.appendChild(article);
  });

  $$(".delete-plan").forEach(button=>{

    button.addEventListener("click",()=>{

      const id=Number(button.dataset.id);

      createdPlans=
        createdPlans.filter(plan=>plan.id!==id);

      setStorage(
        NEXO.storage.plans,
        createdPlans
      );

      renderCreatedPlans();

      showToast("Plan eliminado");
    });
  });

  $("#deleteAllPlans")?.addEventListener(
    "click",
    ()=>{

      if(!createdPlans.length)return;

      if(!confirm("¿Eliminar todos tus planes?"))return;

      createdPlans=[];

      setStorage(
        NEXO.storage.plans,
        createdPlans
      );

      renderCreatedPlans();

      showToast("Todos los planes eliminados");
    }
  );
}

function getCategoryImage(category){

  const images={
    Deporte:"https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80",
    Idiomas:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    Ocio:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
    Música:"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=80",
    Viajes:"https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80",
    Comida:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
  };

  return images[category] || images.Deporte;
}


/* =========================================================
   TEMAS
========================================================= */

let currentTheme=
  localStorage.getItem(NEXO.storage.theme) || "purple";

function applyTheme(theme){

  currentTheme=theme;

  document.documentElement.dataset.theme=theme;

  localStorage.setItem(
    NEXO.storage.theme,
    theme
  );

  $$(".theme").forEach(item=>{
    item.classList.toggle(
      "selected",
      item.dataset.themeChoice===theme
    );
  });

  const meta=document.querySelector(
    'meta[name="theme-color"]'
  );

  if(meta){
    const colors={
      purple:"#8b35ff",
      pink:"#ff168c",
      blue:"#354dff",
      cyan:"#00d9ff",
      green:"#20e59a",
      red:"#ff304f",
      gold:"#ffd447",
      sunset:"#ff5c35",
      ocean:"#00d9ff",
      lime:"#b7ff3c",
      mono:"#ffffff"
    };

    meta.setAttribute(
      "content",
      colors[theme] || "#8b35ff"
    );
  }
}

applyTheme(currentTheme);

$$(".theme").forEach(theme=>{
  theme.addEventListener("click",()=>{
    applyTheme(theme.dataset.themeChoice);
    showToast("🎨 Tema cambiado");
  });
});


/* =========================================================
   AJUSTES
========================================================= */

let settings=getStorage(
  NEXO.storage.settings,
  defaultSettings
);

function updateToggle(button,state){

  button.classList.toggle("on",state);

  const icon=button.querySelector("i");

  if(icon){
    icon.style.transform=
      state ? "translateX(18px)" : "translateX(0)";
  }
}

$$(".toggle").forEach(button=>{

  const key=button.dataset.setting;

  if(key && settings[key]!==undefined){
    updateToggle(button,settings[key]);
  }

  button.addEventListener("click",()=>{

    const setting=button.dataset.setting;

    settings[setting]=!settings[setting];

    updateToggle(
      button,
      settings[setting]
    );

    setStorage(
      NEXO.storage.settings,
      settings
    );

    showToast(
      settings[setting]
      ? "Activado ✓"
      : "Desactivado"
    );
  });
});


$("#settingsButton")?.addEventListener(
  "click",
  ()=>{
    navigateTo("settings");
  }
);


/* =========================================================
   NOTIFICACIONES
========================================================= */

$("#notificationButton")?.addEventListener(
  "click",
  ()=>{

    $("#notificationDot").style.display="none";

    showToast(
      "🔔 No tienes notificaciones nuevas"
    );
  }
);


/* =========================================================
   AJUSTES EXTRA
========================================================= */

$("#languageSetting")?.addEventListener(
  "click",
  ()=>{
    showToast("🌎 Actualmente NEXO está en español");
  }
);

$("#privacySetting")?.addEventListener(
  "click",
  ()=>{
    showToast("🔒 Configuración de privacidad");
  }
);

$("#helpSetting")?.addEventListener(
  "click",
  ()=>{
    showToast("❓ Centro de ayuda de NEXO");
  }
);

$("#aboutSetting")?.addEventListener(
  "click",
  ()=>{
    showToast("NEXO · Versión "+NEXO.version);
  }
);


/* =========================================================
   RESTABLECER DATOS
========================================================= */

$("#resetApp")?.addEventListener(
  "click",
  ()=>{

    const confirmed=
      confirm(
        "¿Seguro que quieres borrar los datos locales de NEXO?"
      );

    if(!confirmed)return;

    Object.values(NEXO.storage).forEach(key=>{
      try{
        localStorage.removeItem(key);
      }catch{}
    });

    showToast(
      "Datos locales eliminados"
    );

    setTimeout(()=>{
      location.reload();
    },700);
  }
);


/* =========================================================
   SEGURIDAD DE TEXTO
========================================================= */

function escapeHTML(value){

  return String(value)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}


/* =========================================================
   FECHAS
========================================================= */

function formatDate(date){

  try{

    return new Date(
      date+"T00:00:00"
    ).toLocaleDateString(
      "es-ES",
      {
        day:"2-digit",
        month:"2-digit",
        year:"numeric"
      }
    );

  }catch{
    return date;
  }
}


/* =========================================================
   FECHA MÍNIMA
========================================================= */

const today=
  new Date()
    .toISOString()
    .split("T")[0];

if($("#planDate")){
  $("#planDate").min=today;
}


/* =========================================================
   SERVICE WORKER
========================================================= */

if("serviceWorker" in navigator){

  window.addEventListener(
    "load",
    ()=>{
      navigator.serviceWorker
        .register("./sw.js")
        .then(()=>{
          console.log(
            "NEXO PWA: Service Worker activo"
          );
        })
        .catch(error=>{
          console.log(
            "NEXO PWA:",
            error
          );
        });
    }
  );
}


/* =========================================================
   INICIO
========================================================= */

renderProfile();
renderCreatedPlans();

navigateTo("home");

console.log(
  "NEXO "+NEXO.version+" iniciado correctamente."
);

</script>

</body>
</html>