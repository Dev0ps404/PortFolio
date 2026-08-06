import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  glowColor?: 'indigo' | 'cyan' | 'purple' | 'gold' | 'pink';
  tiltEffect?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  contentClassName = '',
  glowColor = 'indigo',
  tiltEffect = false,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const glowGradients = {
    indigo: 'rgba(99, 102, 241, 0.15)',
    cyan: 'rgba(56, 189, 248, 0.15)',
    purple: 'rgba(168, 85, 247, 0.15)',
    gold: 'rgba(251, 191, 36, 0.15)',
    pink: 'rgba(236, 72, 153, 0.15)',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !tiltEffect) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;
    
    setRotateX(rX);
    setRotateY(rY);
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={
        tiltEffect
          ? {
              transformStyle: 'preserve-3d',
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: rotateX === 0 ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
            }
          : undefined
      }
      className={`relative glass-panel rounded-2xl overflow-hidden group border border-white/10 transition-all duration-600 ease-out hover:scale-[1.02] hover:border-cyan-400/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.9)] ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Radial Hover Glow Background */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, ${glowGradients[glowColor]}, transparent 70%)`,
        }}
      />

      {/* Subtle Top Edge Light Reflection */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70" />

      <div className={`relative z-10 h-full w-full ${contentClassName}`}>{children}</div>
    </motion.div>
  );
};
