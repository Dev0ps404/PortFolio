export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | '3D & WebGL' | 'AI & Web3' | 'Design System';
  description: string;
  fullDescription: string;
  image: string;
  modalImage?: string;
  tags: string[];
  featured: boolean;
  bentoSpan: 'col-span-12 md:col-span-8' | 'col-span-12 md:col-span-4' | 'col-span-12 md:col-span-6';
  demoUrl: string;
  githubUrl: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  architecture: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Lead' | 'Internship';
  description: string;
  achievements: string[];
  skills: string[];
  companyUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  university: string;
  logo?: string;
  duration: string;
  cgpa: string;
  honors: string;
  coursework: string[];
}

export interface CategorizedSkills {
  category: 'Programming Languages' | 'Web Technologies' | 'Database & Backend' | 'Tools & Platforms' | 'Core Concepts' | 'AI & Emerging Skills' | 'Frontend' | 'Backend' | 'Database' | 'Cloud & DevOps' | 'AI & ML' | 'Tools' | string;
  skills: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number;
    experience: string;
    icon: string;
    description: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Award' | 'Certification' | 'Patent' | 'Publication';
  credentialId?: string;
  verificationUrl?: string;
  badge: string;
  description: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  shortDescription: string;
  deliverables: string[];
  estimatedDays: string;
  startingPrice: string;
  iconName: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  linkedInUrl?: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  accentColor: string;
}
