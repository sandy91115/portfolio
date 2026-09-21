"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export type TechCore3DProps = {
  className?: string;
  mode?: "normal" | "spike" | "cache";
  accentColor?: string;
  secondaryColor?: string;
  scrollProgress?: number;
};

// Helper to generate crisp holographic 3D floating badges
function createBadgeTexture(title: string, subtitle: string, color: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 160;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Dark glassmorphic background
  ctx.fillStyle = "rgba(6, 9, 16, 0.9)";
  if (ctx.roundRect) {
    ctx.roundRect(8, 8, 496, 144, 24);
  } else {
    ctx.rect(8, 8, 496, 144);
  }
  ctx.fill();

  // Vibrant neon border
  ctx.lineWidth = 5;
  ctx.strokeStyle = color;
  ctx.stroke();

  // Text title
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 42px monospace";
  ctx.fillText(title, 36, 66);

  // Text subtitle
  ctx.fillStyle = color;
  ctx.font = "bold 28px monospace";
  ctx.fillText(subtitle, 36, 118);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

export function TechCore3D({
  className = "",
  mode = "normal",
  accentColor = "#00f2fe",
  secondaryColor = "#ff2c2c",
  scrollProgress = 0,
}: TechCore3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const mainGroupRef = useRef<THREE.Group | null>(null);
  const dbGroupRef = useRef<THREE.Group | null>(null);
  const redisGroupRef = useRef<THREE.Group | null>(null);
  const floatingBadgesRef = useRef<{ mesh: THREE.Mesh; basePosY: number; floatOffset: number }[]>([]);
  const ledsRef = useRef<{ mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; baseColor: THREE.Color }[]>([]);
  const packetsRef = useRef<{ mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3; progress: number; speed: number }[]>([]);

  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isDraggingRef = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });

  const [hovered, setHovered] = useState(false);
  const [activeTelemetry, setActiveTelemetry] = useState({
    tps: "18,420",
    latency: "1.1ms",
    cacheHit: "99.4%",
    status: "SYSTEM OPTIMAL",
  });

  // Mode-based telemetry updates
  useEffect(() => {
    const updateStats = () => {
      if (mode === "spike") {
        const randomTPS = Math.floor(48000 + Math.random() * 4000).toLocaleString();
        const randomLatency = (1.5 + Math.random() * 0.4).toFixed(1) + "ms";
        setActiveTelemetry({
          tps: randomTPS,
          latency: randomLatency,
          cacheHit: "97.8%",
          status: "SPIKE SURGE (50k TPS)",
        });
      } else if (mode === "cache") {
        const randomTPS = Math.floor(22000 + Math.random() * 2000).toLocaleString();
        const randomLatency = (0.3 + Math.random() * 0.2).toFixed(1) + "ms";
        setActiveTelemetry({
          tps: randomTPS,
          latency: randomLatency,
          cacheHit: "99.9%",
          status: "L1 CACHE HIT (0.3ms)",
        });
      } else {
        const randomTPS = Math.floor(18000 + Math.random() * 1500).toLocaleString();
        const randomLatency = (1.0 + Math.random() * 0.3).toFixed(1) + "ms";
        setActiveTelemetry({
          tps: randomTPS,
          latency: randomLatency,
          cacheHit: "99.4%",
          status: "SYSTEM OPTIMAL",
        });
      }
    };

    updateStats();
    const interval = setInterval(updateStats, 1500);
    return () => clearInterval(interval);
  }, [mode]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;
    const isMobile = width < 640;

    const camera = new THREE.PerspectiveCamera(isMobile ? 42 : 36, width / height, 0.1, 1000);
    camera.position.set(0, isMobile ? 0.15 : 0.25, isMobile ? 7.4 : 6.4);
    cameraRef.current = camera;

    // 2. High-Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 3. Cinematic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(1, 4, 6);
    scene.add(keyLight);

    const rackFillLight = new THREE.PointLight(new THREE.Color(accentColor), 5.5, 18);
    rackFillLight.position.set(-1.3, 0.4, 3.2);
    scene.add(rackFillLight);

    const dbFillLight = new THREE.PointLight(new THREE.Color(secondaryColor), 5.0, 18);
    dbFillLight.position.set(1.4, -0.3, 3.2);
    scene.add(dbFillLight);

    const topBlueLight = new THREE.PointLight(0x38bdf8, 4.0, 15);
    topBlueLight.position.set(0, 3.5, 1);
    scene.add(topBlueLight);

    // 4. Main Infrastructure Group
    const mainGroup = new THREE.Group();
    mainGroupRef.current = mainGroup;
    scene.add(mainGroup);

    mainGroup.rotation.y = -0.28;
    mainGroup.rotation.x = 0.14;

    // -------------------------------------------------------------------------
    // A. PROFESSIONAL 3D SERVER BLADE RACK CABINET
    // -------------------------------------------------------------------------
    const rackGroup = new THREE.Group();
    rackGroup.position.set(-1.25, -0.05, 0);
    mainGroup.add(rackGroup);

    // Smoked Glass Outer Cabinet Frame
    const cabinetGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.65,
      thickness: 0.8,
      transparent: true,
      opacity: 0.85,
    });

    const cabinetFrameMat = new THREE.MeshStandardMaterial({
      color: 0x273549,
      roughness: 0.2,
      metalness: 0.85,
    });

    // Vertical Corner Rail Posts
    const postGeo = new THREE.BoxGeometry(0.06, 2.5, 0.06);
    [
      [-1.12, -0.72],
      [1.12, -0.72],
      [-1.12, 0.72],
      [1.12, 0.72],
    ].forEach(([px, pz]) => {
      const post = new THREE.Mesh(postGeo, cabinetFrameMat);
      post.position.set(px, 0, pz);
      rackGroup.add(post);
    });

    // Glowing Neon Edge Struts (Vertical lasers down corner posts)
    const neonStrutMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(accentColor) });
    const strutGeo = new THREE.BoxGeometry(0.015, 2.45, 0.015);
    [
      [-1.12, 0.73],
      [1.12, 0.73],
    ].forEach(([sx, sz]) => {
      const strut = new THREE.Mesh(strutGeo, neonStrutMat);
      strut.position.set(sx, 0, sz);
      rackGroup.add(strut);
    });

    // Top & Bottom Brushed Metal Enclosure Plates
    const capGeo = new THREE.BoxGeometry(2.36, 0.08, 1.55);
    const topCap = new THREE.Mesh(capGeo, cabinetFrameMat);
    topCap.position.y = 1.25;
    const botCap = new THREE.Mesh(capGeo, cabinetFrameMat);
    botCap.position.y = -1.25;
    rackGroup.add(topCap, botCap);

    // Smoked Glass Side & Back Panels
    const sidePanelGeo = new THREE.PlaneGeometry(1.44, 2.4);
    const leftSide = new THREE.Mesh(sidePanelGeo, cabinetGlassMat);
    leftSide.position.set(-1.12, 0, 0);
    leftSide.rotation.y = Math.PI / 2;
    const rightSide = new THREE.Mesh(sidePanelGeo, cabinetGlassMat);
    rightSide.position.set(1.12, 0, 0);
    rightSide.rotation.y = -Math.PI / 2;
    rackGroup.add(leftSide, rightSide);

    // 3 Stacked Server Blades
    const ledsList: { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; baseColor: THREE.Color }[] = [];
    const bladeYPositions = [0.72, 0.05, -0.62];

    const bladeGeo = new THREE.BoxGeometry(2.15, 0.52, 1.38);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x18202d,
      roughness: 0.25,
      metalness: 0.8,
    });

    const frontPanelGeo = new THREE.PlaneGeometry(2.12, 0.48);
    const frontPanelMat = new THREE.MeshStandardMaterial({
      color: 0x0c1018,
      roughness: 0.35,
      metalness: 0.7,
    });

    const handleGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.28, 12);
    const handleMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.1,
      metalness: 0.95,
    });

    const ledGeo = new THREE.SphereGeometry(0.028, 12, 12);

    bladeYPositions.forEach((yPos, bIdx) => {
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.position.y = yPos;
      rackGroup.add(blade);

      const front = new THREE.Mesh(frontPanelGeo, frontPanelMat);
      front.position.set(0, yPos, 0.7);
      rackGroup.add(front);

      // Aluminum Pull Handles
      const lh = new THREE.Mesh(handleGeo, handleMat);
      lh.position.set(-0.95, yPos, 0.73);
      const rh = new THREE.Mesh(handleGeo, handleMat);
      rh.position.set(0.95, yPos, 0.73);
      rackGroup.add(lh, rh);

      // Laser Accent Strip on Blade Face
      const stripGeo = new THREE.BoxGeometry(1.3, 0.02, 0.01);
      const stripMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(bIdx === 0 ? accentColor : "#38bdf8"),
      });
      const strip = new THREE.Mesh(stripGeo, stripMat);
      strip.position.set(0.18, yPos - 0.12, 0.71);
      rackGroup.add(strip);

      // Status LED Array on Blade Face
      const ledColors = [
        new THREE.Color("#10b981"),
        new THREE.Color("#00f2fe"),
        new THREE.Color("#38bdf8"),
        new THREE.Color(bIdx === 0 ? "#ff2c2c" : "#10b981"),
        new THREE.Color("#10b981"),
        new THREE.Color("#00f2fe"),
      ];

      ledColors.forEach((col, lIdx) => {
        const ledMat = new THREE.MeshBasicMaterial({ color: col.clone() });
        const led = new THREE.Mesh(ledGeo, ledMat);
        led.position.set(-0.76 + lIdx * 0.14, yPos + 0.1, 0.72);
        rackGroup.add(led);
        ledsList.push({ mesh: led, mat: ledMat, baseColor: col });
      });
    });

    ledsRef.current = ledsList;

    // -------------------------------------------------------------------------
    // B. ROTATING HIGH-GLOSS DATABASE STORAGE CLUSTER (PostgreSQL & MongoDB)
    // -------------------------------------------------------------------------
    const dbGroup = new THREE.Group();
    dbGroup.position.set(1.35, -0.45, 0);
    mainGroup.add(dbGroup);
    dbGroupRef.current = dbGroup;

    // 3 Stacked Mirror-Finish Platters
    const platterGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.16, 48);
    const platterMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.12,
      metalness: 0.95,
    });

    const neonRingGeo = new THREE.TorusGeometry(0.86, 0.022, 16, 48);
    const neonRingMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(accentColor),
      emissive: new THREE.Color(accentColor),
      emissiveIntensity: 1.2,
      roughness: 0.1,
    });

    [-0.32, 0, 0.32].forEach((py) => {
      const platter = new THREE.Mesh(platterGeo, platterMat);
      platter.position.y = py;
      dbGroup.add(platter);

      const ring = new THREE.Mesh(neonRingGeo, neonRingMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = py;
      dbGroup.add(ring);
    });

    // Actuator Arm with glowing laser head
    const armBaseGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.28, 16);
    const armBase = new THREE.Mesh(armBaseGeo, cabinetFrameMat);
    armBase.position.set(0.72, 0.42, 0.45);
    dbGroup.add(armBase);

    const armBarGeo = new THREE.BoxGeometry(0.62, 0.035, 0.05);
    const armBar = new THREE.Mesh(armBarGeo, bladeMat);
    armBar.position.set(0.44, 0.48, 0.28);
    armBar.rotation.y = -0.55;
    dbGroup.add(armBar);

    const headLedMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe });
    const headLed = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 12), headLedMat);
    headLed.position.set(0.18, 0.48, 0.12);
    dbGroup.add(headLed);

    // -------------------------------------------------------------------------
    // C. REDIS IN-MEMORY ULTRA-FAST CACHE CORE
    // -------------------------------------------------------------------------
    const redisGroup = new THREE.Group();
    redisGroup.position.set(1.35, 1.05, 0);
    mainGroup.add(redisGroup);
    redisGroupRef.current = redisGroup;

    // Glowing crystalline core
    const redisCoreGeo = new THREE.CylinderGeometry(0.52, 0.52, 0.32, 6);
    const redisCoreMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      emissive: new THREE.Color(accentColor),
      emissiveIntensity: 0.7,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.65,
      thickness: 1.0,
    });
    const redisCore = new THREE.Mesh(redisCoreGeo, redisCoreMat);
    redisGroup.add(redisCore);

    // Outer Neon Wireframe Cage
    const wireCageGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.38, 6);
    const wireCageMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(accentColor),
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireCage = new THREE.Mesh(wireCageGeo, wireCageMat);
    redisGroup.add(wireCage);

    // Double Gyroscopic Orbiting Rings
    const ring1Geo = new THREE.TorusGeometry(0.8, 0.016, 16, 40);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.9,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2.2;
    redisGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(0.92, 0.014, 16, 40);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(secondaryColor),
      emissive: new THREE.Color(secondaryColor),
      emissiveIntensity: 0.7,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 3;
    redisGroup.add(ring2);

    // -------------------------------------------------------------------------
    // D. FLOWING OPTICAL DATA CONDUITS & PARTICLE LIGHT STREAMS
    // -------------------------------------------------------------------------
    const packetList: { mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3; progress: number; speed: number }[] = [];

    const curve1 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3.0, 1.2, 0.8),
      new THREE.Vector3(-2.0, 0.9, 0.5),
      new THREE.Vector3(-1.25, 0.72, 0.4),
    ]);

    const curve2 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.6, 0.72, 0.4),
      new THREE.Vector3(0.4, 1.25, 0.2),
      new THREE.Vector3(1.15, 1.1, 0.1),
    ]);

    const curve3 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.35, 0.8, 0.1),
      new THREE.Vector3(1.52, 0.2, 0.2),
      new THREE.Vector3(1.35, -0.3, 0.3),
    ]);

    const curve4 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.95, -0.45, 0.2),
      new THREE.Vector3(0.0, -0.6, 0.4),
      new THREE.Vector3(-0.75, -0.62, 0.5),
    ]);

    const curves = [curve1, curve2, curve3, curve4];

    // Translucent glass fiber conduits
    const conduitMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      emissive: new THREE.Color(accentColor),
      emissiveIntensity: 0.25,
      roughness: 0.3,
      metalness: 0.8,
      transparent: true,
      opacity: 0.5,
    });

    curves.forEach((c) => {
      const tubeGeo = new THREE.TubeGeometry(c, 36, 0.02, 8, false);
      const tube = new THREE.Mesh(tubeGeo, conduitMat);
      mainGroup.add(tube);
    });

    // 32 Glowing Data Packets traveling along curves
    const packetGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const packetColors = [
      new THREE.Color(accentColor),
      new THREE.Color("#38bdf8"),
      new THREE.Color(secondaryColor),
      new THREE.Color("#10b981"),
    ];

    for (let i = 0; i < 32; i++) {
      const assignedCurve = curves[i % curves.length];
      const pColor = packetColors[i % packetColors.length];
      const pMat = new THREE.MeshBasicMaterial({ color: pColor });
      const pMesh = new THREE.Mesh(packetGeo, pMat);

      pMesh.position.copy(assignedCurve.getPointAt(0));
      mainGroup.add(pMesh);

      packetList.push({
        mesh: pMesh,
        curve: assignedCurve,
        progress: i / 32,
        speed: 0.0055 + Math.random() * 0.0035,
      });
    }

    packetsRef.current = packetList;

    // -------------------------------------------------------------------------
    // E. 3D FLOATING HOLOGRAPHIC TECH BADGES (Professional Tech Chips)
    // -------------------------------------------------------------------------
    // E. 3D FLOATING HOLOGRAPHIC TECH BADGES (Clean & Centered)
    // -------------------------------------------------------------------------
    const badgeConfigs = [
      {
        title: "PHP / LARAVEL",
        subtitle: "Enterprise RBAC Backend",
        color: "#ff2c2c",
        pos: [-2.15, 1.25, 0.4],
      },
      {
        title: "REDIS v7.2 L1",
        subtitle: "Sub-ms In-Memory Caching",
        color: "#00f2fe",
        pos: [2.15, 1.35, 0.4],
      },
      {
        title: "POSTGRESQL 16",
        subtitle: "ACID Polyglot Persistence",
        color: "#38bdf8",
        pos: [2.15, -0.65, 0.4],
      },
      {
        title: "C++ DSA (AIR 32)",
        subtitle: "500+ Algorithmic Mastery",
        color: "#10b981",
        pos: [-2.15, -0.85, 0.4],
      },
    ];

    const badgesList: { mesh: THREE.Mesh; basePosY: number; floatOffset: number }[] = [];
    const badgeGeo = new THREE.PlaneGeometry(1.15, 0.36);

    badgeConfigs.forEach((cfg, idx) => {
      const texture = createBadgeTexture(cfg.title, cfg.subtitle, cfg.color);
      const bMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide,
      });
      const bMesh = new THREE.Mesh(badgeGeo, bMat);
      bMesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      bMesh.visible = !isMobile;
      scene.add(bMesh);

      badgesList.push({
        mesh: bMesh,
        basePosY: cfg.pos[1],
        floatOffset: idx * 1.5,
      });
    });

    floatingBadgesRef.current = badgesList;

    // -------------------------------------------------------------------------
    // F. AMBIENT CYBER DUST PARTICLES (Atmospheric Depth)
    // -------------------------------------------------------------------------
    const dustCount = 80;
    const dustGeo = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 8;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.035,
      transparent: true,
      opacity: 0.5,
    });
    const dustPoints = new THREE.Points(dustGeo, dustMat);
    mainGroup.add(dustPoints);

    // Subtle Reflective Radar Grid Floor
    const baseGridGeo = new THREE.CircleGeometry(3.6, 48);
    const baseGridMat = new THREE.MeshBasicMaterial({
      color: 0x07111e,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const baseGrid = new THREE.Mesh(baseGridGeo, baseGridMat);
    baseGrid.rotation.x = -Math.PI / 2;
    baseGrid.position.y = -1.45;
    mainGroup.add(baseGrid);

    // -------------------------------------------------------------------------
    // 5. SMOOTH MOUSE & TOUCH DRAG ORBIT INTERACTION
    // -------------------------------------------------------------------------
    const handlePointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - prevMousePos.current.x;
      const deltaY = e.clientY - prevMousePos.current.y;
      prevMousePos.current = { x: e.clientX, y: e.clientY };

      mouseRef.current.targetX += deltaX * 0.006;
      mouseRef.current.targetY = Math.max(-0.5, Math.min(0.5, mouseRef.current.targetY + deltaY * 0.006));
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    // -------------------------------------------------------------------------
    // 6. AUTO RESIZE OBSERVER
    // -------------------------------------------------------------------------
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      const isMob = w < 640;
      camera.fov = isMob ? 42 : 36;
      camera.position.set(0, isMob ? 0.15 : 0.25, isMob ? 7.4 : 6.4);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      floatingBadgesRef.current.forEach((b) => {
        b.mesh.visible = !isMob;
      });
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // -------------------------------------------------------------------------
    // 7. PROFESSIONAL CINEMATIC RENDER LOOP
    // -------------------------------------------------------------------------
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Silky Inertial Damping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      if (mainGroup) {
        if (!isDraggingRef.current) {
          // Buttery smooth ambient breathing motion
          mainGroup.rotation.y = -0.28 + mouseRef.current.x + Math.sin(elapsedTime * 0.45) * 0.06;
          mainGroup.rotation.x = 0.14 + mouseRef.current.y + Math.cos(elapsedTime * 0.45) * 0.03;
        } else {
          mainGroup.rotation.y = -0.28 + mouseRef.current.x;
          mainGroup.rotation.x = 0.14 + mouseRef.current.y;
        }
      }

      // Smooth spin on Database Platters (Active I/O)
      if (dbGroupRef.current) {
        const dbSpeed = mode === "spike" ? 0.04 : 0.018;
        dbGroupRef.current.rotation.y += dbSpeed;
      }

      // Gyroscopic Redis core rotation
      if (redisGroupRef.current) {
        redisGroupRef.current.rotation.y += 0.012;
      }

      // Floating 3D Holographic Badges with gentle sine levitation
      floatingBadgesRef.current.forEach((b) => {
        b.mesh.position.y = b.basePosY + Math.sin(elapsedTime * 1.6 + b.floatOffset) * 0.06;
      });

      // Flowing data packets along conduits
      const speedMultiplier = mode === "spike" ? 2.6 : mode === "cache" ? 1.6 : 1.0;
      packetsRef.current.forEach((p) => {
        p.progress += p.speed * speedMultiplier;
        if (p.progress > 1) p.progress = 0;
        const pos = p.curve.getPointAt(p.progress);
        p.mesh.position.copy(pos);
      });

      // Realistic LED network activity flickering
      if (ledsRef.current.length > 0) {
        const flickerFreq = mode === "spike" ? 0.35 : 0.16;
        ledsRef.current.forEach((item) => {
          if (Math.random() < flickerFreq) {
            const isLit = Math.random() > 0.3;
            item.mat.color.copy(isLit ? item.baseColor : new THREE.Color(0x04060a));
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // -------------------------------------------------------------------------
    // CLEANUP
    // -------------------------------------------------------------------------
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      resizeObserver.disconnect();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [accentColor, secondaryColor, mode]);

  // Handle scroll immersion zoom
  useEffect(() => {
    if (mainGroupRef.current && cameraRef.current) {
      const scrollRotation = scrollProgress * Math.PI * 2;
      mainGroupRef.current.rotation.y = -0.28 + scrollRotation;
      cameraRef.current.position.z = 5.6 - scrollProgress * 1.8;
      cameraRef.current.updateProjectionMatrix();
    }
  }, [scrollProgress]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative w-full h-full cursor-grab active:cursor-grabbing overflow-hidden select-none transition-all duration-500 ${
        hovered ? "ring-2 ring-[#00f2fe]/40 shadow-[0_0_50px_rgba(0,242,254,0.2)]" : ""
      } ${className}`}
      title="360° Drag to inspect Cloud Server Rack & Data Pipeline"
    >
      {/* Clean Minimalist Telemetry HUD */}
      <div className="pointer-events-none absolute inset-0 p-3 sm:p-5 flex flex-col justify-between z-20 font-mono text-[10px] sm:text-[11px] text-white/80">
        {/* Top Header Telemetry */}
        <div className="flex items-start justify-between gap-2 pt-11 sm:pt-0">
          <div className="flex items-center gap-2 bg-black/80 backdrop-blur-xl px-3 py-1.5 rounded-xl border border-white/10 shadow-lg shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white font-bold tracking-wider text-[10px] sm:text-xs">SYSTEM_INFRASTRUCTURE</span>
            <span className="text-white/40 hidden xs:inline sm:inline">•</span>
            <span className="text-[#00f2fe] hidden xs:inline sm:inline text-[10px] sm:text-xs">OPERATIONAL</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 bg-black/80 backdrop-blur-xl px-3 py-1.5 rounded-xl border border-white/10 shadow-lg text-[9px] sm:text-[11px]">
            <div>
              <span className="text-white/40">TPS: </span>
              <span className="text-white font-bold font-mono">{activeTelemetry.tps}</span>
            </div>
            <div>
              <span className="text-white/40">LATENCY: </span>
              <span className="text-emerald-400 font-bold font-mono">{activeTelemetry.latency}</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white/40">CACHE: </span>
              <span className="text-[#00f2fe] font-bold font-mono">{activeTelemetry.cacheHit}</span>
            </div>
          </div>
        </div>

        {/* Bottom Minimalist HUD Bar */}
        <div className="flex items-end justify-between gap-2 text-[9px] sm:text-[10px]">
          <div className="bg-black/80 backdrop-blur-xl px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-white/60 uppercase tracking-wider">TOUCH & DRAG 360° TO INSPECT</span>
          </div>

          <div className="bg-black/80 backdrop-blur-xl px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
            <span className="text-white/40">STATUS:</span>
            <span className="text-emerald-400 font-bold">{hovered ? "INSPECTING..." : activeTelemetry.status}</span>
          </div>
        </div>
      </div>

      {/* Subtle Perspective Cyber Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 242, 254, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 254, 0.15) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />
    </div>
  );
}
