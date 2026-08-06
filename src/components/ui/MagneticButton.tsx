import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import SmokyButton from './smoky-button';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'monochrome';
  href?: string;
  target?: string;
  status?: string;
  download?: boolean | string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  variant = 'monochrome',
  href,
  target,
  status = '',
  download,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Dark Blackish & Subtle Slate Grey Smoke Color Scheme
  const smokeColorsByVariant = {
    primary: { primary: '#475569', secondary: '#1e293b', shadow: '#050505' },
    glass: { primary: '#334155', secondary: '#0f172a', shadow: '#050505' },
    secondary: { primary: '#334155', secondary: '#0f172a', shadow: '#020617' },
    outline: { primary: '#475569', secondary: '#1e293b', shadow: '#020617' },
    monochrome: { primary: '#475569', secondary: '#1e293b', shadow: '#050505' },
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      className="inline-block"
      onClick={onClick}
    >
      <SmokyButton
        colors={smokeColorsByVariant[variant]}
        status={status}
        className={className}
      >
        {children}
      </SmokyButton>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        download={download}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className="inline-block text-decoration-none"
      >
        {content}
      </a>
    );
  }

  return content;
};
