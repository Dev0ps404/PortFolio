import type { EducationItem } from '../types/portfolio';

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-gla",
    degree: "B.Tech. in Computer Science and Engineering",
    university: "GLA University",
    logo: "/gla_logo.png?v=3",
    duration: "July 2024 — July 2028",
    cgpa: "Pursuing (B.Tech CSE)",
    honors: "Data Structures & Core Engineering Focus",
    coursework: ["Data Structures & Algorithms", "Web Engineering", "Database Systems (MongoDB)", "Object-Oriented Programming (Java)", "AI & Prompt Engineering"]
  },
  {
    id: "edu-12th",
    degree: "12th Standard (Higher Secondary Education)",
    university: "Kanha Makhan Public School",
    logo: "/kmps_logo.png?v=3",
    duration: "March 2024",
    cgpa: "77.6% Aggregate",
    honors: "Senior Secondary Board Certification",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
  },
  {
    id: "edu-10th",
    degree: "10th Standard (Secondary Education)",
    university: "Kanha Makhan Public School",
    logo: "/kmps_logo.png?v=3",
    duration: "March 2022",
    cgpa: "89.7% Aggregate",
    honors: "Secondary Board Academic Distinction",
    coursework: ["Mathematics", "Science", "English", "Social Studies"]
  }
];
