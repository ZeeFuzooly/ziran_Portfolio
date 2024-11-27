import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { Icon } from '@iconify/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import typescriptIcon from '@iconify/icons-logos/typescript';
import reactIcon from '@iconify/icons-logos/react';
import nextjsIcon from '@iconify/icons-logos/nextjs';
import vueIcon from '@iconify/icons-logos/vue';
import angularIcon from '@iconify/icons-logos/angular';
import pythonIcon from '@iconify/icons-logos/python';
import javaIcon from '@iconify/icons-logos/java';
import gitlab from '@iconify/icons-logos/gitlab';
import bitbucket from '@iconify/icons-logos/bitbucket';
import spring from '@iconify/icons-logos/spring';
import github from '@iconify/icons-logos/github';
import html5Icon from '@iconify/icons-logos/html-5';
import css3Icon from '@iconify/icons-logos/css-3';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import awsIcon from '@iconify/icons-logos/aws';
import dockerIcon from '@iconify/icons-logos/docker';
import mysqlIcon from '@iconify/icons-logos/mysql';
import mongodbIcon from '@iconify/icons-logos/mongodb';
import onic from '@/public/images/oniccc.png'
import circles from '@/public/images/circles.png'
import ml from '@/public/images/ml.png'
import uiux from '@/public/images/uiux.png'
import cir from '@/public/images/cir.png'
import mm from '@/public/images/mm.png'
import grubtech from '@/public/images/grubtech.jpg'
import travel from '@/public/images/travel.png'


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
    location: "Singapore · Remote",
    description:
      "Deputed as a Senior Software Engineer from Softvil Technologies to Grubtech, focusing on delivering software solutions and enhancing system efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 – Present",
    skills: ["Java", "Spring Boot", "React.js", "TypeScript", "JavaScript", "MongoDB", "Docker", "Amazon Web Services (AWS)"],
  },
  {
    title: "Senior Software Engineer Via Softvil",
    location: "Dubai, United Arab Emirates · Remote",
    description:
      "Leading full-stack development using React, Java, and Spring Boot. Developing APIs and integrating POS systems. Collaborating with cross-functional teams to optimize system performance and enhance user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 – Present",
    skills: ["TypeScript", "React.js", "Java", "Spring Boot", "JavaScript", "Docker", "Bitbucket", "MongoDB", "Amazon Web Services (AWS)"],
  },
  {
    title: "Mentor",
    location: "London, England",
    description:
      "Mentored students in Software Engineering & Computer Science. Provided industry insights to enhance mentee employability and career readiness.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2022 – Present",
  },
  {
    title: "Software Engineer",
    location: "Colombo, Sri Lanka",
    description:
      "Collaborated with a team focused on customer satisfaction. Worked on both front-end and back-end development, creating new features and enhancing existing ones.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 – October 2024",
  },
 
  {
    title: "Software Engineer Intern",
    location: "Colombo, Sri Lanka",
    description:
      "Worked as a Full Stack Engineer on a dashboard project. Contributed to front-end and back-end development, UI/UX design, database management, API development, deployment, and testing.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2020 – July 2021",
  },
  {
    title: "Frontend Developer",
    location: "Colombo, Sri Lanka",
    description:
      "Developed a hotel recommendation web application as part of a university group project. Focused on creating a responsive front-end interface.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2019 – May 2020",
  },
] as const;


export const projectsData = [
  {
    title: "Codisys POS, GrubTech",
    description:
      "Leading the full-stack development for Codisys POS, integrating third-party systems and focusing on API development and user interface optimization for a seamless user experience.",
    tags: ["Java", "SpringBoot", "React.js", "JavaScript", "TypeScript", "Bitbucket", "Docker"],
    imageUrl: grubtech, 
  },
  {
    title: "OperatorX",
    description:
      "Developed a company-based dashboard for Onic (a Pakistan product) from end to end, focusing on user interface design, state management, and back-end integration.",
    tags: ["React", "Next.js", "TypeScript", "Ant Design", "Jest", "Node.js"],
    imageUrl: onic,
  },
  {
    title: "Onic",
    description:
      "Contributed to Onic, a key product for the company in Pakistan. Focused on building user interfaces, adding interactive features, and server-side development.",
    tags: ["React", "JavaScript", "Node.js", "Jest"],
    imageUrl: onic,
  },
  {
    title: "Annapurna Customer Website",
    description:
      "Worked on the Annapurna customer website. Built and maintained user interfaces, enhanced interactivity, and developed server-side functionalities.",
    tags: ["React", "JavaScript", "Node.js", "Jest"],
    imageUrl: circles,
  },
  {
    title: "Kirk",
    description:
      "Enhanced and maintained Kirk, a legacy dashboard. Added new features and fixed bugs to ensure stability and performance.",
    tags: ["JavaScript", "Node.js", "jQuery"],
    imageUrl: cir,
  },
  {
    title: "Switch-ML, Final Year Research Project",
    description:
      "Developed a Cricket Player Replacement system using machine learning techniques for optimal player replacement based on performance data.",
    tags: ["Machine Learning", "Python", "React", "JavaScript", "MySQL", "Flask"],
    imageUrl: ml,
  },
  {
    title: "Takeout Tella, Mobile UI/UX Project",
    description:
      "Completed a Mobile UI/UX project for the University of Westminster, achieving a score of 92/100. Designed an intuitive interface for a food delivery application.",
    tags: ["Figma", "jQuery", "HTML5", "CSS"],
    imageUrl: uiux,
  },
  {
    title: "Game Performance Analytics Dashboard",
    description:
      "Worked on a dashboard project within the Motion Miracles Engineering Team as a Front-End Engineer, with additional responsibilities in back-end API development.",
    tags: ["React.js", "Bootstrap", "Firebase", "JavaScript", "AWS", "Node.js", "Python"],
    imageUrl: mm,
  },
  {
    title: "TravelEX, IIT affiliated with University of Westminster",
    description:
      "Developed a hotel recommendation web application as part of a university group project, focusing on creating a responsive front-end interface.",
    tags: ["React.js", "MongoDB", "Python", "Postman"],
    imageUrl: travel,
  },
] as const;


