import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { ACHIEVEMENTS } from '../../data/portfolioData';
import type { Achievement } from '../../types/portfolio';

export const AchievementsSection: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <section id="achievements" className="py-24 px-4 md:px-8 relative z-10 max-w-6xl mx-auto">
      <SectionHeader
        number="07"
        badge="Credentials & Awards"
        title="Verified Industry Honors"
        subtitle="Recognition from international design juries, cloud certifications, and technical mastery credentials."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard
              glowColor={item.category === 'Award' ? 'gold' : 'cyan'}
              className="p-6 h-full flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedAchievement(item)}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{item.date}</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-white/5 text-amber-400 border border-white/10 mt-1">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-slate-100">{item.title}</h3>
                    <span className="text-xs font-mono text-indigo-400">{item.issuer}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>Inspect Credential Verification</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Verification Detail Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAchievement(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md glass-panel rounded-3xl p-6 border border-white/20 z-10 space-y-4 shadow-2xl"
            >
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-amber-400 border border-amber-500/30">
                <ShieldCheck className="w-4 h-4" /> Verified Honor
              </div>

              <h3 className="text-xl font-bold font-display text-slate-100">
                {selectedAchievement.title}
              </h3>
              <p className="text-xs font-mono text-indigo-300">
                Issued by {selectedAchievement.issuer} • {selectedAchievement.date}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedAchievement.description}
              </p>

              {selectedAchievement.credentialId && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300">
                  <span className="text-slate-400">Credential ID: </span>
                  <span className="text-cyan-400 font-bold">{selectedAchievement.credentialId}</span>
                </div>
              )}

              {selectedAchievement.verificationUrl && (
                <a
                  href={selectedAchievement.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 hover:bg-indigo-500 transition-colors"
                >
                  <span>Verify on Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
