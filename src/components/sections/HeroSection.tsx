import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FileText, Download, Mail } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { CharacterReveal } from '../ui/CharacterReveal';
import { RainingLetters } from '../ui/modern-animated-hero-section';
import { ResumeModal } from '../ui/ResumeModal';

const TICKER_ITEMS = [
  "FULL STACK INTERN @ NUMERIC INFOSYSTEMS",
  "B.TECH CSE @ GLA UNIVERSITY",
  "5+ SHIPPED WEB APPS",
  "REACT 19 & NEXT.JS ARCHITECT",
  "SOCKET.IO & REAL-TIME SYSTEMS",
  "MONGODB & NODE.JS BACKEND",
  "TAILWIND CSS & LUXURY UI",
];

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Scroll-driven smooth zoom feature centered directly on the face focal point
  const bgScale = useTransform(scrollY, [0, 800], [1.0, 1.25]);
  const bgY = useTransform(scrollY, [0, 800], [0, 50]);
  const bgOpacity = useTransform(scrollY, [0, 750], [0.95, 0.3]);

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 lg:px-16 overflow-hidden w-full bg-[#050505]"
      >
        {/* Hero Section Matrix Raining Letters Animation */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-70">
          <RainingLetters>
            <div />
          </RainingLetters>
        </div>

        {/* Background Developer Portrait Frame - Adjusted to Position Face Higher Up */}
        <div className="absolute top-0 right-0 w-full lg:w-[62%] h-full pointer-events-none z-0 overflow-hidden flex items-start justify-end">
          <motion.div
            style={{
              scale: bgScale,
              y: bgY,
              opacity: bgOpacity,
              transformOrigin: '65% 35%', // Locks scroll zoom focus directly onto the face!
            }}
            className="relative w-full h-full flex justify-end items-start will-change-transform"
          >
            <img
              src="/portrait.png"
              alt="Devansh Agarwal Developer Portrait"
              className="w-full h-[115%] object-cover object-[center_38%] -mt-10 md:-mt-16 filter contrast-105 brightness-105 drop-shadow-2xl"
            />
          </motion.div>

          {/* Soft Radial & Linear Gradient Fade Overlays to guarantee 100% text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/75 via-45% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Hero Text Content Container (Centered 1400px Grid) */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto flex flex-col items-start text-left py-8 my-auto">
          <div className="max-w-2xl">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill border border-[#1A1A1A] text-cyan-400 text-xs font-mono mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-medium tracking-wide">Design. Develop. Deploy.</span>
            </motion.div>

            {/* Name Heading with Sequential Character Reveal */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-display font-extrabold tracking-tight text-white leading-[1.02]">
              <CharacterReveal
                text="Devansh"
                as="span"
                className="block text-white"
              />
              <span className="text-gradient-cyan block">
                <CharacterReveal
                  text="Agarwal"
                  as="span"
                  delay={0.18}
                  className="text-gradient-cyan block"
                />
              </span>
            </h1>

            {/* Professional Title (Static Subtitle) */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-cyan-400 mt-4 tracking-wide"
            >
              {PERSONAL_INFO.title}
            </motion.h2>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-slate-400 text-base md:text-lg font-normal leading-relaxed max-w-xl"
            >
              {PERSONAL_INFO.summaryParagraph1}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 mt-10"
            >
              {/* First Button: View Resume */}
              <MagneticButton onClick={() => setIsResumeOpen(true)} variant="monochrome" className="px-6 py-2.5 min-w-[190px] justify-center text-sm font-bold text-cyan-400">
                <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                <span className="text-cyan-400 font-bold text-sm">View Resume</span>
              </MagneticButton>

              {/* Second Button: Download Resume */}
              <MagneticButton href={PERSONAL_INFO.resumeUrl} download="Devansh_Agarwal_Resume.pdf" variant="monochrome" className="px-6 py-2.5 min-w-[220px] justify-center text-sm font-bold text-cyan-400">
                <Download className="w-4 h-4 mr-2 text-cyan-400" />
                <span className="text-cyan-400 font-bold text-sm">Download Resume</span>
              </MagneticButton>
            </motion.div>

          {/* Social Icons Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-4 mt-10 pt-6 border-t border-[#1A1A1A] w-full"
          >
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-2">Connect</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-panel hover:border-cyan-400/50 text-slate-400 hover:text-white transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-panel hover:border-indigo-400/50 text-slate-400 hover:text-white transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-panel hover:border-pink-400/50 text-slate-400 hover:text-white transition-all"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-full glass-panel hover:border-emerald-400/50 text-slate-400 hover:text-white transition-all"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Infinite Tech Specs Marquee (Seamlessly Merged in Page) */}
      <div className="relative z-10 w-full overflow-hidden py-4 bg-transparent">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex items-center whitespace-nowrap gap-8"
          style={{ width: 'max-content' }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <div key={i} className="flex items-center gap-8 text-xs font-mono font-medium text-slate-400 tracking-widest uppercase">
              <span className="text-slate-300">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
            </div>
          ))}
        </motion.div>
      </div>
      </section>

      {/* Interactive Resume Modal Popup */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};
