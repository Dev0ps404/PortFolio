import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { SKILLS_CATEGORIES_GRID } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto relative z-10">
      <SectionHeader
        number="05"
        badge="Core Matrix"
        title="Technical Skills & Competencies"
        subtitle="Comprehensive mastery across modern languages, frontend frameworks, cloud infra, and AI integration."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS_CATEGORIES_GRID.map((cat, index) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <GlassCard glowColor="indigo" className="p-6 h-full flex flex-col justify-between border border-[#1A1A1A]">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 font-bold mb-4 pb-3 border-b border-[#1A1A1A]">
                  {cat.category}
                </h3>

                {/* Premium Skill Pill Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 text-slate-200 border border-[#1A1A1A] hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-white/10 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
