import { SideProject, Experience, Education, Certification, MyResume } from "../types";

const mySideProjects: SideProject[] = [
    {
      title: "Sembat Boats",
      description: "Marketing and contact page for Sembat Boats charter",
      stack: ["TailwindCSS", "Astro", "TypeScript", "Vite", "React", "Vercel"],
      url: "https://www.sembatboats.com/en/",
      image: "/sembat.webp",
      isProd: true,
    },
    {
      title: "Portfolio",
      description: "The portfolio you are visiting",
      stack: ["TailwindCSS", "Astro", "TypeScript", "Vercel"],
      source: "https://github.com/AlejandroHinojosaRubio/Portfolio",
      url: "https://your-portfolio-domain.com",
      image: "/portfolio.webp",
      isProd: true,
    },
  ];
  
  const myExperience: Experience[] = [
    {
      title: "Software Engineer II",
      company: "Restaurant Brands International (RBI)",
      location: "Remote",
      from: "Dec 2023",
      to: "Mar 2025",
      list: [
        "Develop information systems by designing, developing, and installing software solutions.",
        "Determine operational viability by evaluating the analysis, problem definition, requirements, solution development, and proposed solutions.",
        "Develop software solutions by studying information needs, user queries, and studying system flow, data usage, and work processes.",
        "Investigate problem areas.",
        "Follow the software development life cycle.",
        "Technical discussions and troubleshooting with 3rd party vendors.",
        "Integrate advanced observability measures by embedding real-time monitoring, logging, and alerting frameworks to drive proactive performance optimization and rapid issue resolution.",
        "Develop using agile methodologies and ceremonies.",
      ],
      techStack: [
        "TypeScript",
        "React",
        "GraphQL",
        "NestJS",
        "Node.js",
        "IaC",
        "AWS",
        "Serverless",
        "Jest",
      ],
      other: [
        "DataDog",
        "mParticle",
        "Braze",
        "Lokalise",
        "Terraform",
        "CircleCI",
        "GitHub",
        "Sanity",
        "Jira",
      ],
    },
    {
      title: "Software Engineer I",
      company: "Restaurant Brands International (RBI)",
      location: "Remote",
      from: "Sept 2022",
      to: "Dec 2023",
      list: ["See above"],
    },
    {
      title: "Full-Stack Junior Software Developer",
      company: "Eisisoft",
      location: "Palma",
      from: "Nov 2021",
      to: "Sep 2022",
      list: [
        "Developed new features and maintained existing software solutions.",
        "Managed software version control and technical documentation.",
        "Applied agile methodologies (Kanban) in project workflows.",
      ],
      techStack: [
        "PHP (CodeIgniter)",
        "jQuery",
        "JavaScript",
        "CSS",
        "MariaDB",
        "Docker",
      ],
      other: ["Git", "Jira", "Linux"],
    },
    {
      title: "System Administrator",
      company: "Grupo Mediapro",
      location: "Calvià",
      from: "Aug 2021",
      to: "Oct 2021",
      list: [
        "Provided technical support, maintenance, and improvements for IT infrastructure.",
        "Managed user accounts, permissions, and networks.",
        "Created detailed technical documentation and troubleshooting guides.",
      ],
      techStack: ["Linux", "Windows Server", "Dalet", "Ticket System"],
      other: [
        "Technical Support",
        "Network Administration",
        "Domain Administration",
      ],
    },
    {
      title: "Internship",
      company: "Euroworking Systems SL",
      location: "Palma",
      from: "Mar 2021",
      to: "Jun 2021",
      list: [
        "Internship for Associate Degree Senior Technician in Systems and Network Administration",
      ],
    },
    {
      title: "Erasmus Internship",
      company: "OneKey Real State",
      location: "Birkirkara",
      from: "May 2019",
      to: "Jun 2019",
      list: [
        "Erasmus internship for Associate Degree Technician in Microinformatics Systems and Networks",
      ],
    },
    {
      title: "Internship",
      company: "Euroworking Systems SL",
      location: "Palma",
      from: "Mar 2019",
      to: "Abr 2019",
      list: [
        "Internship for Associate Degree Technician in Microinformatics Systems and Networks",
      ],
    },
    {
      title: "Telecommunications technical installer",
      company: "Euroworking Systems SL",
      location: "Palma",
      from: "Mar 2019",
      to: "Abr 2019",
      list: [
        "Router installation",
        "Installation of both electrical and data wiring",
        "Configuration of telephone switchboards",
        "Router configuration",
        "Wifi antennas installation",
        "Data socket installation",
        "Electric socket installation",
        "Ip phones installation",
        "Telephone switchboards installation",
      ],
    },
  ];
  
  const myEducation: Education[] = [
    {
      title: "Computer Science (Online)",
      from: "2021",
      to: "Present",
      educationCentre: "UOC",
      description:
        "An ongoing online degree that enhances both theoretical and practical aspects of computer science, complementing professional development.",
      keyAchivements: [
        "Pursuing an online modular degree in Computer Science alongside professional activities.",
        "Expanding knowledge and keeping up-to-date with advanced computer science concepts.",
      ],
    },
    {
      title: "Systems and Network Administration Senior Technician",
      from: "2019",
      to: "2021",
      educationCentre: "San José Obrero",
      description:
        "A comprehensive program focused on advanced systems management, network administration, and critical infrastructure design, ensuring optimal performance and robust connectivity.",
      keyAchivements: [
        "Managed, installed, and configured server operating systems for optimal performance and reliability.",
        "Oversaw network services (web, email, file transfer) ensuring robust connectivity.",
        "Implemented and managed specialized database solutions and telematic network infrastructures.",
      ],
    },
    {
      title: "Microinformatics Systems and Networks Technician",
      from: "2017",
      to: "2019",
      educationCentre: "San José Obrero",
      description:
        "A foundational program that provided hands-on experience with computer systems and networks, emphasizing installation, troubleshooting, and client support.",
      keyAchivements: [
        "Installed, configured, and maintained microcomputer systems and local networks.",
        "Diagnosed and resolved system and network issues while ensuring efficient connectivity.",
        "Prepared technical documentation, budgets, and conducted client consultations.",
      ],
    },
  ];
  
  const myCertifications: Certification[] = [
    {
      title: "Official NestJS Course - NestJS GraphQL - Schema-first approach",
      issuer: "NestJS",
      date: "2025",
      image: "",
      id: "cert_xcns1cjwID",
      skills: [
        "GraphQL",
        "NestJS",
        "TypeORM",
        "TypeScript",
        "Docker",
        "PostgreSQL",
      ],
    },
    {
      title: "Official NestJS Course - NestJS Fundamentals",
      issuer: "NestJS",
      date: "2025",
      image: "",
      id: "cert_xcns1cjwID",
      skills: [
        "NestJS",
        "TypeORM",
        "TypeScript",
        "Docker",
        "PostgreSQL",
        "MongoDB",
        "Rest API",
      ],
    },
    {
      title: "Clean Code",
      issuer: "Udemy",
      date: "2024",
      image: "",
      id: "UC-96cb0e25-ac17-43a4-a57a-e25a89b8fd31",
      url: "https://ude.my/UC-96cb0e25-ac17-43a4-a57a-e25a89b8fd31",
      skills: ["Clean Code"],
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Coursera",
      date: "2021",
      image: "",
      id: "ZRW9AXECLXYS",
      url: "https://www.coursera.org/account/accomplishments/certificate/ZRW9AXECLXYS",
      skills: ["Amazon Web Services"],
    },
  ];
  
  const techSkills: string[] = [
    "TypeScript",
    "React",
    "GraphQL",
    "NestJS",
    "Node.js",
    "Jest",
    "SQL",
    "noSQL",
    "AWS",
    "Docker",
    "CI/CD",
    "TDD",
  ];
  
  const softSkills: string[] = [
    "Communication",
    "Team Player",
    "Innovation",
    "Versatility",
    "Enthusiasm",
    "Responsibility",
    "Proactivity",
    "Adaptability",
    "Empathy",
  ];

  export const myResume: MyResume = {
    sideProjects: mySideProjects,
    experience: myExperience,
    education: myEducation,
    certifications: myCertifications,
    techSkills,
    softSkills,
  };
  