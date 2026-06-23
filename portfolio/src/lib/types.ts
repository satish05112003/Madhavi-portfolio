export interface Profile {
  fullName: string;
  headline: string;
  bio: string;
  currentRole: string;
  currentCompany: string;
  city: string;
  state: string;
  country: string;
  yearsOfExperience: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  cgpa: string | null;
  percentage: string | null;
  startYear: number;
  endYear: number;
  isCurrent: boolean;
  type: string | null;
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  location: string;
  duration: string;
  description: string;
  skills: string[];
  isCurrent: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  projectUrl: string;
  githubUrl: string;
  label?: string;
  problemStatement?: string;
  overview?: string;
  tagLine?: string;
  features?: string[];
  metrics?: ProjectMetric[];
  specifications?: string[];
}

export interface Skill {
  name: string;
  category: string;
  proficiency: string;
}

export interface Achievement {
  type: string;
  title: string;
  description: string;
  issuer: string;
  date: string | null;
}

export interface Resume {
  name: string;
  type: string;
  parsedText: string;
}

export interface PortfolioData {
  profile: Profile;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  achievements: Achievement[];
  resumes: Resume[];
  skillsByCategory: Record<string, Skill[]>;
}
