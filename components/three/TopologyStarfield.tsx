'use client';

import { Html } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState, useEffect } from 'react';
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
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.16, 'rgba(186,230,253,0.92)');
  gradient.addColorStop(0.36, 'rgba(56,189,248,0.42)');
  gradient.addColorStop(0.68, 'rgba(168,85,247,0.12)');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// ───────────────────────────────────────────
// Visibility + page-focus gated frame loop (~30fps throttle)
// ───────────────────────────────────────────
function FrameLoop({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  // Default true — kickstarts the demand frameloop on first render.
  // IntersectionObserver callback corrects it asynchronously.
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
    if (visible.current) {
      state.invalidate();
    }
  });

  return null;
}

function StarNode({
  label,
  position,
  index,
  href,
  glowTexture,
  setStarRef,
}: {
  label: string;
  position: readonly number[];
  index: number;
  href: string;
  glowTexture: THREE.Texture;
  setStarRef: (index: number, ref: THREE.Group | null) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      ref={(el) => setStarRef(index, el)}
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
      {/* Tiny sphere — minimal segments, tone-mapped for HDR correctness */}
      <mesh>
        <sphereGeometry args={[0.048, 8, 6]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
      {/* Single glow sprite — additive blending gives the bloom look */}
      <sprite scale={[0.58, 0.58, 1]}>
        <spriteMaterial map={glowTexture} transparent opacity={0.7} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
      </sprite>

      {hovered && (
        <Html center distanceFactor={8} position={[0, -0.45, 0]} style={{ pointerEvents: 'none' }}>
          <span className="pointer-events-none rounded-full border border-white/15 bg-slate-950/82 px-3 py-1.5 font-mono text-[11px] font-black lowercase text-white shadow-[0_0_22px_rgba(34,211,238,0.32)] backdrop-blur-md">
            {label}
          </span>
        </Html>
      )}
    </group>
  );
}

function TopologyGraph() {
  const groupRef = useRef<THREE.Group>(null);
  const starRefs = useRef<(THREE.Group | null)[]>(new Array(nodes.length).fill(null));
  const glowTexture = useMemo(() => createRadialTexture(), []);

  const setStarRef = (index: number, ref: THREE.Group | null) => {
    starRefs.current[index] = ref;
  };

  // Single merged LineSegments — 30 draw calls → 1
  const mergedEdges = useMemo(() => {
    const positions: number[] = [];
    const colors: number[] = [];
    const palette = [
      new THREE.Color('#38bdf8'), // sky
      new THREE.Color('#f472b6'), // pink
      new THREE.Color('#34d399'), // emerald
    ];

    edges.forEach(([from, to], index) => {
      const s = nodes[from].position;
      const e = nodes[to].position;
      positions.push(s[0], s[1], s[2], e[0], e[1], e[2]);
      const c = palette[index % 3];
      colors.push(c.r, c.g, c.b, c.r, c.g, c.b);
    });

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    return geo;
  }, []);

  // Single consolidated useFrame — group rotation + star pulses only
  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
      groupRef.current.rotation.x = Math.sin(t * 0.28) * 0.08;
    }

    const stars = starRefs.current;
    for (let i = 0; i < stars.length; i++) {
      const ref = stars[i];
      if (!ref) continue;
      // Only scale-pulse — glow is radial so rotation is invisible
      ref.scale.setScalar(1 + Math.sin(t * 2.2 + i * 0.7) * 0.08);
    }
  });

  return (
    <group ref={groupRef} scale={0.82}>
      <lineSegments geometry={mergedEdges}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.42}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
      {nodes.map((node, index) => (
        <StarNode
          key={node.label}
          label={node.label}
          position={node.position}
          index={index}
          href={node.href}
          glowTexture={glowTexture}
          setStarRef={setStarRef}
        />
      ))}
    </group>
  );
}

export default function TopologyStarfield() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 6.4], fov: 39 }}
        dpr={[1, 1.5]}
        frameloop="demand"
        gl={{
          antialias: false,
          alpha: true,
          preserveDrawingBuffer: false,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <FrameLoop containerRef={containerRef} />
        <TopologyGraph />
      </Canvas>
    </div>
  );
}
