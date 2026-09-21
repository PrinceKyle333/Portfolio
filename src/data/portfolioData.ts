import { Project, SkillCategory, EducationItem, SocialLink } from '../types';

export const PERSONAL_INFO = {
  fullName: 'Prince Kyle Christian F. Reston',
  shortName: 'Prince Kyle',
  age: 21,
  location: 'Malipayon, Pangantucan, Bukidnon, Philippines',
  program: 'Bachelor of Science in Information Technology (BSIT)',
  programShort: 'BS Information Technology',
  specialization: 'Information Management',
  university: 'Central Mindanao University',
  status: 'Currently studying & building',
  heroLabel: 'BSIT · INFORMATION MANAGEMENT',
  tagline: 'Information Technology Student & Developer',
  primaryDescription: 'I build practical information systems, web applications, and data-driven solutions.',
  secondaryDescription: 'Interested in information management, databases, GIS, web development, and AI.',
  aboutBio1:
    "I'm Prince Kyle Christian F. Reston, a 21-year-old Bachelor of Science in Information Technology student specializing in Information Management at Central Mindanao University.",
  aboutBio2:
    'I am from Malipayon, Pangantucan, Bukidnon, Philippines. I am interested in building systems that organize, manage, visualize, and make information more useful.',
  focusAreas: [
    'Information Systems',
    'Information Management',
    'Database Management',
    'Web Development',
    'GIS',
    'Data Management',
    'Artificial Intelligence',
  ],
  currentlyBuilding: {
    title: 'CMU GeoAsset',
    status: 'IN PROGRESS',
    description:
      'Developing a GIS-integrated asset inventory and management system using Next.js, PostgreSQL/PostGIS, and CesiumJS.',
    technologies: ['Next.js', 'PostgreSQL', 'PostGIS', 'CesiumJS'],
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'cmu-geoasset',
    number: '01',
    title: 'CMU GeoAsset',
    subtitle: 'GIS-Based Asset Inventory and Management System',
    description:
      'A web-based GIS-integrated asset inventory and management system designed for Central Mindanao University.',
    technologies: ['Next.js', 'PostgreSQL', 'PostGIS', 'CesiumJS', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/cmu-geoasset',
    liveDemoUrl: 'https://cmu-geoasset.example.com',
    isFlagship: true,
    category: 'GIS & Information Systems',
  },
  {
    id: 'philippine-coin-recognition',
    number: '02',
    title: 'Philippine Coin Recognition',
    subtitle: '10-Peso Coin Detection and Recognition System',
    description:
      'A computer vision system for detecting and recognizing Philippine 10-peso coins using object detection.',
    technologies: ['Python', 'YOLO', 'Computer Vision'],
    githubUrl: 'https://github.com/username/ph-coin-recognition',
    category: 'Computer Vision & AI',
  },
  {
    id: 'event-evaluation-system',
    number: '03',
    title: 'Event Evaluation System',
    subtitle: 'Event Evaluation with Sentiment Analysis',
    description:
      'An event evaluation system designed to collect participant feedback and analyze sentiment using NLP.',
    technologies: ['Web Development', 'NLP', 'Sentiment Analysis', 'Database'],
    githubUrl: 'https://github.com/username/event-evaluation-system',
    liveDemoUrl: 'https://event-eval.example.com',
    category: 'Web & NLP Analytics',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Information Management',
    skills: ['Information Systems', 'Database Design', 'Data Management', 'System Analysis'],
  },
  {
    category: 'Development',
    skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'SQL'],
  },
  {
    category: 'Web',
    skills: ['Next.js', 'React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'PostGIS', 'MySQL'],
  },
  {
    category: 'GIS',
    skills: ['GIS', 'CesiumJS', 'Spatial Data'],
  },
  {
    category: 'AI / Data',
    skills: ['Computer Vision', 'YOLO', 'NLP', 'Sentiment Analysis'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    stage: 'College',
    institution: 'Central Mindanao University',
    degree: 'Bachelor of Science in Information Technology',
    specialization: 'Specialization: Information Management',
  },
  {
    stage: 'Senior High School',
    institution: 'San Isidro High School of Malipayon, Inc.',
  },
  {
    stage: 'Junior High School',
    institution: 'Langcataon National High School',
  },
  {
    stage: 'Junior High School',
    institution: 'Manolo Fortich National High School',
  },
  {
    stage: 'Elementary',
    institution: 'Malipayon Elementary School',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Email',
    url: 'mailto:s.reston.princekylechristian@cmu.edu.ph',
    displayValue: 's.reston.princekylechristian@cmu.edu.ph',
    type: 'email',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/princekyle-reston',
    displayValue: 'github.com/princekyle-reston',
    type: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/princekyle-reston',
    displayValue: 'linkedin.com/in/princekyle-reston',
    type: 'linkedin',
  },
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];
