import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { CharacterReveal } from '../ui/CharacterReveal';

export const FooterSection: React.FC = () => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeString(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full pt-16 pb-12 px-6 md:px-12 lg:px-16 bg-[#050505] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Thin Divider Line */}
        <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 via-50% to-transparent mb-16" />

        {/* Center Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center py-8"
        >
          <CharacterReveal
            text="Thanks for visiting."
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight"
          />
          <p className="text-base sm:text-lg text-slate-400 font-normal mt-3 tracking-wide max-w-lg">
            Hope we build something amazing together.
          </p>
        </motion.div>

        {/* Bottom Minimal Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          {/* Left: Copyright */}
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}
          </div>

          {/* Center: Live SF Time */}
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>SF Time: <strong className="text-slate-200 font-medium">{timeString || '10:42 AM PST'}</strong></span>
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 py-1"
            aria-label="Back to top"
          >
            <span className="tracking-wider">Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-1 group-hover:rotate-12 transition-transform duration-300 ease-out" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
