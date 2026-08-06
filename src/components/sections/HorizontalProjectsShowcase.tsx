import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ArrowRight, Code2 } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { ProjectModal } from '../ui/ProjectModal';
import { GithubIcon } from '../ui/SocialIcons';
import { CharacterReveal } from '../ui/CharacterReveal';
import { PROJECTS } from '../../data/portfolioData';
import type { Project } from '../../types/portfolio';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const HorizontalProjectsShowcase: React.FC = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // GSAP ScrollTrigger Pinned Horizontal Scroll
  useGSAP(
    () => {
      if (!triggerRef.current || !scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const getScrollAmount = () => container.scrollWidth - window.innerWidth + 80;

      const animation = gsap.to(container, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          start: 'top top',
          end: () => `+=${getScrollAmount() + 300}`,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        animation.kill();
      };
    },
    { scope: triggerRef }
  );

  return (
    <>
      <section
        ref={triggerRef}
        className="relative w-full h-screen overflow-hidden bg-[#050505] flex flex-col justify-center py-6"
      >
        {/* GSAP Horizontally Scrolled Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-8 md:gap-12 px-6 md:px-16 my-auto will-change-transform z-10"
          style={{ width: 'max-content' }}
        >
          {PROJECTS.map((project, index) => {
            const isImageLeft = index % 2 === 1; // Alternating zig-zag pattern

            return (
              <div
                key={project.id}
                className="w-[84vw] max-w-[1080px] h-[460px] flex-shrink-0"
              >
                <GlassCard
                  glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
                  tiltEffect={false}
                  className="w-full h-full rounded-[24px] border border-[#222] bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl group transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
                  contentClassName={`w-full h-full p-6 md:p-8 lg:p-9 grid grid-cols-1 ${
                    isImageLeft ? 'lg:grid-cols-[52%_48%]' : 'lg:grid-cols-[48%_52%]'
                  } items-center gap-6 md:gap-8 lg:gap-10`}
                >
                  {isImageLeft ? (
                    <>
                      {/* LEFT COLUMN: Large Project Screenshot (52%) */}
                      <div
                        onClick={() => setActiveModalProject(project)}
                        className="relative w-full h-full rounded-[20px] overflow-hidden border border-[#222] bg-[#08090C] p-2 cursor-pointer shadow-2xl group/img flex items-center justify-center"
                      >
                        <img
                          src={`${project.image}?v=4`}
                          alt={project.title}
                          className="w-full h-full object-contain rounded-[14px] transform group-hover/img:scale-[1.04] group-hover/img:brightness-[1.08] transition-all duration-600 ease-out"
                        />

                        {/* Subtle Gradient & Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent group-hover/img:from-slate-950/60 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                          <span className="px-5 py-2.5 rounded-full glass-panel text-xs font-mono text-white flex items-center gap-2 border border-white/20 shadow-2xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                            <span>Inspect Architecture</span>
                            <ArrowRight className="w-4 h-4 text-cyan-400" />
                          </span>
                        </div>
                      </div>

                      {/* RIGHT COLUMN: Project Details (48%) */}
                      <div className="w-full h-full flex flex-col justify-between items-start text-left py-1">
                        <div className="w-full max-w-[95%]">

                          <CharacterReveal
                            text={project.title}
                            as="h3"
                            className="text-2xl lg:text-3xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors leading-tight"
                          />
                          <p className="text-[11px] font-mono text-slate-400 mt-0.5 italic">
                            "{project.tagline}"
                          </p>

                          <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3 font-normal">
                            {project.description}
                          </p>

                          {/* Metrics Grid */}
                          <div className="grid grid-cols-3 gap-2.5 my-3 p-3 rounded-xl bg-white/5 border border-[#222]">
                            {project.metrics.map((m, i) => (
                              <div key={i} className="min-w-0 overflow-hidden">
                                <span className="block text-[9px] font-mono text-slate-500 uppercase truncate">{m.label}</span>
                                <span className="text-xs font-bold font-mono text-cyan-300 truncate block">{m.value}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech Stack Badges */}
                          <div className="flex flex-wrap gap-1.5 my-1.5">
                            {project.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-white/5 text-slate-300 border border-[#222]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between w-full pt-3 border-t border-[#222] mt-auto">
                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="text-xs font-mono text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1.5"
                          >
                            <Code2 className="w-3.5 h-3.5" />
                            <span>Case Study Deep-Dive</span>
                          </button>

                          <div className="flex items-center gap-2.5">
                            {project.githubUrl && project.githubUrl !== '#' && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white transition-colors border border-[#222]"
                                aria-label="GitHub Repository"
                              >
                                <GithubIcon className="w-4 h-4" />
                              </a>
                            )}

                            {project.demoUrl && project.demoUrl !== '#' ? (
                              <MagneticButton
                                href={project.demoUrl}
                                target="_blank"
                                variant="primary"
                                className="py-2 px-4 text-xs font-mono"
                              >
                                <span>Live Demo</span>
                                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                              </MagneticButton>
                            ) : (
                              <span className="py-1.5 px-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-400 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                <span>Development In Progress</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* LEFT COLUMN: Project Details (48%) */}
                      <div className="w-full h-full flex flex-col justify-between items-start text-left py-1">
                        <div className="w-full max-w-[95%]">
                          <CharacterReveal
                            text={project.title}
                            as="h3"
                            className="text-2xl lg:text-3xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors leading-tight"
                          />
                          <p className="text-[11px] font-mono text-slate-400 mt-0.5 italic">
                            "{project.tagline}"
                          </p>

                          <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3 font-normal">
                            {project.description}
                          </p>

                          {/* Metrics Grid */}
                          <div className="grid grid-cols-3 gap-2.5 my-3 p-3 rounded-xl bg-white/5 border border-[#222]">
                            {project.metrics.map((m, i) => (
                              <div key={i} className="min-w-0 overflow-hidden">
                                <span className="block text-[9px] font-mono text-slate-500 uppercase truncate">{m.label}</span>
                                <span className="text-xs font-bold font-mono text-cyan-300 truncate block">{m.value}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech Stack Badges */}
                          <div className="flex flex-wrap gap-1.5 my-1.5">
                            {project.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-white/5 text-slate-300 border border-[#222]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between w-full pt-3 border-t border-[#222] mt-auto">
                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="text-xs font-mono text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1.5"
                          >
                            <Code2 className="w-3.5 h-3.5" />
                            <span>Case Study Deep-Dive</span>
                          </button>

                          <div className="flex items-center gap-2.5">
                            {project.githubUrl && project.githubUrl !== '#' && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white transition-colors border border-[#222]"
                                aria-label="GitHub Repository"
                              >
                                <GithubIcon className="w-4 h-4" />
                              </a>
                            )}

                            {project.demoUrl && project.demoUrl !== '#' ? (
                              <MagneticButton
                                href={project.demoUrl}
                                target="_blank"
                                variant="primary"
                                className="py-2 px-4 text-xs font-mono"
                              >
                                <span>Live Demo</span>
                                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                              </MagneticButton>
                            ) : (
                              <span className="py-1.5 px-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-400 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                <span>Development In Progress</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* RIGHT COLUMN: Large Project Screenshot (52%) */}
                      <div
                        onClick={() => setActiveModalProject(project)}
                        className="relative w-full h-full rounded-[20px] overflow-hidden border border-[#222] bg-[#08090C] p-2 cursor-pointer shadow-2xl group/img flex items-center justify-center"
                      >
                        <img
                          src={`${project.image}?v=4`}
                          alt={project.title}
                          className="w-full h-full object-contain rounded-[14px] transform group-hover/img:scale-[1.04] group-hover/img:brightness-[1.08] transition-all duration-600 ease-out"
                        />

                        {/* Subtle Gradient & Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent group-hover/img:from-slate-950/60 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                          <span className="px-5 py-2.5 rounded-full glass-panel text-xs font-mono text-white flex items-center gap-2 border border-white/20 shadow-2xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                            <span>Inspect Architecture</span>
                            <ArrowRight className="w-4 h-4 text-cyan-400" />
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </GlassCard>
              </div>
            );
          })}
        </div>
      </section>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </>
  );
};
