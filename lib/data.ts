import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { Icon } from '@iconify/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import typescriptIcon from '@iconify/icons-logos/typescript';
import reactIcon from '@iconify/icons-logos/react';
import nextjsIcon from '@iconify/icons-logos/nextjs';
import vueIcon from '@iconify/icons-logos/vue';
import angularIcon from '@iconify/icons-logos/angular';
import pythonIcon from '@iconify/icons-logos/python';
import javaIcon from '@iconify/icons-logos/java';
import html5Icon from '@iconify/icons-logos/html-5';
import css3Icon from '@iconify/icons-logos/css-3';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import awsIcon from '@iconify/icons-logos/aws';
import dockerIcon from '@iconify/icons-logos/docker';
import mysqlIcon from '@iconify/icons-logos/mysql';
import mongodbIcon from '@iconify/icons-logos/mongodb';


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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Colombo, Sri Lanka",
    description:
      "Collaborated with a team focused on customer satisfaction. Worked on both front-end and back-end development, creating new features and enhancing existing ones.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 – Present",
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
    title: "OperatorX",
    description:
      "Developed a company-based dashboard for Onic (a Pakistan product) from end to end, focusing on user interface design, state management, and back-end integration.",
    tags: ["React", "Next.js", "TypeScript", "Ant Design", "Jest", "Node.js"],
    // imageUrl: operatorXImg,
  },
  {
    title: "Onic",
    description:
      "Contributed to Onic, a key product for the company in Pakistan. Focused on building user interfaces, adding interactive features, and server-side development.",
    tags: ["React", "JavaScript", "Node.js", "Jest"],
    // imageUrl: onicImg,
  },
  {
    title: "Annapurna Customer Website",
    description:
      "Worked on the Annapurna customer website. Built and maintained user interfaces, enhanced interactivity, and developed server-side functionalities.",
    tags: ["React", "JavaScript", "Node.js", "Jest"],
    // imageUrl: annapurnaImg,
  },
  {
    title: "Kirk",
    description:
      "Enhanced and maintained Kirk, a legacy dashboard. Added new features and fixed bugs to ensure stability and performance.",
    tags: ["JavaScript", "Node.js", "jQuery"],
    // imageUrl: kirkImg,
  },
  {
    title: "Switch-ML, Final Year Research Project",
    description:
      "Developed a Cricket Player Replacement system using machine learning techniques for optimal player replacement based on performance data.",
    tags: ["Machine Learning", "Python", "React", "JavaScript", "MySQL", "Flask"],
    // imageUrl: switchMLImg,
  },
  {
    title: "Takeout Tella, Mobile UI/UX Project",
    description:
      "Completed a Mobile UI/UX project for the University of Westminster, achieving a score of 92/100. Designed an intuitive interface for a food delivery application.",
    tags: ["Figma", "jQuery", "HTML5", "CSS"],
    // imageUrl: takeoutTellaImg,
  },
  {
    title: "Game Performance Analytics Dashboard",
    description:
      "Worked on a dashboard project within the Motion Miracles Engineering Team as a Front-End Engineer, with additional responsibilities in back-end API development.",
    tags: ["React.js", "Bootstrap", "Firebase", "JavaScript", "AWS", "Node.js", "Python"],
    // imageUrl: gameAnalyticsImg,
  },
  {
    title: "TravelEX, IIT affiliated with University of Westminster",
    description:
      "Developed a hotel recommendation web application as part of a university group project, focusing on creating a responsive front-end interface.",
    tags: ["React.js", "MongoDB", "Python", "Postman"],
    // imageUrl: travelExImg,
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


export const skillsData = [
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "ReactJs", icon: reactIcon },
  { name: "Next.js", icon: nextjsIcon },
  { name: "VueJs", icon: vueIcon },
  { name: "Angular", icon: angularIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Java", icon: javaIcon },
  { name: "HTML5", icon: html5Icon },
  { name: "CSS3", icon: css3Icon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "AWS", icon: awsIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "MongoDB", icon: mongodbIcon },
] as const;