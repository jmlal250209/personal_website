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
  screenshots?: { src: string; caption: string }[];
  demoUrl?: string;
  learnedIntro?: string;
  learnedPoints?: string[];
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
        primary: true,
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
      "MedML Forge is a hackathon project built to let clinicians and medical professionals train ML models directly on their own machines — no coding expertise required, no data ever leaving the device. Privacy is guaranteed by architecture, not just policy. The app guides users through a seven-stage workflow (scan, preview, cleanup, configure, train, evaluate, gallery) with an on-device AI co-pilot powered by Qwen 2.5 via llama.cpp that explains ML concepts in plain language and grounds its suggestions in the user's actual metrics.",
    tags: ["React", "Python", "PyTorch", "Flask", "LLM", "llama.cpp", "Hackathon"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/christofilojohn/medml",
        primary: true,
      },
      {
        label: "Devpost",
        url: "https://devpost.com/software/medml",
        primary: false,
      },
    ],
    highlights: [
      "Fully local pipeline — patient data never leaves the device",
      "Seven-stage guided workflow: scan → preview → cleanup → configure → train → evaluate → gallery",
      "On-device AI co-pilot (Qwen 2.5 via llama.cpp) explains parameters in plain language",
      "Live training metrics streamed to the UI via Server-Sent Events",
      "DICOM support and permutation-based feature selection for medical datasets",
      "Replaces technical jargon with illustrated parameter cards for non-expert users",
    ],
    screenshots: [
      { src: "/images/projects/medml/Dataset%20Loading.png",     caption: "Step 1 — Load Your Dataset" },
      { src: "/images/projects/medml/Dataset%20Overview.png",    caption: "Step 2 — Dataset Preview" },
      { src: "/images/projects/medml/Dataset%20Cleanup.png",     caption: "Step 3 — Data Cleanup" },
      { src: "/images/projects/medml/Parameter%20Calibration.png", caption: "Step 4 — Calibrate Parameters" },
      { src: "/images/projects/medml/Feature%20Selection.png",   caption: "Step 4 — Feature Selection" },
      { src: "/images/projects/medml/Model%20Evaluation.png",    caption: "Step 5 — Evaluation Results" },
      { src: "/images/projects/medml/Model%20Gallery.png",       caption: "Model Gallery" },
    ],
    demoUrl: "https://www.youtube.com/embed/fWWPmobwLvE",
    gradient: "linear-gradient(135deg, #0d2e1f 0%, #0f172a 100%)",
    learnedIntro: "My first hackathon — went in to learn the process, came out with much more than expected.",
    learnedPoints: [
      "How ML models are trained and evaluated end-to-end in a real app, not just a notebook",
      "Deploying a locally-running LLM alongside a backend pipeline and a live UI",
      "Collaborating fast under tight time constraints — breaking work down and staying unblocked",
      "Keeping momentum in a small team when there's no time to overthink",
    ],
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
