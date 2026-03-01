import * as THREE from 'three';
import { fetchRailwayData, processOverpassData } from './data_fetcher';
import { EffectComposer, RenderPass, BloomEffect, EffectPass, NoiseEffect, VignetteEffect } from "postprocessing";
import './style.css';

// --- Types & Interfaces ---
type BiomeType = 'BANGKOK' | 'NORTH' | 'ISAN' | 'SOUTH' | 'EAST';

interface Chapter {
  id: BiomeType;
  name: string;
  fogColor: number;
  ambientColor: number;
  highlightColor: number;
  objective: string;
}

// --- Configuration ---
const CONFIG = {
  CENTER: [13.7563, 100.5018],
  SCALE: 111320,
  PLAYER_HEIGHT: 5,
  INTERACTION_DIST: 15,
  SPEED_MULTIPLIER: 600000
};

// --- Game Engine ---
class SiamConnectPro {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private composer!: EffectComposer;
  private clock: THREE.Clock;

  // Groups
  private tracksGroup = new THREE.Group();
  private landscapeGroup = new THREE.Group();
  private vehicleGroup = new THREE.Group();
  private stationsGroup = new THREE.Group();

  // Data
  private curves: THREE.CatmullRomCurve3[] = [];

  // Game State
  private state: 'DRIVING' | 'WALKING' = 'DRIVING';
  private keys: Record<string, boolean> = {};
  private playerRotation = new THREE.Euler(0, 0, 0, 'YXZ');

  // Vehicle Persistence
  private currentCurveIdx = 0;
  private progress = 0;
  private targetSpeed = 0.0002;
  private currentSpeed = 0.0002;
  private lookAmount = 0;
  private targetLookAmount = 0;

  // Economy & Progression
  private money = 0;
  private incomeRate = 10;
  private era: 'STEAM' | 'DIESEL' | 'MODERN' | 'HSR' = 'STEAM';

