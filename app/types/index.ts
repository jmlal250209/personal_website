export interface ProjectLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface Project {
  id: string;
  title: string;
  date?: string; // "YYYY-MM-DD", completion date
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
  overviewLabel?: string;
  learnedIntro?: string;
  learnedPoints?: string[];
  futurePlans?: string[];
  hideDetailPage?: boolean;
  hideScreenshots?: boolean;
}

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
  learnedIntro?: string;
  learnedPoints?: string[];
}
