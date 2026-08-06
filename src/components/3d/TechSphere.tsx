import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const TECH_ITEMS = [
  'React 19', 'TypeScript', 'Three.js', 'R3F', 'GLSL', 'Vite',
  'Tailwind v4', 'Motion', 'Lenis', 'Node.js', 'Next.js', 'GraphQL',
  'WebAssembly', 'Zustand', 'WebSockets', 'WCAG AAA', 'WebGPU', 'Docker'
];

export const TechSphere: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null!);

  const tagPositions = useMemo(() => {
    const items = [];
    const count = TECH_ITEMS.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radius * 3.5;
      const z = Math.sin(theta) * radius * 3.5;

      items.push({
        pos: [x, y * 3.5, z] as [number, number, number],
        text: TECH_ITEMS[i],
      });
    }
    return items;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {tagPositions.map((item, i) => (
        <group key={i} position={item.pos}>
          <Html center distanceFactor={10}>
            <div className="px-3 py-1.5 rounded-full glass-panel text-xs font-mono font-semibold text-cyan-300 border border-cyan-500/30 whitespace-nowrap shadow-lg hover:scale-110 transition-transform cursor-pointer">
              {item.text}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
};
