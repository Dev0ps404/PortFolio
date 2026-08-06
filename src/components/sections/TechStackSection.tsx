import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../ui/SectionHeader';
import { TECH_STACK_MARQUEE } from '../../data/portfolioData';

export const TechStackSection: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...TECH_STACK_MARQUEE, ...TECH_STACK_MARQUEE];

  return (
    <section id="tech-stack" className="py-24 relative z-10 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-12">
        <SectionHeader
          number="06"
          badge="Live Stack Cloud"
          title="Infinite Marquee Engine"
          subtitle="A continuous flow of technologies and frameworks powering production deployments."
        />
      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="relative w-full overflow-hidden py-6 border-y border-[#1A1A1A] bg-[#0A0A0A]/50 backdrop-blur">
        {/* Edge Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 px-4">
          {marqueeItems.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-6 py-3 rounded-xl glass-panel text-sm font-mono font-semibold text-slate-200 border border-[#1A1A1A] hover:border-cyan-400/60 hover:text-cyan-300 transition-all cursor-pointer whitespace-nowrap shadow-lg flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
