import React from 'react';
import { motion } from 'motion/react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { EXPERIENCE } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto relative z-10">
      <SectionHeader
        number="02"
        badge="Career Track"
        title="Professional Experience"
        subtitle="Track record of engineering flagship web applications, mentoring technical squads, and optimizing core performance."
      />

      <div className="relative border-l border-[#1A1A1A] ml-2 sm:ml-6 md:ml-48 space-y-8 sm:space-y-12 pl-6 sm:pl-8 md:pl-14">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Timeline Left Node Indicator */}
            <div className="absolute -left-[41px] md:-left-[65px] top-6 w-6 h-6 rounded-full glass-panel border border-[#1A1A1A] flex items-center justify-center bg-[#050505] shadow-lg group-hover:border-cyan-400/60 transition-colors z-20">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            {/* Date Duration Badge (Positioned safely left of timeline node dot) */}
            <div className="md:absolute md:-left-[190px] md:top-6 md:w-44 md:text-right text-xs font-mono font-bold text-slate-400 mb-3 md:mb-0">
              [{exp.period}]
            </div>

            {/* Experience Modern Card */}
            <GlassCard glowColor="cyan" className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-auto max-w-[220px] px-3 py-1.5 rounded-xl bg-white border border-[#1A1A1A] flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                    <img
                      src="/numeric_logo.png?v=3"
                      alt="Numeric Infosystem Private Limited Logo"
                      className="h-full w-auto object-contain max-h-9"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold font-display text-white">{exp.role}</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mt-1">
                      <span className="text-indigo-400 font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-normal">
                {exp.description}
              </p>

              {/* Accomplishments */}
              <div className="space-y-2.5 pt-4 border-t border-[#1A1A1A]">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold mb-3">
                  Key Accomplishments
                </h4>
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-[#1A1A1A]">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-[#1A1A1A]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
