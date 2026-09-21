export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  isFlagship?: boolean;
  category: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  stage: string;
  institution: string;
  degree?: string;
  specialization?: string;
  location?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  displayValue: string;
  type: 'email' | 'github' | 'linkedin';
}
