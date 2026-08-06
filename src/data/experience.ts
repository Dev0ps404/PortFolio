import type { ExperienceItem, Achievement, ServiceOffering, Testimonial, JourneyMilestone } from '../types/portfolio';

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "numeric-infosystem",
    role: "Full Stack Developer Intern",
    company: "Numeric Infosystem Pvt. Ltd.",
    location: "Mathura, Uttar Pradesh, India",
    period: "Jun 2026 — Jul 2026",
    type: "Internship",
    description: "Completed a Full Stack Development internship focused on React.js and Node.js, gaining exposure to modern web development practices and collaborative software development.",
    achievements: [
      "Developed full-stack web application modules using React.js, Node.js, Express.js, and MongoDB.",
      "Gained hands-on practical industry exposure in building RESTful APIs and responsive frontend user interfaces.",
      "Practiced modern web development standards and collaborative software engineering."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "Git"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "real-world-projects",
    title: "Full-Stack Project Engineering",
    issuer: "Practical Implementation",
    date: "2026",
    category: "Award",
    badge: "5 Production Deployments",
    description: "Built multiple full-stack projects focused on solving real-world problems and improving user experience."
  },
  {
    id: "open-source",
    title: "Open-Source & Collaborative Engineering",
    issuer: "GitHub Contributions",
    date: "2026",
    category: "Certification",
    badge: "Active Explorer",
    description: "Actively exploring open-source contributions and collaborative development."
  }
];

export const SERVICES: ServiceOffering[] = [
  {
    id: "fullstack-dev",
    title: "Full-Stack Web Development",
    shortDescription: "End-to-end web applications built with React.js, Node.js, Express.js, and MongoDB.",
    deliverables: ["Responsive React.js UI", "Express RESTful APIs", "MongoDB Database Architecture", "Google OAuth & Socket.IO"],
    estimatedDays: "7-14 Days",
    startingPrice: "$1,500",
    iconName: "Sparkles",
    popular: true
  },
  {
    id: "ai-web-apps",
    title: "AI Integration & Web Tools",
    shortDescription: "AI-powered utilities, prompt engineering, and intelligent web applications.",
    deliverables: ["AI API Integration", "Prompt Engineering Workflows", "Automated Dashboards"],
    estimatedDays: "5-10 Days",
    startingPrice: "$2,000",
    iconName: "Zap"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Numeric Infosystem Engineering Lead",
    role: "Engineering Mentor",
    company: "Numeric Infosystem Pvt. Ltd.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    quote: "Devansh showed remarkable initiative during his Full Stack Development internship, mastering React.js and Node.js to deliver functional web modules.",
    rating: 5
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: "2026",
    title: "Full Stack Developer Intern",
    subtitle: "Numeric Infosystem Pvt. Ltd.",
    description: "Completed Full Stack Development internship focused on React.js, Node.js, and MongoDB.",
    icon: "Sparkles",
    accentColor: "from-cyan-500 to-blue-600"
  },
  {
    year: "2024",
    title: "B.Tech CSE Admission",
    subtitle: "GLA University",
    description: "Began B.Tech in Computer Science & Engineering at GLA University, Mathura.",
    icon: "Box",
    accentColor: "from-purple-500 to-indigo-600"
  }
];
