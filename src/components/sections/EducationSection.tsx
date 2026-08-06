import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { EDUCATION_DATA } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto relative z-10">
      <SectionHeader
        number="04"
        badge="Academic Foundation"
        title="Education & Credentials"
        subtitle="Rigorous academic training in Computer Science, Distributed Systems, and Web Graphics Architecture."
      />

      <div className="relative border-l border-[#1A1A1A] ml-2 sm:ml-6 md:ml-48 space-y-8 sm:space-y-12 pl-6 sm:pl-8 md:pl-14">
        {EDUCATION_DATA.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Timeline Left Node Indicator */}
            <div className="absolute -left-[41px] md:-left-[65px] top-6 w-6 h-6 rounded-full glass-panel border border-[#1A1A1A] flex items-center justify-center bg-[#050505] shadow-lg group-hover:border-purple-400/60 transition-colors z-20">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            </div>

            {/* Date Duration Badge */}
            <div className="md:absolute md:-left-[190px] md:top-6 md:w-44 md:text-right text-xs font-mono font-bold text-slate-400 mb-3 md:mb-0">
              [{edu.duration}]
            </div>

            <GlassCard glowColor="purple" className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                {edu.logo ? (
                  <div className="h-12 w-12 p-1.5 rounded-xl bg-white border border-[#1A1A1A] flex items-center justify-center flex-shrink-0 mt-1 shadow-md overflow-hidden">
                    <img
                      src={edu.logo}
                      alt={edu.university}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mt-1">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold font-display text-white">{edu.degree}</h3>
                  <span className="text-sm font-mono text-cyan-400 font-medium">{edu.university}</span>
                </div>
              </div>

              {/* CGPA & Honors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 p-4 rounded-xl bg-white/5 border border-[#1A1A1A]">
                <div>
                  <span className="block text-[10px] font-mono text-slate-500 uppercase">Cumulative Grade Point Average</span>
                  <span className="text-lg font-bold font-mono text-emerald-400">{edu.cgpa}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-500 uppercase">Academic Distinction</span>
                  <span className="text-xs font-mono text-amber-300 font-semibold flex items-center gap-1.5 mt-1">
                    <Award className="w-3.5 h-3.5" />
                    {edu.honors}
                  </span>
                </div>
              </div>

              {/* Selected Coursework */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  Key Academic Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-[#1A1A1A]"
                    >
                      {course}
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
