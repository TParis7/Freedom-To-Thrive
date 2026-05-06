(function() {
  /* ══════════════════════════════════════════════════════════════
     freedom-combined.js v1.0.0 — Freedom to Thrive event page injection.
     Strategy: hide Webflow native chrome (this page ships its own
     dark crimson nav + footer), then inject the full Freedom to Thrive
     HTML/CSS into a scoped #ft-root. All CSS scoped with #ft-root prefix.
     Source HTML: tparis7/Freedom-To-Thrive/index.html
     Mockup:      https://tparis7.github.io/Freedom-To-Thrive/
     Event:       July 4, 2026 · 835 E 75th St, Chicago's South Side
     ══════════════════════════════════════════════════════════════ */

  if (document.getElementById('ft-root')) return;

  // ═══ 0. CANCEL WEBFLOW IX2 BODY ANIMATION ═══
  function cancelBodyAnimations() {
    if (document.body && document.body.getAnimations) {
      document.body.getAnimations().forEach(function(a) { a.cancel(); });
    }
    if (document.body) document.body.style.setProperty('opacity', '1', 'important');
  }
  cancelBodyAnimations();
  document.addEventListener('DOMContentLoaded', cancelBodyAnimations);
  window.addEventListener('load', cancelBodyAnimations);
  setTimeout(cancelBodyAnimations, 100);
  setTimeout(cancelBodyAnimations, 500);
  setTimeout(cancelBodyAnimations, 1500);

  // ═══ 1. ENSURE FONTS ═══
  (function ensureFonts() {
    if (document.querySelector('link[data-ft-fonts]')) return;
    var pc1 = document.createElement('link');
    pc1.rel = 'preconnect'; pc1.href = 'https://fonts.googleapis.com';
    pc1.setAttribute('data-ft-fonts', '1');
    document.head.appendChild(pc1);
    var pc2 = document.createElement('link');
    pc2.rel = 'preconnect'; pc2.href = 'https://fonts.gstatic.com';
    pc2.crossOrigin = 'anonymous';
    pc2.setAttribute('data-ft-fonts', '1');
    document.head.appendChild(pc2);
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700;800&display=swap';
    l.setAttribute('data-ft-fonts', '1');
    document.head.appendChild(l);
  })();

  // ═══ 2. INJECT CSS — scoped to #ft-root ═══
  var style = document.createElement('style');
  style.setAttribute('data-ft-css', '1');
  style.innerHTML = `
/* ─── Hide Webflow native chrome while Freedom to Thrive is active ─── */
body.ft-active { background: #fff; margin: 0; padding: 0; opacity: 1 !important; overflow-x: hidden; }
body.ft-active > *:not(#ft-root):not(script):not(style):not(link):not(noscript):not([data-ft-keep]) { display: none !important; }
html.ft-active { scroll-behavior: smooth; }

#ft-root *, #ft-root *::before, #ft-root *::after { margin: 0; padding: 0; box-sizing: border-box; }

/* ───────────────────────────────────────────────────────────────
   PALETTE — P3 brand (crimson + dark maroon).
   Token names mirror the Pulse Summit mockup so structural CSS
   stays pixel-identical; only the values change.
   ─────────────────────────────────────────────────────────────── */
#ft-root {
  --blue: #D93A3A;          /* P3 crimson — primary CTAs / hero accent */
  --blue-dark: #B82C2C;     /* hover / pressed crimson */
  --blue-deep: #4A1020;     /* deep maroon — dark hero, dark sections */
  --blue-light: #E85C5C;    /* lighter crimson — gradients */
  --blue-bright: #F87171;   /* coral — gradient terminus, badge accents */
  --green: #7A0E1A;         /* dark maroon — secondary brand (was green) */
  --green-dark: #5C0913;    /* deeper maroon hover */
  --green-light: #C0152A;   /* mid crimson — used where green-light was */
  --green-pale: #FDE2E2;    /* crimson pale wash — chip backgrounds */
  --white: #FFFFFF;
  --off-white: #FAF8F6;     /* warm cream — matches P3 deck cream */
  --cool-gray: #F1F1F2;
  --slate: #6B6266;
  --slate-dark: #2E2326;
  --text-dark: #1A0F12;
  --text-mid: #50444A;
  --text-light: #94898E;
  --glass: rgba(255,255,255,0.06);
  --glass-border: rgba(255,255,255,0.1);
}

html.ft-active { scroll-behavior: smooth; }
body.ft-active {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text-dark); background: var(--white);
  line-height: 1.6; -webkit-font-smoothing: antialiased;
}
#ft-root h1, #ft-root h2, #ft-root h3, #ft-root h4 { font-family: 'Space Grotesk', sans-serif; line-height: 1.1; }
#ft-root a { color: inherit; text-decoration: none; text-transform: none; }
#ft-root img { max-width: 100%; display: block; }
#ft-root ul { list-style: none; }
#ft-root button { font-family: inherit; text-transform: none; }

/* ═══════════ NAV ═══════════ */
#ft-root .nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  background: rgba(74,16,32,0.85); backdrop-filter: blur(20px) saturate(1.8);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: all 0.3s;
}
#ft-root .nav.scrolled { background: rgba(74,16,32,0.95); box-shadow: 0 4px 30px rgba(0,0,0,0.2); }
#ft-root .nav-inner {
  max-width: none; margin: 0;
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 40px;
  min-height: 0; height: auto;
}
#ft-root .nav-logo { height: 36px; max-height: 36px; width: auto; filter: brightness(0) invert(1); object-fit: contain; display: block; }
#ft-root .nav-links { display: flex; align-items: center; gap: 32px; }
#ft-root .nav-links a {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 14px; font-weight: 500;
  line-height: 30px;
  color: rgba(255,255,255,0.85);
  letter-spacing: normal;
  padding: 0;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  transition: color 0.2s;
}
#ft-root .nav-links a:hover { color: #fff; }
#ft-root .nav .nav-cta, #ft-root .nav-links a.nav-cta {
  display: flex; align-items: center; justify-content: center;
  background: var(--blue);
  color: #fff !important;
  padding: 10px 24px;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-size: 14px; font-weight: 600;
  line-height: 30px;
  letter-spacing: normal;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  transition: all 0.2s;
  box-shadow: 0 2px 12px rgba(217,58,58,0.35);
}
#ft-root .nav .nav-cta:hover { background: var(--blue-dark); transform: translateY(-1px); box-shadow: 0 4px 20px rgba(217,58,58,0.45); }
#ft-root .mobile-toggle {
  display: none; background: none; border: none; cursor: pointer;
  width: 32px; height: 32px; position: relative; z-index: 10;
}
#ft-root .mobile-toggle span {
  display: block; width: 22px; height: 2px; background: #fff;
  position: absolute; left: 5px; transition: all 0.3s; border-radius: 2px;
}
#ft-root .mobile-toggle span:nth-child(1) { top: 9px; }
#ft-root .mobile-toggle span:nth-child(2) { top: 15px; }
#ft-root .mobile-toggle span:nth-child(3) { top: 21px; }
#ft-root .mobile-toggle.open span:nth-child(1) { top: 15px; transform: rotate(45deg); }
#ft-root .mobile-toggle.open span:nth-child(2) { opacity: 0; }
#ft-root .mobile-toggle.open span:nth-child(3) { top: 15px; transform: rotate(-45deg); }

/* ═══════════ HERO ═══════════ */
#ft-root .hero {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden; padding: 100px 32px 60px;
  background: var(--blue-deep);
}
#ft-root .hero-video { position: absolute; inset: 0; z-index: 0; }
#ft-root .hero-video video {
  width: 100%; height: 100%; object-fit: cover;
  opacity: 0.35; filter: saturate(0.55);
}
#ft-root .hero-overlay {
  position: absolute; inset: 0; z-index: 1;
  background:
    linear-gradient(170deg, rgba(74,16,32,0.92) 0%, rgba(122,14,26,0.78) 50%, rgba(217,58,58,0.45) 100%);
}
#ft-root .hero-mesh {
  position: absolute; inset: 0; z-index: 2; opacity: 0.06;
  background-image:
    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.8) 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.5) 1px, transparent 1px);
  background-size: 48px 48px;
}
#ft-root .hero-content { position: relative; z-index: 3; text-align: center; max-width: 880px; }
#ft-root .hero-badge {
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--glass); border: 1px solid var(--glass-border);
  border-radius: 100px; padding: 8px 22px; margin-bottom: 28px;
  font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.85);
  backdrop-filter: blur(12px); letter-spacing: 0.5px;
}
#ft-root .hero-badge .pulse {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--blue-bright); position: relative;
}
#ft-root .hero-badge .pulse::after {
  content: ''; position: absolute; inset: -4px; border-radius: 50%;
  background: var(--blue-bright); opacity: 0;
  animation: ft-ping 2s cubic-bezier(0,0,0.2,1) infinite;
}
@keyframes ft-ping { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(2.5); opacity: 0; } }

#ft-root .hero h1 {
  font-size: clamp(44px, 7vw, 86px); font-weight: 800;
  color: #fff; letter-spacing: -2.5px; margin-bottom: 4px;
}
#ft-root .hero h1 .line2 {
  display: block; font-size: 0.45em; letter-spacing: 0;
  background: linear-gradient(90deg, var(--blue-bright), #fff);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; margin-top: 8px;
  font-weight: 700;
}
#ft-root .hero-sub {
  font-size: clamp(16px, 2.2vw, 20px); color: rgba(255,255,255,0.78);
  max-width: 640px; margin: 20px auto 12px; font-weight: 400; line-height: 1.45;
}
#ft-root .hero-sub strong { color: #fff; font-weight: 600; }
#ft-root .hero-meta {
  display: flex; align-items: center; justify-content: center;
  gap: 28px; flex-wrap: wrap; margin: 16px 0 36px;
  font-size: 14px; color: rgba(255,255,255,0.7); font-weight: 500;
}
#ft-root .hero-meta span { display: flex; align-items: center; gap: 7px; }
#ft-root .hero-meta svg { width: 16px; height: 16px; stroke: var(--blue-bright); fill: none; stroke-width: 2.5; }
#ft-root .hero-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

#ft-root .btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--blue); color: #fff;
  padding: 15px 32px; border-radius: 10px;
  font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 15px;
  border: none; cursor: pointer; letter-spacing: 0.3px;
  transition: all 0.25s; box-shadow: 0 4px 20px rgba(217,58,58,0.35);
}
#ft-root .btn-primary:hover { background: var(--blue-dark); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(217,58,58,0.45); }
#ft-root .btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--glass); color: #fff;
  padding: 15px 32px; border-radius: 10px;
  font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 15px;
  border: 1px solid var(--glass-border); cursor: pointer;
  transition: all 0.25s;
}
#ft-root .btn-secondary:hover { background: rgba(255,255,255,0.12); transform: translateY(-2px); }

/* ═══════════ STATS ═══════════ */
#ft-root .stats-bar { padding: 0 32px; margin-top: -44px; position: relative; z-index: 10; }
#ft-root .stats-inner {
  max-width: 960px; margin: 0 auto;
  display: grid; grid-template-columns: repeat(4, 1fr);
  background: #fff; border-radius: 16px;
  box-shadow: 0 8px 40px rgba(74,16,32,0.10), 0 1px 3px rgba(0,0,0,0.04);
  overflow: hidden;
}
#ft-root .stat-item {
  text-align: center; padding: 28px 20px;
  border-right: 1px solid var(--cool-gray);
}
#ft-root .stat-item:last-child { border-right: none; }
#ft-root .stat-number {
  font-family: 'Space Grotesk', sans-serif; font-size: 36px; font-weight: 800;
  background: linear-gradient(135deg, var(--blue), var(--green));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; line-height: 1;
}
#ft-root .stat-label { font-size: 13px; color: var(--text-light); margin-top: 4px; font-weight: 500; letter-spacing: 0.5px; }

/* ═══════════ SECTIONS ═══════════ */
#ft-root section { padding: 48px 32px; }
#ft-root .section-inner { max-width: 1100px; margin: 0 auto; }
#ft-root .section-label {
  font-size: 13px; font-weight: 600; letter-spacing: 0.2px;
  color: var(--blue); margin-bottom: 10px;
  display: flex; align-items: center; gap: 8px;
}
#ft-root .section-label::before {
  content: ''; width: 20px; height: 2px;
  background: linear-gradient(90deg, var(--blue), var(--green)); border-radius: 2px;
}
#ft-root .section-title { font-size: clamp(28px, 4vw, 44px); font-weight: 800; letter-spacing: -1px; margin-bottom: 14px; color: var(--text-dark); }
#ft-root .section-title .accent { color: var(--blue); }
#ft-root .section-subtitle { font-size: 16px; color: var(--text-mid); max-width: 640px; line-height: 1.7; }

/* ═══════════ COMMUNITIES (first content section) ═══════════ */
#ft-root .communities { background: var(--off-white); position: relative; overflow: hidden; }
#ft-root .communities .section-inner { position: relative; z-index: 1; }
#ft-root .communities-grid {
  display: grid; grid-template-columns: 1.05fr 1fr; gap: 40px;
  align-items: start; margin-top: 28px;
}
#ft-root .communities-text p { color: var(--text-mid); font-size: 16px; line-height: 1.8; margin-bottom: 16px; }
#ft-root .communities-text p strong { color: var(--text-dark); font-weight: 600; }
#ft-root .communities-photos {
  display: grid; grid-template-columns: 1fr 1fr;
  grid-template-rows: 180px 180px;
  gap: 12px;
}
#ft-root .communities-photo {
  border-radius: 14px; overflow: hidden;
  box-shadow: 0 4px 20px rgba(74,16,32,0.10);
  position: relative;
  background: linear-gradient(135deg, rgba(217,58,58,0.10) 0%, rgba(74,16,32,0.18) 100%);
}
#ft-root .communities-photo img {
  width: 100%; height: 100%; object-fit: cover;
  display: block; transition: transform 0.5s;
}
#ft-root .communities-photo:hover img { transform: scale(1.04); }
#ft-root .communities-photo.tall { grid-row: 1 / span 2; }

/* ═══════════ TWO PLATFORMS (Download "Inside the app" card pattern) ═══════════ */
#ft-root .platforms { background: var(--white); }
#ft-root .platforms-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin-top: 28px; }
#ft-root .platform-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(74,16,32,0.06);
  display: flex; flex-direction: column;
  transition: all 0.3s;
}
#ft-root .platform-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(74,16,32,0.12); }
#ft-root .platform-card .fc-vis {
  position: relative;
  height: 220px;
  background: var(--cool-gray);
  overflow: hidden;
}
#ft-root .platform-card .fc-vis img {
  width: 100%; height: 100%; object-fit: cover; object-position: center top;
  position: absolute; inset: 0;
}
#ft-root .platform-card .fc-body {
  padding: 22px 24px 26px;
  flex: 1;
  display: flex; flex-direction: column;
  border-top: 4px solid var(--blue);
}
#ft-root .platform-card.alt .fc-body { border-top-color: var(--green); }
#ft-root .platform-eyebrow {
  display: inline-block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px; font-weight: 700; letter-spacing: 0.8px;
  color: var(--blue); background: var(--green-pale);
  padding: 5px 12px; border-radius: 6px;
  margin-bottom: 12px; text-transform: uppercase;
  align-self: flex-start;
}
#ft-root .platform-card.alt .platform-eyebrow { color: var(--green); background: rgba(122,14,26,0.08); }
#ft-root .platform-card h3 { font-size: 22px; font-weight: 700; margin-bottom: 10px; color: var(--text-dark); }
#ft-root .platform-card p { color: var(--text-mid); font-size: 14.5px; line-height: 1.65; }
#ft-root .platform-card p strong { color: var(--text-dark); font-weight: 700; }

/* ═══════════ VISION (4 icon items) ═══════════ */
#ft-root .vision { background: var(--off-white); position: relative; overflow: hidden; padding: 80px 32px; }
#ft-root .vision-bg {
  position: absolute; inset: 0; z-index: 0;
  background-image: url('https://tparis7.github.io/Freedom-To-Thrive/images/Rooftop.jpg');
  background-size: cover; background-position: center;
  opacity: 0.30; filter: saturate(0.8);
}
#ft-root .vision-bg::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(250,248,246,0.30) 0%, rgba(250,248,246,0.20) 100%);
}
#ft-root .vision .section-inner { position: relative; z-index: 1; }
#ft-root .vision-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px 36px; margin-top: 28px; }
#ft-root .vision-item { display: flex; gap: 16px; align-items: flex-start; }
#ft-root .vision-icon {
  flex-shrink: 0;
  width: 44px; height: 44px; border-radius: 12px;
  background: var(--green-pale);
  display: flex; align-items: center; justify-content: center;
}
#ft-root .vision-icon svg { width: 22px; height: 22px; stroke: var(--blue); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
#ft-root .vision-item h4 { font-size: 18px; font-weight: 700; margin-bottom: 6px; color: var(--text-dark); }
#ft-root .vision-item p { color: var(--text-mid); font-size: 14.5px; line-height: 1.65; }

/* ═══════════ WHY THIS EVENT MATTERS ═══════════ */
#ft-root .why { background: var(--white); }
#ft-root .why-text { max-width: 760px; margin-top: 6px; }
#ft-root .why-text p { color: var(--text-mid); font-size: 16px; line-height: 1.7; }
#ft-root .why-text p strong { color: var(--text-dark); font-weight: 700; }

/* Why "System Level Change" style cards (mirrors PS .step) */
#ft-root .why-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 36px; }
#ft-root .why-card {
  background: #fff; border-radius: 16px; padding: 32px 28px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.04);
  transition: all 0.3s; position: relative; overflow: hidden;
}
#ft-root .why-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--blue), var(--green));
  opacity: 0; transition: opacity 0.3s;
}
#ft-root .why-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(74,16,32,0.10); }
#ft-root .why-card:hover::before { opacity: 1; }
#ft-root .why-card-icon {
  width: 52px; height: 52px; border-radius: 14px;
  background: linear-gradient(135deg, var(--blue) 0%, var(--blue-light) 100%);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 18px; box-shadow: 0 4px 14px rgba(217,58,58,0.25);
}
#ft-root .why-card-icon.maroon { background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%); box-shadow: 0 4px 14px rgba(122,14,26,0.25); }
#ft-root .why-card-icon.coral { background: linear-gradient(135deg, var(--blue-light) 0%, var(--blue-bright) 100%); box-shadow: 0 4px 14px rgba(232,92,92,0.30); }
#ft-root .why-card-icon svg { width: 24px; height: 24px; stroke: #fff; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
#ft-root .why-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 10px; color: var(--text-dark); }
#ft-root .why-card p { font-size: 14.5px; color: var(--text-mid); line-height: 1.7; }

/* ═══════════ AUDIENCE ═══════════ */
#ft-root .audience { background: var(--off-white); position: relative; overflow: hidden; }
#ft-root .audience-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 36px;
  margin-top: 28px; align-items: start;
}
#ft-root .audience-watermark {
  position: relative;
  border-radius: 14px; overflow: hidden;
  background: linear-gradient(135deg, rgba(122,14,26,0.10), rgba(217,58,58,0.18));
  min-height: 360px;
  display: flex; align-items: center; justify-content: center;
  color: rgba(74,16,32,0.4); font-size: 12px; font-weight: 600;
  letter-spacing: 0.6px; text-transform: uppercase;
  font-family: 'Space Grotesk', sans-serif;
}
#ft-root .audience-watermark::before {
  content: ''; position: absolute; inset: 0;
  background-image: url('https://tparis7.github.io/Freedom-To-Thrive/images/Reach.jpg');
  background-size: cover; background-position: center;
}
#ft-root .audience-list { display: flex; flex-direction: column; gap: 14px; }
#ft-root .audience-list .section-subtitle { margin-bottom: 8px; }
#ft-root .audience-pill {
  background: var(--green-pale); border-radius: 12px;
  padding: 14px 18px;
  display: flex; gap: 14px; align-items: flex-start;
  transition: all 0.2s;
}
#ft-root .audience-pill:hover { background: #FBC9C9; transform: translateX(4px); }
#ft-root .audience-pill .ap-icon {
  flex-shrink: 0;
  width: 36px; height: 36px; border-radius: 10px;
  background: rgba(217,58,58,0.18);
  display: flex; align-items: center; justify-content: center;
}
#ft-root .audience-pill .ap-icon svg { width: 18px; height: 18px; stroke: var(--blue); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
#ft-root .audience-pill h4 { font-size: 15px; font-weight: 700; margin-bottom: 2px; color: var(--text-dark); }
#ft-root .audience-pill p { font-size: 13.5px; color: var(--text-mid); line-height: 1.5; }

/* ═══════════ SPONSORS (4-tier) ═══════════ */
#ft-root .sponsors { background: var(--white); }
#ft-root .tier-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 28px; }
#ft-root .tier-card {
  background: #fff; border-radius: 16px; padding: 28px 22px;
  text-align: center; border: 2px solid var(--cool-gray);
  transition: all 0.3s; position: relative;
}
#ft-root .tier-card:hover { transform: translateY(-4px); }
#ft-root .tier-card.featured {
  border-color: var(--blue);
  box-shadow: 0 8px 40px rgba(217,58,58,0.12);
  background: linear-gradient(180deg, #fff 0%, #FFF7F7 100%);
}
#ft-root .tier-card.featured::before {
  content: 'Only 1 available · Exclusive';
  position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
  background: linear-gradient(135deg, var(--blue), var(--green));
  color: #fff; font-size: 10.5px; font-weight: 700; letter-spacing: 0.4px;
  padding: 5px 16px; border-radius: 100px;
  text-transform: uppercase;
  white-space: nowrap;
}
#ft-root .tier-badge {
  width: 52px; height: 52px; border-radius: 50%; margin: 0 auto 14px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
#ft-root .tier-badge svg { width: 26px; height: 26px; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; display: block; }
#ft-root .tier-badge.community { background: rgba(148,137,142,0.14); }
#ft-root .tier-badge.community svg { stroke: var(--slate); }
#ft-root .tier-badge.silver { background: rgba(107,98,102,0.14); }
#ft-root .tier-badge.silver svg { stroke: var(--slate-dark); }
#ft-root .tier-badge.gold { background: rgba(212,168,71,0.14); }
#ft-root .tier-badge.gold svg { stroke: #B98A2A; }
#ft-root .tier-badge.presenting { background: rgba(217,58,58,0.14); }
#ft-root .tier-badge.presenting svg { stroke: var(--blue); }
#ft-root .tier-name {
  font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 700;
  letter-spacing: 0.6px; color: var(--text-light);
  margin-bottom: 6px; text-transform: uppercase;
}
#ft-root .tier-card.featured .tier-name { color: var(--blue); }
#ft-root .tier-price {
  font-family: 'Space Grotesk', sans-serif; font-size: 38px; font-weight: 800;
  color: var(--text-dark); line-height: 1;
}
#ft-root .tier-price span { font-size: 18px; color: var(--text-light); font-weight: 500; }
#ft-root .tier-perks { list-style: none; text-align: left; margin: 22px 0 24px; }
#ft-root .tier-perks li {
  font-size: 13.5px; color: var(--text-mid); padding: 8px 0;
  border-bottom: 1px solid var(--cool-gray);
  display: flex; align-items: flex-start; gap: 10px; line-height: 1.45;
}
#ft-root .tier-perks li:last-child { border-bottom: none; }
#ft-root .tier-perks .check { flex-shrink: 0; width: 16px; height: 16px; border-radius: 50%; background: var(--green-pale); display: flex; align-items: center; justify-content: center; margin-top: 1px; }
#ft-root .tier-perks .check svg { width: 10px; height: 10px; stroke: var(--blue); fill: none; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
#ft-root .tier-perks .strong-perk { color: var(--text-dark); font-weight: 700; }
#ft-root .btn-tier {
  display: block; width: 100%; padding: 12px; border-radius: 10px;
  font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 13.5px;
  border: 2px solid var(--blue); color: var(--blue);
  background: transparent; cursor: pointer; transition: all 0.2s; letter-spacing: 0.3px;
}
#ft-root .btn-tier:hover { background: var(--blue); color: #fff; }
#ft-root .tier-card.featured .btn-tier {
  background: linear-gradient(135deg, var(--blue), var(--green));
  color: #fff; border-color: transparent;
}
#ft-root .tier-card.featured .btn-tier:hover { background: linear-gradient(135deg, var(--blue-dark), var(--green-dark)); }

/* ═══════════ ADD-ONS ═══════════ */
#ft-root .addons { background: var(--off-white); }
#ft-root .addons-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 28px; }
#ft-root .addon-card {
  background: #fff; border-radius: 14px; padding: 24px 24px;
  border: 1px solid var(--cool-gray);
  transition: all 0.3s; position: relative;
  display: grid; grid-template-columns: auto 1fr; gap: 16px; align-items: flex-start;
}
#ft-root .addon-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(74,16,32,0.08); border-color: rgba(217,58,58,0.25); }
#ft-root .addon-icon {
  width: 44px; height: 44px; border-radius: 12px;
  background: rgba(217,58,58,0.10);
  display: flex; align-items: center; justify-content: center;
}
#ft-root .addon-icon svg { width: 22px; height: 22px; stroke: var(--blue); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
#ft-root .addon-card h4 { font-size: 17px; font-weight: 700; color: var(--text-dark); margin-bottom: 4px; display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
#ft-root .addon-card h4 .price { font-family: 'Space Grotesk', sans-serif; font-size: 17px; color: var(--blue); font-weight: 800; }
#ft-root .addon-card p { font-size: 14px; color: var(--text-mid); line-height: 1.55; }

/* ═══════════ FUNDING BAROMETER ═══════════ */
#ft-root .funding-barometer {
  background:
    radial-gradient(ellipse at 15% 40%, rgba(217,58,58,0.10) 0%, rgba(217,58,58,0) 55%),
    radial-gradient(ellipse at 85% 60%, rgba(122,14,26,0.10) 0%, rgba(122,14,26,0) 55%),
    linear-gradient(135deg, rgba(253,226,226,0.55) 0%, rgba(255,247,247,0.55) 100%);
  border: 1px solid rgba(217,58,58,0.10);
  border-radius: 14px;
  padding: 22px 28px;
  margin: 28px 0 0;
  width: 100%;
  box-shadow: 0 4px 20px rgba(217,58,58,0.04);
  position: relative; overflow: hidden;
}
#ft-root .funding-barometer::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--blue), var(--green));
  opacity: 0.85;
}
#ft-root .barometer-grid {
  display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
  gap: 32px; align-items: center;
}
#ft-root .barometer-copy { min-width: 0; }
#ft-root .barometer-bar { min-width: 0; }
#ft-root .barometer-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 13px; font-weight: 600; letter-spacing: 0.2px;
  color: var(--blue); margin-bottom: 8px;
}
#ft-root .barometer-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--blue-bright); position: relative; flex-shrink: 0;
}
#ft-root .barometer-dot::after {
  content: ''; position: absolute; inset: -4px; border-radius: 50%;
  background: var(--blue-bright); opacity: 0;
  animation: ft-ping 2s cubic-bezier(0,0,0.2,1) infinite;
}
#ft-root .funding-barometer h3 {
  font-size: 22px; font-weight: 800; color: var(--text-dark);
  margin-bottom: 8px; letter-spacing: -0.5px; line-height: 1.2;
}
#ft-root .funding-barometer .barometer-copy p {
  font-size: 14.5px; color: var(--text-mid); line-height: 1.6;
}
#ft-root .funding-barometer .barometer-copy p strong { color: var(--text-dark); font-weight: 700; }
#ft-root .barometer-track {
  position: relative;
  height: 14px; border-radius: 100px;
  background: rgba(74,16,32,0.10);
  overflow: visible;
  margin: 32px 0 18px 0;
}
#ft-root .barometer-fill {
  position: absolute; top: 0; left: 0; bottom: 0;
  width: 0%;
  background: linear-gradient(90deg, var(--blue) 0%, var(--blue-light) 60%, var(--blue-bright) 100%);
  border-radius: 100px;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(217,58,58,0.25);
}
/* $10K minimum threshold marker. 10000 / 50000 = 20% along the track. */
#ft-root .barometer-minimum {
  position: absolute; top: -6px; bottom: -6px;
  left: 20%;
  width: 2px;
  background: var(--blue);
  border-radius: 2px;
  z-index: 2;
  box-shadow: 0 0 0 2px rgba(217,58,58,0.15);
}
#ft-root .barometer-minimum::before {
  content: '';
  position: absolute; top: -3px; left: 50%; transform: translateX(-50%);
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--blue);
  box-shadow: 0 0 0 3px rgba(217,58,58,0.18);
}
#ft-root .barometer-minimum-label {
  position: absolute;
  bottom: calc(100% + 6px); left: 50%; transform: translateX(-50%);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 10.5px; font-weight: 700; letter-spacing: 0.3px;
  color: var(--blue);
  white-space: nowrap;
  padding: 2px 7px; border-radius: 100px;
  background: rgba(253,226,226,0.95);
  border: 1px solid rgba(217,58,58,0.30);
}
#ft-root .barometer-labels {
  display: flex; justify-content: space-between; align-items: baseline;
  font-size: 13.5px; color: var(--text-light);
  margin-bottom: 10px;
}
#ft-root .barometer-labels .raised strong {
  font-family: 'Space Grotesk', sans-serif;
  color: var(--blue); font-size: 19px; font-weight: 800;
  margin-right: 4px;
}
#ft-root .barometer-labels .goal strong {
  font-family: 'Space Grotesk', sans-serif;
  color: var(--text-dark); font-weight: 800;
}

/* ═══════════ WHY PARTNER WITH US ═══════════ */
#ft-root .partner { background: var(--white); }
#ft-root .partner-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 28px; }
#ft-root .partner-card {
  background: #fff; border-radius: 14px; padding: 28px 24px;
  border: 1px solid var(--cool-gray);
  transition: all 0.3s; position: relative;
}
#ft-root .partner-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--blue), var(--green));
  opacity: 0; transition: opacity 0.3s;
}
#ft-root .partner-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(74,16,32,0.08); }
#ft-root .partner-card:hover::before { opacity: 1; }
#ft-root .partner-arrow {
  width: 38px; height: 38px; border-radius: 10px;
  background: var(--green-pale);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 14px;
}
#ft-root .partner-arrow svg { width: 20px; height: 20px; stroke: var(--blue); fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
#ft-root .partner-card h4 { font-size: 17px; font-weight: 700; margin-bottom: 8px; color: var(--text-dark); }
#ft-root .partner-card p { font-size: 14px; color: var(--text-mid); line-height: 1.65; }

/* ═══════════ APPLY (single Sponsor tab) ═══════════ */
#ft-root .apply {
  background: linear-gradient(160deg, var(--blue-deep) 0%, #5C0913 50%, #3B0A19 100%);
  position: relative; overflow: hidden;
}
#ft-root .apply::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 20% 80%, rgba(217,58,58,0.18) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(248,113,113,0.10) 0%, transparent 50%);
}
#ft-root .apply .section-inner { position: relative; z-index: 1; }
#ft-root .apply .section-label { color: var(--blue-bright); }
#ft-root .apply .section-label::before { background: linear-gradient(90deg, var(--blue-bright), #fff); }
#ft-root .apply .section-title { color: #fff; }
#ft-root .apply .section-subtitle { color: rgba(255,255,255,0.65); }

#ft-root .apply-wrap { max-width: 720px; margin: 28px auto 0; position: relative; }
#ft-root .apply-tabs {
  display: grid; grid-template-columns: 1fr; gap: 8px; padding: 8px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 14px; margin-bottom: 18px;
  backdrop-filter: blur(10px);
  width: 100%;
}
#ft-root .apply-tab {
  background: linear-gradient(135deg, var(--blue), var(--green));
  border: 1px solid transparent;
  cursor: default;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 15.5px; font-weight: 700; letter-spacing: 0.15px;
  padding: 14px 18px; border-radius: 10px;
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  box-shadow: 0 6px 22px rgba(217,58,58,0.38), 0 0 0 1px rgba(255,255,255,0.12) inset;
}
#ft-root .apply-tab svg { width: 18px; height: 18px; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke: currentColor; }
#ft-root .apply-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 18px;
  padding: 26px 30px 24px;
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 40px rgba(0,0,0,0.18);
}
#ft-root .apply-heading {
  color: #fff; font-family: 'Space Grotesk', sans-serif;
  font-size: 22px; font-weight: 700; letter-spacing: -0.3px;
  margin-bottom: 4px;
}
#ft-root .apply-heading-wrap { margin-bottom: 14px; }
#ft-root .apply-lede { color: rgba(255,255,255,0.65); font-size: 14px; line-height: 1.55; margin-bottom: 18px; }
#ft-root .apply-lede strong { color: #fff; font-weight: 600; }
#ft-root .apply-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 18px; }
#ft-root .apply-field { display: flex; flex-direction: column; gap: 6px; }
#ft-root .apply-field.full { grid-column: 1 / -1; }
#ft-root .apply-label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12.5px; font-weight: 600; letter-spacing: 0.1px;
  color: rgba(255,255,255,0.78);
}
#ft-root .apply-label .req { color: var(--blue-bright); margin-left: 2px; }
#ft-root .apply-input, #ft-root .apply-select, #ft-root .apply-textarea {
  width: 100%; box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  font-size: 14.5px; color: #fff;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  padding: 12px 14px;
  transition: all 0.2s;
}
#ft-root .apply-input:focus, #ft-root .apply-select:focus, #ft-root .apply-textarea:focus {
  outline: none;
  border-color: var(--blue-bright);
  background: rgba(255,255,255,0.08);
  box-shadow: 0 0 0 3px rgba(217,58,58,0.18);
}
#ft-root .apply-input::placeholder, #ft-root .apply-textarea::placeholder { color: rgba(255,255,255,0.35); }
#ft-root .apply-select {
  appearance: none; -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.55)' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 36px;
}
#ft-root .apply-select option { background: var(--blue-deep); color: #fff; }
#ft-root .apply-textarea { resize: vertical; min-height: 72px; line-height: 1.5; }
#ft-root .apply-submit {
  width: 100%; margin-top: 18px;
  background: linear-gradient(135deg, var(--blue), var(--blue-dark));
  color: #fff; border: none; cursor: pointer;
  padding: 15px 28px; border-radius: 10px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700; font-size: 15px; letter-spacing: 0.3px;
  transition: all 0.25s;
  box-shadow: 0 6px 24px rgba(217,58,58,0.32);
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
}
#ft-root .apply-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 32px rgba(217,58,58,0.45);
}
#ft-root .apply-submit:disabled { opacity: 0.7; cursor: not-allowed; }
#ft-root .apply-submit.sent { background: linear-gradient(135deg, #2C8C2C, #1A561C); box-shadow: 0 6px 24px rgba(44,140,44,0.4); }
#ft-root .apply-submit.err { background: linear-gradient(135deg, #c13535, #8a1919); }
#ft-root .apply-fine {
  margin-top: 14px; font-size: 12px; color: rgba(255,255,255,0.50);
  text-align: center; line-height: 1.55;
}

/* ═══════════ SUPPORT THE MISSION (clones PS .donate, crimson palette) ═══════════ */
#ft-root .donate {
  text-align: center; padding: 56px 32px;
  position: relative; overflow: hidden;
  background: var(--blue-deep);
}
#ft-root .donate-bg {
  position: absolute; inset: 0; z-index: 0;
  background-image: url('https://tparis7.github.io/Freedom-To-Thrive/images/P3%20present.jpg');
  background-size: cover; background-position: center;
  opacity: 0.33; filter: saturate(0.6);
}
#ft-root .donate-overlay {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(135deg, rgba(74,16,32,0.80) 0%, rgba(122,14,26,0.62) 50%, rgba(217,58,58,0.45) 100%);
}
#ft-root .donate-inner {
  max-width: 580px; margin: 0 auto; position: relative; z-index: 2;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);
  border-radius: 16px; padding: 40px 36px; backdrop-filter: blur(8px);
}
#ft-root .donate-heart {
  width: 52px; height: 52px; margin: 0 auto 16px; border-radius: 50%;
  background: rgba(217,58,58,0.28);
  display: flex; align-items: center; justify-content: center;
}
#ft-root .donate-heart svg { width: 24px; height: 24px; fill: var(--blue-bright); }
#ft-root .donate h2 { font-size: 28px; font-weight: 800; margin-bottom: 10px; color: #fff; }
#ft-root .donate p { color: rgba(255,255,255,0.75); font-size: 15px; max-width: 460px; margin: 0 auto 24px; line-height: 1.7; }

/* ═══════════ FOOTER ═══════════ */
#ft-root .footer { background: var(--blue-deep); color: rgba(255,255,255,0.4); padding: 40px 32px; }
#ft-root .footer-inner {
  max-width: 1100px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;
}
#ft-root .footer-brand { display: flex; align-items: center; gap: 12px; }
#ft-root .footer-brand img { height: 32px; width: auto; filter: brightness(0) invert(1); opacity: 0.7; }
#ft-root .footer-links { display: flex; gap: 24px; }
#ft-root .footer-links a { font-size: 13px; transition: color 0.2s; }
#ft-root .footer-links a:hover { color: rgba(255,255,255,0.8); }
#ft-root .footer-copy {
  font-size: 12px; width: 100%; text-align: center;
  margin-top: 20px; padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.06);
}

/* ═══════════ RESPONSIVE ═══════════ */
@media (max-width: 1024px) {
  #ft-root .tier-grid { grid-template-columns: 1fr 1fr; }
  #ft-root .communities-grid { grid-template-columns: 1fr; gap: 24px; }
  #ft-root .audience-grid { grid-template-columns: 1fr; gap: 22px; }
  #ft-root .audience-watermark { min-height: 220px; }
  #ft-root .platforms-grid { grid-template-columns: 1fr; gap: 18px; }
  #ft-root .platform-card { min-height: 320px; padding: 40px 28px; }
}

@media (max-width: 768px) {
  #ft-root section { padding: 36px 16px; }
  #ft-root .nav-inner { padding: 16px; min-height: 64px; height: auto; }
  #ft-root .nav-logo { height: 36px; max-height: 36px; }
  #ft-root .nav-links {
    display: none; flex-direction: column; gap: 0;
    align-items: stretch;
    position: absolute; top: 100%; left: 0; right: 0;
    background: rgba(74,16,32,0.98); backdrop-filter: blur(20px);
    padding: 12px 24px 22px; border-bottom: 1px solid rgba(255,255,255,0.06);
    box-shadow: 0 8px 30px rgba(0,0,0,0.25);
  }
  #ft-root .nav-links.open { display: flex; }
  #ft-root .nav-links a { padding: 15px 2px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 15.5px; letter-spacing: 0.2px; }
  #ft-root .nav-links a:last-child { border-bottom: none; }
  #ft-root .nav-cta {
    text-align: center; display: block;
    margin: 18px 0 6px;
    padding: 16px 28px;
    font-size: 15.5px; letter-spacing: 0.3px;
    border-radius: 10px;
    box-shadow: 0 6px 22px rgba(217,58,58,0.38);
  }
  #ft-root .mobile-toggle { display: block; }

  #ft-root .hero { min-height: auto; padding: 88px 16px 48px; }
  #ft-root .hero h1 { font-size: 36px; letter-spacing: -1px; }
  #ft-root .hero h1 .line2 { font-size: 0.5em; }
  #ft-root .hero-sub { font-size: 14.5px; margin: 14px auto 6px; line-height: 1.45; }
  #ft-root .hero-meta { gap: 10px 14px; font-size: 12.5px; margin-bottom: 24px; }
  #ft-root .hero-meta span { gap: 5px; }
  #ft-root .hero-actions { flex-direction: column; align-items: stretch; gap: 10px; }
  #ft-root .hero-actions .btn-primary, #ft-root .hero-actions .btn-secondary { justify-content: center; padding: 14px 24px; font-size: 14px; }
  #ft-root .hero-badge { font-size: 12px; padding: 6px 16px; margin-bottom: 18px; }

  #ft-root .stats-bar { padding: 0 16px; margin-top: -36px; }
  #ft-root .stats-inner { grid-template-columns: repeat(2, 1fr); }
  #ft-root .stat-item { padding: 20px 12px; }
  #ft-root .stat-item:nth-child(2) { border-right: none; }
  #ft-root .stat-number { font-size: 28px; }
  #ft-root .stat-label { font-size: 11px; }

  #ft-root .section-title { font-size: 26px; margin-bottom: 10px; }
  #ft-root .section-subtitle { font-size: 14px; }
  #ft-root .section-label { font-size: 12px; letter-spacing: 0.1px; margin-bottom: 8px; }

  #ft-root .communities-photos { grid-template-rows: 130px 130px; gap: 8px; }
  #ft-root .communities-text p { font-size: 14.5px; margin-bottom: 10px; line-height: 1.65; }

  #ft-root .platforms-grid { gap: 14px; }
  #ft-root .platform-card { min-height: auto; padding: 30px 22px; }
  #ft-root .platform-card h3 { font-size: 20px; }
  #ft-root .platform-card p { font-size: 14px; line-height: 1.6; }

  #ft-root .vision { padding: 56px 16px; }
  #ft-root .vision-grid { grid-template-columns: 1fr; gap: 18px 0; }
  #ft-root .vision-item h4 { font-size: 17px; }
  #ft-root .vision-item p { font-size: 14px; }

  #ft-root .why-cards { grid-template-columns: 1fr; gap: 12px; }
  #ft-root .why-card { padding: 24px 22px; }
  #ft-root .why-card-icon { width: 44px; height: 44px; margin-bottom: 14px; }
  #ft-root .why-card-icon svg { width: 20px; height: 20px; }
  #ft-root .why-card h3 { font-size: 18px; }
  #ft-root .why-card p { font-size: 14px; }

  #ft-root .audience-watermark { min-height: 180px; }
  #ft-root .audience-pill { padding: 12px 14px; gap: 12px; }
  #ft-root .audience-pill .ap-icon { width: 32px; height: 32px; border-radius: 8px; }
  #ft-root .audience-pill .ap-icon svg { width: 16px; height: 16px; }
  #ft-root .audience-pill h4 { font-size: 14.5px; }
  #ft-root .audience-pill p { font-size: 13px; }

  #ft-root .tier-grid { grid-template-columns: 1fr; max-width: 380px; margin-left: auto; margin-right: auto; gap: 18px; }
  #ft-root .tier-card { padding: 26px 22px; }
  #ft-root .tier-card.featured::before { font-size: 9.5px; padding: 4px 12px; top: -11px; }
  #ft-root .tier-price { font-size: 34px; }
  #ft-root .tier-perks { margin: 18px 0 22px; }
  #ft-root .tier-perks li { font-size: 13px; padding: 7px 0; }
  #ft-root .btn-tier { padding: 11px; font-size: 13px; }

  #ft-root .addons-grid { grid-template-columns: 1fr; gap: 12px; }
  #ft-root .addon-card { padding: 20px 20px; gap: 14px; }
  #ft-root .addon-icon { width: 40px; height: 40px; }
  #ft-root .addon-icon svg { width: 20px; height: 20px; }
  #ft-root .addon-card h4 { font-size: 16px; gap: 8px; }
  #ft-root .addon-card h4 .price { font-size: 16px; }
  #ft-root .addon-card p { font-size: 13.5px; }

  #ft-root .funding-barometer { padding: 20px 18px; border-radius: 12px; margin: 24px 0 0; }
  #ft-root .barometer-grid { grid-template-columns: 1fr; gap: 18px; }
  #ft-root .funding-barometer h3 { font-size: 19px; }
  #ft-root .funding-barometer .barometer-copy p { font-size: 13.5px; }
  #ft-root .barometer-track { height: 12px; margin: 30px 0 16px 0; }
  #ft-root .barometer-labels { font-size: 12.5px; margin-bottom: 8px; }
  #ft-root .barometer-labels .raised strong { font-size: 17px; }
  #ft-root .barometer-minimum-label { font-size: 10px; padding: 2px 6px; }

  #ft-root .partner-grid { grid-template-columns: 1fr; gap: 12px; }
  #ft-root .partner-card { padding: 22px 20px; }
  #ft-root .partner-card h4 { font-size: 16px; }
  #ft-root .partner-card p { font-size: 13.5px; }

  #ft-root .apply-wrap { margin-top: 22px; max-width: 100%; }
  #ft-root .apply-card { padding: 22px 18px 20px; border-radius: 14px; }
  #ft-root .apply-heading { font-size: 19px; }
  #ft-root .apply-lede { font-size: 13.5px; margin-bottom: 18px; }
  #ft-root .apply-grid { grid-template-columns: 1fr; gap: 12px; }
  #ft-root .apply-input, #ft-root .apply-select, #ft-root .apply-textarea { font-size: 14px; padding: 11px 13px; }
  #ft-root .apply-submit { padding: 14px 22px; font-size: 14px; }

  #ft-root .donate { padding: 40px 16px; }
  #ft-root .donate-inner { padding: 28px 22px; }
  #ft-root .donate h2 { font-size: 24px; }
  #ft-root .donate p { font-size: 14px; }

  #ft-root .footer { padding: 32px 16px; }
  #ft-root .footer-inner { flex-direction: column; text-align: center; gap: 12px; }
  #ft-root .footer-brand img { height: 28px; }
  #ft-root .footer-links { flex-wrap: wrap; justify-content: center; gap: 16px; }
  #ft-root .footer-links a { font-size: 13px; }
  #ft-root .footer-copy { font-size: 11px; margin-top: 16px; padding-top: 16px; }
}

@media (max-width: 420px) {
  #ft-root .hero h1 { font-size: 32px; }
  #ft-root .hero h1 .line2 { font-size: 0.5em; }
  #ft-root .hero-sub { font-size: 14px; }
  #ft-root .stat-number { font-size: 24px; }
  #ft-root .section-title { font-size: 22px; }
  #ft-root .funding-barometer { padding: 18px 14px; }
  #ft-root .funding-barometer h3 { font-size: 17px; }
  #ft-root .nav-inner { padding: 14px; min-height: 60px; }
  #ft-root .nav-logo { height: 32px; max-height: 32px; }
}`;
  document.head.appendChild(style);

  // ═══ 3. ACTIVATE BODY + HTML ═══
  document.documentElement.classList.add('ft-active');
  document.body.classList.add('ft-active');

  // ═══ 4. BUILD #ft-root CONTENT ═══
  var root = document.createElement('div');
  root.id = 'ft-root';
  root.innerHTML = `<!-- ═══ NAV ═══ -->
<nav class="nav" id="ftNav">
  <div class="nav-inner">
    <a href="https://www.pulseofp3.org" aria-label="Pulse of Perseverance Project">
      <img src="https://cdn.prod.website-files.com/69b02f65f0068e9fb16f09f7/69b02f65f0068e9fb16f0df1_P3%20Logo.svg" alt="The Pulse of Perseverance Project" class="nav-logo">
    </a>
    <div class="nav-links" id="ftNavLinks">
      <a href="#about">About</a>
      <a href="#why">Why It Matters</a>
      <a href="#sponsors">Sponsor</a>
      <a href="#partner">Why Partner</a>
      <a href="#apply" class="nav-cta">Become a Sponsor</a>
    </div>
    <button class="mobile-toggle" id="ftMobileToggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- ═══ HERO ═══ -->
<section class="hero">
  <div class="hero-video">
    <video autoplay muted loop playsinline>
      <source src="https://cdn.prod.website-files.com/69b02f65f0068e9fb16f09f7%2F69b04a6712d5fdbe9b4e51f8_p3-hero-bg_mp4.mp4" type="video/mp4">
    </video>
  </div>
  <div class="hero-overlay"></div>
  <div class="hero-mesh"></div>
  <div class="hero-content">
    <div class="hero-badge"><span class="pulse"></span> July 4, 2026 &middot; Chicago's South Side</div>
    <h1>Freedom to Thrive<span class="line2">A July 4th Experience</span></h1>
    <p class="hero-sub">Presented by <strong>The Fibroid Slayer</strong> in partnership with <strong>The Pulse of Perseverance Project (P3)</strong> &mdash; a curated day-party experience uniting culture, community, and purpose on Chicago's South Side.</p>
    <div class="hero-meta">
      <span>
        <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        July 4, 2026
      </span>
      <span>
        <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        835 E 75th St, Chicago
      </span>
      <span>
        <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        Limited Sponsorship Spots
      </span>
    </div>
    <div class="hero-actions">
      <a href="#apply" class="btn-primary">Become a Sponsor <span>&rarr;</span></a>
      <a href="#sponsors" class="btn-secondary">See Sponsorship Tiers</a>
    </div>
  </div>
</section>

<!-- ═══ STATS BAR ═══ -->
<div class="stats-bar">
  <div class="stats-inner">
    <div class="stat-item"><div class="stat-number" data-target="200" data-suffix="+">0</div><div class="stat-label">Expected Attendees</div></div>
    <div class="stat-item"><div class="stat-number" data-target="99" data-suffix="%">0</div><div class="stat-label">Mentorship Retention</div></div>
    <div class="stat-item"><div class="stat-number" data-target="1000" data-suffix="+">0</div><div class="stat-label">Students Reached</div></div>
    <div class="stat-item"><div class="stat-number" data-prefix="$" data-target="0">0</div><div class="stat-label">Barrier to Access</div></div>
  </div>
</div>

<!-- ═══ COMMUNITIES COMING TOGETHER (first content section, watermark photo grid) ═══ -->
<section class="communities" id="about">
  <div class="section-inner">
    <div class="section-label">A Day of Culture, Community &amp; Purpose</div>
    <div class="section-title">Communities Coming <span class="accent">Together</span></div>
    <div class="communities-grid">
      <div class="communities-text">
        <p>On <strong>July 4, 2026</strong>, we bring together professionals, leaders, and changemakers for a high-energy, curated day-party experience on Chicago's South Side &mdash; intentionally hosted in the community to bring visibility, resources, and opportunity directly where they matter most.</p>
        <p>This is more than a celebration. It's a <strong>convergence</strong> &mdash; women's health awareness, mentorship, and career access &mdash; woven authentically into a single, unforgettable experience.</p>
        <p>Real conversations. Real connections. Real community investment.</p>
      </div>
      <div class="communities-photos">
        <div class="communities-photo tall">
          <img src="https://tparis7.github.io/Freedom-To-Thrive/images/Hospital.jpeg" alt="Community health & care" loading="lazy">
        </div>
        <div class="communities-photo">
          <img src="https://tparis7.github.io/Freedom-To-Thrive/images/Communities2.jpg" alt="Community celebration" loading="lazy">
        </div>
        <div class="communities-photo">
          <img src="https://tparis7.github.io/Freedom-To-Thrive/images/Communities3.png" alt="Community at Freedom to Thrive" loading="lazy">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ TWO PLATFORMS ═══ -->
<section class="platforms">
  <div class="section-inner">
    <div class="section-label">The Partnership</div>
    <div class="section-title">Two Platforms. <span class="accent">One Shared Purpose.</span></div>
    <p class="section-subtitle">Two trusted brands aligning around culture, health, and opportunity &mdash; reaching audiences nationwide.</p>
    <div class="platforms-grid">
      <div class="platform-card">
        <div class="fc-vis">
          <img src="https://tparis7.github.io/Freedom-To-Thrive/images/Pierre2.jpg" alt="Dr. Pierre Johnson — The Fibroid Slayer" loading="lazy">
        </div>
        <div class="fc-body">
          <div class="platform-eyebrow">The Fibroid Slayer</div>
          <h3>Dr. Pierre Johnson</h3>
          <p>A trusted platform dedicated to <strong>raising awareness and improving access to care</strong> for women affected by fibroids. Built on women's health education, advocacy, and community-based engagement &mdash; reaching a loyal and growing audience nationwide.</p>
        </div>
      </div>
      <div class="platform-card alt">
        <div class="fc-vis">
          <img src="https://tparis7.github.io/Freedom-To-Thrive/images/P3%20present.jpg" alt="Pulse of Perseverance Project — Youth Career Accelerator" loading="lazy">
        </div>
        <div class="fc-body">
          <div class="platform-eyebrow">Pulse of Perseverance Project (P3)</div>
          <h3>Youth Career Accelerator</h3>
          <p>An innovative platform connecting students to professional mentors, career pathways, scholarships, and resources &mdash; impacting <strong>&gt;1,000 students nationwide</strong> with a <strong>99% mentorship retention rate</strong> and a rapidly expanding national footprint.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ THE VISION (4 icon items) ═══ -->
<section class="vision">
  <div class="vision-bg"></div>
  <div class="section-inner">
    <div class="section-label">The Vision</div>
    <div class="section-title">A Day of Culture, Community &amp; <span class="accent">Purpose</span></div>
    <p class="section-subtitle">Designed for impact &mdash; from the energy on the dance floor to the conversations that shape what comes next.</p>
    <div class="vision-grid">
      <div class="vision-item">
        <div class="vision-icon">
          <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
        </div>
        <div>
          <h4>200+ Attendees</h4>
          <p>Expected turnout of professionals, advocates, and community leaders.</p>
        </div>
      </div>
      <div class="vision-item">
        <div class="vision-icon">
          <svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
        </div>
        <div>
          <h4>Premium Experience</h4>
          <p>DJ, curated atmosphere, and a high-engagement networking environment.</p>
        </div>
      </div>
      <div class="vision-item">
        <div class="vision-icon">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </div>
        <div>
          <h4>Health Awareness</h4>
          <p>Integrated health education woven authentically into the event.</p>
        </div>
      </div>
      <div class="vision-item">
        <div class="vision-icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
        </div>
        <div>
          <h4>Meaningful Impact</h4>
          <p>Real conversations, real connections, real community investment.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ WHY THIS EVENT MATTERS ═══ -->
<section class="why" id="why">
  <div class="section-inner">
    <div class="section-label">Why This Event Matters</div>
    <div class="section-title">Bridging the Gap, <span class="accent">Where It Matters Most.</span></div>
    <div class="why-text">
      <p>Access to <strong>healthcare education</strong> and <strong>professional opportunity</strong> remains deeply uneven across communities. <strong>This event is designed to bridge that gap</strong> &mdash; intentionally hosted on Chicago's South Side to bring visibility, resources, and opportunity directly into the community.</p>
    </div>
    <div class="why-cards">
      <div class="why-card">
        <div class="why-card-icon">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </div>
        <h3>Health Equity</h3>
        <p>Women's health awareness through The Fibroid Slayer &mdash; meeting women where they are with culturally aware education and direct access to care.</p>
      </div>
      <div class="why-card">
        <div class="why-card-icon maroon">
          <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h3>Career Access</h3>
        <p>Mentorship and professional pathways through P3 &mdash; opening real doors to scholarships, internships, and the people who shape careers.</p>
      </div>
      <div class="why-card">
        <div class="why-card-icon coral">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
        </div>
        <h3>Community Presence</h3>
        <p>Culturally relevant visibility where it matters most &mdash; resources and recognition that show up inside the community, not at a distance from it.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══ SPONSORSHIP TIERS ═══ -->
<section class="sponsors" id="sponsors">
  <div class="section-inner">
    <div class="section-label">Sponsorship</div>
    <div class="section-title">Sponsorship Tiers &amp; <span class="accent">Benefits</span></div>
    <p class="section-subtitle">Four ways to align your brand with culture, health, and community on Chicago's South Side.</p>

    <div class="tier-grid">
      <div class="tier-card">
        <div class="tier-badge community">
          <svg viewBox="0 0 24 24"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
        </div>
        <div class="tier-name">Community</div>
        <div class="tier-price"><span>$</span>1,000</div>
        <ul class="tier-perks">
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> 2&ndash;4 Event Tickets</li>
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> Logo Placement</li>
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> Event Recognition</li>
        </ul>
        <a href="#apply" class="btn-tier">Become a Sponsor</a>
      </div>

      <div class="tier-card">
        <div class="tier-badge silver">
          <svg viewBox="0 0 24 24"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>
        </div>
        <div class="tier-name">Silver</div>
        <div class="tier-price"><span>$</span>3,500</div>
        <ul class="tier-perks">
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> 6 Event Tickets</li>
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> Logo Placement</li>
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> Event Recognition</li>
        </ul>
        <a href="#apply" class="btn-tier">Become a Sponsor</a>
      </div>

      <div class="tier-card">
        <div class="tier-badge gold">
          <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <div class="tier-name">Gold</div>
        <div class="tier-price"><span>$</span>7,500</div>
        <ul class="tier-perks">
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> 8 Event Tickets</li>
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> Prominent Logo Placement</li>
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> Social Media Spotlight</li>
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> On-Site Activation</li>
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> Event Recognition</li>
        </ul>
        <a href="#apply" class="btn-tier">Become a Sponsor</a>
      </div>

      <div class="tier-card featured">
        <div class="tier-badge presenting">
          <svg viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M6 4h12v6a6 6 0 01-12 0V4z"/><path d="M10 17h4"/><path d="M12 15v2"/><path d="M8 21h8"/><path d="M9 21v-2a3 3 0 016 0v2"/></svg>
        </div>
        <div class="tier-name">Presenting</div>
        <div class="tier-price"><span>$</span>15,000</div>
        <ul class="tier-perks">
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> <span class="strong-perk">10 VIP</span> Tickets</li>
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> <span class="strong-perk">Premier</span> Logo Placement</li>
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> Dedicated Social Media Spotlight</li>
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> Speaking Opportunity</li>
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> <span class="strong-perk">Premium</span> On-Site Activation</li>
          <li><span class="check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span> Event Recognition</li>
        </ul>
        <a href="#apply" class="btn-tier">Claim Presenting</a>
      </div>
    </div>

  </div>
</section>

<!-- ═══ ADD-ONS ═══ -->
<section class="addons">
  <div class="section-inner">
    <div class="section-label">Premium Add-Ons</div>
    <div class="section-title">High-Impact <span class="accent">Activations</span></div>
    <p class="section-subtitle">Enhance your visibility at the moments that matter most. These high-impact placements put your brand center stage during peak engagement.</p>
    <div class="addons-grid">
      <div class="addon-card">
        <div class="addon-icon">
          <svg viewBox="0 0 24 24"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10l-1 7a4 4 0 01-8 0L7 4z"/></svg>
        </div>
        <div>
          <h4>Bar Sponsor <span class="price">$5,000</span></h4>
          <p>Maximum visibility at the most trafficked activation zone.</p>
        </div>
      </div>
      <div class="addon-card">
        <div class="addon-icon">
          <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <div>
          <h4>VIP Section Sponsor <span class="price">$4,000</span></h4>
          <p>Premium brand presence in the exclusive VIP experience.</p>
        </div>
      </div>
      <div class="addon-card">
        <div class="addon-icon">
          <svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
        </div>
        <div>
          <h4>Entertainment Sponsor <span class="price">$3,000</span></h4>
          <p>Brand alignment with the DJ and live entertainment moments.</p>
        </div>
      </div>
      <div class="addon-card">
        <div class="addon-icon">
          <svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
        </div>
        <div>
          <h4>Photo Booth Sponsor <span class="price">$2,000</span></h4>
          <p>Logo on every photo taken &mdash; lasting impressions, literally.</p>
        </div>
      </div>
    </div>

    <!-- ═══ FUNDING BAROMETER ═══ -->
    <div class="funding-barometer" id="ftBarometer" data-raised="0" data-goal="50000">
      <div class="barometer-grid">
        <div class="barometer-copy">
          <div class="barometer-eyebrow">
            <span class="barometer-dot"></span>
            Event Funding Target
          </div>
          <h3>Help Us Light the Fuse</h3>
          <p><strong>$10,000</strong> is the minimum to hold the event &mdash; covering venue, talent, hospitality, and on-site activation. Our stretch goal of <strong>$50,000</strong> unlocks the full Freedom to Thrive experience.</p>
        </div>
        <div class="barometer-bar">
          <div class="barometer-track">
            <div class="barometer-minimum" aria-label="$10,000 minimum threshold">
              <span class="barometer-minimum-label">Min $10K</span>
            </div>
            <div class="barometer-fill" id="ftBarometerFill" style="width: 0%"></div>
          </div>
          <div class="barometer-labels">
            <div class="raised"><strong>$0</strong> raised so far</div>
            <div class="goal">Goal: <strong>$50,000</strong></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ AUDIENCE ═══ -->
<section class="audience">
  <div class="section-inner">
    <div class="section-label">Our Audience</div>
    <div class="section-title">Who You'll <span class="accent">Reach.</span></div>
    <p class="section-subtitle">A socially connected, culturally relevant audience that values both experience and impact.</p>
    <div class="audience-grid">
      <div class="audience-list">
        <div class="audience-pill">
          <div class="ap-icon">
            <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div>
            <h4>Young Professionals</h4>
            <p>Ages 25–45, career-driven and community-invested.</p>
          </div>
        </div>
        <div class="audience-pill">
          <div class="ap-icon">
            <svg viewBox="0 0 24 24"><path d="M11 2v2"/><path d="M5 2v6a4 4 0 008 0V2"/><path d="M9 10v6a5 5 0 0010 0v-3"/><circle cx="19" cy="13" r="2"/></svg>
          </div>
          <div>
            <h4>Healthcare Professionals</h4>
            <p>Practitioners and advocates in the health space.</p>
          </div>
        </div>
        <div class="audience-pill">
          <div class="ap-icon">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div>
            <h4>Women Leaders</h4>
            <p>Advocates, entrepreneurs, and creatives.</p>
          </div>
        </div>
        <div class="audience-pill">
          <div class="ap-icon">
            <svg viewBox="0 0 24 24"><path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>
          </div>
          <div>
            <h4>Community Influencers</h4>
            <p>South Side voices shaping culture and conversation.</p>
          </div>
        </div>
      </div>
      <div class="audience-watermark"></div>
    </div>
  </div>
</section>

<!-- ═══ APPLY (Single Event Sponsor tab) ═══ -->
<section class="apply" id="apply">
  <div class="section-inner">
    <div class="section-label">Become a Sponsor</div>
    <div class="section-title">Apply to Sponsor</div>
    <p class="section-subtitle">We are finalizing a limited group of partners for this event &mdash; spots are limited. Reach out and a member of our team will be in touch within 48 hours.</p>

    <div class="apply-wrap">
      <div class="apply-card">
        <div class="apply-heading-wrap">
          <div class="apply-heading">Event Sponsor Application</div>
        </div>
        <p class="apply-lede">Tell us how you'd like to partner with <strong>Freedom to Thrive</strong>. We'll respond within 48 hours.</p>
        <form id="ft-form-sponsor" class="ft-apply-form" novalidate>
          <div class="apply-grid">
            <div class="apply-field">
              <label class="apply-label">Your Name <span class="req">*</span></label>
              <input type="text" name="contactName" class="apply-input" placeholder="Jane Smith" required>
            </div>
            <div class="apply-field">
              <label class="apply-label">Email <span class="req">*</span></label>
              <input type="email" name="contactEmail" class="apply-input" placeholder="jane@company.com" required>
            </div>
            <div class="apply-field">
              <label class="apply-label">Company / Organization <span class="req">*</span></label>
              <input type="text" name="company" class="apply-input" placeholder="Your company" required>
            </div>
            <div class="apply-field">
              <label class="apply-label">Title / Role</label>
              <input type="text" name="title" class="apply-input" placeholder="VP of Community Impact">
            </div>
            <div class="apply-field full">
              <label class="apply-label">Sponsorship Tier <span class="req">*</span></label>
              <select name="tier" class="apply-select" required>
                <option value="">Select&hellip;</option>
                <option>Community &mdash; $1,000</option>
                <option>Silver &mdash; $3,500</option>
                <option>Gold &mdash; $7,500</option>
                <option>Presenting &mdash; $15,000 (exclusive)</option>
                <option>Bar Sponsor &mdash; $5,000</option>
                <option>VIP Section Sponsor &mdash; $4,000</option>
                <option>Entertainment Sponsor &mdash; $3,000</option>
                <option>Photo Booth Sponsor &mdash; $2,000</option>
                <option>In-Kind / Product or Service</option>
                <option>Custom &mdash; Let's talk</option>
              </select>
            </div>
            <div class="apply-field full">
              <label class="apply-label">Anything else we should know?</label>
              <textarea name="notes" class="apply-textarea" rows="3" placeholder="Goals, timing, specific asks&hellip;"></textarea>
            </div>
          </div>
          <button type="submit" class="apply-submit">Submit Application <span>&rarr;</span></button>
          <div class="apply-fine">By submitting, you agree to receive event correspondence. We'll respond within 48 hours.</div>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- ═══ WHY PARTNER WITH US ═══ -->
<section class="partner" id="partner">
  <div class="section-inner">
    <div class="section-label">Why Partner With Us</div>
    <div class="section-title">More Than a Sponsorship. <span class="accent">A Strategic Alignment.</span></div>
    <p class="section-subtitle">Purpose-driven work that creates lasting community impact &mdash; and a brand presence people actually remember.</p>
    <div class="partner-grid">
      <div class="partner-card">
        <div class="partner-arrow"><svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
        <h4>Brand Alignment</h4>
        <p>Associate your organization with health equity, mentorship, and community investment &mdash; values that resonate deeply with today's consumers.</p>
      </div>
      <div class="partner-card">
        <div class="partner-arrow"><svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
        <h4>Direct Engagement</h4>
        <p>Sponsors are integrated into the experience &mdash; not positioned as passive observers. Your brand lives inside the moments people remember.</p>
      </div>
      <div class="partner-card">
        <div class="partner-arrow"><svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
        <h4>Measurable Visibility</h4>
        <p>Logo placement, social media spotlights, on-site activations, and event recognition ensure your investment is seen and felt throughout.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══ SUPPORT THE MISSION (closing donate CTA — clones Pulse Summit .donate) ═══ -->
<section class="donate">
  <div class="donate-bg"></div>
  <div class="donate-overlay"></div>
  <div class="donate-inner">
    <div class="donate-heart">
      <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
    </div>
    <h2>Support the Mission</h2>
    <p>Your gift fuels P3 &mdash; the mobile-first career accelerator connecting underserved students with mentors, scholarships, and workforce opportunities through AI-powered smart matching.</p>
    <a href="https://kindest.com/the-pulse-of-perseverance" target="_blank" rel="noopener" class="btn-primary" style="display:inline-flex;">Donate via Kindest <span>&rarr;</span></a>
  </div>
</section>

<!-- ═══ FOOTER ═══ -->
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <img src="https://cdn.prod.website-files.com/69b02f65f0068e9fb16f09f7/69b02f65f0068e9fb16f0df1_P3%20Logo.svg" alt="P3">
    </div>
    <div class="footer-links">
      <a href="https://www.pulseofp3.org" target="_blank">Website</a>
      <a href="https://www.pulseofp3.org/about" target="_blank">About P3</a>
      <a href="mailto:team@pulseofp3.org">Contact</a>
    </div>
    <div class="footer-copy">&copy; 2026 Pulse of Perseverance Project &middot; Freedom to Thrive presented in partnership with The Fibroid Slayer.</div>
  </div>
</footer>`;
  document.body.appendChild(root);

  // ═══ 5. INITIALIZE BEHAVIORS ═══
  function initFreedom() {
    // Nav scroll
      var nav = document.getElementById('ftNav');
      window.addEventListener('scroll', function() {
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
      }, { passive: true });

      // Mobile menu toggle
      var toggle = document.getElementById('ftMobileToggle');
      var links = document.getElementById('ftNavLinks');
      if (toggle && links) {
        toggle.addEventListener('click', function() {
          toggle.classList.toggle('open');
          links.classList.toggle('open');
        });
        links.querySelectorAll('a').forEach(function(a) {
          a.addEventListener('click', function() {
            toggle.classList.remove('open');
            links.classList.remove('open');
          });
        });
      }

      // Smooth scroll for internal anchors
      document.querySelectorAll('a[href^="#"]').forEach(function(a) {
        a.addEventListener('click', function(e) {
          var href = a.getAttribute('href');
          if (!href || href === '#') return;
          var t = document.querySelector(href);
          if (t) {
            e.preventDefault();
            window.scrollTo({
              top: t.getBoundingClientRect().top + window.pageYOffset - 72,
              behavior: 'smooth'
            });
          }
        });
      });

      // Stat counter animation
      var statsInner = document.querySelector('.stats-inner');
      if (statsInner && 'IntersectionObserver' in window) {
        var statsObserver = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (!entry.isIntersecting) return;
            entry.target.querySelectorAll('.stat-number').forEach(function(el) {
              var target = parseInt(el.dataset.target, 10);
              var prefix = el.dataset.prefix || '';
              var suffix = el.dataset.suffix || '';
              var current = 0;
              var step = Math.max(1, Math.ceil(target / 25));
              var timer = setInterval(function() {
                current += step;
                if (current >= target) { current = target; clearInterval(timer); }
                el.textContent = prefix + current + suffix;
              }, 40);
            });
            statsObserver.unobserve(entry.target);
          });
        }, { threshold: 0.5 });
        statsObserver.observe(statsInner);
      }

      // Barometer fill animation
      var barometer = document.getElementById('ftBarometer');
      var fill = document.getElementById('ftBarometerFill');
      if (barometer && fill && 'IntersectionObserver' in window) {
        var bObs = new IntersectionObserver(function(entries) {
          entries.forEach(function(e) {
            if (!e.isIntersecting) return;
            var raised = parseFloat(barometer.getAttribute('data-raised') || '0');
            var goal = parseFloat(barometer.getAttribute('data-goal') || '50000');
            var pct = Math.max(0, Math.min(100, (raised / goal) * 100));
            fill.style.width = (pct > 0 ? pct : 0) + '%';
            bObs.unobserve(e.target);
          });
        }, { threshold: 0.3 });
        bObs.observe(barometer);
      }

      // Scroll-triggered fade-in
      if ('IntersectionObserver' in window) {
        var fadeObserver = new IntersectionObserver(function(entries) {
          entries.forEach(function(e) {
            if (e.isIntersecting) {
              e.target.style.opacity = '1';
              e.target.style.transform = 'translateY(0)';
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        document.querySelectorAll('.platform-card, .vision-item, .why-card, .audience-pill, .tier-card, .addon-card, .partner-card, .funding-barometer, .apply-wrap').forEach(function(el) {
          el.style.opacity = '0';
          el.style.transform = 'translateY(24px)';
          el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          fadeObserver.observe(el);
        });
      }

      // Sponsor form — accepts submit and confirms (Google Form wiring TBD)
      var form = document.getElementById('ft-form-sponsor');
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          var btn = form.querySelector('.apply-submit');
          var originalBtn = btn.innerHTML;
          var missing = false;
          form.querySelectorAll('[required]').forEach(function(el) {
            if (!el.value || !el.value.trim()) {
              el.style.borderColor = '#c13535';
              missing = true;
            } else {
              el.style.borderColor = '';
            }
          });
          if (missing) {
            btn.classList.add('err');
            btn.innerHTML = 'Please fill required fields';
            setTimeout(function() {
              btn.classList.remove('err');
              btn.innerHTML = originalBtn;
            }, 2500);
            return;
          }
          btn.disabled = true;
          btn.innerHTML = 'Sending&hellip;';
          // Simulate submission — wire to Google Form / endpoint when finalized
          setTimeout(function() {
            btn.classList.add('sent');
            btn.innerHTML = 'Application sent ✓';
            form.reset();
            setTimeout(function() {
              btn.disabled = false;
              btn.classList.remove('sent');
              btn.innerHTML = originalBtn;
            }, 3500);
          }, 700);
        });
      }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFreedom);
  } else {
    initFreedom();
  }
})();
