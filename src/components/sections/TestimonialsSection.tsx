import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { LinkedinIcon } from '../ui/SocialIcons';
import { TESTIMONIALS } from '../../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-4 md:px-8 relative z-10 max-w-7xl mx-auto overflow-hidden">
      <SectionHeader
        number="09"
        badge="Endorsements"
        title="Client & Leadership Testimonials"
        subtitle="Feedback from CTOs, Product Leads, and Founders who have collaborated on flagship projects."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <GlassCard glowColor="purple" className="p-8 h-full flex flex-col justify-between">
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-purple-400/40" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm italic leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/40 shadow-md"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-bold font-display text-slate-100">{t.name}</h4>
                  <p className="text-xs text-slate-400 font-mono">{t.role}</p>
                  <p className="text-[10px] text-indigo-400 font-mono">{t.company}</p>
                </div>
                {t.linkedInUrl && (
                  <a
                    href={t.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
