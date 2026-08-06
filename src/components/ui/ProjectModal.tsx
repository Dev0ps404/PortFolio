import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2, Cpu, BarChart3, Layers } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { MagneticButton } from './MagneticButton';
import { GithubIcon } from './SocialIcons';
import { CharacterReveal } from './CharacterReveal';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
        data-lenis-prevent
        onWheel={(e) => e.stopPropagation()}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          data-lenis-prevent
          className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto glass-panel rounded-3xl border border-white/15 p-6 md:p-10 z-10 shadow-2xl scrollbar-thin"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-mono text-cyan-400 mb-4 border border-cyan-500/30">
            <span>{project.category}</span>
          </div>

          {/* Title Character Reveal */}
          <CharacterReveal
            text={project.title}
            as="h2"
            className="text-2xl md:text-4xl font-display font-extrabold text-slate-100 leading-tight"
          />
          <p className="text-slate-400 text-base md:text-lg mt-2 font-normal">
            {project.tagline}
          </p>

          {/* Hero Banner Image */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-6 border border-white/10 shadow-lg bg-[#08090C] p-2 flex items-center justify-center">
            <img
              src={`${project.modalImage || project.image}?v=4`}
              alt={project.title}
              className="w-full h-full object-contain rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 my-6">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                <span className="block text-xl md:text-2xl font-bold font-mono text-indigo-400">{metric.value}</span>
                <span className="text-xs text-slate-400">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Full Case Study Content */}
          <div className="space-y-6 text-slate-300">
            <div>
              <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2 mb-2 font-display">
                <BarChart3 className="w-5 h-5 text-indigo-400" /> Executive Overview
              </h3>
              <p className="leading-relaxed text-sm md:text-base text-slate-300">{project.fullDescription}</p>
            </div>

            {/* Key Engineering Highlights */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2 mb-3 font-display">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" /> Key Engineering Innovations
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm md:text-base text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Patterns */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2 mb-3 font-display">
                <Layers className="w-5 h-5 text-purple-400" /> Architecture Patterns
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.architecture.map((arch, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {arch}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2 mb-3 font-display">
                <Cpu className="w-5 h-5 text-pink-400" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono rounded-lg bg-white/5 text-slate-300 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-white/10">
            {project.demoUrl && project.demoUrl !== '#' ? (
              <MagneticButton href={project.demoUrl} target="_blank" variant="primary">
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </MagneticButton>
            ) : (
              <span className="px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Development In Progress</span>
              </span>
            )}

            {project.githubUrl && project.githubUrl !== '#' && (
              <MagneticButton href={project.githubUrl} target="_blank" variant="secondary">
                <GithubIcon className="w-4 h-4 mr-1" />
                <span>Source Repository</span>
              </MagneticButton>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
