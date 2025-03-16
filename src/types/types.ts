export type Experience = {
    title: string;
    company: string;
    location: string;
    from: string;
    to: string;
    list: string[];
    techStack?: string[];
    other?: string[];
  };
  
  export type SideProject = {
    title: string;
    description: string;
    stack: string[];
    url?: string;
    image: string;
    isProd: boolean;
    source?: string;
  };
  
  export type Education = {
    title: string;
    from: string;
    to: string;
    educationCentre: string;
    description: string;
    keyAchivements: string[];
  };
  
  export type Certification = {
    title: string;
    issuer: string;
    date: string;
    image: string;
    id: string;
    url?: string;
    skills: string[];
  };
  
  export type MyResume = {
    sideProjects: SideProject[];
    experience: Experience[];
    education: Education[];
    certifications: Certification[];
    techSkills: string[];
    softSkills: string[];
  };