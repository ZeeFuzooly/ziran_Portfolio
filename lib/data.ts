import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { Icon } from "@iconify/react";
import javascriptIcon from "@iconify/icons-logos/javascript";
import typescriptIcon from "@iconify/icons-logos/typescript";
import reactIcon from "@iconify/icons-logos/react";
import nextjsIcon from "@iconify/icons-logos/nextjs";
import vueIcon from "@iconify/icons-logos/vue";
import angularIcon from "@iconify/icons-logos/angular";
import pythonIcon from "@iconify/icons-logos/python";
import javaIcon from "@iconify/icons-logos/java";
import gitlab from "@iconify/icons-logos/gitlab";
import bitbucket from "@iconify/icons-logos/bitbucket";
import spring from "@iconify/icons-logos/spring";
import github from "@iconify/icons-logos/github";
import html5Icon from "@iconify/icons-logos/html-5";
import css3Icon from "@iconify/icons-logos/css-3";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import awsIcon from "@iconify/icons-logos/aws";
import dockerIcon from "@iconify/icons-logos/docker";
import dotNet from "@iconify/icons-logos/dotnet";
import azureIcon from "@iconify/icons-logos/azure";
import mysqlIcon from "@iconify/icons-logos/mysql";
import mongodbIcon from "@iconify/icons-logos/mongodb";
import onic from "@/public/images/oniccc.png";
import circles from "@/public/images/circles.png";
import ml from "@/public/images/ml.png";
import uiux from "@/public/images/uiux.png";
import cir from "@/public/images/cir.png";
import mm from "@/public/images/mm.png";
import grubtech from "@/public/images/grubtech.jpg";
import travel from "@/public/images/travel.png";
import austorad from "@/public/images/austorad.png";
import SimHealthAI from "@/public/images/SimHealthAI.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Academic",
    hash: "#academic-experience",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    location: "Insharp Technologies · New York, USA (Remote)",
    description: [
      "Led the development of scalable applications using .NET, React, and TypeScript, optimizing system performance and UX.",
      "Designed architecture to reduce system downtime and improve development velocity.",
      "Implemented Agile methodologies and CI practices, enabling faster delivery cycles.",
      "Executed unit testing and QA protocols, reducing post-deployment defects.",
      "Collaborated across teams via Jira and Bitbucket to enhance project transparency.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2025 – Present",
    skills: [
      ".NET",
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Jira",
      "Bitbucket",
      "GitLab",
      "Jenkins",
      "Node.js",
      "Python",
      "Docker",
      "Agile",
    ],
  },
  {
    title: "Senior Software Engineer",
    location:
      "ITWorx Consulting via Insharp Technologies · Sydney, Australia (Remote)",
    description: [
      "Built high-performance applications using .NET, React, and TypeScript.",
      "Improved app efficiency by 30% through seamless integration and optimization.",
      "Applied Agile methodologies to accelerate delivery and boost team collaboration.",
      "Implemented CI/CD pipelines with Docker and Jenkins, reducing deployment time by 25%.",
      "Led QA and unit testing efforts, minimizing production bugs.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2025 – Present",
    skills: [
      ".NET",
      "Java",
      "Spring Boot",
      "React.js",
      "Next.js",
      "TypeScript",
      "Docker",
      "GitLab",
      "Jenkins",
      "Node.js",
      "Python",
      "Agile",
      "QA",
    ],
  },
  {
    title: "Senior Software Engineer",
    location: "Softvil Technologies · Colombo, Sri Lanka",
    description: [
      "Worked on multiple enterprise-grade solutions as a consulting engineer.",
      "Led full-stack project teams and collaborated with client product managers.",
      "Oversaw delivery of web applications for clients like GrubTech, focusing on scalability and performance.",
      "Mentored junior developers and contributed to onboarding and internal documentation practices.",
      "Managed source control and CI/CD pipelines using Bitbucket and Docker.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2023 – Jan 2025",
    skills: [
      "React.js",
      "Java",
      "Spring Boot",
      "TypeScript",
      "CI/CD",
      "Bitbucket",
      "Docker",
      "Agile",
      "Team Leadership",
    ],
  },

  {
    title: "Senior Software Engineer",
    location: "GrubTech via Softvil Technologies · Dubai, UAE (Remote)",
    description: [
      "Led full-stack development with React, TypeScript, Java, and Spring Boot.",
      "Built scalable APIs and integrated POS systems to streamline transactions.",
      "Reduced frontend load times by 30%, improving UX and customer satisfaction.",
      "Introduced best practices in code reviews and CI/CD, improving code quality.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 – Jan 2025",
    skills: [
      "React.js",
      "Next.js",
      "Java",
      "Spring Boot",
      "TypeScript",
      "Bitbucket",
      "GitLab",
      "Docker",
      "Node.js",
      "QA",
    ],
  },
  {
    title: "Software Engineer",
    location: "Circles.Life · Colombo, Sri Lanka",
    description: [
      "Built and enhanced product features across frontend and backend platforms.",
      "Improved UX and application performance across multiple SaaS dashboards.",
      "Collaborated with global stakeholders to deliver high-impact solutions.",
      "Maintained testing coverage and integrated RESTful APIs.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 – Sep 2024",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      ".NET Core",
      "Node.js",
      "Jira",
      "Docker",
      "Python",
    ],
  },
  {
    title: "Mentor",
    location: "Future Ready Mentoring · University of Westminster, London",
    description: [
      "Guided students in software career development and industry preparation.",
      "Provided feedback on CVs, applications, and technical portfolios.",
      "Offered professional and emotional support to boost mentee confidence.",
    ],
    icon: React.createElement(RiGraduationCapLine),
    date: "Nov 2022 – Present",
  },
  {
    title: "Software Engineer Intern",
    location: "Motion Miracles · Colombo, Sri Lanka",
    description: [
      "Worked on a full-stack dashboard project using modern frameworks.",
      "Designed UI/UX components, built APIs, and managed cloud deployment.",
      "Practiced Agile teamwork and testing strategies using Karma and Kubernetes.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2020 – Jul 2021",
    skills: [
      "React.js",
      "Angular",
      "Java",
      "Node.js",
      "Firebase",
      "Kubernetes",
      "MySQL",
      "C#",
      "REST API",
    ],
  },
  {
    title: "Frontend Developer",
    location: "TravelEx (University Project) · Colombo, Sri Lanka",
    description: [
      "Built responsive UI components using React.js for a hotel booking app.",
      "Integrated with backend services and tested APIs using Postman.",
      "Collaborated with team to simulate a real-world SDLC.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2019 – May 2020",
    skills: ["React.js", "MongoDB", "Python", "Postman", "MySQL"],
  },
] as const;

export const projectsData = [
  {
    title: "Austroads-TTM Platform",
    description:
      "Led development of a scalable web platform for Austroads, emphasizing frontend performance and usability. Built reusable design systems and optimized app delivery via Azure.",
    tags: ["React.js", "Next.js", "TypeScript", ".NET", "Azure", "CI/CD"],
    imageUrl: austorad,
  },
  {
    title: "SimHealth Dietetic Simulation Platform",
    description:
      "Frontend lead for an AI-powered simulation platform for clinical dietetic training. Designed modular React components to streamline scenarios and reduce HEI staff workload.",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Vercel",
    ],
    imageUrl: SimHealthAI,
  },
  {
    title: "Codisys POS – GrubTech",
    description:
      "Developed backend APIs and enhanced the frontend for a POS system. Integrated 3rd-party services, optimized performance, and led feature development across teams.",
    tags: [
      "Java",
      "Spring Boot",
      "React.js",
      "Next.js",
      "TypeScript",
      "Docker",
      "Bitbucket",
    ],
    imageUrl: grubtech,
  },
  {
    title: "OperatorX – Circles.Life",
    description:
      "Built a company-based dashboard for Onic from scratch. Focused on frontend UI, Ant Design integration, and backend sync for business intelligence tools.",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Ant Design",
      "Jest",
      "Node.js",
    ],
    imageUrl: onic,
  },
  {
    title: "Annapurna – Circles.Life",
    description:
      "Designed and implemented interactive UIs and backend APIs. Improved UX and performance while integrating testing and versioning workflows.",
    tags: ["React.js", "JavaScript", "Node.js", "Jest"],
    imageUrl: circles,
  },
  {
    title: "Kirk – Circles.Life",
    description:
      "Maintained and extended a legacy internal dashboard. Implemented new features, resolved long-standing bugs, and optimized performance.",
    tags: ["JavaScript", "Node.js", "jQuery"],
    imageUrl: cir,
  },
  {
    title: "Switch-ML – Research Project",
    description:
      "Built a machine learning system to recommend cricket player replacements. Integrated React UI, Flask backend, and data visualizations.",
    tags: [
      "Machine Learning",
      "Python",
      "React",
      "Flask",
      "MySQL",
      "JavaScript",
    ],
    imageUrl: ml,
  },
  {
    title: "Takeout Tella – Mobile UI/UX Project",
    description:
      "Designed a mobile-first food delivery app interface for an academic UI/UX course. Scored 92/100 for design quality and experience flow.",
    tags: ["Figma", "jQuery", "HTML5", "CSS"],
    imageUrl: uiux,
  },
  {
    title: "Game Analytics Dashboard – Motion Miracles",
    description:
      "Developed a responsive dashboard to visualize game performance data. Led frontend development, helped implement APIs and cloud integration.",
    tags: [
      "React.js",
      "Firebase",
      "JavaScript",
      "AWS",
      "Node.js",
      "Bootstrap",
      "Python",
    ],
    imageUrl: mm,
  },
  {
    title: "TravelEX – IIT Group Project",
    description:
      "Built a hotel recommendation app with React and MongoDB as part of a university project. Integrated Python backend and API testing.",
    tags: ["React.js", "MongoDB", "Python", "Postman"],
    imageUrl: travel,
  },
] as const;

export const academicData = [
  {
    date: "Sep 2018 - Jul 2022",
    degree: "Bachelor of Engineering (BEng Hons) in Software Engineering",
    institution: "University of Westminster",
    description: [
      "Graduated with First Class Honours.",
      "Excelled in key modules including Algorithms, Database Systems, and Mobile UI/UX.",
      "Completed a final year research project focused on Machine Learning.",
      "Actively participated in extracurriculars: Rotaract Club of IIT and Cutting Edge 2022 (Finance Team).",
      "View [Alumni Profile](https://www.westminster.ac.uk/study/student-profiles/ziran-fuzooly).",
    ],
    icon: React.createElement(RiGraduationCapLine),
  },
  {
    date: "Jan 2018 - Aug 2018",
    degree: "Foundation Certificate in Higher Education",
    institution: "Informatics Institute of Technology (IIT)",
    description: [
      "Graduated with Distinction.",
      "Developed core computing foundations in programming and computer systems.",
      "Prepared for undergraduate studies in Software Engineering.",
    ],
    icon: React.createElement(RiGraduationCapLine),
  },
  {
    date: "2003 - 2016",
    degree: "Advanced Level Mathematics",
    institution: "T/R.K.M Sri Koneswara Hindu College",
    description: [
      "Completed A/L Mathematics with strong academic performance.",
      "Served as House Captain and actively engaged in school leadership.",
      "Participated in Scouts, School Band, Debate Club, and Tamil Literary Association.",
      "Contributed to the Interact Club, Environmental Club, Innovators Club, and School Announcing Team.",
    ],
    icon: React.createElement(RiGraduationCapLine),
  },
];

export const certificationsData = [
  {
    title: "Career Essentials in GitHub Professional Certificate",
    organization: "GitHub",
    date: "11/2024 - Present",
    description:
      "Certification focused on GitHub essentials, including version control, collaboration, and GitHub workflows.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "Agile Project Management by Google",
    organization: "Google",
    date: "05/2023 – Present",
    description:
      "A comprehensive course on Agile methodologies, focusing on practical applications and project management skills.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "JavaScript Basic - Webfront Security Course",
    organization: "Web Security Institute",
    date: "09/2022 -Present",
    description:
      "Basic course on JavaScript security practices for web development, focusing on securing applications from common threats.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "Certified OKR Professional",
    organization: "OKR Institute",
    date: "07/2022 – Present",
    description:
      "Certification in Objectives and Key Results (OKR) to effectively set and achieve business goals.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "Artificial Intelligence Foundations: Machine Learning",
    organization: "Coursera",
    date: "07/2022 – Present",
    description:
      "Foundational knowledge in AI and machine learning, including practical applications and algorithms.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "React.js: Building an Interface",
    organization: "Udacity",
    date: "08/2021 – Present",
    description:
      "Hands-on experience in building user interfaces with React.js, covering core concepts and best practices.",
    icon: React.createElement(GrCertificate),
  },

  {
    title: "React: Ecosystems",
    organization: "Udemy",
    date: "09/2021 – Present",
    description:
      "Exploration of the React ecosystem, including tools and libraries to enhance development and performance.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "AI For Everyone",
    organization: "Coursera",
    date: "12/2020 – Present",
    description:
      "Introduction to artificial intelligence, its impact, and how it can be applied in various fields.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "Machine Learning with Python: Foundations",
    organization: "DataCamp",
    date: "09/2019 – Present",
    description:
      "Fundamentals of machine learning using Python, including data analysis and predictive modeling techniques.",
    icon: React.createElement(GrCertificate),
  },

  {
    title: "React.js Essential Training",
    organization: "LinkedIn Learning",
    date: "07/2022 - Present",
    description:
      "Essential training on React.js, covering core concepts, state management, and component-based development.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "React: Creating and Hosting a Full-Stack Site",
    organization: "Pluralsight",
    date: "08/2021 - Present",
    description:
      "Comprehensive course on building and hosting full-stack applications using React.js.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "Google Hashcode 2020",
    organization: "Google",
    date: "09/2021 - Present",
    description:
      "Participation in the Google Hashcode competition, showcasing problem-solving and coding skills.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "Foundation Certificate in Higher Education",
    organization: "Informatics Institute of Technology",
    date: "02/2022 - Present",
    description:
      "Foundation certificate focusing on higher education principles and academic skills.",
    icon: React.createElement(GrCertificate),
  },
] as const;

export const skillsData = [
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "ReactJs", icon: reactIcon },
  { name: "Next.js", icon: nextjsIcon },
  { name: "VueJs", icon: vueIcon },
  { name: ".Net", icon: dotNet },
  { name: "Angular", icon: angularIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Java", icon: javaIcon },
  { name: "Spring Boot", icon: spring },
  { name: "HTML5", icon: html5Icon },
  { name: "CSS3", icon: css3Icon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "AWS", icon: awsIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Azure", icon: azureIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "GitHub", icon: github },
  { name: "BitBucket", icon: bitbucket },
  { name: "GitLab", icon: gitlab },
] as const;
