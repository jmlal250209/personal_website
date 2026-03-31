export interface ProjectLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  links: ProjectLink[];
  status?: string;
  highlights: string[];
  gradient: string;
  imageSrc?: string;
  learned?: string;
}

export const projects: Project[] = [
  {
    id: "housing",
    title: "Student Housing & Roommate Matching Platform",
    shortDesc:
      "A group project at TCD. Built scalable backend services with Python and AWS DynamoDB supporting real-time user–property matching.",
    longDesc:
      "A full-stack web platform developed as a team project at Trinity College Dublin to solve the student housing crisis in Dublin. I led backend development, designing and implementing the core data layer on AWS DynamoDB and building RESTful APIs that power the property interest and user matching flows.",
    tags: ["Python", "AWS DynamoDB", "REST API", "JavaScript", "Flask"],
    links: [],
    highlights: [
      "Designed scalable DynamoDB schema for users, properties, and match states",
      "Built RESTful APIs for property interest tracking and user interactions",
      "Implemented core matching logic pairing students to compatible listings",
      "Developed polling-based real-time messaging between matched users",
      "Collaborated in an Agile team with frontend, design, and QA roles",
    ],
    gradient: "linear-gradient(135deg, #0f2d5e 0%, #1a1035 100%)",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    shortDesc:
      "My personal website built with Next.js, deployed on Vercel to showcase my work, skills, and future projects.",
    longDesc:
      "This site — built from scratch with Next.js 15 and TypeScript, no UI libraries. The design is a custom dark theme with CSS variables, smooth hover animations, and a responsive layout using clamp() for fluid typography. Deployed on Vercel with automatic CI/CD from GitHub.",
    tags: ["Next.js", "TypeScript", "CSS", "Vercel"],
    links: [
      {
        label: "Source",
        url: "https://github.com/JMLal250209/Personal_website",
        primary: false,
      },
    ],
    highlights: [
      "Custom dark UI with CSS variables and glassmorphism nav",
      "Fluid typography and responsive layout — no Tailwind, no frameworks",
      "Gradient text, pulse animations, and hover lift effects",
      "Deployed with Vercel, auto-deploys on every push to main",
    ],
    gradient: "linear-gradient(135deg, #1a0a3e 0%, #0f172a 100%)",
  },
  {
    id: "medml",
    title: "MedML Forge",
    shortDesc:
      "A privacy-preserving ML pipeline for clinical researchers. Trains models on sensitive patient data entirely locally — no cloud, no data leakage.",
    longDesc:
      "MedML Forge is a desktop application that gives clinical researchers a safe, local-first environment to train and evaluate machine learning models on sensitive patient data. The entire pipeline runs on-device: no data ever leaves the machine. Built with a React frontend and a Python/Flask backend, the app guides users through a six-stage workflow — ingest, preview, clean, configure, train, evaluate — with an embedded AI co-pilot (Qwen 2.5 via llama.cpp) that answers questions and explains results in plain language.",
    tags: ["React", "Python", "PyTorch", "Flask", "LLM", "llama.cpp"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/christofilojohn/medml",
        primary: true,
      },
    ],
    highlights: [
      "Fully local pipeline — no data ever leaves the user's machine",
      "Six-stage guided workflow: ingest → preview → clean → configure → train → evaluate",
      "On-device AI co-pilot powered by Qwen 2.5 via llama.cpp",
      "Supports multiple ML model types with configurable hyperparameters",
      "Built with React + Flask; packaged as a cross-platform desktop app",
    ],
    gradient: "linear-gradient(135deg, #0d2e1f 0%, #0f172a 100%)",
  },
  {
    id: "chatbot",
    title: "AI Chatbot — Portfolio Avatar",
    shortDesc:
      "An AI chatbot built with RAG and agentic techniques, designed to act as an interactive AI version of me within this portfolio.",
    longDesc:
      "An AI-powered chatbot that lives inside this portfolio and acts as an interactive version of me. Built with LangChain, it uses Retrieval-Augmented Generation to answer questions grounded in real facts about my background, projects, and skills. Future extensions include a translation AI agent that bridges language barriers for international visitors, and a learning companion agent that can discuss CS concepts in depth.",
    tags: ["Python", "LangChain", "RAG", "AI Agents", "LLMs"],
    links: [],
    status: "In progress",
    highlights: [
      "RAG pipeline grounded in real portfolio data for accurate answers",
      "Agentic reasoning via LangChain to handle multi-step queries",
      "Planned: translation agent for multi-language support",
      "Planned: learning companion agent for CS concept discussion",
    ],
    gradient: "linear-gradient(135deg, #2d1a00 0%, #0f172a 100%)",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
