import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent | PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        isHovered = true;
      } else {
        isHovered = false;
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.45;
      ringY += (mouseY - ringY) * 0.45;

      if (ringRef.current) {
        const offset = isHovered ? 24 : 16;
        const scale = isHovered ? 1.4 : 1;
        ringRef.current.style.transform = `translate3d(${ringX - offset}px, ${ringY - offset}px, 0) scale(${scale})`;
        if (isHovered) {
          ringRef.current.classList.add('bg-indigo-500/20', 'border-cyan-400');
          ringRef.current.classList.remove('bg-transparent', 'border-indigo-400/50');
        } else {
          ringRef.current.classList.remove('bg-indigo-500/20', 'border-cyan-400');
          ringRef.current.classList.add('bg-transparent', 'border-indigo-400/50');
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    document.addEventListener('pointermove', onMouseMove, { capture: true, passive: true });
    document.addEventListener('mousemove', onMouseMove, { capture: true, passive: true });
    document.addEventListener('mouseover', onMouseOver, { capture: true, passive: true });
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('pointermove', onMouseMove, { capture: true });
      document.removeEventListener('mousemove', onMouseMove, { capture: true });
      document.removeEventListener('mouseover', onMouseOver, { capture: true });
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Follower Ring */}
      <div
        ref={ringRef}
        className="w-8 h-8 rounded-full border border-indigo-400/50 fixed top-0 left-0 will-change-transform transition-colors duration-150 pointer-events-none"
      />

      {/* Center Precise Dot */}
      <div
        ref={dotRef}
        className="w-1.5 h-1.5 rounded-full bg-cyan-400 fixed top-0 left-0 shadow-[0_0_8px_#38bdf8] will-change-transform pointer-events-none"
      />
    </div>
  );
};
