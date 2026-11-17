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
    'nav.toolkit': 'Skills',
    'nav.contact': 'Contacto',
    pdf: 'PDF ↓',
    'hero.role': 'Analista de Pricing & Routing Operations',
    'hero.where': 'Mercado Pago — Buenos Aires, Argentina',
    'hero.h1': 'Francisco José Bilbao — Analista de Pricing & Routing Operations',
    'hero.lede': 'Pagos, routing y datos en seis mercados de LATAM.',
    'hero.hint': 'Scrolleá para avanzar →',
    'hero.holdAria': 'Mantené apretado para dispersar las esferas y formar la siguiente palabra',
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
    'exp.next': 'Siguiente puesto →',
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
    'kit.title': 'Skills',
    'kit.g1': 'Analíticas y técnicas',
    'kit.rca': 'Análisis de datos e investigación de causa raíz',
    'kit.kpi': 'Reportes de KPIs y dashboards',
    'kit.pay': 'Procesamiento y ruteo de pagos/transacciones',
    'kit.fin': 'Análisis financiero',
    'kit.g2': 'Herramientas de IA y automatización',
    'kit.g2note': 'Las uso para analizar datos operativos, automatizar flujos recurrentes y acercar hallazgos a los stakeholders.',
    'kit.g3': 'Profesionales',
    'kit.w5': 'Comunicación',
    'kit.w6': 'Adaptabilidad',
    'kit.w7': 'Iniciativa',
    'fo.e.when': 'Sep 2025 — Actualidad',
    'fo.e.a': 'Pricing &',
    'fo.e.b': 'Routing.',
    'fo.e.sub': 'Mercado Pago — el router de pagos en seis mercados de LATAM. El detalle completo, abajo.',
    'fo.2.when': 'Oct 2024 — Ago 2025',
    'fo.2.sub': 'MercadoLibre — referente del equipo; análisis para mejorar métricas y procesos.',
    'fo.1.when': 'Ago 2022 — Oct 2024',
    'fo.1.sub': 'MercadoLibre — una línea de servicio exclusiva de Mercado Envíos, de Junior a Semi Senior.',
    'fo.0.when': 'Mar 2021 — Feb 2022',
    'fo.0.a': 'Ejecutivo',
    'fo.0.b': 'de Cuentas.',
    'fo.0.sub': 'Parabens Créditos S.A. — una cartera de clientes en cobranzas. Scrolleá para seguir el recorrido.',
    'kit.w1': 'Coordinación entre equipos',
    'kit.w2': 'Optimización de procesos',
    'kit.w4': 'Desarrollo de equipo y liderazgo',
    'contact.title': 'Contacto',
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
            if (c.ch === ' ') continue;   /* spaces stay spaces */
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

  let hxActive = false;
  let folioApply = () => {};
  let hxMeasure = () => {};
  let heroRelang = () => {};
  let heroPrime = () => {};
  let splitTitles = () => {};
  let profileRebuild = () => {};
  let chipsRelang = () => {};
  let postersMeasure = () => {};
  let heroEnter = () => {};

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
  const ariaEls = [...document.querySelectorAll('[data-i18n-aria]')];
  for (const el of ariaEls) EN_ARIA[el.dataset.i18nAria] = el.getAttribute('aria-label');
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
    for (const el of ariaEls) el.setAttribute('aria-label', (lang === 'es' ? ES : EN_ARIA)[el.dataset.i18nAria]);
    document.querySelectorAll('.lang__btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    try { localStorage.setItem('lang', lang); } catch (e) { /* storage unavailable */ }
    postersMeasure();
    splitTitles();
    profileRebuild();
    chipsRelang();
    hxMeasure();
    heroRelang();
  }
  document.querySelectorAll('.lang__btn').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  let startLang = 'en';
  try { startLang = localStorage.getItem('lang') || ''; } catch (e) { startLang = ''; }
  if (startLang !== 'en' && startLang !== 'es') startLang = (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
  if (startLang === 'es') setLang('es');

  document.getElementById('pdf').addEventListener('click', () => window.print());

  /* section titles are split into letters so each one can drop in */
  splitTitles = () => {
    document.querySelectorAll('.sec__head .display').forEach((h) => {
      const text = h.getAttribute('aria-label') && h.querySelector('.ch') ? h.textContent : h.textContent;
      h.setAttribute('aria-label', text);
      h.textContent = '';
      [...text].forEach((c, i) => {
        const sp = document.createElement('span');
        sp.className = 'ch';
        sp.setAttribute('aria-hidden', 'true');
        sp.style.setProperty('--i', i);
        sp.textContent = c === ' ' ? '\u00a0' : c;
        h.appendChild(sp);
      });
    });
  };
  splitTitles();

  /* ------------------------------------------------------------------
     Market chips: hovering, focusing or tapping one decodes its code
     into the full country name.
  ------------------------------------------------------------------ */
  {
    const NAMES = {
      en: { AR: 'Argentina', MX: 'Mexico', CO: 'Colombia', PE: 'Peru', CL: 'Chile', UY: 'Uruguay' },
      es: { AR: 'Argentina', MX: 'México', CO: 'Colombia', PE: 'Perú', CL: 'Chile', UY: 'Uruguay' },
    };
    const lang = () => (document.documentElement.lang === 'es' ? 'es' : 'en');
    const chips = [...document.querySelectorAll('.hero__sites li')].map((li, i) => {
      const code = li.textContent.trim();
      li.style.setProperty('--i', i);
      li.tabIndex = 0;
      li.setAttribute('data-scramble', '');
      const scr = new Scramble(li);
      const chip = { li, code, scr, open: false };
      const show = (open) => {
        if (chip.open === open) return;
        chip.open = open;
        li.classList.toggle('is-open', open);
        scr.build(open ? NAMES[lang()][code] : code);
        li.setAttribute('aria-label', NAMES[lang()][code]);
        scr.trigger();
      };
      li.addEventListener('pointerenter', (ev) => { if (ev.pointerType === 'mouse') show(true); });
      li.addEventListener('pointerleave', (ev) => { if (ev.pointerType === 'mouse') show(false); });
      li.addEventListener('focus', () => show(true));
      li.addEventListener('blur', () => show(false));
      li.addEventListener('pointerdown', (ev) => { ev.stopPropagation(); });   /* not a hero "hold" */
      li.addEventListener('click', (ev) => { if (ev.pointerType && ev.pointerType !== 'mouse') show(!chip.open); });
      chip.show = show;
      return chip;
    });
    chipsRelang = () => chips.forEach((c) => {
      c.li.setAttribute('aria-label', NAMES[lang()][c.code]);
      if (c.open) c.scr.build(NAMES[lang()][c.code]);
    });
    chipsRelang();
  }

  /* ------------------------------------------------------------------
     Profile headline: the sentence decodes letter by letter when the
     section arrives, and a word re-scrambles when the pointer crosses it.
  ------------------------------------------------------------------ */
  {
    const el = document.querySelector('.about__big');
    const grid = document.querySelector('.about__grid');
    let words = [], glyphs = [], draf = 0, dlast = 0, played = false;
    const rnd = () => ALPHABET[(Math.random() * ALPHABET.length) | 0];

    function build() {
      if (draf) cancelAnimationFrame(draf);
      draf = 0;
      const text = (el.querySelector('.sr-only') || el).textContent.trim();
      el.textContent = '';
      el.classList.add('decode');
      const real = document.createElement('span');
      real.className = 'sr-only';
      real.textContent = text;
      const show = document.createElement('span');
      show.setAttribute('aria-hidden', 'true');
      words = []; glyphs = [];
      text.split(/\s+/).forEach((word, wi) => {
        if (wi) show.appendChild(document.createTextNode(' '));
        const w = document.createElement('span');
        w.className = 'w';
        const mine = [];
        for (const ch of word) {
          const g = document.createElement('span');
          g.className = 'g';
          g.textContent = ch;
          w.appendChild(g);
          mine.push({ node: g, ch, until: 0, noise: false });
        }
        show.appendChild(w);
        w.addEventListener('pointerenter', () => scramble(mine, 380, w));
        words.push({ node: w, glyphs: mine });
        glyphs.push(...mine);
      });
      el.append(real, show);
    }

    /* lock word widths while letters change so the lines never re-wrap */
    const lock = (list) => list.forEach((w) => { w.style.width = w.offsetWidth + 'px'; });
    const unlock = () => words.forEach((w) => { w.node.style.width = ''; });

    function scramble(list, span, wordNode) {
      if (reduceQuery.matches) return;
      if (wordNode) lock([wordNode]);
      const now = performance.now();
      list.forEach((g, i) => { g.until = Math.max(g.until, now + (span * (i + 1)) / list.length + Math.random() * 120); });
      if (!draf) { dlast = 0; draf = requestAnimationFrame(tick); }
    }
    function tick(now) {
      draf = 0;
      let busy = false;
      const refresh = now - dlast >= 50;
      if (refresh) dlast = now;
      for (const g of glyphs) {
        if (g.until > now) {
          busy = true;
          if (!g.noise) { g.noise = true; g.node.classList.add('is-noise'); g.node.textContent = rnd(); }
          else if (refresh) g.node.textContent = rnd();
        } else if (g.noise) {
          g.noise = false; g.node.classList.remove('is-noise'); g.node.textContent = g.ch;
        }
      }
      if (busy) draf = requestAnimationFrame(tick); else unlock();
    }
    function play() {
      if (played || reduceQuery.matches) return;
      played = true;
      lock(words.map((w) => w.node));
      scramble(glyphs, 1500);
    }

    profileRebuild = build;
    build();
    new IntersectionObserver((entries, io) => {
      if (entries.some((e) => e.isIntersecting)) { io.disconnect(); setTimeout(play, 450); }
    }, { rootMargin: '0px 0px -8% 0px' }).observe(grid);
    onReduceChange.push(() => { if (reduceQuery.matches) { glyphs.forEach((g) => { g.until = 0; }); if (!draf) draf = requestAnimationFrame(tick); } });
  }

  /* ------------------------------------------------------------------
     Scroll reveal
  ------------------------------------------------------------------ */
  {
    const targets = document.querySelectorAll('.sec__head, .about__grid, .cells, .ticker, .kit__grid, .contact__links li');
    const seen = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); seen.unobserve(e.target); }
    }, { rootMargin: '0px 0px -8% 0px' });
    targets.forEach((el, i) => { el.classList.add('reveal'); el.style.setProperty('--d', `${(i % 4) * 70}ms`); seen.observe(el); });
  }

  /* ------------------------------------------------------------------
     Falling folios: scroll-driven. Each sheet leaves with
     translateY(q*200%) rotate(q*-10deg), q = clamp((3p - i - .2) / .7).
  ------------------------------------------------------------------ */
  {
    const runway = document.querySelector('[data-folio]');
    const frame = runway.querySelector('.folio__frame');
    const sheets = [...runway.querySelectorAll('.folio__sheet')].reverse(); /* DOM is bottom-up */
    const end = runway.querySelector('.folio__end');
    const pages = [...sheets, end];
    let queued = 0, current = -1;
    function apply(p) {
      if (reduceQuery.matches) {
        sheets.forEach((sh) => { sh.style.transform = ''; });
        pages.forEach((pg, i) => pg.toggleAttribute('aria-hidden', i !== pages.length - 1));
        current = -1;
        return;
      }
      let cur = sheets.length;
      sheets.forEach((sh, i) => {
        const q = clamp01((3 * p - i - 0.2) / 0.7);
        sh.style.transform = q ? `translateX(${q * -135}%) rotate(${q * -10}deg)` : '';   /* sheets leave sideways */
        sh.style.visibility = q >= 1 ? 'hidden' : '';
        if (q < 1 && cur === sheets.length) cur = i;
      });
      if (cur !== current) {
        current = cur;
        pages.forEach((pg, i) => pg.toggleAttribute('aria-hidden', i !== cur));
      }
    }
    folioApply = apply;
    function update() {
      queued = 0;
      if (hxActive) return; /* the horizontal controller drives the folio */
      const span = runway.offsetHeight - frame.clientHeight;
      apply(span > 0 ? clamp01(-runway.getBoundingClientRect().top / span) : 0);
    }
    const request = () => { if (!queued) queued = requestAnimationFrame(update); };
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    onReduceChange.push(request);
    update();
  }

  /* ------------------------------------------------------------------
     Topographic contour lines for the Experience backgrounds: drawn once
     with a shader at screen resolution and handed to CSS as an image.
     Without WebGL the plain gradient stays.
  ------------------------------------------------------------------ */
  {
    const draw = () => {
      const c = document.createElement('canvas');
      const scale = Math.min(2, window.devicePixelRatio || 1);
      c.width = Math.round(1800 * scale); c.height = Math.round(1200 * scale);
      const gl = c.getContext('webgl', { premultipliedAlpha: false, preserveDrawingBuffer: true, antialias: false });
      if (!gl || !gl.getExtension('OES_standard_derivatives')) return;
      const fs = `#extension GL_OES_standard_derivatives : enable
        precision highp float;
        uniform vec2 uRes;
        vec2 hash(vec2 p){ p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3))); return -1.0 + 2.0 * fract(sin(p) * 43758.5453123); }
        float noise(vec2 p){
          vec2 i = floor(p), f = fract(p);
          vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
          return mix(mix(dot(hash(i), f), dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
                     mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)), dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
        }
        void main(){
          vec2 p = gl_FragCoord.xy / uRes.y * 2.1 + 5.3;
          float n = 0.7 * noise(p) + 0.3 * noise(p * 1.9 + 7.1);     /* smooth terrain */
          float band = n * 26.0;
          float d = abs(fract(band) - 0.5);
          float w = fwidth(band) + 0.00001;
          float line = 1.0 - smoothstep(w * 0.45, w * 1.35, d);      /* an even hairline per contour */
          gl_FragColor = vec4(0.92, 0.96, 1.0, line);   /* near-white: works over blue, green and red */
        }`;
      const sh = (t, src) => { const o = gl.createShader(t); gl.shaderSource(o, src); gl.compileShader(o); return o; };
      const pr = gl.createProgram();
      gl.attachShader(pr, sh(gl.VERTEX_SHADER, 'attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }'));
      gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, fs));
      gl.linkProgram(pr);
      if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return;
      gl.useProgram(pr);
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(pr, 'p');
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      gl.uniform2f(gl.getUniformLocation(pr, 'uRes'), c.width, c.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      c.toBlob((blob) => {
        const ext = gl.getExtension('WEBGL_lose_context');
        if (ext) ext.loseContext();
        if (blob) document.documentElement.style.setProperty('--topo', `url("${URL.createObjectURL(blob)}")`);
      }, 'image/png');
    };
    if ('requestIdleCallback' in window) requestIdleCallback(draw, { timeout: 800 }); else setTimeout(draw, 60);
  }

  /* ------------------------------------------------------------------
     Role posters: contained 1800ms change, cubic-bezier(.86,0,.07,1).
     0-600 out scales to .85; 600-1200 out slides up, in slides up from
     below (both .85); 1200-1800 in scales back to 1.
  ------------------------------------------------------------------ */
  {
    const root = document.querySelector('[data-posters]');
    const stage = root.querySelector('.posters__stage');
    const posters = [...stage.children];
    const btn = root.querySelector('.posters__next');
    const pease = bezierEase(0.86, 0, 0.07, 1);
    let at = 0, from = 0, praf = 0, plast = 0, pelapsed = 0, running = false;
    root.classList.add('posters--on');
    function settle() {
      posters.forEach((el, i) => {
        const on = i === at;
        el.style.transform = '';
        el.style.visibility = on ? 'visible' : 'hidden';
        el.style.zIndex = on ? 1 : 0;
        el.toggleAttribute('aria-hidden', !on);
        el.inert = !on;
      });
      running = false;
    }
    function pframe(now) {
      praf = 0;
      const dt = plast ? Math.min(100, now - plast) : 0;
      plast = now;
      pelapsed += dt;
      const t = pelapsed;
      const a = pease(clamp01(t / 600)), b = pease(clamp01((t - 600) / 600)), c = pease(clamp01((t - 1200) / 600));
      posters[from].style.transform = `translateX(${-100 * b}%) scale(${1 - 0.15 * a})`;
      posters[at].style.transform = `translateX(${100 - 100 * b}%) scale(${0.85 + 0.15 * c})`;
      if (t >= 1800) { settle(); return; }
      praf = requestAnimationFrame(pframe);
    }
    btn.addEventListener('click', () => {
      if (praf) cancelAnimationFrame(praf);
      praf = 0;
      if (running) settle(); /* restart deliberately from a composed state */
      from = at;
      at = (at + 1) % posters.length;
      if (reduceQuery.matches) { settle(); return; }
      running = true; pelapsed = 0; plast = 0;
      posters[at].style.visibility = 'visible';
      posters[at].style.zIndex = 2;
      posters[at].style.transform = 'translateX(100%) scale(0.85)';
      praf = requestAnimationFrame(pframe);
    });
    onReduceChange.push(() => { if (reduceQuery.matches && running) { if (praf) cancelAnimationFrame(praf); praf = 0; settle(); } });
    /* outside horizontal mode the stage is as tall as the tallest poster */
    postersMeasure = () => {
      if (hxActive) { stage.style.height = ''; return; }
      stage.style.height = '0px';
      let h = 0;
      posters.forEach((el) => { h = Math.max(h, el.offsetHeight); });
      stage.style.height = h + 'px';
    };
    window.addEventListener('resize', () => postersMeasure());
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => postersMeasure());
    settle();
  }

  /* ------------------------------------------------------------------
     Horizontal travel (large screens): vertical scroll moves the track
     sideways. While the folio panel is aligned, the track holds and the
     same scroll drives the falling sheets instead.
  ------------------------------------------------------------------ */
  {
    const hx = document.querySelector('[data-hx]');
    const pin = hx.querySelector('.hx__pin');
    const track = hx.querySelector('.hx__track');
    const folio = hx.querySelector('[data-folio]');
    const header = document.querySelector('.top');
    const mq = window.matchMedia('(min-height: 520px)');   /* every screen except very short ones */
    let dist = 0, folioX = 0, hold = 0, total = 0, topH = 0, hraf = 0;

    const xOf = (el) => el.getBoundingClientRect().left - track.getBoundingClientRect().left;
    const scrollFor = (x) => (x <= folioX ? x : x + hold);

    function measure() {
      if (!hxActive) return;
      topH = header.offsetHeight;
      document.documentElement.style.setProperty('--top-h', topH + 'px');
      dist = Math.max(0, track.scrollWidth - pin.clientWidth);
      folioX = Math.min(dist, xOf(folio));
      hold = reduceQuery.matches ? 0 : Math.round(window.innerHeight * 3);
      total = dist + hold;
      hx.style.height = (pin.offsetHeight + total) + 'px';
      update();
    }
    function update() {
      hraf = 0;
      if (!hxActive) return;
      const s = Math.max(0, Math.min(total, topH - hx.getBoundingClientRect().top));
      let x, fp;
      if (s <= folioX) { x = s; fp = 0; }
      else if (s <= folioX + hold) { x = folioX; fp = hold ? (s - folioX) / hold : 1; }
      else { x = s - hold; fp = 1; }
      track.style.transform = `translate3d(${-x}px,0,0)`;
      folioApply(fp);
    }
    const request = () => { if (!hraf) hraf = requestAnimationFrame(update); };

    /* when scrolling stops close to a full-screen panel, settle exactly on it so nothing is cut off */
    let settleTimer = 0, touching = false;
    function settle() {
      if (!hxActive || touching) return;
      const s0 = Math.max(0, Math.min(total, topH - hx.getBoundingClientRect().top));
      if (s0 > folioX && s0 < folioX + hold) return;            /* inside the folio hold: already aligned */
      const x = s0 <= folioX ? s0 : s0 - hold;
      const near = pin.clientWidth * 0.22;
      let best = null;
      track.querySelectorAll('.hero, .folio, .cells, .contact').forEach((el) => {
        const ax = Math.max(0, Math.min(dist, xOf(el)));
        const d = Math.abs(ax - x);
        if (d > 1 && d < near && (!best || d < best.d)) best = { d, ax };
      });
      if (!best) return;
      const top = hx.getBoundingClientRect().top + window.scrollY - topH;
      /* arriving at the folio from the right means its sheets are already gone: land after the hold */
      const target = best.ax === folioX && s0 > folioX ? best.ax + hold : scrollFor(best.ax);
      window.scrollTo({ top: top + target, behavior: reduceQuery.matches ? 'auto' : 'smooth' });
    }
    window.addEventListener('scroll', () => { clearTimeout(settleTimer); settleTimer = setTimeout(settle, 220); }, { passive: true });
    window.addEventListener('touchstart', () => { touching = true; clearTimeout(settleTimer); }, { passive: true });
    window.addEventListener('touchend', () => { touching = false; clearTimeout(settleTimer); settleTimer = setTimeout(settle, 320); }, { passive: true });

    function setMode() {
      hxActive = mq.matches;
      document.documentElement.classList.toggle('hx-on', hxActive);
      postersMeasure();
      if (!hxActive) { hx.style.height = ''; track.style.transform = ''; window.dispatchEvent(new Event('scroll')); return; }
      measure();
    }
    function goTo(el) {
      const top = hx.getBoundingClientRect().top + window.scrollY - topH;
      const x = Math.max(0, Math.min(dist, xOf(el)));
      window.scrollTo({ top: top + scrollFor(x), behavior: reduceQuery.matches ? 'auto' : 'smooth' });
    }
    document.addEventListener('click', (ev) => {
      const a = ev.target.closest('a[href^="#"]');
      if (!a || !hxActive) return;
      const el = document.querySelector(a.getAttribute('href'));
      if (!el || !track.contains(el)) return;
      ev.preventDefault();
      goTo(el);
      history.replaceState(null, '', a.getAttribute('href'));
    });
    /* keyboard focus on something off-screen: travel to it */
    track.addEventListener('focusin', (ev) => {
      if (!hxActive || !ev.target.matches(':focus-visible')) return;
      const r = ev.target.getBoundingClientRect();
      if (r.left < 0 || r.right > window.innerWidth) {
        const panel = ev.target.closest('.cells, .folio, .sec, .hero') || ev.target;
        goTo(panel);
      }
    });
    /* touch: a sideways swipe travels too (vertical swipes scroll natively) */
    {
      let sx = 0, sy = 0, lastX = 0, axis = '';
      pin.addEventListener('touchstart', (ev) => { const t = ev.touches[0]; sx = lastX = t.clientX; sy = t.clientY; axis = ''; }, { passive: true });
      pin.addEventListener('touchmove', (ev) => {
        if (!hxActive || ev.touches.length !== 1) return;
        const t = ev.touches[0];
        if (!axis) {
          const dx = Math.abs(t.clientX - sx), dy = Math.abs(t.clientY - sy);
          if (dx < 8 && dy < 8) return;
          axis = dx > dy ? 'x' : 'y';
        }
        if (axis !== 'x') return;
        if (ev.cancelable) ev.preventDefault();
        window.scrollBy(0, lastX - t.clientX);
        lastX = t.clientX;
      }, { passive: false });
    }
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', () => { measure(); });
    mq.addEventListener('change', setMode);
    onReduceChange.push(measure);
    new ResizeObserver(() => measure()).observe(track);
    hxMeasure = measure;
    setMode();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    if (hxActive && location.hash) { const el = document.querySelector(location.hash); if (el && track.contains(el)) requestAnimationFrame(() => goTo(el)); }
  }

  /* ------------------------------------------------------------------
     Hero: extruded chrome letters (hero3d.js). A warm light follows the
     pointer and the letters under it tumble. Click & hold spins them
     away; releasing after a full hold brings in the next word.
  ------------------------------------------------------------------ */
  {
    const hero = document.querySelector('.hero');
    const canvas = hero.querySelector('.hero__canvas');
    const stage = hero.querySelector('.hero__stage');
    const caption = hero.querySelector('.hero__word');
    const holdBtn = hero.querySelector('.hold');
    const holdLabel = holdBtn.querySelector('.hold__label');
    const holdBar = holdBtn.querySelector('.hold__bar i');
    const WORDS = { en: ['FRAN\nBILBAO', 'PAYMENTS', 'ROUTING', 'DATA'], es: ['FRAN\nBILBAO', 'PAGOS', 'ROUTING', 'DATOS'] };
    const LABELS = { en: ['Click & hold', 'Release'], es: ['Mantené apretado', 'Soltá'] };
    const HOLD_MS = 1000, BACK_MS = 900;
    const view = window.Hero3D ? window.Hero3D.create(canvas) : null;

    if (!view) {
      hero.classList.add('hero--flat');
      holdBtn.hidden = true;
    } else {
      let W = 1, H = 1;
      let idx = 0, hold = 0, holding = false, armed = false;
      let raf = 0, last = 0, clock = 0, visible = true, sinceKick = 0;
      let locked = false, entering = false, backMs = BACK_MS;
      const light = { x: 0, y: 0, tx: 0, ty: 0, has: false, px: 0, py: 0 };
      const lang = () => (document.documentElement.lang === 'es' ? 'es' : 'en');

      function layout() {
        const r = hero.getBoundingClientRect();
        const sr = stage.getBoundingClientRect();
        W = Math.max(1, Math.round(r.width)); H = Math.max(1, Math.round(r.height));
        view.layout(W, H, Math.min(2, window.devicePixelRatio || 1), { cx: sr.left - r.left + sr.width / 2, cy: sr.top - r.top + sr.height / 2, w: sr.width, h: sr.height });
        if (!light.has) { light.x = light.tx = W * 0.3; light.y = light.ty = H * 0.4; }
        draw(0);
        schedule();
      }
      function draw(dt) {
        clock += dt;
        const still = reduceQuery.matches;
        const e = hold * hold * (3 - 2 * hold);
        if (!light.has && !still) { /* no pointer yet: let the light wander */
          light.tx = W * (0.5 + 0.34 * Math.sin(clock * 0.0005));
          light.ty = H * (0.42 + 0.14 * Math.sin(clock * 0.0008 + 1.3));
        }
        const follow = still ? 1 : 1 - Math.pow(0.0015, dt / 1000);
        light.x += (light.tx - light.x) * follow; light.y += (light.ty - light.y) * follow;
        if (!still && !holding && hold === 0) {
          sinceKick += dt;
          if (sinceKick > 2600) { sinceKick = 0; view.kick(idx); }
        }
        view.frame(dt, clock * 0.001, idx, e, light, still);
        caption.style.opacity = entering ? '0' : e.toFixed(3);
        caption.style.letterSpacing = (0.62 - 0.3 * e).toFixed(3) + 'em';
        holdBar.style.transform = `scaleX(${entering ? 0 : hold.toFixed(3)})`;
      }
      function frame(now) {
        raf = 0;
        const dt = last ? Math.min(100, now - last) : 16;
        last = now;
        if (holding) {
          hold = Math.min(1, hold + dt / HOLD_MS);
          if (hold >= 1 && !armed) { armed = true; holdLabel.textContent = LABELS[lang()][1]; }
        } else if (hold > 0 && !locked) {
          hold = Math.max(0, hold - dt / backMs);
          if (hold === 0) { entering = false; backMs = BACK_MS; }
        }
        draw(dt);
        schedule();
      }
      function schedule() {
        if (raf || !visible || document.hidden) return;
        if (reduceQuery.matches && !holding && hold === 0 && Math.abs(light.x - light.tx) < 0.5 && Math.abs(light.y - light.ty) < 0.5) return;
        raf = requestAnimationFrame(frame);
      }
      function setCaption() {
        const list = WORDS[lang()];
        caption.textContent = list[(idx + 1) % list.length].replace('\n', ' ');
        holdLabel.textContent = LABELS[lang()][0];
      }
      function press() {
        if (holding || locked || entering) return;
        holding = true; armed = hold >= 1;
        holdBtn.classList.add('is-held');
        if (reduceQuery.matches) { hold = 1; armed = true; holdLabel.textContent = LABELS[lang()][1]; }
        schedule();
      }
      function release() {
        if (!holding) return;
        holding = false;
        holdBtn.classList.remove('is-held');
        if (armed) { idx = (idx + 1) % WORDS[lang()].length; armed = false; }
        if (reduceQuery.matches) hold = 0;
        setCaption();
        last = 0;
        if (reduceQuery.matches) draw(0);
        schedule();
      }

      hero.addEventListener('pointermove', (ev) => {
        const r = hero.getBoundingClientRect();
        const x = ev.clientX - r.left, y = ev.clientY - r.top;
        if (light.has && !reduceQuery.matches) view.nudge(idx, x, y, x - light.px, y - light.py);
        light.px = x; light.py = y; light.tx = x; light.ty = y; light.has = true;
        schedule();
      }, { passive: true });
      hero.addEventListener('pointerleave', (ev) => { if (ev.pointerType !== 'mouse') light.has = false; });
      hero.addEventListener('pointerdown', (ev) => {
        if (ev.pointerType !== 'mouse' || ev.button !== 0 || ev.target.closest('a, button')) return;
        press();
      });
      holdBtn.addEventListener('pointerdown', (ev) => { if (ev.button === 0) { holdBtn.setPointerCapture(ev.pointerId); press(); } });
      holdBtn.addEventListener('contextmenu', (ev) => ev.preventDefault());
      holdBtn.addEventListener('keydown', (ev) => {
        if (ev.key !== ' ' && ev.key !== 'Enter') return;
        ev.preventDefault();
        if (!ev.repeat) press();
      });
      holdBtn.addEventListener('keyup', (ev) => { if (ev.key === ' ' || ev.key === 'Enter') release(); });
      holdBtn.addEventListener('blur', release);
      window.addEventListener('pointerup', release);
      window.addEventListener('pointercancel', release);

      new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; last = 0; schedule(); }).observe(hero);
      document.addEventListener('visibilitychange', () => { last = 0; if (document.hidden) release(); schedule(); });
      onReduceChange.push(() => { release(); hold = 0; last = 0; draw(0); schedule(); });
      let timer = 0;
      new ResizeObserver(() => { clearTimeout(timer); timer = setTimeout(layout, 100); }).observe(hero);
      heroRelang = () => { idx = 0; view.setWords(WORDS[lang()]); setCaption(); layout(); };
      /* intro hand-off: letters wait scattered, then fly in and assemble */
      heroPrime = () => { hold = 1; locked = true; entering = true; draw(0); };
      heroEnter = () => { locked = false; backMs = 1900; last = 0; schedule(); };
      view.setWords(WORDS[lang()]);
      setCaption();
      layout();
    }
  }

  /* ------------------------------------------------------------------
     Intro: a framed mark that scrambles in. Hold to enter (or skip).
     Shown once per browser session; never with reduced motion.
  ------------------------------------------------------------------ */
  {
    let seen = false;
    try { seen = sessionStorage.getItem('intro') === '1'; } catch (e) { seen = false; }
    if (!seen && !reduceQuery.matches) {
      const es = document.documentElement.lang === 'es';
      const intro = document.createElement('div');
      intro.className = 'intro';
      intro.innerHTML = `
        <svg class="intro__rings" aria-hidden="true" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor"><circle r="150"/><circle r="250"/><circle r="390"/><circle r="560"/><rect x="-330" y="-330" width="660" height="660" transform="rotate(45)"/></svg>
        <div class="intro__mark mono"><span class="intro__name" data-scramble data-scramble-lines>Francisco José|Bilbao</span><span class="intro__bar"><i></i></span></div>
        <button type="button" class="hold intro__hold mono"><span class="hold__label">${es ? 'Mantené apretado' : 'Click & hold'}</span><span class="hold__bar" aria-hidden="true"><i></i></span></button>
        <button type="button" class="intro__skip mono">${es ? 'Saltar' : 'Skip'}</button>`;
      document.body.appendChild(intro);
      document.documentElement.classList.add('intro-on');
      heroPrime();
      const nameEl = intro.querySelector('.intro__name');
      const scr = new Scramble(nameEl);
      nameEl.setAttribute('aria-label', 'Francisco José Bilbao');
      const btn = intro.querySelector('.intro__hold');
      btn.setAttribute('aria-label', es ? 'Mantené apretado para entrar' : 'Click and hold to enter');
      const bars = intro.querySelectorAll('.hold__bar i, .intro__bar i');
      let h = 0, down = false, iraf = 0, ilast = 0, done = false;
      const loop = setInterval(() => scr.trigger(), 2200);
      setTimeout(() => scr.trigger(), 150);
      function finish() {
        if (done) return;
        done = true;
        clearInterval(loop);
        if (iraf) cancelAnimationFrame(iraf);
        try { sessionStorage.setItem('intro', '1'); } catch (e) { /* storage unavailable */ }
        intro.classList.add('is-out');
        heroEnter();
        document.documentElement.classList.remove('intro-on');
        window.removeEventListener('pointerup', up);
        document.removeEventListener('keydown', onKey);
        setTimeout(() => intro.remove(), 900);
      }
      function tick(now) {
        iraf = 0;
        const dt = ilast ? Math.min(100, now - ilast) : 16;
        ilast = now;
        h = Math.max(0, Math.min(1, h + (down ? dt / 900 : -dt / 500)));
        bars.forEach((b) => { b.style.transform = `scaleX(${h.toFixed(3)})`; });
        intro.style.setProperty('--h', h.toFixed(3));
        if (h >= 1) { finish(); return; }
        if (down || h > 0) iraf = requestAnimationFrame(tick);
      }
      const go = () => { down = true; ilast = 0; if (!iraf) iraf = requestAnimationFrame(tick); };
      const up = () => { down = false; };
      const onKey = (ev) => { if (ev.key === 'Escape') finish(); };
      intro.addEventListener('pointerdown', (ev) => { if (ev.button === 0 && !ev.target.closest('.intro__skip')) go(); });
      window.addEventListener('pointerup', up);
      window.addEventListener('pointercancel', up);
      btn.addEventListener('keydown', (ev) => { if (ev.key === ' ' || ev.key === 'Enter') { ev.preventDefault(); if (!ev.repeat) go(); } });
      btn.addEventListener('keyup', (ev) => { if (ev.key === ' ' || ev.key === 'Enter') up(); });
      btn.addEventListener('contextmenu', (ev) => ev.preventDefault());
      intro.querySelector('.intro__skip').addEventListener('click', finish);
      document.addEventListener('keydown', onKey);
      btn.focus({ preventScroll: true });
    }
  }
})();
