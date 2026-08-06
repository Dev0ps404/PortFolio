import React, { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { BackgroundAurora } from './components/layout/BackgroundAurora';
import { GlobalRainingLetters } from './components/layout/GlobalRainingLetters';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { CustomCursor } from './components/layout/CustomCursor';
import { Navbar } from './components/layout/Navbar';

import { HeroSection } from './components/sections/HeroSection';
import { SummarySection } from './components/sections/SummarySection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { EducationSection } from './components/sections/EducationSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { FooterSection } from './components/sections/FooterSection';

export const App: React.FC = () => {
  // Enforce document title at runtime
  useEffect(() => {
    document.title = "PortFolio";
  }, []);

  // Initialize Lenis Smooth Scroll
  useLenis();

  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden font-sans">
      {/* Global Scroll Progress Bar */}
      <ScrollProgress />

      {/* Dynamic Magnetic Cursor */}
      <CustomCursor />

      {/* Ambient Fluid Background */}
      <BackgroundAurora />

      {/* Global Raining Letters Matrix Background */}
      <GlobalRainingLetters />

      {/* Floating Glass Navigation Header */}
      <Navbar />

      {/* Portfolio Main Sections */}
      <main className="relative z-10">
        <HeroSection />
        <SummarySection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default App;
