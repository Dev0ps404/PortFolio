import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

interface CanvasContainerProps {
  children: React.ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
}

export const CanvasContainer: React.FC<CanvasContainerProps> = ({
  children,
  className = '',
  cameraPosition = [0, 0, 8],
  fov = 45,
}) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
};
