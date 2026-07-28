'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ───────────────────────────────────────────
// Particle field
// ───────────────────────────────────────────
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const cyan = new THREE.Color('#00d4ff');
    const purple = new THREE.Color('#7c3aed');

    for (let i = 0; i < count; i++) {
      // Sphere distribution with variable radius
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
        size={0.02}
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
    const particleCount = 100;
    const particles: THREE.Vector3[] = [];
    const maxConnections = 200;
    const positions: number[] = [];

    // Generate a smaller set of anchor points for lines
    for (let i = 0; i < particleCount; i++) {
      const r = 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particles.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
    }

    // Connect nearby particles
    let connections = 0;
    const maxDist = 2.5;
    for (let i = 0; i < particles.length && connections < maxConnections; i++) {
      for (let j = i + 1; j < particles.length && connections < maxConnections; j++) {
        if (particles[i].distanceTo(particles[j]) < maxDist) {
          positions.push(
            particles[i].x, particles[i].y, particles[i].z,
            particles[j].x, particles[j].y, particles[j].z
          );
          connections++;
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geo;
  }, []);

  useFrame((state) => {
    if (!linesRef.current) return;
    linesRef.current.rotation.y += 0.0003;
    linesRef.current.rotation.x += 0.0001;
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial
        color="#00d4ff"
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
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      style={{ position: 'absolute', inset: 0, background: 'transparent' }}
    >
      <CameraController />
      <ambientLight intensity={0.2} />
      <ParticleField />
      <ConnectionLines />
    </Canvas>
  );
}
