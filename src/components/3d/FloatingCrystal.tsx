import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingCrystalProps {
  mousePos?: { normalizedX: number; normalizedY: number };
}

export const FloatingCrystal: React.FC<FloatingCrystalProps> = ({ mousePos }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerWireframeRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;

      // Mouse Parallax Influence
      if (mousePos) {
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          mousePos.normalizedY * 0.5,
          0.05
        );
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          mousePos.normalizedX * 0.5,
          0.05
        );
      }
    }

    if (outerWireframeRef.current) {
      outerWireframeRef.current.rotation.x -= delta * 0.15;
      outerWireframeRef.current.rotation.y -= delta * 0.25;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <group>
        {/* Core Crystal Geometry with Distortion Material */}
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1.2, 0]} />
          <MeshDistortMaterial
            color="#6366f1"
            roughness={0.1}
            metalness={0.8}
            distort={0.35}
            speed={2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Outer Glowing Wireframe Polyhedron */}
        <mesh ref={outerWireframeRef} scale={2.3}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshBasicMaterial color="#38bdf8" wireframe opacity={0.35} transparent />
        </mesh>

        {/* Point Lights */}
        <pointLight position={[3, 3, 3]} intensity={12} color="#38bdf8" />
        <pointLight position={[-3, -3, -3]} intensity={10} color="#a855f7" />
        <pointLight position={[0, 4, -2]} intensity={8} color="#ec4899" />
      </group>
    </Float>
  );
};
