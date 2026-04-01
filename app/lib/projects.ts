export type { Project, ProjectLink } from "@/app/types";
import type { Project } from "@/app/types";

export const projects: Project[] = [
  {
    id: "housing",
    title: "Student Housing & Roommate Matching Platform",
    shortDesc:
      "A TCD Software Engineering group project. Built scalable backend services with Python and AWS DynamoDB supporting real-time user–property matching.",
    longDesc:
      "A full-stack web platform built as a Software Engineering group project at Trinity College Dublin. My focus was the backend — designing and building the data layer on AWS DynamoDB, implementing RESTful APIs for property and user interactions, and developing the core matching logic. I also built the messaging system using polling-based retrieval for real-time communication between matched users.",
    tags: ["Python", "AWS DynamoDB", "REST API", "JavaScript", "Flask"],
    links: [],
    highlights: [
      "Designed scalable DynamoDB schema for users, properties, and match states",
      "Built RESTful APIs for property interest tracking and user interactions",
      "Implemented core matching logic for user–property pairing",
      "Developed polling-based real-time messaging between matched users",
      "Collaborated in an Agile team with frontend, design, and QA roles",
    ],
    learnedPoints: [
      "Designing a NoSQL schema on DynamoDB for a relational-style matching problem",
      "Building and documenting RESTful APIs consumed by a separate frontend team",
      "Collaborating across backend, frontend, and design in a structured group project",
      "Implementing messaging features using polling-based retrieval for real-time communication between matched users",
    ],
    futurePlans: [
      "Push notification system for real-time match and message alerts",
      "Map-based property search so students can filter by proximity to campus",
      "Verified listing system to reduce fraudulent or inaccurate posts",
      "Rating and review system for landlords and tenants after tenancy ends",
    ],
    gradient: "linear-gradient(135deg, #0f2d5e 0%, #1a1035 100%)",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    shortDesc:
      "My personal website built with Next.js, deployed on Vercel to showcase my work, skills, and future projects.",
    longDesc:
      "This site started as a simple need: I wanted somewhere to put my projects. It turned into a project in itself — and intentionally so. Built with Next.js and TypeScript, no UI libraries, just CSS variables and plain React. I used AI-assisted development to move fast, but made sure to understand every design decision along the way. The portfolio grows as I grow — new features get added as I learn them, not before.",
    tags: ["Next.js", "TypeScript", "CSS", "Vercel"],
    links: [
      {
        label: "Source",
        url: "https://github.com/JMLal250209/Personal_website",
        primary: true,
      },
    ],
    highlights: [
      "Custom dark UI built entirely with CSS variables — no Tailwind, no component libraries",
      "Project modals with clickable banners that navigate to dedicated detail pages",
      "Screenshot lightbox with keyboard navigation (← → Escape)",
      "Fully static — pre-rendered at build time via Next.js generateStaticParams",
      "Auto-deploys to Vercel on every push to main",
    ],
    overviewLabel: "How I Built This",
    hideScreenshots: true,
    gradient: "linear-gradient(135deg, #1a0a3e 0%, #0f172a 100%)",
    learnedIntro: "This portfolio is a living project — here's what building it has taught me so far.",
    learnedPoints: [
      "How to structure a Next.js App Router project cleanly from scratch",
      "Using CSS variables and clamp() for a fully responsive design without a framework",
      "Thinking about UX interactions — modals, lightboxes, hover states, mobile touch behaviour",
      "AI-assisted development: moving fast while staying in control of every decision",
    ],
    futurePlans: [
      "Integrate an AI chatbot powered by RAG and agentic AI — a version of me that visitors can talk to",
      "The chatbot will answer questions about my background, projects, and skills grounded in real data",
      "Add light / dark / system theme toggle",
      "Continue adding projects and course reflections as I learn and build",
    ],
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
    futurePlans: [
      "DICOM-native image pipeline — real CNN training on medical imaging without requiring format conversion",
      "Federated averaging — multiple sites train local models; only weight deltas are shared, never patient data",
      "SHAP explanations — post-training feature attribution so clinicians can understand why the model made a prediction",
      "ONNX export — deploy trained models to edge devices and clinical decision-support systems",
    ],
    gradient: "linear-gradient(135deg, #0d2e1f 0%, #0f172a 100%)",
    learnedIntro: "My first hackathon — went in to learn the process, came out with much more than expected.",
    learnedPoints: [
      "How ML models are trained and evaluated end-to-end in a real application, not just a notebook",
      "Applying techniques like linear regression and neural networks to real medical datasets",
      "Building a file export feature that bridges the model training pipeline with the frontend",
      "Collaborating fast under tight time constraints — breaking work down and staying unblocked in a small team",
    ],
  },
  {
    id: "chatbot",
    title: "AI Chatbot",
    shortDesc:
      "A personal project building an AI-powered chatbot using the Claude API — designed with a modular architecture to support future AI agent integrations.",
    longDesc:
      "A personal project building an AI chatbot from the ground up using the Claude API. The focus has been on getting the architecture right: a modular backend that handles message routing and user–AI interaction, a frontend chat interface, and a system structured for extensibility — so features like memory, RAG, and multiple AI agents can be layered in over time. The goal is to build this once as a solid foundation, then integrate it across different surfaces.",
    tags: ["Claude API", "Python", "RAG", "LLMs"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/JMLal250209/ai-chatbot",
        primary: true,
      },
    ],
    status: "In progress",
    highlights: [
      "Built an AI-powered chatbot using the Claude API for real-time conversational interactions",
      "Designed a modular architecture to support future integration of multiple AI agents and tools",
      "Implemented frontend chat interface and backend message handling for dynamic user–AI interaction",
      "Structured the system for extensibility — future features include memory, RAG, and tool use",
    ],
    futurePlans: [
      "Portfolio avatar — integrate into this site as an interactive AI version of me",
      "Learning companion — discuss CS concepts and course material in depth",
      "Translation agent — help international visitors in their own language",
    ],
    gradient: "linear-gradient(135deg, #2d1a00 0%, #0f172a 100%)",
    hideDetailPage: true,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
