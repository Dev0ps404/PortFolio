import type { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: "budget-buddy",
    title: "BudgetBuddy",
    tagline: "AI-powered personal finance web application.",
    category: "AI & Web3",
    description: "AI-powered personal finance web application that helps users track income, expenses, budgets, and spending patterns with real-time insights and interactive dashboards.",
    fullDescription: "BudgetBuddy is an intelligent personal finance platform empowering users to monitor budgets, analyze spending trends, and receive automated AI financial insights.",
    image: "/budget_buddy_dashboard.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Integration"],
    featured: true,
    bentoSpan: "col-span-12 md:col-span-8",
    demoUrl: "https://budget-buddy-two-zeta.vercel.app/",
    githubUrl: "https://github.com/Dev0ps404/BudgetBuddy",
    highlights: [
      "AI-driven spending pattern analysis & budget recommendations",
      "Interactive real-time financial tracking dashboard",
      "Full-stack React.js + Node.js + Express + MongoDB architecture"
    ],
    metrics: [
      { label: "Insights", value: "Real-Time" },
      { label: "Platform", value: "Vercel Live" },
      { label: "Tech Stack", value: "MERN + AI" }
    ],
    architecture: ["React.js Frontend", "Express API", "MongoDB Atlas", "AI Prompting"]
  },
  {
    id: "job-trackr",
    title: "JobTrackr",
    tagline: "Job application management platform.",
    category: "Full-Stack",
    description: "Job application management platform that enables users to organize applications, monitor interview progress, and track hiring status from Applied to Selected.",
    fullDescription: "JobTrackr simplifies the job search lifecycle by enabling candidate application tracking, interview stage monitoring, and status analytics.",
    image: "/job_trackr_dashboard.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    featured: true,
    bentoSpan: "col-span-12 md:col-span-4",
    demoUrl: "https://jobtrackr-vert.vercel.app",
    githubUrl: "https://github.com/Dev0ps404/jobtrackr",
    highlights: [
      "End-to-end recruitment application status lifecycle (Applied -> Selected)",
      "Clean UI for organizing interviews, dates, and company responses",
      "Robust RESTful backend with Express and MongoDB"
    ],
    metrics: [
      { label: "Status Tracked", value: "Full Lifecycle" },
      { label: "Deployment", value: "Vercel Live" },
      { label: "Database", value: "MongoDB" }
    ],
    architecture: ["React.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    id: "pigeon",
    title: "Pigeon",
    tagline: "Real-time messaging application with Socket.IO.",
    category: "Full-Stack",
    description: "Real-time messaging application supporting one-to-one chat, media sharing, Google authentication, message reply/edit/delete, and live online & last-seen status using Socket.IO.",
    fullDescription: "Pigeon delivers instant real-time messaging with Socket.IO event synchronization, Google OAuth login, media attachment transfers, and active online presence tracking.",
    image: "/pigeon_dashboard.png",
    modalImage: "/pigeon_modal_dashboard.png",
    tags: ["React.js", "Node.js", "Socket.IO", "Express.js", "MongoDB", "Google Auth"],
    featured: true,
    bentoSpan: "col-span-12 md:col-span-6",
    demoUrl: "https://pigeon-beta.vercel.app/",
    githubUrl: "https://github.com/Dev0ps404/Pigeon",
    highlights: [
      "Real-time bidirectional WebSocket messaging via Socket.IO",
      "Google OAuth 2.0 authentication and media file attachments",
      "Live user presence, typing indicators, and message edits/deletions"
    ],
    metrics: [
      { label: "Latency", value: "< 50ms" },
      { label: "Protocol", value: "Socket.IO" },
      { label: "Auth", value: "Google OAuth" }
    ],
    architecture: ["Socket.IO Engine", "React.js UI", "Express Server", "MongoDB"]
  },
  {
    id: "tech-forge",
    title: "Tech Forge",
    tagline: "Developer productivity platform with AI.",
    category: "AI & Web3",
    description: "Developer productivity platform offering AI-powered coding tools, team collaboration, and workflow automation through a modern web interface.",
    fullDescription: "Tech Forge equips software developers with AI-assisted coding tools, collaborative workspace utilities, and automated task workflows.",
    image: "/tech_forge_dashboard.png",
    modalImage: "/tech_forge_modal_dashboard.png",
    tags: ["React.js", "Node.js", "AI Integration", "Express.js", "MongoDB"],
    featured: false,
    bentoSpan: "col-span-12 md:col-span-6",
    demoUrl: "https://tech-forge-zeta.vercel.app",
    githubUrl: "https://github.com/Dev0ps404/TechForge",
    highlights: [
      "AI-driven coding tools & prompt-assisted workflow automation",
      "Team collaboration space for modern developer squads",
      "Production deployment hosted on Vercel"
    ],
    metrics: [
      { label: "AI Integration", value: "Active" },
      { label: "Live Status", value: "Online" },
      { label: "Target", value: "Developers" }
    ],
    architecture: ["React.js", "Node.js", "Express.js", "AI Engine"]
  },
  {
    id: "smart-campus",
    title: "SmartCampus (Working)",
    tagline: "Campus management system.",
    category: "Full-Stack",
    description: "Campus management system that digitizes student, faculty, and administrative services, including attendance, academic records, and role-based dashboards.",
    fullDescription: "SmartCampus is a digital campus platform unifying academic record management, student attendance tracking, and multi-role administrative portals.",
    image: "/smart_campus_dashboard.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Role-Based Auth"],
    featured: false,
    bentoSpan: "col-span-12 md:col-span-6",
    demoUrl: "#",
    githubUrl: "#",
    highlights: [
      "Role-based access control for Students, Faculty, and Admin",
      "Automated attendance management and academic record tracking",
      "Full MERN stack architecture"
    ],
    metrics: [
      { label: "Roles", value: "Multi-Role" },
      { label: "Status", value: "In Dev" },
      { label: "Database", value: "MongoDB" }
    ],
    architecture: ["React.js", "Node.js", "Express.js", "MongoDB Atlas"]
  }
];