export const academicData = [
  {
    date: "Sep 2018 - Jul 2022",
    degree: "Bachelor of Engineering (BEng Hons) in Software Engineering",
    institution: "University of Westminster",
    description: `
      Completed a Bachelor of Engineering in Software Engineering with First Class Honours. 
      During my time at the university, I excelled in key modules such as Algorithms, Database Systems, 
      and Mobile UI/UX, and completed a notable final year project focused on Machine Learning. 
      Actively participated in the Rotaract Club of IIT and the Cutting Edge 2022 Finance Team.
      
      [Alumni Profile](https://www.westminster.ac.uk/study/student-profiles/ziran-fuzooly)
    `,
    icon: React.createElement(RiGraduationCapLine),
  },
  {
    date: "Jan 2018 - Aug 2018",
    degree: "Foundation Certificate in Higher Education",
    institution: "Informatics Institute of Technology (IIT)",
    description: `
      Completed a Foundation Certificate in Higher Education with Distinction. 
      This program provided a solid foundation in computing and prepared me for further studies 
      in software engineering. Developed fundamental skills in programming and computer systems.
    `,
    icon: React.createElement(RiGraduationCapLine),
    
  },
  {
    date: "2003 - 2016",
    degree: "Advanced Level Mathematics",
    institution: "T/R.K.M Sri Koneswara Hindu College",
    description: `
      Completed Advanced Level Mathematics with a strong academic performance. 
      Actively involved in various extracurricular activities including serving as House Captain, 
      participating in the Scouts, School Band, and various clubs such as the Interact Club, Environmental Club, 
      Debate Club, and Innovators Club. Contributed to the Tamil Literary Associations and School Announcing Team.
    `,
    icon: React.createElement(RiGraduationCapLine),
  },
];

export const certificationsData = [
  {
    title: "Career Essentials in GitHub Professional Certificate",
    organization: "GitHub",
    date: "11/2024 - Present",
    description: "Certification focused on GitHub essentials, including version control, collaboration, and GitHub workflows.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "Agile Project Management by Google",
    organization: "Google",
    date: "05/2023 – Present",
    description: "A comprehensive course on Agile methodologies, focusing on practical applications and project management skills.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "JavaScript Basic - Webfront Security Course",
    organization: "Web Security Institute",
    date: "09/2022 -Present",
    description: "Basic course on JavaScript security practices for web development, focusing on securing applications from common threats.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "Certified OKR Professional",
    organization: "OKR Institute",
    date: "07/2022 – Present",
    description: "Certification in Objectives and Key Results (OKR) to effectively set and achieve business goals.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "Artificial Intelligence Foundations: Machine Learning",
    organization: "Coursera",
    date: "07/2022 – Present",
    description: "Foundational knowledge in AI and machine learning, including practical applications and algorithms.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "React.js: Building an Interface",
    organization: "Udacity",
    date: "08/2021 – Present",
    description: "Hands-on experience in building user interfaces with React.js, covering core concepts and best practices.",
    icon: React.createElement(GrCertificate),
  },
  
  {
    title: "React: Ecosystems",
    organization: "Udemy",
    date: "09/2021 – Present",
    description: "Exploration of the React ecosystem, including tools and libraries to enhance development and performance.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "AI For Everyone",
    organization: "Coursera",
    date: "12/2020 – Present",
    description: "Introduction to artificial intelligence, its impact, and how it can be applied in various fields.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "Machine Learning with Python: Foundations",
    organization: "DataCamp",
    date: "09/2019 – Present",
    description: "Fundamentals of machine learning using Python, including data analysis and predictive modeling techniques.",
    icon: React.createElement(GrCertificate),
  },
 
  {
    title: "React.js Essential Training",
    organization: "LinkedIn Learning",
    date: "07/2022 - Present",
    description: "Essential training on React.js, covering core concepts, state management, and component-based development.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "React: Creating and Hosting a Full-Stack Site",
    organization: "Pluralsight",
    date: "08/2021 - Present",
    description: "Comprehensive course on building and hosting full-stack applications using React.js.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "Google Hashcode 2020",
    organization: "Google",
    date: "09/2021 - Present",
    description: "Participation in the Google Hashcode competition, showcasing problem-solving and coding skills.",
    icon: React.createElement(GrCertificate),
  },
  {
    title: "Foundation Certificate in Higher Education",
    organization: "Informatics Institute of Technology",
    date: "02/2022 - Present",
    description: "Foundation certificate focusing on higher education principles and academic skills.",
    icon: React.createElement(GrCertificate),
  },
] as const;


export const skillsData = [
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "ReactJs", icon: reactIcon },
  { name: "Next.js", icon: nextjsIcon },
  { name: "VueJs", icon: vueIcon },
  { name: "Angular", icon: angularIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Java", icon: javaIcon },
  {name :"Spring Boot", icon : spring },
  { name: "HTML5", icon: html5Icon },
  { name: "CSS3", icon: css3Icon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "AWS", icon: awsIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "MongoDB", icon: mongodbIcon },
  {name :"GitHub", icon : github },
  {name :"BitBucket", icon : bitbucket },
  {name :"GitLab", icon : gitlab },
] as const;