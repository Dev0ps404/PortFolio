import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { HorizontalProjectsShowcase } from './HorizontalProjectsShowcase';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative z-10 w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-8">
        <SectionHeader
          number="03"
          badge="Featured Showcase"
          title="Flagship Engineering Projects"
          subtitle="Explore spatial web workstations, high-frequency financial analytics, and modern React 19 software systems."
        />
      </div>

      {/* Premium Apple-Inspired Pinned Alternating Showcase */}
      <HorizontalProjectsShowcase />
    </section>
  );
};
