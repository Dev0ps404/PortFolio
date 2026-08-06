import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { SmokyButton } from '../ui/smoky-button';

const NAV_LINKS = [
  { label: 'Summary', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Section Spy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 py-5 bg-transparent border-none pointer-events-none"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-center relative">
          {/* Transparent Glass Floating Navigation Pill with Smoky Background (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 shadow-2xl pointer-events-auto">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              const isHovered = hoveredLink === link.label;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative px-4 py-2 text-xs font-mono font-bold rounded-full transition-colors duration-300 ${
                    isActive || isHovered ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'
                  }`}
                >
                  {(isActive || isHovered) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full overflow-hidden border border-slate-400/30 shadow-lg shadow-black/50"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    >
                      <SmokyButton
                        colors={{
                          primary: "#94a3b8",
                          secondary: "#334155",
                          shadow: "#000000",
                        }}
                        speed={1.2}
                        className="w-full h-full rounded-full border-none p-0"
                      >
                        {null}
                      </SmokyButton>
                    </motion.div>
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Toggle Button */}
          <div className="flex items-center justify-between w-full lg:hidden pointer-events-auto">
            <span className="font-display font-bold text-sm text-slate-100 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
              Devansh Agarwal
            </span>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl bg-black/50 backdrop-blur-md text-slate-300 hover:text-white border border-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-50 glass-panel rounded-3xl p-6 border border-[#1A1A1A] lg:hidden shadow-2xl bg-[#050505]/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-slate-300 hover:bg-white/5 hover:text-cyan-400 font-medium text-sm transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <Sparkles className="w-3.5 h-3.5 opacity-50" />
                </a>
              ))}
              <div className="pt-4 border-t border-[#1A1A1A] mt-2">
                <MagneticButton
                  href="#contact"
                  variant="primary"
                  className="w-full py-3 justify-center text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
