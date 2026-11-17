(() => {
  'use strict';

  const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const onReduceChange = [];
  reduceQuery.addEventListener('change', () => onReduceChange.forEach((fn) => fn()));

  /* ------------------------------------------------------------------
     Copy: English lives in the HTML, Spanish here.
  ------------------------------------------------------------------ */
  const ES = {
    skip: 'Saltar al contenido',
    name: 'Francisco José Bilbao',
    'nav.about': 'Perfil',
    'nav.experience': '+ Experiencia',
    'nav.toolkit': 'Herramientas',
    'nav.contact': 'Contacto',
    pdf: 'PDF ↓',
    'hero.role': 'Analista de Pricing & Routing Operations',
    'hero.where': 'Mercado Pago — Buenos Aires, Argentina',
    'hero.h1': 'Francisco José Bilbao — Analista de Pricing & Routing Operations',
    'hero.cipher': 'Causa|Raíz|Primero',
    'hero.cipherAria': 'Causa raíz primero. Repetir la animación.',
    'hero.note': 'hola, soy Fran',
    'hero.lede': 'Investigo de punta a punta los problemas de procesamiento de pagos en seis mercados de LATAM, y convierto grandes volúmenes de datos transaccionales en decisiones accionables para los equipos.',
    'hero.hint': 'Mové el cursor para pintar',
    'about.title': 'Perfil',
    'about.big': 'Analista de operaciones de pagos y pricing. Trabajo donde se cruzan el router, los adquirentes y los datos.',
    'about.p1': 'Experiencia práctica investigando de punta a punta problemas de procesamiento de transacciones, coordinando con equipos internos y convirtiendo grandes volúmenes de datos en reportes accionables.',
    'about.p2': 'Combino rigor analítico (SQL, BigQuery, Tableau) con manejo fluido de herramientas de IA (Claude, n8n, Fury), sobre una base previa en gestión de cuentas y cobranzas en el sector financiero.',
    'facts.base': 'Ubicación',
    'facts.baseV': 'Buenos Aires, Argentina',
    'facts.now': 'Hoy',
    'facts.nowV': 'Mercado Pago, desde sep 2025',
    'facts.edu': 'Formación',
    'facts.eduV': 'Lic. en Gestión de Tecnología de la Información, UADE — en curso, 2021–2026 (est.)',
    'facts.lang': 'Idiomas',
    'facts.langV': 'Español, nativo · Inglés, avanzado (Cambridge First Certificate, 2019)',
    'exp.title': 'Experiencia',
    'mp.dates': 'Sep 2025 — Actualidad',
    'mp.role': 'Analista de Pricing & Routing Operations',
    'mp.b1': 'Configuro y diagnostico el router de pagos en seis sites de LATAM (Argentina, México, Colombia, Perú, Chile, Uruguay): segmentos, perfiles, orden de prioridad y filtros por marca de tarjeta, emisor, BIN, marketplace y MCC.',
    'mp.b2': 'Llevo de punta a punta la investigación de incidentes de procesamiento de pagos — variaciones de tasa de aprobación, desempeño de adquirentes y emisores, concentración de riesgo — identificando la causa raíz e impulsando la resolución entre equipos.',
    'mp.b3': 'Analizo grandes volúmenes de datos transaccionales en BigQuery (tablas de trazabilidad de pagos y preferencias de checkout) para validar hipótesis con una metodología estructurada de causa raíz.',
    'mp.b4': 'Uso herramientas de IA (Claude, n8n, Fury) para acelerar el análisis de datos y automatizar flujos recurrentes.',
    'mp.b5': 'Hago triage de alertas operativas en tiempo real y coordino con analistas y stakeholders para resolver o escalar incidentes.',
    'mp.b6': 'Construyo dashboards de KPIs — tasa de aprobación, TPV, tendencias de rechazo por site — para comunicar el desempeño al equipo.',
    'mp.b7': 'Configuro alertas de monitoreo y observabilidad sobre la infraestructura del gateway para detectar problemas de procesamiento a tiempo.',
    'ml.dates': 'Ago 2022 — Ago 2025',
    'ml.role': 'Representante de Customer Experience',
    'ml.org': 'MercadoLibre · Buenos Aires · Junior → Semi Senior → Senior',
    'ml.s3t': 'Senior',
    'ml.s3': 'Referente del equipo: acompañamiento y feedback continuo a pares. Apliqué análisis para mejorar métricas del equipo y procesos operativos, y ayudé a construir una mirada transversal del negocio entre áreas.',
    'ml.s2t': 'Semi Senior',
    'ml.s2': 'Gestioné solicitudes de una línea de servicio exclusiva de Mercado Envíos a través de un portal CRM. Analicé métricas grupales en dashboards de Tableau basados en SQL y preparé resúmenes semanales de desempeño y presentaciones para líderes.',
    'ml.s1t': 'Junior',
    'ml.s1': 'Atención al cliente de una línea de servicio exclusiva de Mercado Envíos por canales offline y chat en vivo.',
    'pc.dates': 'Mar 2021 — Feb 2022',
    'pc.role': 'Ejecutivo de Cuentas',
    'pc.b1': 'Gestioné una cartera de cuentas de clientes en el área de cobranzas — una primera base en operaciones financieras y comunicación profesional con clientes.',
    'kit.title': 'Herramientas',
    'kit.g1': 'Analíticas y técnicas',
    'kit.rca': 'Análisis de datos e investigación de causa raíz',
    'kit.kpi': 'Reportes de KPIs y dashboards',
    'kit.pay': 'Procesamiento y ruteo de pagos',
    'kit.fin': 'Análisis financiero',
    'kit.g2': 'IA y automatización',
    'kit.g2note': 'Las uso para analizar datos operativos, automatizar flujos recurrentes y acercar hallazgos a los stakeholders.',
    'kit.g3': 'Forma de trabajo',
    'kit.w1': 'Coordinación entre equipos',
    'kit.w2': 'Optimización de procesos',
    'kit.w3': 'Triage y escalamiento de incidentes',
    'kit.w4': 'Desarrollo de equipo',
    'contact.title': 'Contacto',
    'contact.note': '¡hablemos!',
    'foot.top': 'Volver arriba ↑',
  };
  const EN = {};
  const EN_ARIA = {};

  /* ------------------------------------------------------------------
     Scramble: the readable label is shown before and after every run.
     750ms, cubic-bezier(.165,.84,.44,1); each word gets an interval
     proportional to its length; inside a word, character j of L is
     noise only while j/(2L-1) < s < (L+j)/(2L-1).
  ------------------------------------------------------------------ */
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const DURATION = 750;
  const FRAME_MS = 1000 / 30;
  const REFRESH_MS = 50;

  function bezierEase(x1, y1, x2, y2) {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
    const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const fx = (t) => ((ax * t + bx) * t + cx) * t;
    const fy = (t) => ((ay * t + by) * t + cy) * t;
    const dfx = (t) => (3 * ax * t + 2 * bx) * t + cx;
    return (x) => {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      let t = x;
      for (let i = 0; i < 8; i++) {
        const err = fx(t) - x;
        if (Math.abs(err) < 1e-5) break;
        const d = dfx(t);
        if (Math.abs(d) < 1e-6) break;
        t -= err / d;
      }
      return fy(Math.min(1, Math.max(0, t)));
    };
  }
  const ease = bezierEase(0.165, 0.84, 0.44, 1);
  const clamp01 = (x) => Math.max(0, Math.min(1, x));

  class Scramble {
    constructor(el) {
      this.el = el;
      this.lines = el.hasAttribute('data-scramble-lines');
      this.raf = 0;
      this.build(el.textContent.trim());
      this.trigger = this.trigger.bind(this);
      this.tick = this.tick.bind(this);
      el.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'touch') this.trigger(); });
      el.addEventListener('focus', this.trigger);
      el.addEventListener('click', this.trigger);
    }

    /* label: words separated by spaces, or by "|" for stacked lines */
    build(label) {
      this.stop();
      const el = this.el;
      const parts = this.lines ? label.split('|') : label.split(/(\s+)/);
      const readable = this.lines ? parts.join(' ') : label;
      if (!el.hasAttribute('aria-label') || el.dataset.autoAria) {
        el.setAttribute('aria-label', readable);
        el.dataset.autoAria = '1';
      }
      el.textContent = '';
      this.words = [];
      let offset = 0;
      for (const part of parts) {
        if (!this.lines && /^\s+$/.test(part)) { el.appendChild(document.createTextNode(' ')); continue; }
        if (!part) continue;
        const w = document.createElement('span');
        w.className = this.lines ? 'w line' : 'w';
        w.setAttribute('aria-hidden', 'true');
        const chars = [];
        for (const ch of part) {
          const c = document.createElement('span');
          c.className = 'c';
          c.textContent = ch;
          w.appendChild(c);
          chars.push({ node: c, ch, noise: false });
        }
        el.appendChild(w);
        this.words.push({ chars, offset, len: chars.length });
        offset += chars.length;
      }
      this.total = offset;
    }

    resolve() {
      for (const w of this.words) for (const c of w.chars) {
        if (c.noise || c.node.textContent !== c.ch) { c.node.textContent = c.ch; c.node.classList.remove('is-noise'); c.noise = false; }
      }
    }

    stop() {
      if (this.raf) cancelAnimationFrame(this.raf);
      this.raf = 0;
      if (this.words) this.resolve();
    }

    trigger() {
      this.stop();
      if (reduceQuery.matches || !this.total) return;
      this.elapsed = 0;
      this.last = 0;
      this.sinceDraw = FRAME_MS;
      this.sinceRefresh = REFRESH_MS;
      this.raf = requestAnimationFrame(this.tick);
    }

    tick(now) {
      /* accumulate clamped deltas so a hidden tab never causes a jump */
      const dt = this.last ? Math.min(100, now - this.last) : 0;
      this.last = now;
      this.elapsed += dt;
      this.sinceDraw += dt;
      this.sinceRefresh += dt;
      if (this.elapsed >= DURATION) { this.raf = 0; this.resolve(); return; }
      if (this.sinceDraw >= FRAME_MS) {
        this.sinceDraw = 0;
        const refresh = this.sinceRefresh >= REFRESH_MS;
        if (refresh) this.sinceRefresh = 0;
        const p = ease(this.elapsed / DURATION);
        for (const w of this.words) {
          const a = w.offset / this.total, b = (w.offset + w.len) / this.total;
          const s = clamp01((p - a) / (b - a));
          const L = w.len, span = 2 * L - 1;
          for (let j = 0; j < L; j++) {
            const c = w.chars[j];
            const noisy = s > j / span && s < (L + j) / span;
            if (noisy) {
              if (!c.noise || refresh) c.node.textContent = ALPHABET[(Math.random() * ALPHABET.length) | 0];
              if (!c.noise) { c.node.classList.add('is-noise'); c.noise = true; }
            } else if (c.noise) {
              c.node.textContent = c.ch; c.node.classList.remove('is-noise'); c.noise = false;
            }
          }
        }
      }
      this.raf = requestAnimationFrame(this.tick);
    }
  }

  const scramblers = new Map();
  document.querySelectorAll('[data-scramble]').forEach((el) => scramblers.set(el, new Scramble(el)));
  onReduceChange.push(() => { if (reduceQuery.matches) scramblers.forEach((s) => s.stop()); });

  /* ------------------------------------------------------------------
     Language toggle
  ------------------------------------------------------------------ */
  const i18nEls = [...document.querySelectorAll('[data-i18n]')];
  for (const el of i18nEls) {
    const s = scramblers.get(el);
    EN[el.dataset.i18n] = s
      ? (el.hasAttribute('data-scramble-lines') ? s.words.map((w) => w.chars.map((c) => c.ch).join('')).join('|') : el.getAttribute('aria-label'))
      : el.textContent;
    if (el.dataset.i18nAria) EN_ARIA[el.dataset.i18nAria] = el.getAttribute('aria-label');
  }
  const EN_TITLE = document.title;
  const ES_TITLE = 'Francisco Bilbao — Analista de Pricing & Routing Operations';

  function setLang(lang) {
    const dict = lang === 'es' ? ES : EN;
    document.documentElement.lang = lang;
    document.title = lang === 'es' ? ES_TITLE : EN_TITLE;
    for (const el of i18nEls) {
      const text = dict[el.dataset.i18n];
      if (text == null) continue;
      const s = scramblers.get(el);
      if (el.dataset.i18nAria) {
        el.setAttribute('aria-label', (lang === 'es' ? ES : EN_ARIA)[el.dataset.i18nAria]);
        delete el.dataset.autoAria;
      }
      if (s) s.build(text); else el.textContent = text;
    }
    document.querySelectorAll('.lang__btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    try { localStorage.setItem('lang', lang); } catch (e) { /* storage unavailable */ }
  }
  document.querySelectorAll('.lang__btn').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  let startLang = 'en';
  try { startLang = localStorage.getItem('lang') || ''; } catch (e) { startLang = ''; }
  if (startLang !== 'en' && startLang !== 'es') startLang = (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
  if (startLang === 'es') setLang('es');

  document.getElementById('pdf').addEventListener('click', () => window.print());

  /* ------------------------------------------------------------------
     Hero: giant outlined letters that the pointer paints with red light.
     A low-res trail buffer fades every frame; aged stamps along the
     pointer path are added to it, and the trail masks a red fill.
  ------------------------------------------------------------------ */
  const hero = document.querySelector('.hero');
  const canvas = hero.querySelector('.hero__canvas');
  const ctx = canvas.getContext('2d');
  const WORD = 'FRAN';
  const TRAIL_W = 216;
  const MAX_POINTS = 400;
  const LIFE = 2000;

  const css = getComputedStyle(document.documentElement);
  const COLORS = {
    panel: css.getPropertyValue('--panel').trim() || '#e7e6e0',
    ink: css.getPropertyValue('--ink').trim() || '#14203a',
    red: css.getPropertyValue('--red').trim() || '#b5140f',
  };

  const trail = document.createElement('canvas');
  const tctx = trail.getContext('2d');
  const paint = document.createElement('canvas');
  const pctx = paint.getContext('2d');

  const stamp = document.createElement('canvas');
  stamp.width = stamp.height = 32;
  {
    const s = stamp.getContext('2d');
    const g = s.createRadialGradient(16, 16, 0, 16, 16, 16);
    [[0, 1], [0.2, 0.8], [0.4, 0.5], [0.6, 0.25], [0.8, 0.08], [1, 0]].forEach(([r, a]) => g.addColorStop(r, `rgba(255,255,255,${a})`));
    s.fillStyle = g;
    s.fillRect(0, 0, 32, 32);
  }

  let W = 0, H = 0, dpr = 1, fontPx = 0, baseY = 0;
  let points = [];
  let prev = null;
  let raf = 0, last = 0, clock = 0, idleFor = 0;
  let visible = true;

  function layout() {
    const r = hero.getBoundingClientRect();
    W = Math.max(1, Math.round(r.width));
    H = Math.max(1, Math.round(r.height));
    dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = paint.width = Math.round(W * dpr);
    canvas.height = paint.height = Math.round(H * dpr);
    trail.width = TRAIL_W;
    trail.height = Math.max(1, Math.round(TRAIL_W * H / W));
    /* size the word to ~112% of the hero width so it bleeds off the edges */
    ctx.font = `300 100px "Inter Tight", "Helvetica Neue", Arial, sans-serif`;
    const m = ctx.measureText(WORD);
    fontPx = Math.min((W * 1.12) / m.width * 100, H * 1.25);
    baseY = H * 0.5 + fontPx * 0.36;
    points = [];
    prev = null;
    drawStatic();
  }

  function setFont(c) {
    c.font = `300 ${fontPx}px "Inter Tight", "Helvetica Neue", Arial, sans-serif`;
    c.textAlign = 'center';
    c.textBaseline = 'alphabetic';
  }

  function drawLetters(withPaint) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    setFont(ctx);
    ctx.fillStyle = COLORS.panel;
    ctx.fillText(WORD, W / 2, baseY);
    if (withPaint) {
      pctx.setTransform(1, 0, 0, 1, 0, 0);
      pctx.globalCompositeOperation = 'source-over';
      pctx.clearRect(0, 0, paint.width, paint.height);
      pctx.imageSmoothingEnabled = true;
      pctx.drawImage(trail, 0, 0, paint.width, paint.height);
      pctx.globalCompositeOperation = 'source-in';
      pctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      setFont(pctx);
      pctx.fillStyle = COLORS.red;
      pctx.fillText(WORD, W / 2, baseY);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(paint, 0, 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = COLORS.ink;
    ctx.globalAlpha = 0.55;
    ctx.strokeText(WORD, W / 2, baseY);
    ctx.globalAlpha = 1;
  }

  function drawStatic() {
    tctx.clearRect(0, 0, trail.width, trail.height);
    drawLetters(false);
  }

  function frame(now) {
    raf = 0;
    const dt = last ? Math.min(100, now - last) : 16.667;
    last = now;
    clock += dt; /* own clock: pauses with the loop, so ages never jump */

    /* fade the trail */
    tctx.globalCompositeOperation = 'destination-out';
    tctx.fillStyle = `rgba(0,0,0,${1 - Math.pow(0.8, Math.max(0.2, dt / 16.667))})`;
    tctx.fillRect(0, 0, trail.width, trail.height);

    /* add aged stamps */
    points = points.filter((p) => clock - p.t <= LIFE);
    tctx.globalCompositeOperation = 'lighter';
    for (const p of points) {
      const e = 1 - (clock - p.t) / LIFE;
      const s = 0.5 * Math.sin(e * Math.PI) + 0.5;
      const radius = 0.13 * TRAIL_W * (0.5 + 0.5 * s);
      tctx.globalAlpha = e * e * 0.1;
      tctx.drawImage(stamp, p.x * trail.width - radius, p.y * trail.height - radius, radius * 2, radius * 2);
    }
    tctx.globalAlpha = 1;

    drawLetters(true);

    idleFor = points.length ? 0 : idleFor + dt;
    if (idleFor > 700) { drawStatic(); last = 0; return; } /* trail finished: stop rendering */
    schedule();
  }

  function schedule() {
    if (!raf && visible && !document.hidden && !reduceQuery.matches) raf = requestAnimationFrame(frame);
  }

  function onPointer(ev) {
    if (reduceQuery.matches) return;
    const r = hero.getBoundingClientRect();
    const x = (ev.clientX - r.left) / r.width;
    const y = (ev.clientY - r.top) / r.height;
    if (x < 0 || x > 1 || y < 0 || y > 1) { prev = null; return; }
    if (prev) {
      const dist = Math.hypot(x - prev.x, y - prev.y);
      if (dist > 0.001) {
        const n = Math.ceil(30 * dist);
        for (let i = 1; i <= n; i++) {
          const k = i / n;
          points.push({ x: prev.x + (x - prev.x) * k, y: prev.y + (y - prev.y) * k, t: clock });
        }
        if (points.length > MAX_POINTS) points.splice(0, points.length - MAX_POINTS);
        prev = { x, y };
      }
    } else {
      prev = { x, y };
    }
    idleFor = 0;
    schedule();
  }

  hero.addEventListener('pointermove', onPointer, { passive: true });
  hero.addEventListener('pointerleave', () => { prev = null; }, { passive: true });

  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) { last = 0; if (points.length) schedule(); } else if (raf) { cancelAnimationFrame(raf); raf = 0; }
  });
  io.observe(hero);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { if (raf) { cancelAnimationFrame(raf); raf = 0; } } else { last = 0; if (points.length) schedule(); }
  });
  onReduceChange.push(() => {
    if (reduceQuery.matches) { if (raf) { cancelAnimationFrame(raf); raf = 0; } points = []; prev = null; drawStatic(); }
  });

  let resizeTimer = 0;
  new ResizeObserver(() => { clearTimeout(resizeTimer); resizeTimer = setTimeout(layout, 80); }).observe(hero);
  layout();
  if (document.fonts && document.fonts.load) {
    document.fonts.load('300 100px "Inter Tight"').then(layout).catch(() => {});
  }
})();
