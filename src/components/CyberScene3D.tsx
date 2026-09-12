import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FINANCIAL_MISSIONS, AVATARS } from '../data/missions';
import { cyberAudio } from '../utils/audio';

interface CyberScene3DProps {
  currentMissionIndex: number;
  completedMissions: number[];
  selectedAvatarId: string;
  aciertos: number;
  defeatsCount: number;
  lastActionStatus: 'advance' | 'defeat' | 'idle';
  onSelectMission: (index: number) => void;
  onOpenPortal: () => void;
  cameraMode: 'orbital' | 'portal_focus' | 'cinematic';
}

function checkWebGLSupport(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!(gl && gl instanceof WebGLRenderingContext);
  } catch {
    return false;
  }
}

// Generate real-time telemetry texture for the floating 3D holographic banner
function createShipTelemetryTexture(
  avatarName: string,
  aciertos: number,
  defeatsCount: number,
  status: 'advance' | 'defeat' | 'idle',
  primaryColorHex: string
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  // Clear
  ctx.clearRect(0, 0, 512, 256);

  // Background Cyber Card with Rounded Corners
  ctx.fillStyle = 'rgba(6, 4, 24, 0.92)';
  ctx.beginPath();
  ctx.roundRect(12, 12, 488, 232, 24);
  ctx.fill();

  // Glowing Border
  ctx.lineWidth = 6;
  ctx.strokeStyle = status === 'advance' ? '#10b981' : status === 'defeat' ? '#ff007f' : primaryColorHex || '#00f3ff';
  ctx.stroke();

  // Subtle Inner Line
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.strokeRect(20, 20, 472, 216);

  // Pilot & Ship Title
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 24px monospace';
  ctx.textAlign = 'center';
  ctx.fillText(`🚀 NAVE // PILOTO: ${avatarName.toUpperCase()}`, 256, 58);

  // Dividers
  ctx.strokeStyle = 'rgba(0, 243, 255, 0.3)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(35, 75);
  ctx.lineTo(477, 75);
  ctx.stroke();

  // AVANCES (Aciertos / Victorias)
  ctx.fillStyle = '#10b981';
  ctx.font = '900 32px monospace';
  ctx.textAlign = 'center';
  ctx.fillText(`▲ AVANCES: ${aciertos}`, 145, 130);

  // DERROTAS (Fallos / Errores)
  ctx.fillStyle = '#ff007f';
  ctx.font = '900 32px monospace';
  ctx.fillText(`▼ DERROTAS: ${defeatsCount}`, 365, 130);

  // Sub-labels
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.font = 'bold 13px monospace';
  ctx.fillText('MISIÓN SUPERADA', 145, 155);
  ctx.fillText('FALLO DE CÁLCULO', 365, 155);

  // Bottom Status Bar
  ctx.beginPath();
  ctx.roundRect(28, 175, 456, 48, 12);
  ctx.fillStyle =
    status === 'advance'
      ? 'rgba(16, 185, 129, 0.25)'
      : status === 'defeat'
      ? 'rgba(255, 0, 127, 0.25)'
      : 'rgba(0, 243, 255, 0.15)';
  ctx.fill();
  ctx.strokeStyle = status === 'advance' ? '#10b981' : status === 'defeat' ? '#ff007f' : '#00f3ff';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = status === 'advance' ? '#34d399' : status === 'defeat' ? '#f43f5e' : '#38bdf8';
  ctx.font = '900 18px monospace';
  const statusMsg =
    status === 'advance'
      ? '⚡ ¡IMPULSO HYPERESPACIAL: AVANCE EXITOSO! ⚡'
      : status === 'defeat'
      ? '⚠ ALERTA: DAÑO EN ESCUDO POR DERROTA ⚠'
      : '✦ EN TRAYECTORIA // LISTO PARA EL PORTAL ✦';
  ctx.fillText(statusMsg, 256, 206);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export const CyberScene3D: React.FC<CyberScene3DProps> = ({
  currentMissionIndex,
  completedMissions,
  selectedAvatarId,
  aciertos,
  defeatsCount,
  lastActionStatus,
  onSelectMission,
  onOpenPortal,
  cameraMode
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvas2dRef = useRef<HTMLCanvasElement>(null);
  const [useFallback2D, setUseFallback2D] = useState<boolean>(false);

  // WebGL Three.js refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number>(0);
  const targetCameraPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 3, 10));
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 1.2, 0));
  const nodesGroupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());

  // 3D Cyber Spaceship refs
  const shipGroupRef = useRef<THREE.Group | null>(null);
  const shipTargetPosRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 1.8, 0));
  const shipTargetRotYRef = useRef<number>(0);
  const shipTelemetrySpriteRef = useRef<THREE.Sprite | null>(null);
  const thrustersMeshRef = useRef<THREE.Mesh[]>([]);
  const shieldRingRef = useRef<THREE.Mesh | null>(null);
  const pilotVisorMeshRef = useRef<THREE.Mesh | null>(null);
  const shipPointLightRef = useRef<THREE.PointLight | null>(null);

  const currentAvatar = AVATARS.find((a) => a.id === selectedAvatarId) || AVATARS[0];

  // --- Initialize 3D WebGL Three.js Engine or Fallback ---
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    if (!checkWebGLSupport()) {
      setUseFallback2D(true);
      return;
    }

    try {
      // --- Scene & Camera ---
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x050414, 0.012);
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
      camera.position.set(0, 4, 12);
      cameraRef.current = camera;

      // --- Renderer ---
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        failIfMajorPerformanceCaveat: false
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.35;
      container.innerHTML = '';
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // --- Lighting ---
      const ambientLight = new THREE.AmbientLight(0x140c33, 2.5);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0x00f3ff, 3.2);
      dirLight1.position.set(15, 25, 18);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xff007f, 3.0);
      dirLight2.position.set(-18, 12, -12);
      scene.add(dirLight2);

      // --- Deep Space Cosmic Starfield ---
      const starCount = 2400;
      const starGeo = new THREE.BufferGeometry();
      const starPositions = new Float32Array(starCount * 3);
      const starColors = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount; i++) {
        const radius = 180 + Math.random() * 160;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        starPositions[i * 3 + 2] = radius * Math.cos(phi);

        const r = Math.random();
        if (r < 0.45) {
          starColors[i * 3] = 0.0;
          starColors[i * 3 + 1] = 0.95;
          starColors[i * 3 + 2] = 1.0;
        } else if (r < 0.85) {
          starColors[i * 3] = 1.0;
          starColors[i * 3 + 1] = 0.0;
          starColors[i * 3 + 2] = 0.5;
        } else {
          starColors[i * 3] = 0.9;
          starColors[i * 3 + 1] = 0.95;
          starColors[i * 3 + 2] = 1.0;
        }
      }
      starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
      starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

      const starMat = new THREE.PointsMaterial({
        size: 1.9,
        vertexColors: true,
        transparent: true,
        opacity: 0.85
      });
      const starfield = new THREE.Points(starGeo, starMat);
      scene.add(starfield);
      particlesRef.current = starfield;

      // --- Enhanced 3D Multi-Layer Cyber Grid Floor ---
      const gridHelper = new THREE.GridHelper(300, 100, 0x00f3ff, 0x1a1238);
      gridHelper.position.y = -1.5;
      scene.add(gridHelper);

      const secondaryGrid = new THREE.GridHelper(300, 50, 0xff007f, 0x0a051c);
      secondaryGrid.position.y = -1.52;
      scene.add(secondaryGrid);

      // Cyber Monoliths in Background Grid
      const monolithGeo = new THREE.BoxGeometry(1.2, 8, 1.2);
      const monolithMat = new THREE.MeshStandardMaterial({
        color: 0x07051a,
        emissive: 0x00f3ff,
        emissiveIntensity: 0.3,
        roughness: 0.2,
        metalness: 0.9,
        wireframe: false
      });
      for (let i = 0; i < 20; i++) {
        const mx = (Math.random() - 0.5) * 120;
        const mz = (Math.random() - 0.5) * 100 - 15;
        const monolith = new THREE.Mesh(monolithGeo, monolithMat);
        monolith.position.set(mx, 2, mz);
        scene.add(monolith);
      }

      // --- Curved Energy Pathways (#00f3ff & #ff007f) ---
      const pathPoints = FINANCIAL_MISSIONS.map((m) => new THREE.Vector3(...m.gridCoordinates));
      const curve = new THREE.CatmullRomCurve3(pathPoints);

      const tubeGeo = new THREE.TubeGeometry(curve, 120, 0.45, 12, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: 0x05041a,
        emissive: 0x00f3ff,
        emissiveIntensity: 0.9,
        roughness: 0.2,
        metalness: 0.9
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      scene.add(tubeMesh);

      const outerRailGeo = new THREE.TubeGeometry(curve, 120, 0.75, 8, false);
      const outerRailMat = new THREE.MeshBasicMaterial({
        color: 0xff007f,
        wireframe: true,
        transparent: true,
        opacity: 0.45
      });
      const outerRailMesh = new THREE.Mesh(outerRailGeo, outerRailMat);
      scene.add(outerRailMesh);

      // --- Stations / Math Portals on the Pathway ---
      const nodesGroup = new THREE.Group();
      scene.add(nodesGroup);
      nodesGroupRef.current = nodesGroup;

      FINANCIAL_MISSIONS.forEach((mission, idx) => {
        const nodeSubGroup = new THREE.Group();
        nodeSubGroup.position.set(mission.gridCoordinates[0], mission.gridCoordinates[1], mission.gridCoordinates[2]);
        nodeSubGroup.userData = { missionIndex: idx };

        // Pedestal
        const pedGeo = new THREE.CylinderGeometry(1.8, 2.2, 0.35, 16);
        const pedMat = new THREE.MeshStandardMaterial({
          color: 0x0f0b24,
          emissive: mission.category === 'Gastos' ? 0xff007f : 0x00f3ff,
          emissiveIntensity: 0.4,
          roughness: 0.3,
          metalness: 0.8
        });
        const pedestal = new THREE.Mesh(pedGeo, pedMat);
        pedestal.position.y = -0.2;
        nodeSubGroup.add(pedestal);

        // Rotating rings
        const ringGeo = new THREE.TorusGeometry(1.4, 0.08, 12, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          color: mission.operationType === 'subtract' ? 0xff007f : 0x00f3ff,
          transparent: true,
          opacity: 0.85
        });
        const ring1 = new THREE.Mesh(ringGeo, ringMat);
        ring1.rotation.x = Math.PI / 2;
        ring1.position.y = 0.5;
        ring1.userData = { isRotatingRing: true, speed: 0.02 + idx * 0.005 };
        nodeSubGroup.add(ring1);

        const ring2 = new THREE.Mesh(ringGeo, ringMat.clone());
        ring2.rotation.x = Math.PI / 3;
        ring2.scale.set(0.8, 0.8, 0.8);
        ring2.position.y = 1.0;
        ring2.userData = { isRotatingRing: true, speed: -0.015 - idx * 0.003 };
        nodeSubGroup.add(ring2);

        // Octahedron crystal
        const crystalGeo = new THREE.OctahedronGeometry(0.65, 0);
        const crystalMat = new THREE.MeshStandardMaterial({
          color: mission.category === 'Gastos' ? 0xff007f : 0x00f3ff,
          emissive: mission.category === 'Gastos' ? 0xff007f : 0x00f3ff,
          emissiveIntensity: 1.2,
          roughness: 0.1,
          metalness: 0.6
        });
        const crystal = new THREE.Mesh(crystalGeo, crystalMat);
        crystal.position.y = 1.8;
        crystal.userData = { isCrystal: true, baseY: 1.8, offset: idx * 0.7 };
        nodeSubGroup.add(crystal);

        // Point Light
        const pointLight = new THREE.PointLight(
          mission.category === 'Gastos' ? 0xff007f : 0x00f3ff,
          2.0,
          8
        );
        pointLight.position.y = 2.0;
        nodeSubGroup.add(pointLight);

        nodesGroup.add(nodeSubGroup);
      });

      // --- 3D CYBER SPACESHIP (NAVE 3D CYBER-INTERCEPTOR MK-III) ---
      const shipGroup = new THREE.Group();
      const initialCoords = FINANCIAL_MISSIONS[0].gridCoordinates;
      shipGroup.position.set(initialCoords[0], initialCoords[1] + 1.8, initialCoords[2]);
      scene.add(shipGroup);
      shipGroupRef.current = shipGroup;

      // 1. Central Aerodynamic Fuselage
      const hullGeo = new THREE.ConeGeometry(0.65, 2.6, 6);
      hullGeo.rotateX(Math.PI / 2); // Point forward along Z
      const hullMat = new THREE.MeshStandardMaterial({
        color: 0x08061e,
        emissive: 0x00f3ff,
        emissiveIntensity: 0.45,
        roughness: 0.25,
        metalness: 0.85
      });
      const hullMesh = new THREE.Mesh(hullGeo, hullMat);
      shipGroup.add(hullMesh);

      // Top Spinal Ridge
      const ridgeGeo = new THREE.BoxGeometry(0.2, 0.25, 1.8);
      const ridgeMat = new THREE.MeshStandardMaterial({
        color: 0x03020c,
        emissive: 0xff007f,
        emissiveIntensity: 0.8
      });
      const ridgeMesh = new THREE.Mesh(ridgeGeo, ridgeMat);
      ridgeMesh.position.set(0, 0.35, -0.2);
      shipGroup.add(ridgeMesh);

      // 2. Delta Forward-Swept Wings (Left & Right)
      const wingShape = new THREE.Shape();
      wingShape.moveTo(0, 0);
      wingShape.lineTo(1.8, -0.6);
      wingShape.lineTo(1.5, -1.4);
      wingShape.lineTo(0, -0.8);
      wingShape.closePath();

      const extrudeSettings = { depth: 0.08, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02 };
      const wingGeo = new THREE.ExtrudeGeometry(wingShape, extrudeSettings);
      wingGeo.rotateX(Math.PI / 2);

      const wingMat = new THREE.MeshStandardMaterial({
        color: 0x0d0926,
        emissive: 0x00f3ff,
        emissiveIntensity: 0.35,
        roughness: 0.3,
        metalness: 0.8
      });

      // Right Wing
      const rightWing = new THREE.Mesh(wingGeo, wingMat);
      rightWing.position.set(0.3, 0.05, 0.4);
      shipGroup.add(rightWing);

      // Left Wing
      const leftWing = new THREE.Mesh(wingGeo, wingMat);
      leftWing.scale.set(-1, 1, 1);
      leftWing.position.set(-0.3, 0.05, 0.4);
      shipGroup.add(leftWing);

      // Wingtip Neon Plasma Pylons
      const pylonGeo = new THREE.BoxGeometry(0.12, 0.18, 0.8);
      const pylonMat = new THREE.MeshStandardMaterial({
        color: 0xff007f,
        emissive: 0xff007f,
        emissiveIntensity: 1.5
      });
      const rightPylon = new THREE.Mesh(pylonGeo, pylonMat);
      rightPylon.position.set(2.0, 0.05, -0.4);
      shipGroup.add(rightPylon);

      const leftPylon = new THREE.Mesh(pylonGeo, pylonMat);
      leftPylon.position.set(-2.0, 0.05, -0.4);
      shipGroup.add(leftPylon);

      // 3. Cockpit Canopy with Pilot Avatar Inside
      const canopyGeo = new THREE.SphereGeometry(0.38, 16, 12);
      canopyGeo.scale(0.8, 0.6, 1.4);
      const canopyMat = new THREE.MeshStandardMaterial({
        color: 0x00f3ff,
        emissive: 0x00f3ff,
        emissiveIntensity: 0.8,
        transparent: true,
        opacity: 0.6,
        roughness: 0.1,
        metalness: 0.9
      });
      const canopyMesh = new THREE.Mesh(canopyGeo, canopyMat);
      canopyMesh.position.set(0, 0.28, 0.2);
      shipGroup.add(canopyMesh);

      // 3D Avatar Pilot Mini-Model Inside Cockpit
      const pilotGroup = new THREE.Group();
      pilotGroup.position.set(0, 0.2, 0.2);
      pilotGroup.scale.set(0.65, 0.65, 0.65);

      // Pilot Head
      const pilotHeadGeo = new THREE.SphereGeometry(0.2, 12, 12);
      const pilotHeadMat = new THREE.MeshStandardMaterial({ color: 0xffd2a6, roughness: 0.5 });
      const pilotHead = new THREE.Mesh(pilotHeadGeo, pilotHeadMat);
      pilotHead.position.y = 0.22;
      pilotGroup.add(pilotHead);

      // Pilot Glowing Visor
      const visorGeo = new THREE.BoxGeometry(0.32, 0.09, 0.15);
      const visorMat = new THREE.MeshStandardMaterial({
        color: 0x00f3ff,
        emissive: 0x00f3ff,
        emissiveIntensity: 2.5
      });
      const pilotVisor = new THREE.Mesh(visorGeo, visorMat);
      pilotVisor.position.set(0, 0.24, 0.14);
      pilotGroup.add(pilotVisor);
      pilotVisorMeshRef.current = pilotVisor;

      // Pilot Helmet & Jacket
      const pilotHelmetGeo = new THREE.SphereGeometry(0.24, 12, 12);
      const pilotHelmetMat = new THREE.MeshStandardMaterial({
        color: 0x0f0b24,
        emissive: 0x00f3ff,
        emissiveIntensity: 0.4
      });
      const pilotHelmet = new THREE.Mesh(pilotHelmetGeo, pilotHelmetMat);
      pilotHelmet.position.set(0, 0.26, -0.02);
      pilotGroup.add(pilotHelmet);

      shipGroup.add(pilotGroup);

      // 4. Twin Ion Plasma Thrusters & Exhaust Flame Cones
      thrustersMeshRef.current = [];
      const thrusterGeo = new THREE.CylinderGeometry(0.18, 0.22, 0.6, 12);
      thrusterGeo.rotateX(Math.PI / 2);
      const thrusterMat = new THREE.MeshStandardMaterial({
        color: 0x08051a,
        emissive: 0x00f3ff,
        emissiveIntensity: 0.6,
        metalness: 0.9
      });

      const flameGeo = new THREE.ConeGeometry(0.16, 0.9, 12);
      flameGeo.rotateX(-Math.PI / 2);
      const flameMat = new THREE.MeshStandardMaterial({
        color: 0x00f3ff,
        emissive: 0x00f3ff,
        emissiveIntensity: 3.0,
        transparent: true,
        opacity: 0.9
      });

      [-0.4, 0.4].forEach((xPos) => {
        const thruster = new THREE.Mesh(thrusterGeo, thrusterMat);
        thruster.position.set(xPos, 0, -1.2);
        shipGroup.add(thruster);

        const flame = new THREE.Mesh(flameGeo, flameMat);
        flame.position.set(xPos, 0, -1.8);
        shipGroup.add(flame);
        thrustersMeshRef.current.push(flame);
      });

      // 5. Dynamic Orbiting Shield / Victory Ring
      const shieldGeo = new THREE.TorusGeometry(1.8, 0.04, 12, 32);
      const shieldMat = new THREE.MeshBasicMaterial({
        color: 0x00f3ff,
        transparent: true,
        opacity: 0.85,
        wireframe: true
      });
      const shieldRing = new THREE.Mesh(shieldGeo, shieldMat);
      shieldRing.rotation.x = Math.PI / 2;
      shipGroup.add(shieldRing);
      shieldRingRef.current = shieldRing;

      // 6. Dynamic Ship Under-Glow Point Light
      const shipPointLight = new THREE.PointLight(0x00f3ff, 3.5, 10);
      shipPointLight.position.set(0, -0.4, 0);
      shipGroup.add(shipPointLight);
      shipPointLightRef.current = shipPointLight;

      // 7. Floating 3D Holographic Telemetry Marker Sprite (Avances / Derrotas)
      const avatarPrimaryColor = currentAvatar.primaryColor || currentAvatar.themeColor || '#00f3ff';
      const telemetryTex = createShipTelemetryTexture(
        currentAvatar.name,
        aciertos,
        defeatsCount,
        lastActionStatus,
        avatarPrimaryColor
      );
      const spriteMat = new THREE.SpriteMaterial({
        map: telemetryTex,
        transparent: true,
        depthTest: false
      });
      const telemetrySprite = new THREE.Sprite(spriteMat);
      telemetrySprite.scale.set(3.2, 1.6, 1);
      telemetrySprite.position.set(0, 2.2, 0);
      shipGroup.add(telemetrySprite);
      shipTelemetrySpriteRef.current = telemetrySprite;

      // --- Interactive Pointer ---
      const onPointerDown = (event: MouseEvent) => {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.current.setFromCamera(mouse.current, camera);
        const intersects = raycaster.current.intersectObjects(nodesGroup.children, true);

        if (intersects.length > 0) {
          let parent: THREE.Object3D | null = intersects[0].object;
          while (parent && parent !== nodesGroup) {
            if (parent.userData && parent.userData.missionIndex !== undefined) {
              cyberAudio.playClick(950);
              onSelectMission(parent.userData.missionIndex);
              onOpenPortal();
              break;
            }
            parent = parent.parent;
          }
        }
      };

      const domElement = renderer.domElement;
      domElement.addEventListener('pointerdown', onPointerDown);

      const handleResize = () => {
        if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        cameraRef.current.aspect = w / h;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(w, h);
      };

      window.addEventListener('resize', handleResize);

      // --- Animation Loop ---
      let clock = new THREE.Clock();
      const animate = () => {
        const elapsedTime = clock.getElapsedTime();

        // Rotate Starfield
        if (particlesRef.current) {
          particlesRef.current.rotation.y = elapsedTime * 0.02;
        }

        // Animate Station Nodes & Crystals
        if (nodesGroupRef.current) {
          nodesGroupRef.current.children.forEach((node) => {
            node.children.forEach((child) => {
              if (child.userData.isRotatingRing) {
                child.rotation.z += child.userData.speed;
              }
              if (child.userData.isCrystal) {
                child.position.y =
                  child.userData.baseY + Math.sin(elapsedTime * 2.5 + child.userData.offset) * 0.15;
                child.rotation.y += 0.02;
              }
            });
          });
        }

        // --- 3D CYBER SPACESHIP FLIGHT DYNAMICS ---
        if (shipGroupRef.current) {
          const ship = shipGroupRef.current;
          
          // Smooth Interpolation towards Target Mission Coordinates
          ship.position.lerp(shipTargetPosRef.current, 0.06);

          // Subtle flight hover bobbing
          const hoverY = Math.sin(elapsedTime * 3.5) * 0.12;
          ship.position.y += hoverY * 0.02;

          // Banking / Rotation toward direction of movement
          ship.rotation.y = THREE.MathUtils.lerp(ship.rotation.y, shipTargetRotYRef.current, 0.08);
          ship.rotation.z = Math.sin(elapsedTime * 2) * 0.08; // slight roll
          ship.rotation.x = Math.sin(elapsedTime * 2.8) * 0.04; // slight pitch

          // Thruster Exhaust Flame Pulsing
          thrustersMeshRef.current.forEach((flame, i) => {
            const flamePulse = 0.8 + Math.sin(elapsedTime * 20 + i) * 0.25;
            flame.scale.set(1, flamePulse, 1);
          });

          // Shield Ring Spin
          if (shieldRingRef.current) {
            shieldRingRef.current.rotation.z += 0.03;
          }
        }

        // Camera Lerp
        if (cameraRef.current) {
          camera.position.lerp(targetCameraPos.current, 0.04);
          camera.lookAt(targetLookAt.current);
        }

        renderer.render(scene, camera);
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener('resize', handleResize);
        domElement.removeEventListener('pointerdown', onPointerDown);
        cancelAnimationFrame(animationFrameRef.current);
        renderer.dispose();
      };
    } catch {
      setUseFallback2D(true);
    }
  }, []);

  // Update target ship & camera position when current mission changes
  useEffect(() => {
    if (useFallback2D) return;
    const currentMission = FINANCIAL_MISSIONS[currentMissionIndex] || FINANCIAL_MISSIONS[0];
    const [mx, my, mz] = currentMission.gridCoordinates;

    // Ship target on the trajectory node (centered along Z axis)
    shipTargetPosRef.current.set(0, my + 1.8, mz + 0.6);
    shipTargetRotYRef.current = 0;

    if (cameraMode === 'portal_focus') {
      targetCameraPos.current.set(0, my + 2.0, mz + 5.5);
      targetLookAt.current.set(0, my + 1.2, mz - 4.0);
    } else if (cameraMode === 'cinematic') {
      targetCameraPos.current.set(3.2, my + 4.2, mz + 8.5);
      targetLookAt.current.set(0, my + 1.2, mz - 6.0);
    } else {
      // Default Centered Orbital Runway View
      targetCameraPos.current.set(0, my + 3.2, mz + 8.5);
      targetLookAt.current.set(0, my + 1.2, mz - 8.0);
    }
  }, [currentMissionIndex, cameraMode, useFallback2D]);

  // Update telemetry texture & avatar pilot colors when avatar, stats, or results change
  useEffect(() => {
    if (useFallback2D) return;

    const avatarPrimaryColor = currentAvatar.primaryColor || currentAvatar.themeColor || '#00f3ff';
    if (shipTelemetrySpriteRef.current) {
      const newTex = createShipTelemetryTexture(
        currentAvatar.name,
        aciertos,
        defeatsCount,
        lastActionStatus,
        avatarPrimaryColor
      );
      shipTelemetrySpriteRef.current.material.map?.dispose();
      shipTelemetrySpriteRef.current.material.map = newTex;
      shipTelemetrySpriteRef.current.material.needsUpdate = true;
    }

    if (pilotVisorMeshRef.current) {
      const colorVal = parseInt(avatarPrimaryColor.replace('#', '0x'), 16) || 0x00f3ff;
      (pilotVisorMeshRef.current.material as THREE.MeshStandardMaterial).color.setHex(colorVal);
      (pilotVisorMeshRef.current.material as THREE.MeshStandardMaterial).emissive.setHex(colorVal);
    }

    if (shipPointLightRef.current) {
      if (lastActionStatus === 'advance') {
        shipPointLightRef.current.color.setHex(0x10b981);
        shipPointLightRef.current.intensity = 5.5;
      } else if (lastActionStatus === 'defeat') {
        shipPointLightRef.current.color.setHex(0xff007f);
        shipPointLightRef.current.intensity = 6.0;
      } else {
        const colorVal = parseInt(avatarPrimaryColor.replace('#', '0x'), 16) || 0x00f3ff;
        shipPointLightRef.current.color.setHex(colorVal);
        shipPointLightRef.current.intensity = 3.5;
      }
    }

    if (shieldRingRef.current) {
      if (lastActionStatus === 'advance') {
        (shieldRingRef.current.material as THREE.MeshBasicMaterial).color.setHex(0x10b981);
      } else if (lastActionStatus === 'defeat') {
        (shieldRingRef.current.material as THREE.MeshBasicMaterial).color.setHex(0xff007f);
      } else {
        (shieldRingRef.current.material as THREE.MeshBasicMaterial).color.setHex(0x00f3ff);
      }
    }
  }, [selectedAvatarId, aciertos, defeatsCount, lastActionStatus, currentAvatar, useFallback2D]);

  // --- High Performance 3D Perspective Canvas Engine (Resilient Fallback) ---
  useEffect(() => {
    if (!useFallback2D || !canvas2dRef.current) return;
    const canvas = canvas2dRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let time = 0;

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Stars pool
    const stars: { x: number; y: number; s: number; color: string; speed: number }[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        s: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#00f3ff' : '#ff007f',
        speed: Math.random() * 0.4 + 0.1
      });
    }

    const render = () => {
      time += 0.025;
      const w = canvas.width;
      const h = canvas.height;

      // Dark cyber space background
      ctx.fillStyle = '#050414';
      ctx.fillRect(0, 0, w, h);

      // Glowing Nebulae
      const grad1 = ctx.createRadialGradient(w * 0.25, h * 0.3, 10, w * 0.25, h * 0.3, w * 0.5);
      grad1.addColorStop(0, 'rgba(0, 243, 255, 0.2)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, w, h);

      const grad2 = ctx.createRadialGradient(w * 0.75, h * 0.4, 10, w * 0.75, h * 0.4, w * 0.55);
      grad2.addColorStop(0, 'rgba(255, 0, 127, 0.2)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);

      // Render Stars
      stars.forEach((star) => {
        star.y -= star.speed;
        if (star.y < 0) star.y = h;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.s, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3D Perspective Ground Grid
      const horizonY = h * 0.52;
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.35)';
      ctx.lineWidth = 1.5;

      const vanishX = w * 0.5 + Math.sin(time * 0.5) * 35;
      for (let x = -w * 0.5; x <= w * 1.5; x += 75) {
        ctx.beginPath();
        ctx.moveTo(vanishX, horizonY);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      const gridOffset = (time * 40) % 40;
      for (let y = horizonY; y <= h; y += 22) {
        const perspectiveDist = (y - horizonY) / (h - horizonY);
        const actualY = horizonY + perspectiveDist * perspectiveDist * (h - horizonY) + gridOffset * perspectiveDist * 0.6;
        if (actualY <= h) {
          ctx.strokeStyle = `rgba(255, 0, 127, ${0.15 + perspectiveDist * 0.45})`;
          ctx.beginPath();
          ctx.moveTo(0, actualY);
          ctx.lineTo(w, actualY);
          ctx.stroke();
        }
      }

      // Straight Centered Energy Highway (#00f3ff & #ff007f)
      const centerX = w * 0.5;
      const trackBottomY = h * 0.95;
      const trackTopY = horizonY + 10;

      // Glow Beam Central
      ctx.beginPath();
      ctx.moveTo(centerX, trackBottomY);
      ctx.lineTo(centerX, trackTopY);
      ctx.strokeStyle = '#00f3ff';
      ctx.lineWidth = 6;
      ctx.shadowColor = '#00f3ff';
      ctx.shadowBlur = 25;
      ctx.stroke();

      // Outer Dual Rails (Left & Right of Center)
      ctx.beginPath();
      ctx.moveTo(centerX - 40, trackBottomY);
      ctx.lineTo(centerX - 8, trackTopY);
      ctx.moveTo(centerX + 40, trackBottomY);
      ctx.lineTo(centerX + 8, trackTopY);
      ctx.strokeStyle = '#ff007f';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#ff007f';
      ctx.shadowBlur = 15;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Stations along the straight central path
      let currentShipX = centerX;
      let currentShipY = h * 0.65;

      FINANCIAL_MISSIONS.forEach((m, idx) => {
        const t = (idx + 1) / (FINANCIAL_MISSIONS.length + 1);
        const sx = centerX;
        const sy = trackBottomY - Math.pow(t, 0.75) * (trackBottomY - trackTopY);

        const isCurrent = idx === currentMissionIndex;
        const isDone = completedMissions.includes(m.id);

        if (isCurrent) {
          currentShipX = sx;
          currentShipY = sy;
        }

        ctx.fillStyle = isCurrent ? '#00f3ff' : isDone ? '#10b981' : '#ff007f';
        ctx.shadowColor = isCurrent ? '#00f3ff' : '#ff007f';
        ctx.shadowBlur = isCurrent ? 25 : 8;
        ctx.beginPath();
        ctx.arc(sx, sy, isCurrent ? 12 : 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // --- 3D PERSPECTIVE CYBER SPACESHIP ON TRAJECTORY ---
      const shipBob = Math.sin(time * 4) * 6;
      const sx = currentShipX;
      const sy = currentShipY - 35 + shipBob;

      ctx.save();
      ctx.translate(sx, sy);

      // Jet Thruster Flames
      const flameLen = 22 + Math.sin(time * 25) * 8;
      ctx.fillStyle = lastActionStatus === 'advance' ? '#10b981' : '#00f3ff';
      ctx.shadowColor = lastActionStatus === 'advance' ? '#10b981' : '#00f3ff';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.moveTo(-10, 15);
      ctx.lineTo(0, 15 + flameLen);
      ctx.lineTo(10, 15);
      ctx.closePath();
      ctx.fill();
      ctx.shadowBlur = 0;

      // 3D Spaceship Body (Fuselage)
      ctx.fillStyle = '#0a0824';
      ctx.strokeStyle = lastActionStatus === 'defeat' ? '#ff007f' : '#00f3ff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, -28); // nose
      ctx.lineTo(24, 16); // right wing
      ctx.lineTo(12, 10);
      ctx.lineTo(0, 15); // engine center
      ctx.lineTo(-12, 10);
      ctx.lineTo(-24, 16); // left wing
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Cockpit Dome
      ctx.fillStyle = currentAvatar.primaryColor || '#00f3ff';
      ctx.beginPath();
      ctx.ellipse(0, -4, 6, 10, 0, 0, Math.PI * 2);
      ctx.fill();

      // Pilot Avatar Emblem
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 8px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(currentAvatar.name.split(' ')[0], 0, -2);

      // Shield Aura
      ctx.strokeStyle =
        lastActionStatus === 'advance'
          ? '#10b981'
          : lastActionStatus === 'defeat'
          ? '#ff007f'
          : 'rgba(0, 243, 255, 0.6)';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.arc(0, 0, 34 + Math.sin(time * 3) * 3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Floating Hologram Telemetry Tag above Ship
      ctx.fillStyle = 'rgba(6, 4, 24, 0.9)';
      ctx.strokeStyle = lastActionStatus === 'defeat' ? '#ff007f' : '#00f3ff';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(-75, -78, 150, 42, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px monospace';
      ctx.fillText(`PILOTO: ${currentAvatar.name.toUpperCase()}`, 0, -66);

      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 10px monospace';
      ctx.fillText(`▲ ${aciertos} AVANCES`, -36, -48);

      ctx.fillStyle = '#ff007f';
      ctx.fillText(`▼ ${defeatsCount} DERROTAS`, 36, -48);

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [useFallback2D, currentMissionIndex, completedMissions, selectedAvatarId, aciertos, defeatsCount, lastActionStatus, currentAvatar]);

  return (
    <div className="relative w-full h-full select-none overflow-hidden" id="cyber-scene-3d-wrapper">
      {useFallback2D ? (
        <canvas ref={canvas2dRef} className="w-full h-full cursor-pointer" />
      ) : (
        <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      )}

      {/* Cyber Corner Grid Ambient Decors */}
      <div className="pointer-events-none absolute top-4 right-4 flex items-center gap-3 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cyan-500/30 text-xs font-mono text-cyan-300">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
        <span>CYBER-GRID 3D ENGINE: 60 FPS</span>
      </div>
    </div>
  );
};
