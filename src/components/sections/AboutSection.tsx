import React, { useState } from 'react';
import { ShieldCheck, Cpu, Zap, Eye, Code, Flame } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';

const TABS = [
  {
    id: 'philosophy',
    title: 'Core Philosophy',
    icon: ShieldCheck,
    content: 'User interface design is not just visual ornamentation; it is the physical API of human intent. I treat every frame, layout calculation, and shader pass as a critical element of software craftsmanship.',
  },
  {
    id: 'architecture',
    title: 'Architecture Approach',
    icon: Cpu,
    content: 'Prioritizing zero main-thread blocking by leveraging Web Workers, instanced mesh rendering in R3F, Zustand state machine boundaries, and WCAG AAA compliance out of the box.',
  },
  {
    id: 'vision',
    title: 'Creative Vision',
    icon: Eye,
    content: 'Merging spatial 3D WebGL graphics with seamless Lenis smooth scrolling and Apple-level typography to create web apps that feel tactile, responsive, and alive.',
  },
];

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('philosophy');

  return (
    <section id="about" className="py-24 px-4 md:px-8 relative z-10 max-w-7xl mx-auto">
      <SectionHeader
        number="01"
        badge="About Me"
        title="Pioneering Spatial Engineering & Design"
        subtitle="Building native-feeling web applications with zero compromise on visual polish or execution speed."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Story Bio & Tabs */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard glowColor="indigo" className="p-8">
            <h3 className="text-xl md:text-2xl font-display font-bold text-slate-100 mb-4">
              Behind the Code
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6 font-normal">
              Full Stack Developer pursuing B.Tech in Computer Science and Engineering at GLA University with hands-on experience in building real-time, AI-driven, and scalable web applications. Proficient in React.js, Node.js, Express.js, MongoDB, and Socket.IO.
            </p>

            {/* Interactive Bio Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 p-1.5 rounded-xl bg-white/5 border border-white/10">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                      isActive
                        ? 'bg-indigo-500 text-white font-semibold shadow-md'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content Box */}
            <div className="p-5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-slate-300 text-sm leading-relaxed min-h-[100px]">
              {TABS.find((t) => t.id === activeTab)?.content}
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Values & Metrics Grid */}
        <div className="lg:col-span-5 space-y-4">
          <GlassCard glowColor="cyan" className="p-6 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-100 font-display">60 FPS Locked Execution</h4>
              <p className="text-xs text-slate-400 mt-1">GPU-accelerated transformations, offscreen canvas rendering, and zero layout shift.</p>
            </div>
          </GlassCard>

          <GlassCard glowColor="purple" className="p-6 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-100 font-display">React 19 & Modern Web</h4>
              <p className="text-xs text-slate-400 mt-1">Leveraging state-of-the-art React 19 primitives, Server Actions, and Tailwind v4 engine.</p>
            </div>
          </GlassCard>

          <GlassCard glowColor="gold" className="p-6 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-100 font-display">Awwwards-Level Polish</h4>
              <p className="text-xs text-slate-400 mt-1">Crafting custom GLSL shaders, magnetic hover states, and smooth scroll narratives.</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
