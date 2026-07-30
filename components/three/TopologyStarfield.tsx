'use client';

import { Html, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

const nodes = [
  { label: 'atlas', position: [0, 2.15, 0.25], href: 'https://github.com/syswonder/robonix/tree/dev/system/atlas' },
  { label: 'chronos', position: [1.55, 1.45, -1.05], href: 'https://github.com/syswonder/robonix/tree/dev/system/chronos' },
  { label: 'executor', position: [2.25, 0.1, 0.55], href: 'https://github.com/syswonder/robonix/tree/dev/system/executor' },
  { label: 'keystone', position: [1.55, -1.25, -1.25], href: 'https://github.com/syswonder/robonix/tree/dev/system/keystone' },
  { label: 'liaison', position: [0.35, -2.1, 1.05], href: 'https://github.com/syswonder/robonix/tree/dev/system/liaison' },
  { label: 'nexus', position: [-1.2, -1.75, -0.55], href: 'https://github.com/syswonder/robonix/tree/dev/system/nexus' },
  { label: 'pilot', position: [-2.1, -0.62, 1.25], href: 'https://github.com/syswonder/robonix/tree/dev/system/pilot' },
  { label: 'scene', position: [-2.05, 0.72, -0.85], href: 'https://github.com/syswonder/robonix/tree/dev/system/scene' },
  { label: 'scribe', position: [-0.85, 1.9, 1.12], href: 'https://github.com/syswonder/robonix/tree/dev/system/scribe' },
  { label: 'sentinel', position: [0.9, 0.82, 1.95], href: 'https://github.com/syswonder/robonix/tree/dev/system/sentinel' },
  { label: 'soma', position: [1.08, -0.72, 1.76], href: 'https://github.com/syswonder/robonix/tree/dev/system/soma' },
  { label: 'vitals', position: [-0.62, -0.22, -2.1], href: 'https://github.com/syswonder/robonix/tree/dev/system/vitals' },
] as const;

const edges = [
  [0, 1], [0, 7], [0, 8], [0, 9],
  [1, 2], [1, 8], [1, 11],
  [2, 3], [2, 9], [2, 10],
  [3, 4], [3, 10], [3, 11],
  [4, 5], [4, 10], [4, 6],
  [5, 6], [5, 11], [5, 7],
  [6, 7], [6, 9], [6, 10],
  [7, 8], [7, 11],
  [8, 9], [8, 11],
  [9, 10],
  [10, 11],
] as const;

function createRadialTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.16, 'rgba(186,230,253,0.92)');
  gradient.addColorStop(0.36, 'rgba(56,189,248,0.42)');
  gradient.addColorStop(0.68, 'rgba(168,85,247,0.12)');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createStarTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 192;
  canvas.height = 192;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const core = ctx.createRadialGradient(96, 96, 0, 96, 96, 22);
  core.addColorStop(0, 'rgba(255,255,255,1)');
  core.addColorStop(0.35, 'rgba(224,242,254,0.95)');
  core.addColorStop(0.72, 'rgba(56,189,248,0.28)');
  core.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = core;
  ctx.fillRect(64, 64, 64, 64);

  const horizontal = ctx.createLinearGradient(10, 96, 182, 96);
  horizontal.addColorStop(0, 'rgba(0,0,0,0)');
  horizontal.addColorStop(0.39, 'rgba(125,211,252,0.18)');
  horizontal.addColorStop(0.5, 'rgba(255,255,255,0.92)');
  horizontal.addColorStop(0.61, 'rgba(125,211,252,0.18)');
  horizontal.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = horizontal;
  ctx.fillRect(10, 93, 172, 6);

  const vertical = ctx.createLinearGradient(96, 10, 96, 182);
  vertical.addColorStop(0, 'rgba(0,0,0,0)');
  vertical.addColorStop(0.4, 'rgba(244,114,182,0.13)');
  vertical.addColorStop(0.5, 'rgba(255,255,255,0.78)');
  vertical.addColorStop(0.6, 'rgba(34,211,238,0.18)');
  vertical.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = vertical;
  ctx.fillRect(93, 10, 6, 172);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function StarNode({
  label,
  position,
  index,
  href,
  glowTexture,
  starTexture,
}: {
  label: string;
  position: readonly number[];
  index: number;
  href: string;
  glowTexture: THREE.Texture;
  starTexture: THREE.Texture;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2.2 + index * 0.7) * 0.08;
    groupRef.current.scale.setScalar(pulse);
    groupRef.current.rotation.x = state.clock.elapsedTime * 0.22 + index;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.18 + index * 0.4;
  });

  return (
    <group
      ref={groupRef}
      position={position as [number, number, number]}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = '';
      }}
      onClick={(event) => {
        event.stopPropagation();
        if (event.delta > 6) return;
        window.open(href, '_blank', 'noopener,noreferrer');
      }}
    >
      <mesh>
        <sphereGeometry args={[0.055, 24, 24]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
      <sprite scale={[0.62, 0.62, 1]}>
        <spriteMaterial map={glowTexture} transparent opacity={0.68} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
      </sprite>
      <sprite scale={[0.5, 0.5, 1]}>
        <spriteMaterial map={starTexture} transparent opacity={0.82} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
      </sprite>

      {hovered && (
        <Html center distanceFactor={8} position={[0, -0.45, 0]} style={{ pointerEvents: 'none' }}>
          <span className="rounded-full border border-white/15 bg-slate-950/82 px-3 py-1.5 font-mono text-[11px] font-black lowercase text-white shadow-[0_0_22px_rgba(34,211,238,0.32)] backdrop-blur-md">
            {label}
          </span>
        </Html>
      )}
    </group>
  );
}

function TopologyGraph() {
  const groupRef = useRef<THREE.Group>(null);
  const glowTexture = useMemo(() => createRadialTexture(), []);
  const starTexture = useMemo(() => createStarTexture(), []);

  const edgeLines = useMemo(() => {
    return edges.map(([from, to], index) => {
      const start = new THREE.Vector3(...nodes[from].position);
      const end = new THREE.Vector3(...nodes[to].position);
      const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
      return new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({
          color: index % 3 === 0 ? '#38bdf8' : index % 3 === 1 ? '#f472b6' : '#34d399',
          transparent: true,
          opacity: 0.42,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
    });
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0015;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.28) * 0.08;
  });

  return (
    <group ref={groupRef} scale={0.82}>
      {edgeLines.map((line, index) => (
        <primitive key={index} object={line} />
      ))}
      {nodes.map((node, index) => (
        <StarNode
          key={node.label}
          label={node.label}
          position={node.position}
          index={index}
          href={node.href}
          glowTexture={glowTexture}
          starTexture={starTexture}
        />
      ))}
    </group>
  );
}

export default function TopologyStarfield() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.4], fov: 39 }}
      dpr={[1, 1.75]}
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: false,
        powerPreference: 'high-performance',
      }}
      style={{ position: 'absolute', inset: 0, background: 'transparent' }}
    >
      <ambientLight intensity={0.8} />
      <TopologyGraph />
      <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.55} />
    </Canvas>
  );
}
