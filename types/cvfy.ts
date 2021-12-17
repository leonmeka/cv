export interface Cv {
  jobTitle: string;
  photo: string;
  displayPhoto: boolean;
  name: string;
  lastName: string;
  email: string;
  location: string;
  phoneNumber: string;
  aboutme: string;
  jobSkills: string[];
  softSkills: string[];
  hobbySkills: string[];
  additionalSkills: string[];
  languages: { lang: string; level: string }[];
  linkedin: string;
  twitter: string;
  github: string;
  website: string;
  education: CvEvent[];
  work: CvEvent[];
  projects: CvEvent[];
  displayEducation: boolean;
  displayProjects: boolean;
  coverLetter: string;
  activeColor: string;
}
export interface CvEvent {
  title: string;
  location: string;
  from: Date | any;
  to: Date | any;
  current: boolean;
  summary: string;
  summaryArr?: string[];
}
export interface languagesSkill {
  skill: { lang: string; level: string };
  skillType: 'languages';
}
export interface defaultSkill {
  skill: string;
  skillType: 'jobSkills' | 'softSkills' | 'additionalSkills' | 'hobbySkills';
}
