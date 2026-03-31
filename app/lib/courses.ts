export interface CourseLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  courseraUrl: string;
  notesUrl?: string;
  status: "In progress" | "Completed";
  highlights: string[];
  gradient: string;
  imageSrc?: string;
  learned?: string;
}

export const courses: Course[] = [
  {
    id: "ibm-rag-agentic-ai",
    title: "IBM RAG and Agentic AI",
    provider: "IBM / Coursera",
    shortDesc:
      "Professional certificate covering retrieval-augmented generation, agentic workflows, and building AI systems that can reason, plan, and act autonomously.",
    longDesc:
      "This IBM professional certificate dives deep into the architecture and practical implementation of Retrieval-Augmented Generation (RAG) and agentic AI systems. The course covers how to ground LLM outputs in real data using vector databases and retrieval pipelines, and how to build autonomous agents that can plan, use tools, and complete multi-step tasks using frameworks like LangChain.",
    tags: ["RAG", "LangChain", "AI Agents", "LLMs", "Vector DB"],
    courseraUrl:
      "https://www.coursera.org/professional-certificates/ibm-rag-and-agentic-ai",
    status: "In progress",
    highlights: [
      "Retrieval-Augmented Generation architecture and implementation",
      "Building agentic workflows with LangChain and tool use",
      "Vector databases and semantic search for knowledge retrieval",
      "Multi-step reasoning and autonomous task completion",
      "Practical projects applying RAG to real-world use cases",
    ],
    gradient: "linear-gradient(135deg, #1a0a3e 0%, #0f172a 100%)",
  },
  {
    id: "ibm-full-stack",
    title: "IBM Full Stack Cloud Developer",
    provider: "IBM / Coursera",
    shortDesc:
      "Professional certificate covering front-end, back-end, cloud deployment, microservices, containers, and CI/CD — end-to-end full stack development.",
    longDesc:
      "A comprehensive IBM professional certificate that covers the full spectrum of modern web development. From building React frontends and Node.js backends to containerising applications with Docker, orchestrating with Kubernetes, and deploying to the cloud with CI/CD pipelines. The programme follows industry best practices and includes hands-on projects at every stage.",
    tags: ["React", "Node.js", "Docker", "Kubernetes", "Cloud", "CI/CD"],
    courseraUrl:
      "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer",
    status: "In progress",
    highlights: [
      "React and Node.js for full stack web application development",
      "Containerisation with Docker and orchestration with Kubernetes",
      "Cloud deployment on IBM Cloud and other platforms",
      "Microservices architecture and RESTful API design",
      "CI/CD pipelines for automated testing and deployment",
    ],
    gradient: "linear-gradient(135deg, #0f2d5e 0%, #0d1f3a 100%)",
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}
