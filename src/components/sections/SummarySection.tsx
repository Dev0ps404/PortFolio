import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { InteractiveRobotSpline } from '../ui/interactive-3d-robot';
import { CharacterReveal } from '../ui/CharacterReveal';

export const SummarySection: React.FC = () => {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <section id="summary" className="pt-12 pb-20 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Column: Heading & 3D Interactive Canvas */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-between h-full space-y-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight">
              <CharacterReveal text="Professional" as="span" className="block text-white" />
              <CharacterReveal text="Summary" as="span" delay={0.15} className="block text-gradient-cyan" />
            </h2>
          </div>

          {/* Premium Framed 3D Display — Mobile Optimized (Zero Lag) / Desktop Interactive Spline */}
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-[24px] border border-[#334155]/60 bg-[#07090C] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] group">
            {/* Soft Blue & Teal Radial Gradient Separation Backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.18)_0%,_rgba(79,209,197,0.1)_45%,_rgba(15,23,42,0.45)_70%,_rgba(6,8,12,0.98)_95%)] pointer-events-none z-10" />

            {/* Soft Edge Vignette Overlay */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.7)] pointer-events-none z-20" />

            {/* Mobile Fallback Card (Zero Lag GPU rendering) */}
            <div className="md:hidden absolute inset-0 z-30 flex flex-col items-center justify-center p-6 text-center space-y-3">
              <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.25)]">
                <span className="text-3xl font-mono font-bold">&lt;/&gt;</span>
              </div>
              <h4 className="text-lg font-bold font-display text-white">Full Stack Engineering</h4>
              <p className="text-xs text-cyan-300 font-mono">React.js • Node.js • Express • MongoDB • Socket.IO</p>
            </div>

            {/* Desktop WebGL Spline Scene */}
            <div className="hidden md:block w-full h-full [filter:hue-rotate(-55deg)_brightness(1.12)_contrast(1.10)_saturate(1.05)_drop-shadow(0_0_15px_rgba(79,209,197,0.18))]">
              <InteractiveRobotSpline
                scene={ROBOT_SCENE_URL}
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Paragraph Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-6 text-slate-300 font-normal leading-relaxed text-base md:text-lg"
        >
          <p className="text-white font-medium text-xl md:text-2xl leading-snug font-display">
            "{PERSONAL_INFO.summaryHeading}"
          </p>
          <p>
            {PERSONAL_INFO.summaryParagraph1}
          </p>
          <p>
            {PERSONAL_INFO.summaryParagraph2}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-[#1A1A1A]">
            <div>
              <span className="block text-2xl md:text-3xl font-bold font-mono text-cyan-400">5+</span>
              <span className="text-xs font-mono text-slate-500 uppercase mt-1 block">Live Projects</span>
            </div>
            <div>
              <span className="block text-2xl md:text-3xl font-bold font-mono text-indigo-400">GLA University</span>
              <span className="text-xs font-mono text-slate-500 uppercase mt-1 block">B.Tech CSE</span>
            </div>
            <div>
              <span className="block text-2xl md:text-3xl font-bold font-mono text-purple-400">Numeric Infosystem</span>
              <span className="text-xs font-mono text-slate-500 uppercase mt-1 block">Full Stack Intern</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Thin Bottom Divider */}
      <div className="w-full h-px bg-[#1A1A1A] mt-20" />
    </section>
  );
};
