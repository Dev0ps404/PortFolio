import React from 'react';
import { Cpu, Activity, Maximize2, Zap } from 'lucide-react';

export const SystemSpecsSection: React.FC = () => {
  return (
    <section id="system-specs" className="py-24 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto relative z-10">
      {/* Header Matching Reference Screenshot */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 bg-rose-500 rounded-full" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white uppercase tracking-wider">
            SYSTEM_SPECS
          </h2>
        </div>
        <p className="text-xs font-mono text-slate-400 pl-4 tracking-widest uppercase">
          RUNTIME ENVIRONMENT ASSESSMENT
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: 2x2 Metrics Grid & Core Process Synced Banner */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Metric 01 */}
            <div className="p-6 rounded-2xl glass-panel border border-[#1A1A1A] flex flex-col justify-between space-y-3 group hover:border-rose-500/40 transition-colors">
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase font-bold">
                01_METRIC
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase">
                TOTAL FRAMES
              </span>
              <span className="text-2xl font-mono font-extrabold text-white">
                120
              </span>
            </div>

            {/* Metric 02 */}
            <div className="p-6 rounded-2xl glass-panel border border-[#1A1A1A] flex flex-col justify-between space-y-3 group hover:border-rose-500/40 transition-colors">
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase font-bold">
                02_METRIC
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase">
                SCROLL LENGTH
              </span>
              <span className="text-2xl font-mono font-extrabold text-white">
                500VH
              </span>
            </div>

            {/* Metric 03 */}
            <div className="p-6 rounded-2xl glass-panel border border-[#1A1A1A] flex flex-col justify-between space-y-3 group hover:border-rose-500/40 transition-colors">
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase font-bold">
                03_METRIC
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase">
                TECHNOLOGY
              </span>
              <span className="text-sm font-mono font-extrabold text-white leading-tight">
                REACT 19 + THREE.JS
              </span>
            </div>

            {/* Metric 04 */}
            <div className="p-6 rounded-2xl glass-panel border border-[#1A1A1A] flex flex-col justify-between space-y-3 group hover:border-rose-500/40 transition-colors">
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase font-bold">
                04_METRIC
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase">
                ANIMATION
              </span>
              <span className="text-sm font-mono font-extrabold text-white leading-tight">
                SCROLL-DRIVEN
              </span>
            </div>
          </div>

          {/* Bottom Banner: Core Process Synced */}
          <div className="p-8 rounded-2xl glass-panel border border-[#1A1A1A] flex flex-col items-center justify-center text-center space-y-4 bg-[#080808]/90">
            <div className="relative w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 shadow-xl">
              <Cpu className="w-8 h-8 animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-rose-500/20 animate-ping" />
            </div>
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-slate-300 uppercase">
              C O R E _ P R O C E S S _ S Y N C E D
            </span>
          </div>
        </div>

        {/* Right Column: 4 Capability Cards */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          {/* Capability 1: Cinematic Precision */}
          <div className="p-6 rounded-2xl glass-panel border border-[#1A1A1A] flex items-start gap-5 group hover:border-rose-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex-shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-mono font-bold tracking-wider text-white uppercase">
                CINEMATIC PRECISION
              </h4>
              <p className="text-xs font-mono text-slate-400 mt-1 leading-relaxed">
                Every frame meticulously crafted for a seamless transformation experience.
              </p>
            </div>
          </div>

          {/* Capability 2: Scroll-Driven Narrative */}
          <div className="p-6 rounded-2xl glass-panel border border-[#1A1A1A] flex items-start gap-5 group hover:border-rose-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex-shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-mono font-bold tracking-wider text-white uppercase">
                SCROLL-DRIVEN NARRATIVE
              </h4>
              <p className="text-xs font-mono text-slate-400 mt-1 leading-relaxed">
                User-controlled pacing through an aggressive, mechanical metamorphosis.
              </p>
            </div>
          </div>

          {/* Capability 3: High-DPI Rendering */}
          <div className="p-6 rounded-2xl glass-panel border border-[#1A1A1A] flex items-start gap-5 group hover:border-rose-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex-shrink-0">
              <Maximize2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-mono font-bold tracking-wider text-white uppercase">
                HIGH-DPI RENDERING
              </h4>
              <p className="text-xs font-mono text-slate-400 mt-1 leading-relaxed">
                Canvas-based rendering optimized for Retina and 4K displays.
              </p>
            </div>
          </div>

          {/* Capability 4: Minimal HUD Design */}
          <div className="p-6 rounded-2xl glass-panel border border-[#1A1A1A] flex items-start gap-5 group hover:border-rose-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-mono font-bold tracking-wider text-white uppercase">
                MINIMAL HUD DESIGN
              </h4>
              <p className="text-xs font-mono text-slate-400 mt-1 leading-relaxed">
                Non-invasive overlay that enhances without distracting from the sequence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
