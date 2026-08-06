"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

export class TextScramble {
  el: HTMLElement
  chars: string
  queue: Array<{
    from: string
    to: string
    start: number
    end: number
    char?: string
  }>
  frame: number
  frameRequest: number
  resolve: (value: void | PromiseLike<void>) => void

  constructor(el: HTMLElement) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#'
    this.queue = []
    this.frame = 0
    this.frameRequest = 0
    this.resolve = () => {}
    this.update = this.update.bind(this)
  }

  setText(newText: string) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise<void>((resolve) => (this.resolve = resolve))
    this.queue = []

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }

    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  update() {
    let output = ''
    let complete = 0

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)]
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }

    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
}

interface ScrambledTitleProps {
  phrases?: string[]
  className?: string
}

export const ScrambledTitle: React.FC<ScrambledTitleProps> = ({
  phrases = [
    'DEVANSH AGARWAL',
    'FULL STACK DEVELOPER',
    'REACT & NODE.JS ARCHITECT',
    'MERN & REAL-TIME SYSTEMS',
    'DESIGN. DEVELOP. DEPLOY.'
  ],
  className = "text-white text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider font-mono min-h-[1.2em]"
}) => {
  const elementRef = useRef<HTMLHeadingElement>(null)
  const scramblerRef = useRef<TextScramble | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (elementRef.current && !scramblerRef.current) {
      scramblerRef.current = new TextScramble(elementRef.current)
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    if (mounted && scramblerRef.current) {
      let counter = 0
      let timeoutId: ReturnType<typeof setTimeout>

      const next = () => {
        if (scramblerRef.current) {
          scramblerRef.current.setText(phrases[counter]).then(() => {
            timeoutId = setTimeout(next, 2500)
          })
          counter = (counter + 1) % phrases.length
        }
      }

      next()

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [mounted, phrases])

  return (
    <h1
      ref={elementRef}
      className={className}
      style={{ fontFamily: 'monospace' }}
    >
      {phrases[0] || 'DEVANSH AGARWAL'}
    </h1>
  )
}

export const RainingLetters: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?".split('');

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const fontSize = 16;
    const columns = Math.ceil((canvas.width || window.innerWidth) / fontSize);
    const drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -100));

    let lastTime = 0;
    const fpsLimit = 30; // 30 FPS hardware throttle for zero lag & silky smooth performance

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      const delta = currentTime - lastTime;
      if (delta < 1000 / fpsLimit) return;
      lastTime = currentTime - (delta % (1000 / fpsLimit));

      // Semi-transparent fade background for trailing matrix effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.16)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = allChars[Math.floor(Math.random() * allChars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = 'rgba(0, 240, 255, 0.35)';
        ctx.shadowBlur = 0;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-screen bg-[#050505] overflow-hidden">
      {/* Title / Content */}
      {children ? (
        children
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4">
          <ScrambledTitle />
        </div>
      )}

      {/* GPU Accelerated HTML5 Matrix Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
      />

      <style>{`
        .dud {
          color: #00f0ff;
          opacity: 0.85;
          text-shadow: 0 0 8px rgba(0,240,255,0.7);
        }
      `}</style>
    </div>
  );
};

export default RainingLetters;
