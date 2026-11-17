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
    hxMeasure();
    heroRelang();
  }
  document.querySelectorAll('.lang__btn').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  let startLang = 'en';
  try { startLang = localStorage.getItem('lang') || ''; } catch (e) { startLang = ''; }
  if (startLang !== 'en' && startLang !== 'es') startLang = (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
  if (startLang === 'es') setLang('es');

  document.getElementById('pdf').addEventListener('click', () => window.print());

  /* ------------------------------------------------------------------
     Scroll reveal
  ------------------------------------------------------------------ */
  {
    const targets = document.querySelectorAll('.sec__head, .about__grid > *, .cell, .ticker, .kit__grid > div, .contact__links li');
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
        sh.style.transform = q ? `translateY(${q * 200}%) rotate(${q * -10}deg)` : '';
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
     Liquid surfaces: the glowing lines drift a little under the pointer
  ------------------------------------------------------------------ */
  {
    let pending = null, lraf = 0;
    document.addEventListener('pointermove', (ev) => {
      if (reduceQuery.matches) return;
      const el = ev.target.closest && ev.target.closest('.liquid, .hero');
      if (!el) return;
      pending = { el, x: ev.clientX, y: ev.clientY };
      if (lraf) return;
      lraf = requestAnimationFrame(() => {
        lraf = 0;
        const r = pending.el.getBoundingClientRect();
        pending.el.style.setProperty('--mx', (((pending.x - r.left) / r.width) * 2 - 1).toFixed(3));
        pending.el.style.setProperty('--my', (((pending.y - r.top) / r.height) * 2 - 1).toFixed(3));
      });
    }, { passive: true });
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
    const mq = window.matchMedia('(min-width: 1024px) and (min-height: 620px)');
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

    function setMode() {
      hxActive = mq.matches;
      document.documentElement.classList.toggle('hx-on', hxActive);
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
        <div class="intro__mark mono"><span class="intro__name" data-scramble data-scramble-lines>Fran|Bilbao</span><span class="intro__bar"><i></i></span></div>
        <button type="button" class="hold intro__hold mono"><span class="hold__label">${es ? 'Mantené apretado' : 'Click & hold'}</span><span class="hold__bar" aria-hidden="true"><i></i></span></button>
        <button type="button" class="intro__skip mono">${es ? 'Saltar' : 'Skip'}</button>`;
      document.body.appendChild(intro);
      document.documentElement.classList.add('intro-on');
      heroPrime();
      const nameEl = intro.querySelector('.intro__name');
      const scr = new Scramble(nameEl);
      nameEl.setAttribute('aria-label', 'Fran Bilbao');
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
