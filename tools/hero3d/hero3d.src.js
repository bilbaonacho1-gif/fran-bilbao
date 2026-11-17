/* Extruded chrome letters for the hero. Built into ../../hero3d.js with `npm run build`. */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, MeshStandardMaterial,
  PointLight, DirectionalLight, PMREMGenerator, ACESFilmicToneMapping, SRGBColorSpace,
} from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import fontData from 'three/examples/fonts/helvetiker_bold.typeface.json';

const BASE = 100;
const FOV = 28;

export function create(canvas) {
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  } catch (e) { return null; }
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1, 10, 10000);
  const pmrem = new PMREMGenerator(renderer);
  const envTarget = pmrem.fromScene(new RoomEnvironment(), 0.04);
  scene.environment = envTarget.texture;
  scene.environmentIntensity = 0.95;

  const material = new MeshStandardMaterial({ color: 0x5f5954, metalness: 1, roughness: 0.2 });
  const glow = new PointLight(0xff5a3c, 1, 0, 2);
  const key = new DirectionalLight(0xffe2d0, 0.9);
  key.position.set(-0.4, 1, 0.8);
  scene.add(glow, key);

  const font = new FontLoader().parse(fontData);
  const unit = BASE / font.data.resolution;
  const geoCache = new Map();
  const geometryFor = (ch) => {
    if (!geoCache.has(ch)) {
      const g = new TextGeometry(ch, { font, size: BASE, depth: BASE * 0.24, curveSegments: 8, bevelEnabled: true, bevelThickness: BASE * 0.03, bevelSize: BASE * 0.02, bevelSegments: 3 });
      g.center();
      geoCache.set(ch, g);
    }
    return geoCache.get(ch);
  };

  let W = 1, H = 1, stage = { cx: 0, cy: 0, w: 1, h: 1 };
  let words = [];        /* [{ group, letters: [{ mesh, x, rot, vel, seed }], size }] */

  function buildWord(text) {
    const group = new Group();
    const letters = [];
    let adv = 0;
    const track = BASE * 0.1;
    for (const ch of text) {
      const glyph = font.data.glyphs[ch] || font.data.glyphs['?'];
      const w = glyph.ha * unit;
      if (ch !== ' ') {
        const mesh = new Mesh(geometryFor(ch), material);
        group.add(mesh);
        letters.push({ mesh, x: adv + w / 2, rot: [0, 0, 0], vel: [0, 0, 0], seed: [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1], phase: Math.random() * 6.283 });
      }
      adv += w + track;
    }
    const width = adv - track;
    letters.forEach((l) => { l.x -= width / 2; });
    group.visible = false;
    scene.add(group);
    return { group, letters, width };
  }

  function fit() {
    for (const w of words) {
      w.scale = Math.min((stage.w * 0.86) / w.width, (stage.h * 0.78) / BASE);
      w.group.position.set(stage.cx - W / 2, H / 2 - stage.cy, 0);
    }
  }

  return {
    setWords(list) {
      for (const w of words) scene.remove(w.group);
      words = list.map(buildWord);
      fit();
    },
    layout(w, h, dpr, st) {
      W = w; H = h; stage = st;
      renderer.setPixelRatio(dpr);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.position.set(0, 0, (h / 2) / Math.tan((FOV * Math.PI) / 360));
      camera.updateProjectionMatrix();
      fit();
    },
    /* pointer moved by (dx, dy) px at (x, y): spin the letters under it */
    nudge(idx, x, y, dx, dy) {
      const w = words[idx]; if (!w) return;
      const reach = BASE * w.scale * 0.85;
      for (const l of w.letters) {
        const lx = stage.cx + l.x * w.scale, ly = stage.cy;
        const d2 = (x - lx) * (x - lx) + (y - ly) * (y - ly);
        const k = Math.exp(-d2 / (reach * reach));
        l.vel[1] += dx * 0.05 * k;
        l.vel[0] += dy * 0.05 * k;
      }
    },
    kick(idx) {
      const w = words[idx]; if (!w || !w.letters.length) return;
      const l = w.letters[(Math.random() * w.letters.length) | 0];
      l.vel[0] += (Math.random() - 0.5) * 9; l.vel[1] += (Math.random() - 0.5) * 12; l.vel[2] += (Math.random() - 0.5) * 3;
    },
    frame(dt, t, idx, e, light, still) {
      const s = Math.min(0.05, dt / 1000);
      words.forEach((w, i) => { w.group.visible = i === idx; });
      const w = words[idx];
      if (w) {
        const sc = w.scale * (1 - e);
        for (const l of w.letters) {
          for (let a = 0; a < 3; a++) {
            l.vel[a] += (-26 * l.rot[a] - 3.4 * l.vel[a]) * s;
            l.rot[a] += l.vel[a] * s;
          }
          const idle = still ? 0 : 1;
          l.mesh.rotation.set(
            l.rot[0] + Math.sin(t * 0.7 + l.phase) * 0.07 * idle + e * l.seed[0] * 5,
            l.rot[1] + Math.sin(t * 0.5 + l.phase * 1.7) * 0.16 * idle + e * l.seed[1] * 6,
            l.rot[2] + e * l.seed[2] * 3,
          );
          l.mesh.position.set(l.x * w.scale * (1 + e * 0.9), e * l.seed[0] * H * 0.3, e * (200 + l.seed[1] * 260));
          l.mesh.scale.setScalar(Math.max(0.0001, sc));
        }
      }
      glow.position.set(light.x - W / 2, H / 2 - light.y, 300);
      glow.intensity = 1100000 * (1 + e * 0.6);
      renderer.render(scene, camera);
    },
    dispose() {
      geoCache.forEach((g) => g.dispose());
      material.dispose(); envTarget.dispose(); pmrem.dispose(); renderer.dispose();
    },
  };
}
