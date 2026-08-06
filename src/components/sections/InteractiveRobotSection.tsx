import React from 'react';
import { motion } from 'motion/react';
import { InteractiveRobotSpline } from '../ui/interactive-3d-robot';
import { SectionHeader } from '../ui/SectionHeader';
import { Sparkles, MousePointer, Bot, Cpu } from 'lucide-react';

export const InteractiveRobotSection: React.FC = () => {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <section id="robot-3d" className="py-24 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto relative z-10">
      {/* Clean Minimal Section Header */}
      <SectionHeader
        title="Interactive 3D Experience"
        subtitle="Explore next-generation 3D WebGL graphics and real-time physics interactions built into modern web applications."
      />

      {/* 3D Robot Interactive Canvas Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[600px] md:h-[700px] rounded-[32px] overflow-hidden border border-[#222] bg-[#070707] shadow-2xl group"
      >
        {/* Spline 3D Scene Component */}
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="w-full h-full"
        />

        {/* Ambient Top & Bottom Glass Overlays for seamless blending */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />

        {/* Interactive Floating Badge (Top Left) */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 pointer-events-none">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-white/10 bg-black/60 backdrop-blur-md shadow-xl text-xs font-mono text-cyan-300">
            <Bot className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>ROBOT WHOBEE • 3D WEBGL ENGINE</span>
          </div>
        </div>

        {/* Mouse Guidance Floating Badge (Top Right) */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-white/10 bg-black/60 backdrop-blur-md text-[11px] font-mono text-slate-300 shadow-xl">
            <MousePointer className="w-3.5 h-3.5 text-indigo-400" />
            <span>Hover & Drag to Interact</span>
          </div>
        </div>

        {/* Bottom Floating Stats Panel */}
        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20 pointer-events-none">
          <div className="max-w-2xl mx-auto p-4 md:p-6 rounded-2xl glass-panel border border-white/10 bg-black/65 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="text-base md:text-lg font-bold font-display text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Interactive 3D WebGL Canvas</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Real-time 3D vector graphics, spatial lighting & interactive physics.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>60 FPS Spline</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
