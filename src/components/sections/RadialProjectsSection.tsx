import React from 'react';
import { RadialScrollGallery } from '../ui/portfolio-and-image-gallery';
import { Badge } from '../ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { PROJECTS } from '../../data/portfolioData';

export const RadialProjectsSection: React.FC = () => {
  return (
    <section className="py-16 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <SectionHeader
          number="10.5"
          badge="Rotational Gallery"
          title="Interactive 3D Project Wheel"
          subtitle="Scroll vertically to rotate through the flagship spatial applications and WebGL software projects."
        />
      </div>

      <RadialScrollGallery
        className="!min-h-[550px] md:!min-h-[650px]"
        baseRadius={420}
        mobileRadius={240}
        visiblePercentage={50}
        scrollDuration={2200}
      >
        {(hoveredIndex) =>
          PROJECTS.map((project, index) => {
            const isActive = hoveredIndex === index;
            return (
              <div
                key={project.id}
                className="group relative w-[210px] h-[290px] sm:w-[250px] sm:h-[340px] overflow-hidden rounded-2xl glass-panel border border-white/15 shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                      isActive ? 'scale-110 blur-0' : 'scale-100 blur-[1px] grayscale-[20%]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="text-[10px] font-mono px-2.5 py-0.5 bg-slate-950/80 backdrop-blur text-cyan-300 border border-cyan-500/30">
                      {project.category}
                    </Badge>
                    <div className={`w-7 h-7 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center transition-all duration-500 shadow-md ${isActive ? 'opacity-100 rotate-0 scale-110' : 'opacity-0 -rotate-45 scale-90'}`}>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  <div className={`transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-2'}`}>
                    <h3 className="text-lg font-bold leading-tight font-display text-slate-100">{project.title}</h3>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{project.tagline}</p>
                    <div className={`h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 mt-3 transition-all duration-500 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
                  </div>
                </div>
              </div>
            );
          })
        }
      </RadialScrollGallery>
    </section>
  );
};