  // Story / Biomes
  private currentBiome: BiomeType = 'BANGKOK';
  private chapters: Record<BiomeType, Chapter> = {
    'BANGKOK': { id: 'BANGKOK', name: "SECTOR 01: BANGKOK HUB", fogColor: 0x050510, ambientColor: 0x202040, highlightColor: 0x00ffff, objective: "INITIATE ROUTE TO NORTHERN FRONTIER" },
    'NORTH': { id: 'NORTH', name: "SECTOR 02: NORTHERN RIDGE", fogColor: 0x0a150a, ambientColor: 0x153015, highlightColor: 0x44ff44, objective: "CLIMB THE KHUN TAN RIDGE" },
    'ISAN': { id: 'ISAN', name: "SECTOR 03: EASTERN PLATEAU", fogColor: 0x151005, ambientColor: 0x302010, highlightColor: 0xffaa00, objective: "CROSS THE KHORAT FRONTIER" },
    'SOUTH': { id: 'SOUTH', name: "SECTOR 04: SOUTHERN COAST", fogColor: 0x051015, ambientColor: 0x102535, highlightColor: 0x00aaff, objective: "ESTABLISH MARITIME CONNECTION" },
    'EAST': { id: 'EAST', name: "SECTOR 05: INDUSTRIAL ZONE", fogColor: 0x101010, ambientColor: 0x252525, highlightColor: 0xffffff, objective: "MAXIMIZE LOGISTICS EFFICIENCY" }
  };

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      alpha: false
    });
    this.clock = new THREE.Clock();

    this.init();
  }

  private async init() {
    this.setupRenderer();
    this.setupPostProcessing();
    this.setupScene();
    this.setupEventListeners();
    this.createTrainModel();

    await this.loadWorldData();

    this.hideLoader();
    this.startSystems();
    this.animate();
  }

  private setupRenderer() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x87ceeb);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    document.getElementById('app')!.appendChild(this.renderer.domElement);
  }

  private setupPostProcessing() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));

    const bloom = new BloomEffect({
      intensity: 1.5,
      luminanceThreshold: 0.4,
      mipmapBlur: true
    });
    const noise = new NoiseEffect();
    noise.blendMode.opacity.value = 0.02;
    const vignette = new VignetteEffect({ offset: 0.3, darkness: 0.5 });

    this.composer.addPass(new EffectPass(this.camera, bloom, noise, vignette));
  }

  private setupScene() {
    this.scene.add(this.tracksGroup);
    this.scene.add(this.landscapeGroup);
    this.scene.add(this.vehicleGroup);
    this.scene.add(this.stationsGroup);

    // Global Lights
    const sun = new THREE.DirectionalLight(0xffffff, 2.5);
    sun.position.set(2000, 2000, 1000);
    this.scene.add(sun);

    const hemlight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
    this.scene.add(hemlight);

    this.createSky();
    this.createInfiniteGround();
    this.updateAtmosphere();
  }

  private createSky() {
    const geo = new THREE.SphereGeometry(30000, 32, 32);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0x0099ff) },
        bottomColor: { value: new THREE.Color(0xd0f0ff) },
        offset: { value: 600 },
        exponent: { value: 0.7 }
      },
      vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPos;
        void main() {
          float h = normalize(vWorldPos + offset).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `,
      side: THREE.BackSide
    });
    this.scene.add(new THREE.Mesh(geo, mat));
  }

  private createInfiniteGround() {
    const geo = new THREE.PlaneGeometry(300000, 300000);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x2a5525,
      roughness: 0.9,
      metalness: 0.0
    });
    const ground = new THREE.Mesh(geo, mat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.1;
    this.scene.add(ground);
  }

  private createTrainModel() {
    const group = new THREE.Group();

    // Main Chassis
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(3.5, 4.5, 8),
      new THREE.MeshStandardMaterial({ color: 0x1a1a70, metalness: 0.7, roughness: 0.3 })
    );
    body.position.y = 2.25;
    group.add(body);

    // Side Windows
    const winGeo = new THREE.BoxGeometry(3.6, 1.5, 5);
    const winMat = new THREE.MeshStandardMaterial({ color: 0x00aaaa, emissive: 0x00ffff, emissiveIntensity: 0.2 });
    const windows = new THREE.Mesh(winGeo, winMat);
    windows.position.y = 2.5;
    group.add(windows);

    // Front Light
    const light = new THREE.PointLight(0xffff99, 10, 50);
    light.position.set(0, 2, 4.5);
    group.add(light);

    this.vehicleGroup.add(group);
  }

  private setupEventListeners() {
    window.addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      this.keys[k] = true;
      if (k === 'e') this.handleAction();
    });
    window.addEventListener('keyup', (e) => this.keys[e.key.toLowerCase()] = false);

    window.addEventListener('mousemove', (e) => {
      if (this.state === 'WALKING' && document.pointerLockElement) {
        this.playerRotation.y -= e.movementX * 0.002;
        this.playerRotation.x -= e.movementY * 0.002;
        this.playerRotation.x = Math.max(-Math.PI / 2.1, Math.min(Math.PI / 2.1, this.playerRotation.x));
      } else {
        this.targetLookAmount = (e.clientX / window.innerWidth - 0.5) * 2;
      }
    });

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.composer.setSize(window.innerWidth, window.innerHeight);
    });

    document.getElementById('btn-slow')?.addEventListener('click', () => this.targetSpeed = Math.max(0, this.targetSpeed - 0.0002));
    document.getElementById('btn-fast')?.addEventListener('click', () => this.targetSpeed = Math.min(0.002, this.targetSpeed + 0.0002));
  }

  private handleAction() {
    if (this.state === 'DRIVING') {
      this.exitVehicle();
    } else {
      const dist = this.camera.position.distanceTo(this.vehicleGroup.position);
      if (dist < CONFIG.INTERACTION_DIST) this.enterVehicle();
    }
  }

  private exitVehicle() {
    this.state = 'WALKING';
    this.renderer.domElement.requestPointerLock();
    document.getElementById('interaction-prompt')?.classList.add('hidden');
    document.getElementById('crosshair')?.classList.remove('hidden');
    document.getElementById('prompt-text')!.innerText = 'ENTER TRAIN';
  }

  private enterVehicle() {
    this.state = 'DRIVING';
    document.exitPointerLock();
    document.getElementById('interaction-prompt')?.classList.remove('hidden');
    document.getElementById('crosshair')?.classList.add('hidden');
    document.getElementById('prompt-text')!.innerText = 'EXIT TRAIN';
  }

  private async loadWorldData() {
    try {
      const raw = await fetchRailwayData();
      if (raw) {
        const { ways, nodes, stations } = processOverpassData(raw);
        this.processLoadedData(ways, nodes, stations);
        return;
      }
    } catch (e) {
      console.warn("API Error. Using Fallback Data.");
    }
    this.loadFallbackData();
  }

  private processLoadedData(ways: any[], _nodes: Map<number, any>, stations: any[]) {
    // Parse Stations
    stations.forEach((s: any) => {
      const x = (s.lon - CONFIG.CENTER[1]) * CONFIG.SCALE * Math.cos(CONFIG.CENTER[0] * Math.PI / 180);
      const z = (CONFIG.CENTER[0] - s.lat) * CONFIG.SCALE;
      this.spawnStation(new THREE.Vector3(x, 0, z), s.tags.name || "STATION");
    });

    // Parse Routes
    ways.forEach((way: any) => {
      const points = way.coords.map((c: number[]) => {
        const x = (c[1] - CONFIG.CENTER[1]) * CONFIG.SCALE * Math.cos(CONFIG.CENTER[0] * Math.PI / 180);
        const z = (CONFIG.CENTER[0] - c[0]) * CONFIG.SCALE;
        return new THREE.Vector3(x, 0, z);
      });
      if (points.length < 2) return;

      const curve = new THREE.CatmullRomCurve3(points);
      this.curves.push(curve);
      this.drawTrack(curve);
      this.populateLandscape(curve);
    });
    this.currentCurveIdx = 0;
  }

  private loadFallbackData() {
    // Create a cinematic circular loop as fallback
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const r = 1500;
      points.push(new THREE.Vector3(Math.cos(angle) * r, 0, Math.sin(angle) * r));
    }
    const curve = new THREE.CatmullRomCurve3(points, true);
    this.curves.push(curve);
    this.drawTrack(curve);
    this.populateLandscape(curve);

    // Spawn dummy stations
    this.spawnStation(new THREE.Vector3(1500, 0, 0), "CENTRAL TERMINAL");
    this.spawnStation(new THREE.Vector3(-1500, 0, 0), "FRONTIER OUTPOST");

    this.currentCurveIdx = 0;
  }

  private drawTrack(curve: THREE.CatmullRomCurve3) {
    const points = curve.getPoints(Math.floor(curve.getLength() / 1.5));
    const sleeperGeo = new THREE.BoxGeometry(3.5, 0.2, 0.6);
    const sleeperMat = new THREE.MeshStandardMaterial({ color: 0x3d2b1f });
    const railMat = new THREE.MeshStandardMaterial({ color: 0x999999, metalness: 1, roughness: 0.1 });

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      const next = points[i + 1] || p;
      const tangent = next.clone().sub(p).normalize();

      // Sleeper
      if (i % 2 === 0) {
        const s = new THREE.Mesh(sleeperGeo, sleeperMat);
        s.position.copy(p);
        s.lookAt(next);
        s.rotation.y += Math.PI / 2;
        this.tracksGroup.add(s);
      }

      // Rails
      const normal = new THREE.Vector3(-tangent.z, 0, tangent.x);
      [-1, 1].forEach(side => {
        const r = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 1), railMat);
        r.position.copy(p).add(normal.clone().multiplyScalar(side * 1.0));
        r.position.y += 0.15;
        r.lookAt(next.clone().add(normal.clone().multiplyScalar(side * 1.0)));
        r.scale.z = p.distanceTo(next) * 1.1;
        this.tracksGroup.add(r);
      });
    }
  }

  private spawnStation(pos: THREE.Vector3, _name: string) {
    const group = new THREE.Group();

    // Platform
    const platform = new THREE.Mesh(
      new THREE.BoxGeometry(25, 1.2, 80),
      new THREE.MeshStandardMaterial({ color: 0x333333 })
    );
    platform.position.set(15, 0.6, 0);
    group.add(platform);

    // Roof
    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(20, 0.5, 75),
      new THREE.MeshStandardMaterial({ color: 0x880000 })
    );
    roof.position.set(15, 9, 0);
    group.add(roof);

    group.position.copy(pos);
    this.stationsGroup.add(group);
  }

  private populateLandscape(curve: THREE.CatmullRomCurve3) {
    const len = curve.getLength();
    const step = 400;
    for (let d = 0; d < len; d += step) {
      const t = d / len;
      const p = curve.getPointAt(t);
      const tangent = curve.getTangentAt(t);
      const normal = new THREE.Vector3(-tangent.z, 0, tangent.x);

      [-1, 1].forEach(side => {
        const offset = side * (50 + Math.random() * 500);
        const pos = p.clone().add(normal.clone().multiplyScalar(offset));
        this.spawnAsset(pos);
      });
    }
  }

  private spawnAsset(pos: THREE.Vector3) {
    if (Math.random() > 0.4) {
      // Skyscraper
      const h = 80 + Math.random() * 500;
      const w = 40 + Math.random() * 40;
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, w),
        new THREE.MeshStandardMaterial({ color: 0x1a2035, metalness: 0.8, roughness: 0.1 })
      );
      body.position.set(pos.x, h / 2, pos.z);
      this.landscapeGroup.add(body);

      // Windows
      const winParams = new THREE.PointsMaterial({ color: 0xccffff, size: 2.5, transparent: true, opacity: 0.6 });
      const winPoints: number[] = [];
      for (let i = 0; i < 80; i++) winPoints.push((Math.random() - 0.5) * w * 0.9, Math.random() * h, (Math.random() - 0.5) * w * 0.9);
      const winGeo = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(winPoints, 3));
      const wins = new THREE.Points(winGeo, winParams);
      wins.position.copy(body.position).sub(new THREE.Vector3(0, h / 2, 0));
      this.landscapeGroup.add(wins);
    } else {
      // Tree
      const h = 15 + Math.random() * 20;
      const tree = new THREE.Mesh(new THREE.ConeGeometry(h / 3, h, 8), new THREE.MeshStandardMaterial({ color: 0x153515 }));
      tree.position.set(pos.x, h / 2, pos.z);
      this.landscapeGroup.add(tree);
    }
  }

  private update() {
    const delta = this.clock.getDelta();

    // 1. World Movement (Train)
    if (this.currentCurveIdx !== -1) {
      this.currentSpeed = THREE.MathUtils.lerp(this.currentSpeed, this.targetSpeed, 0.05);
      const curve = this.curves[this.currentCurveIdx];
      this.progress += this.currentSpeed;
      if (this.progress >= 1) { this.progress = 0; this.currentCurveIdx = (this.currentCurveIdx + 1) % this.curves.length; }

      const p = curve.getPointAt(this.progress);
      const np = curve.getPointAt(Math.min(this.progress + 0.001, 1));
      this.vehicleGroup.position.copy(p);
      this.vehicleGroup.lookAt(np);

      // HUD Updates
      const spd = Math.round(this.currentSpeed * CONFIG.SPEED_MULTIPLIER);
      document.getElementById('speed-val')!.innerText = spd.toString();
      document.getElementById('speed-indicator')!.style.width = `${Math.min(100, (spd / 1200) * 100)}%`;
    }

    // 2. Camera / Control Logic
    if (this.state === 'DRIVING') {
      const p = this.vehicleGroup.position;
      const dir = new THREE.Vector3(0, 0, 1).applyQuaternion(this.vehicleGroup.quaternion);
      this.camera.position.copy(p).add(new THREE.Vector3(0, 4.2, 0));
      this.lookAmount = THREE.MathUtils.lerp(this.lookAmount, this.targetLookAmount, 0.08);
      this.camera.lookAt(p.clone().add(dir.multiplyScalar(20)).add(new THREE.Vector3(this.lookAmount * 15, 0, 0)));
    } else {
      const walkSpeed = 25 * delta;
      const fw = new THREE.Vector3(0, 0, -1).applyEuler(new THREE.Euler(0, this.playerRotation.y, 0));
      const rt = new THREE.Vector3(1, 0, 0).applyEuler(new THREE.Euler(0, this.playerRotation.y, 0));

      if (this.keys['w']) this.camera.position.add(fw.multiplyScalar(walkSpeed));
      if (this.keys['s']) this.camera.position.add(fw.multiplyScalar(-walkSpeed));
      if (this.keys['a']) this.camera.position.add(rt.multiplyScalar(-walkSpeed));
      if (this.keys['d']) this.camera.position.add(rt.multiplyScalar(walkSpeed));

      this.camera.quaternion.setFromEuler(this.playerRotation);
      this.camera.position.y = CONFIG.PLAYER_HEIGHT;

      // Interactive HUD
      const dist = this.camera.position.distanceTo(this.vehicleGroup.position);
      const prompt = document.getElementById('interaction-prompt');
      if (dist < CONFIG.INTERACTION_DIST) prompt?.classList.remove('hidden'); else prompt?.classList.add('hidden');
    }

    // 3. Economy & Biomes
    this.updateEconomy();
  }

  private updateEconomy() {
    this.money += this.incomeRate * this.clock.getDelta();
    document.getElementById('money-val')!.innerText = Math.floor(this.money).toLocaleString();

    // Era Progression (Example)
    if (this.money > 10000 && this.era === 'STEAM') this.upgradeEra('DIESEL');
  }

  private upgradeEra(newEra: any) {
    this.era = newEra;
    document.getElementById('era-badge')!.innerText = `${newEra} ERA`;
    // Trigger effect?
  }

  private updateAtmosphere() {
    const ch = this.chapters[this.currentBiome];
    this.scene.fog = new THREE.FogExp2(ch.fogColor, 0.0003);
    document.getElementById('location')!.innerText = ch.name;
    document.getElementById('objective-text')!.innerText = ch.objective;
  }

  private hideLoader() {
    const l = document.getElementById('loading-overlay');
    if (l) { l.style.opacity = '0'; setTimeout(() => l.remove(), 1000); }
  }

  private startSystems() {
    console.log("SIAM CONNECT PRO: SYSTEMS NOMINAL");
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    this.update();
    this.composer.render();
  }
}

new SiamConnectPro();
