'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ───────────────────────────────────────────
// Visibility + page-focus gated frame loop (~30fps throttle)
// ───────────────────────────────────────────
function FrameLoop({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const visible = useRef(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let intersecting = false;
    let pageVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        intersecting = entry.isIntersecting;
        visible.current = intersecting && pageVisible;
      },
      { rootMargin: '300px' },
    );
    observer.observe(el);

    const onVisibility = () => {
      pageVisible = document.visibilityState === 'visible';
      visible.current = intersecting && pageVisible;
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [containerRef]);

  useFrame((state) => {
    // Always invalidate when visible to keep demand frameloop alive.
    // Rotation/animation in useFrame callbacks below is so lightweight
    // that it doesn't warrant a throttle — the real GPU savings come
    // from turning OFF entirely when offscreen.
    if (visible.current) {
      state.invalidate();
    }
  });

  return null;
}

// ───────────────────────────────────────────
// Particle field
// ───────────────────────────────────────────
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 250;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const cyan = new THREE.Color('#2563eb');
    const purple = new THREE.Color('#0ea5e9');

    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = cyan.clone().lerp(purple, Math.random());
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.0003;
    pointsRef.current.rotation.x += 0.0001;
    pointsRef.current.position.z =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

// ───────────────────────────────────────────
// Connection lines between nearby particles
// ───────────────────────────────────────────
function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const particleCount = 40;
    const particles: THREE.Vector3[] = [];
    const maxConnections = 80;
    const positions: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      const r = 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particles.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        ),
      );
    }

    let connections = 0;
    const maxDist = 2.5;
    for (let i = 0; i < particles.length && connections < maxConnections; i++) {
      for (let j = i + 1; j < particles.length && connections < maxConnections; j++) {
        if (particles[i].distanceTo(particles[j]) < maxDist) {
          positions.push(
            particles[i].x, particles[i].y, particles[i].z,
            particles[j].x, particles[j].y, particles[j].z,
          );
          connections++;
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3),
    );
    return geo;
  }, []);

  useFrame(() => {
    if (!linesRef.current) return;
    linesRef.current.rotation.y += 0.0003;
    linesRef.current.rotation.x += 0.0001;
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial
        color="#2563eb"
        transparent
        opacity={0.03}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  );
}

// ───────────────────────────────────────────
// Mouse-responsive camera
// ───────────────────────────────────────────
function CameraController() {
  useFrame(({ camera, pointer }) => {
    camera.position.x += (pointer.x * 1.5 - camera.position.x) * 0.03;
    camera.position.y += (-pointer.y * 1.0 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ───────────────────────────────────────────
// Exported scene
// ───────────────────────────────────────────
export default function ParticleScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        frameloop="demand"
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <FrameLoop containerRef={containerRef} />
        <CameraController />
        <ParticleField />
        <ConnectionLines />
      </Canvas>
    </div>
  );
}
