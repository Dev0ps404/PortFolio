import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Box, Zap, Code } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { JOURNEY_MILESTONES } from '../../data/portfolioData';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Sparkles,
  Box,
  Zap,
  Code,
};

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-4 md:px-8 relative z-10 max-w-6xl mx-auto">
      <SectionHeader
        number="02"
        badge="Career Journey"
        title="Evolution of Craft"
        subtitle="Key milestones tracing my trajectory from software engineering fundamentals to leading spatial WebGL architecture."
      />

      <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
        {JOURNEY_MILESTONES.map((milestone, index) => {
          const IconComponent = ICON_MAP[milestone.icon] || Sparkles;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full glass-panel border border-cyan-400/50 flex items-center justify-center bg-slate-950 shadow-[0_0_12px_#38bdf8]">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Date Year Badge (Positioned left on desktop) */}
              <div className="md:absolute md:-left-36 md:top-1 text-sm font-mono font-bold text-indigo-400 mb-2 md:mb-0">
                [{milestone.year}]
              </div>

              {/* Milestone Glass Card */}
              <GlassCard glowColor="cyan" className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-slate-100">{milestone.title}</h3>
                    <span className="text-xs font-mono text-slate-400">{milestone.subtitle}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-300 mt-2 font-normal leading-relaxed">
                  {milestone.description}
                </p>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
