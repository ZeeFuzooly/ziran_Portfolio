import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { HiNewspaper } from "react-icons/hi";
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
import placeholder from "@/public/images/sassaas.png";
import pizza from "@/public/images/pizza.png";
import weather from "@/public/images/weather.png";
import calculately from "@/public/images/calculately.png";
import techTalksLogo from "@/public/images/TechTalks by Zee.png";

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
    name: "Newsletter",
    hash: "#newsletter",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Lead Engineer - Product Experience",
    location: "SimHealthAI · London, UK (Remote)",
    platforms: [
      "SimHealth Simulation Web App – Core AI-powered platform enabling realistic dietetic consultations with virtual patients, featuring real-time AI feedback, competency-based assessments, and adaptive learning pathways.",
      "SimHealth Marketing Site – Public-facing website showcasing platform capabilities to universities and healthcare institutions, built with SEO optimisation and pixel-perfect Figma implementation.",
      "SimHealth Admin Portal – Internal management system for user administration, role-based access control, institutional onboarding, leave management, and operational workflows with Google Sheets and Microsoft Entra ID integrations.",
    ],
    description: [
      "Spearhead frontend architecture and product experience for the world's first AI-powered dietetic simulation platform aligned with HCPC and BDA standards.",
      "Architect and lead scalable, high-performance frontend solutions using React, TypeScript, and a modular design system across all three platforms.",
      "Translate cross-disciplinary feedback from Head of Medical and Head of Education into actionable product and technical priorities.",
      "Define and maintain the design system, ensuring visual consistency, accessibility compliance (WCAG), and brand alignment.",
      "Champion learner and educator experience, driving measurable UX improvements in every sprint.",
      "Collaborate with Data and AI teams to integrate advanced analytics dashboards and actionable experience insights.",
      "Mentor and manage a cross-functional engineering team — conducting code reviews, setting coding standards, and nurturing engineering excellence.",
      "Oversee sprint planning and delivery, acting as an Engineering Manager for agile ceremonies, roadmap alignment, and timely execution.",
      "Recruit and onboard new engineering talent, including Software Engineer Interns, to scale both the product and design teams.",
      "Manage and operate the Sri Lanka engineering office at Hatch Jaffna, including team leadership, coordination with India-based engineers, and culture building.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2025 – Present",
    website: "https://simhealth.co.uk/",
    skills: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "Microsoft Azure",
      "Jira",
      "Agile",
      "Scrum",
      "CI/CD",
      "TDD",
      "Design Systems",
      "Atomic Design",
      "Team Leadership",
    ],
  },
  {
    title: "Associate Lead Engineer - Frontend",
    location: "SimHealthAI (Consultant via Kuubiik) · Singapore · Remote",
    employmentType: "Part-time",
    description: [
      "Led the development of modular React + TypeScript components to enhance scalability and maintainability.",
      "Built interactive, real-time simulation modules for clinical dietetic training.",
      "Translated medical and educational needs into accessible, learner-friendly interfaces.",
      "Collaborated with backend engineers on Python-based APIs for real-time feedback and assessment.",
      "Improved responsiveness through lazy loading, code splitting, and state management.",
      "Delivered iterative enhancements through Agile sprints, enabling rapid feedback incorporation.",
      "Implemented unit and integration tests for stable and accurate simulation outcomes.",
      "Authored frontend architectural documentation for maintainability and handover.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2025 – Oct 2025",
    website: "https://simhealth.co.uk/",
    skills: [
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "FastAPI",
      "Node.js",
      "Docker",
      "PostgreSQL",
      "GitHub Actions",
      "Jira",
      "Agile",
      "CI/CD",
      "TDD",
    ],
  },
  {
    title: "Senior Software Engineer",
    location: "Insharp Technologies · New York, USA (Remote)",
    description: [
      "Led the development of scalable applications utilizing .NET, React, and TypeScript, resulting in optimized system performance and enhanced user experiences.",
      "Ensured seamless front-end and back-end integration through strategic architecture design, achieving a significant reduction in system downtime and improved development efficiency.",
      "Implemented Agile methodologies and continuous integration practices, which led to faster delivery cycles and higher-quality software solutions.",
      "Developed and executed comprehensive unit testing and quality assurance protocols, improving software reliability and reducing post-deployment defects.",
      "Collaborated with cross-functional teams using tools like Jira and Bitbucket, fostering effective communication and alignment, which enhanced project transparency and stakeholder satisfaction.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2025 – Oct 2025",
    skills: [
      ".NET",
      "Java",
      "Spring Boot",
      "React.js",
      "Next.js",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "Jira",
      "Bitbucket",
      "GitLab",
      "Jenkins",
      "Docker",
      "Node.js",
      "Python",
      "Unit Testing",
      "QA",
      "Agile",
    ],
  },
  {
    title: "Senior Software Engineer",
    location:
      "ITWorx Consulting Pty Ltd (via Insharp Technologies) · Sydney, Australia (Remote)",
    description: [
      "Led development of scalable applications using .NET, React, and TypeScript, enhancing performance and UX.",
      "Improved app efficiency by 30% through seamless integration and optimization.",
      "Applied Agile methodologies to accelerate delivery and boost team collaboration.",
      "Implemented CI/CD with Docker and Jenkins, reducing deployment time by 25%.",
      "Conducted unit testing and QA, significantly lowering post-deployment bugs.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2025 – Sep 2025",
    skills: [
      ".NET",
      "Java",
      "Spring Boot",
      "React.js",
      "Next.js",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "Jira",
      "Bitbucket",
      "GitLab",
      "Jenkins",
      "Docker",
      "Node.js",
      "Python",
      "Unit Testing",
      "QA",
      "Agile",
    ],
  },
  {
    title: "Senior Software Engineer",
    location: "Softvil Technologies · The Central, Singapore",
    description: [
      "Led full-stack development utilizing Java (Spring Boot) and React, delivering scalable web applications that enhance user engagement and operational efficiency.",
      "Collaborated with cross-functional teams to ensure high-quality solutions, focusing on performance and code quality, resulting in improved system reliability.",
      "Implemented Agile methodologies throughout the development cycle, which accelerated project delivery timelines and increased team productivity.",
      "Streamlined deployment processes using Docker and CI/CD tools like Jenkins, enabling faster release cycles and reduced deployment errors.",
      "Utilized a diverse tech stack including JavaScript, TypeScript, and Node.js to develop innovative solutions that meet evolving market demands.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 – Jan 2025",
    skills: [
      "Java",
      "Spring Boot",
      "React.js",
      "Next.js",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "Jira",
      "Bitbucket",
      "GitLab",
      "Jenkins",
      "Docker",
      "Redis",
      "Node.js",
      "Python",
      "Unit Testing",
      "QA",
      "Agile",
    ],
  },
  {
    title: "Senior Software Engineer",
    location: "GrubTech (via Softvil Technologies) · Dubai, UAE (Remote)",
    description: [
      "Led full-stack development with React, TypeScript, Java, and Spring Boot, delivering robust, scalable solutions.",
      "Focused on API development and POS integration, boosting transaction efficiency and payment processing.",
      "Optimized performance by reducing load times by 30%, improving user satisfaction.",
      "Collaborated with cross-functional teams to align software with business goals, enhancing productivity.",
      "Implemented best practices and code quality assurance, significantly reducing bugs and maintaining code integrity.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 – Jan 2025",
    skills: [
      "Java",
      "Spring Boot",
      "React.js",
      "Next.js",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "Jira",
      "Bitbucket",
      "GitLab",
      "Jenkins",
      "Docker",
      "Node.js",
      "Python",
      "Unit Testing",
      "QA",
      "Agile",
    ],
  },
  {
    title: "Software Engineer",
    location: "Circles.Life · Colombo, Sri Lanka",
    description: [
      "Collaborated with a skilled, customer-focused team, contributing to both front-end and back-end development efforts.",
      "Developed and enhanced features to improve functionality, performance, and user experience.",
      "Embraced autonomy and ownership, driving impactful improvements and delivering high-quality solutions.",
      "Maintained clear communication with stakeholders, ensuring alignment and timely delivery of project goals.",
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
      "Jira",
      "Bitbucket",
      "GitLab",
      "Jenkins",
      "Docker",
      "Node.js",
      "Python",
      "Java",
      "Frontend Development",
      "Unit Testing",
      "QA",
      "Agile",
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
    title: "SimHealth AI – AI Powered Dietetic Simulation Platform",
    description:
      "Lead Engineer – Product Experience for the world's first AI-powered dietetic simulation platform, leading frontend architecture across three platforms: Simulation Web App, Marketing Site, and Admin Portal.",
    fullDescription:
      "As Lead Engineer – Product Experience at SimHealth AI, I spearhead the frontend architecture and product experience of the world's first AI-powered dietetic simulation platform, designed to transform clinical education for healthcare professionals aligned with HCPC and BDA standards.",
    platforms: [
      "SimHealth Simulation Web App – Core AI-powered platform enabling realistic dietetic consultations with virtual patients, featuring real-time AI feedback, competency-based assessments, and adaptive learning pathways.",
      "SimHealth Marketing Site – Public-facing website showcasing platform capabilities to universities and healthcare institutions, built with SEO optimisation and pixel-perfect Figma implementation.",
      "SimHealth Admin Portal – Internal management system for user administration, role-based access control, institutional onboarding, leave management, and operational workflows with Google Sheets and Microsoft Entra ID integrations.",
    ],
    contributions: [
      "Architect and lead scalable, high-performance frontend solutions using React, TypeScript, and a modular design system across all three platforms.",
      "Translate cross-disciplinary feedback from the Head of Medical and Head of Education into actionable product and technical priorities.",
      "Define and maintain the design system, ensuring visual consistency, accessibility compliance (WCAG), and brand alignment across the platform.",
      "Champion learner and educator experience, driving measurable UX improvements in every sprint.",
      "Collaborate with Data and AI teams to integrate advanced analytics dashboards and actionable experience insights.",
      "Mentor and manage a cross-functional engineering team — conducting code reviews, setting coding standards, and nurturing engineering excellence.",
      "Oversee sprint planning and delivery, acting as an Engineering Manager for agile ceremonies, roadmap alignment, and timely execution.",
      "Recruit and onboard new engineering talent, including Software Engineer Interns, to scale both the product and design teams.",
      "Manage and operate the Sri Lanka engineering office at Hatch Jaffna, including team leadership, coordination with India-based engineers, culture building, and ensuring smooth day-to-day operations for the engineering branch.",
    ],
    duration: "Jul 2025 - Present",
    association: "Associated with Simhealth AI",
    projectUrl: "https://simhealth.co.uk/",
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "Microsoft Azure",
      "Jira",
      "Agile",
      "Scrum",
      "CI/CD",
      "TDD",
      "Design Systems",
      "Atomic Design",
    ],
    imageUrl: SimHealthAI,
  },
  {
    title: "Austroads-TTM Platform",
    description:
      "Led development of a scalable web platform for Austroads, emphasizing frontend performance and usability. Built reusable design systems and optimized app delivery via Azure.",
    fullDescription:
      "I led the frontend engineering and product experience for the Austroads-TTM Platform, a comprehensive web application designed to streamline traffic management workflows across Australia and New Zealand. The platform enables road authorities to plan, design, and deploy traffic control measures efficiently while ensuring compliance with national standards.",
    contributions: [
      "Frontend Architecture – Architected a modern, component-driven frontend using React.js, Next.js, and TypeScript, ensuring scalability, maintainability, and performance.",
      "Design System – Developed a reusable design system and component library to ensure UI consistency and accelerate feature development across the platform.",
      "Azure CI/CD Pipeline – Established automated CI/CD pipelines using Azure DevOps, enabling seamless deployments, version control, and continuous integration.",
      "API Integration – Integrated RESTful APIs built with .NET to synchronize frontend state with backend services for real-time data updates.",
      "Performance Optimization – Implemented code-splitting, lazy loading, and server-side rendering (SSR) to enhance page load times and user experience.",
      "Collaboration & Leadership – Worked closely with product managers, backend engineers, and stakeholders to translate business requirements into technical solutions and deliver features on schedule.",
    ],
    duration: "Jan 2025 - Sep 2025",
    association: "Associated with ITworx Consulting Pty Ltd",
    tags: ["React.js", "Next.js", "TypeScript", ".NET", "Azure", "CI/CD", "Azure DevOps"],
    imageUrl: austorad,
  },

  {
    title: "Codisys POS – GrubTech",
    description:
      "Developed backend APIs and enhanced the frontend for a POS system. Integrated 3rd-party services, optimized performance, and led feature development across teams.",
    fullDescription:
      "I contributed to the development of Codisys POS, a cloud-based point-of-sale system designed for restaurants and food service businesses. The platform integrates order management, payment processing, inventory tracking, and third-party delivery services into a unified interface. I worked on both frontend and backend components to enhance functionality, scalability, and user experience.",
    contributions: [
      "Backend API Development – Built RESTful APIs using Java and Spring Boot to handle order processing, payment integration, and real-time inventory updates.",
      "Frontend Development – Enhanced the React.js and Next.js frontend with TypeScript, improving UI responsiveness, form validation, and state management.",
      "Third-Party Integrations – Integrated external services including payment gateways, delivery platforms, and accounting systems to streamline restaurant operations.",
      "Performance Optimization – Optimized database queries, API response times, and frontend rendering to improve system performance under high traffic.",
      "Docker & CI/CD – Containerized applications using Docker and set up continuous integration pipelines via Bitbucket to automate testing and deployment.",
      "Cross-Functional Collaboration – Worked closely with product, design, and QA teams to deliver features that met business requirements and user expectations.",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "React.js",
      "Next.js",
      "TypeScript",
      "Docker",
      "Bitbucket",
      "RESTful APIs",
      "CI/CD",
    ],
    imageUrl: grubtech,
  },
  {
    title: "OperatorX – Circles.Life",
    description:
      "Developed a comprehensive internal platform for Circles.Life to manage telecom operations, customer data, and business workflows. Led frontend development and API integrations.",
    fullDescription:
      "I contributed to OperatorX, an internal operations platform at Circles.Life designed to streamline telecom service management, customer lifecycle workflows, and business intelligence reporting. The platform empowered operations teams to manage subscriptions, troubleshoot customer issues, and analyze key metrics in real-time.",
    contributions: [
      "Frontend Development – Built responsive and intuitive user interfaces using React.js, Next.js, and TypeScript, ensuring seamless navigation and optimal user experience.",
      "UI Component Library – Integrated Ant Design to create a consistent design system and accelerate feature development with reusable components.",
      "API Integration – Connected frontend components with backend Node.js services for real-time data synchronization and workflow automation.",
      "Testing & Quality Assurance – Implemented unit and integration tests using Jest to ensure code reliability and prevent regressions.",
      "Performance Optimization – Optimized rendering performance and state management to handle large datasets and complex workflows efficiently.",
      "Cross-Functional Collaboration – Worked closely with product managers, backend engineers, and operations teams to deliver features that met business requirements.",
    ],
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Ant Design",
      "Jest",
      "Node.js",
      "RESTful APIs",
    ],
    imageUrl: onic,
  },
  {
    title: "Annapurna – Circles.Life",
    description:
      "Designed and implemented interactive UIs and backend APIs. Improved UX and performance while integrating testing and versioning workflows.",
    fullDescription:
      "I contributed to Annapurna, a customer-facing web application at Circles.Life that enables users to manage their mobile subscriptions, view usage statistics, purchase add-ons, and access support services. The platform provides a seamless self-service experience for telecom customers.",
    contributions: [
      "Frontend Development – Built dynamic and responsive user interfaces using React.js and JavaScript, ensuring an intuitive user experience across devices.",
      "Backend API Development – Developed Node.js APIs to handle customer data, subscription management, and real-time usage tracking.",
      "User Experience Enhancement – Improved UI workflows, form validations, and error handling to reduce friction and enhance customer satisfaction.",
      "Performance Optimization – Optimized component rendering and API response times to improve page load speeds and overall platform performance.",
      "Testing & Quality Assurance – Implemented unit and integration tests using Jest to ensure code reliability and prevent regressions.",
      "Version Control & Collaboration – Managed code versioning and collaborated with cross-functional teams to deliver features on schedule.",
    ],
    tags: ["React.js", "JavaScript", "Node.js", "Jest", "RESTful APIs"],
    imageUrl: circles,
  },
  {
    title: "Kirk (CMSUI) – Circles.Life",
    description:
      "Maintained and extended a legacy internal dashboard. Implemented new features, resolved long-standing bugs, and optimized performance.",
    fullDescription:
      "I maintained and enhanced Kirk (CMSUI), a legacy internal content management system at Circles.Life used by operations and support teams to manage customer accounts, resolve issues, and configure system settings. Despite its legacy architecture, the platform remained critical to daily operations.",
    contributions: [
      "Legacy System Maintenance – Maintained and debugged a legacy JavaScript and jQuery codebase, ensuring system stability and addressing technical debt.",
      "Feature Development – Implemented new features and enhancements to meet evolving business requirements and improve operational efficiency.",
      "Bug Resolution – Resolved long-standing bugs and performance issues that impacted user experience and system reliability.",
      "Performance Optimization – Optimized JavaScript execution, DOM manipulation, and server-side Node.js processes to improve responsiveness.",
      "Code Refactoring – Refactored critical sections of the codebase to improve readability, maintainability, and scalability.",
      "Documentation & Knowledge Transfer – Documented legacy code behaviors and system workflows to facilitate knowledge sharing and onboarding.",
    ],
    tags: ["JavaScript", "Node.js", "jQuery", "Legacy Systems"],
    imageUrl: cir,
  },
  {
    title: "Switch-ML – Research Project",
    description:
      "Built a machine learning system to recommend cricket player replacements. Integrated React UI, Flask backend, and data visualizations.",
    fullDescription:
      "Switch-ML is a machine learning-powered recommendation system developed as a university research project. The system analyzes cricket player statistics and performance metrics to recommend optimal player replacements based on role, skills, and match conditions. The project combines data science, web development, and interactive visualizations.",
    contributions: [
      "Machine Learning Model – Developed a recommendation algorithm using Python and scikit-learn to analyze player statistics and suggest optimal replacements.",
      "Frontend Development – Built an interactive React.js interface for users to input player criteria and view recommendations with visualizations.",
      "Backend API – Developed a Flask backend to serve ML predictions, handle data processing, and manage API endpoints.",
      "Database Design – Designed and implemented a MySQL database schema to store player statistics, match data, and historical performance metrics.",
      "Data Visualization – Integrated JavaScript charting libraries to visualize player comparisons, performance trends, and recommendation confidence scores.",
      "Research & Documentation – Conducted research on machine learning algorithms, documented methodology, and presented findings in an academic report.",
    ],
    githubUrl: "https://github.com/ZiranFu/Switch-ML",
    videoUrl: "https://www.tella.tv/video/cl3vvf3r200r509l80htfdbzh/view",
    tags: [
      "Machine Learning",
      "Python",
      "React",
      "Flask",
      "MySQL",
      "JavaScript",
      "scikit-learn",
    ],
    imageUrl: ml,
  },
  {
    title: "Takeout Tella – Mobile UI/UX Project",
    description:
      "Designed a mobile-first food delivery app interface for an academic UI/UX course. Scored 92/100 for design quality and experience flow.",
    fullDescription:
      "Takeout Tella is a mobile-first food delivery application designed as part of a UI/UX course project. The project focused on creating an intuitive, visually appealing interface that prioritizes user experience, accessibility, and modern design principles. The final design received a score of 92/100 for its quality and user flow.",
    contributions: [
      "UI/UX Design – Designed a complete mobile application interface using Figma, including wireframes, mockups, and interactive prototypes.",
      "User Research – Conducted user research and competitive analysis to identify pain points in existing food delivery apps and inform design decisions.",
      "Design System – Created a cohesive design system with color palettes, typography, iconography, and component libraries for consistency.",
      "Interactive Prototype – Built an interactive Figma prototype to demonstrate user flows, animations, and micro-interactions.",
      "Frontend Implementation – Developed a functional prototype using HTML5, CSS, and jQuery to showcase the design in a working web interface.",
      "Usability Testing – Conducted usability testing sessions to gather feedback and iterate on the design for improved user experience.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=oO2fvKcnwc4",
    tags: ["Figma", "UI/UX Design", "jQuery", "HTML5", "CSS", "Prototyping"],
    imageUrl: uiux,
  },
  {
    title: "Game Performance Analytics Dashboard – Motion Miracles",
    description:
      "Developed a responsive dashboard to visualize game performance data. Led frontend development, helped implement APIs and cloud integration.",
    fullDescription:
      "I developed a comprehensive analytics dashboard for Motion Miracles, a game development studio, to visualize player behavior, game performance metrics, and in-game analytics. The platform enabled the team to make data-driven decisions for game optimization, feature prioritization, and user engagement strategies.",
    contributions: [
      "Frontend Development – Built a responsive, interactive dashboard using React.js and Bootstrap, ensuring seamless user experience across devices.",
      "Data Visualization – Integrated charting libraries to visualize player statistics, engagement metrics, and performance trends in real-time.",
      "Backend Integration – Developed Node.js and Python APIs to process game data, aggregate analytics, and serve dashboard endpoints.",
      "Firebase Integration – Implemented Firebase for real-time data synchronization, user authentication, and cloud storage.",
      "AWS Cloud Services – Deployed backend services on AWS, utilizing EC2, S3, and Lambda for scalable and cost-effective infrastructure.",
      "Performance Optimization – Optimized data fetching, caching strategies, and rendering performance to handle large datasets efficiently.",
    ],
    tags: [
      "React.js",
      "Firebase",
      "JavaScript",
      "AWS",
      "Node.js",
      "Bootstrap",
      "Python",
      "Data Visualization",
    ],
    imageUrl: mm,
  },
  {
    title: "TravelEX – IIT Group Project",
    description:
      "Built a hotel recommendation app with React and MongoDB as part of a university project. Integrated Python backend and API testing.",
    fullDescription:
      "TravelEX is a hotel recommendation application developed as a collaborative university project at IIT (Informatics Institute of Technology). The platform helps users discover and book hotels based on location, price, amenities, and user reviews. The project emphasized full-stack development, team collaboration, and API integration.",
    contributions: [
      "Frontend Development – Built a responsive user interface using React.js, enabling users to search, filter, and view hotel recommendations.",
      "Backend Development – Developed a Python backend to handle hotel data management, search queries, and recommendation algorithms.",
      "Database Design – Designed and implemented a MongoDB schema to store hotel information, user reviews, and booking data.",
      "API Development – Created RESTful APIs to connect the frontend with the backend and third-party services.",
      "API Testing – Conducted API testing using Postman to ensure endpoint reliability, data validation, and error handling.",
      "Team Collaboration – Worked in an Agile team environment, participated in sprint planning, code reviews, and documentation.",
    ],
    tags: ["React.js", "MongoDB", "Python", "Postman", "RESTful APIs", "Agile"],
    imageUrl: travel,
  },
  {
    title: "Pizzeria – iOS Application",
    description:
      "Developed a native iOS application for a pizza delivery service. Built with Swift and Xcode, featuring menu browsing, cart management, and order tracking.",
    fullDescription:
      "Pizzeria is a native iOS application developed for a pizza delivery service. The app provides users with an intuitive interface to browse menus, customize orders, manage their cart, and track deliveries in real-time. The project emphasized mobile-first design, native iOS development, and seamless user experience.",
    contributions: [
      "iOS Development – Built a native iOS application using Swift and Xcode, leveraging UIKit for responsive and performant user interfaces.",
      "UI/UX Design – Designed intuitive screens for menu browsing, order customization, and checkout flows with a focus on mobile usability.",
      "Cart Management – Implemented shopping cart functionality with add/remove items, quantity adjustments, and order calculations.",
      "API Integration – Integrated RESTful APIs to fetch menu data, process orders, and handle user authentication.",
      "Local Data Persistence – Used Core Data and UserDefaults for storing user preferences and cart state locally.",
      "Order Tracking – Developed real-time order tracking features to keep users informed about delivery status.",
    ],
    videoUrl: "https://www.tella.tv/video/cl3vv05e500d509jr0rh26i7a/view",
    tags: ["Swift", "Xcode", "iOS", "UIKit", "Core Data", "RESTful APIs"],
    imageUrl: pizza,
  },
  {
    title: "Weatherly – iOS Weather App",
    description:
      "Created a weather forecasting iOS app with real-time weather data, location-based forecasts, and intuitive UI. Built with Swift and integrated weather APIs.",
    fullDescription:
      "Weatherly is a weather forecasting iOS application that provides users with accurate, real-time weather information based on their location. The app features current weather conditions, hourly and daily forecasts, weather alerts, and beautiful visual representations of weather data. The project showcased native iOS development skills and third-party API integration.",
    contributions: [
      "iOS Development – Developed a native iOS app using Swift and Xcode with a focus on clean code architecture and design patterns.",
      "Weather API Integration – Integrated third-party weather APIs (OpenWeatherMap/WeatherAPI) to fetch real-time weather data and forecasts.",
      "Location Services – Implemented Core Location to automatically detect user location and provide localized weather information.",
      "UI/UX Design – Designed a visually appealing interface with weather icons, animations, and color schemes that reflect current conditions.",
      "Data Visualization – Created charts and graphs to display temperature trends, precipitation probabilities, and wind patterns.",
      "Error Handling – Implemented robust error handling for network failures, location permission issues, and invalid API responses.",
    ],
    videoUrl: "https://www.tella.tv/video/cl3vv5z61005709l05d0s6zm2/view",
    tags: ["Swift", "Xcode", "iOS", "Core Location", "API Integration", "UIKit"],
    imageUrl: weather,
  },
  {
    title: "Calculately – iOS Calculator App",
    description:
      "Built a feature-rich calculator app for iOS with standard and scientific modes. Developed with Swift, featuring clean UI and advanced mathematical operations.",
    fullDescription:
      "Calculately is a versatile calculator application for iOS that combines standard calculator functionality with advanced scientific operations. The app features a clean, intuitive interface inspired by Apple's design language, supports both portrait and landscape orientations, and includes calculation history. The project demonstrated proficiency in Swift programming and iOS UI development.",
    contributions: [
      "iOS Development – Developed a fully functional calculator app using Swift and Xcode with support for iOS design guidelines.",
      "Calculation Engine – Implemented a robust calculation engine supporting basic arithmetic, scientific functions, and operator precedence.",
      "UI Design – Designed a clean, minimalist interface with responsive button layouts and smooth animations for user interactions.",
      "Mode Switching – Implemented seamless switching between standard and scientific calculator modes based on device orientation.",
      "Calculation History – Added a history feature to store and recall previous calculations, enhancing user productivity.",
      "Unit Testing – Wrote comprehensive unit tests to ensure calculation accuracy and handle edge cases.",
    ],
    videoUrl: "https://www.tella.tv/video/cl3vvbspo00r409l89t8zakbc/view",
    githubUrl: "https://github.com/ZiranFu/Calculately",
    tags: ["Swift", "Xcode", "iOS", "UIKit", "Unit Testing", "MVC"],
    imageUrl: calculately,
  },
] as const;

export const academicData = [
  {
    date: "Jan 2026 - Present",
    degree: "Master of Business Administration (MBA) in IT",
    institution: "University of Moratuwa - Faculty of Computer Science and Engineering",
    description: [
      "Pursuing an MBA specializing in Information Technology.",
      "Combining business management expertise with technical knowledge.",
      "Focus on IT strategy, digital transformation, and technology leadership.",
    ],
    icon: React.createElement(RiGraduationCapLine),
  },
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
    title: "Project Management Foundations: Leadership",
    organization: "LinkedIn Learning",
    date: "12/2024 - Present",
    description:
      "Comprehensive leadership training for project managers covering establishing clear project vision, emotional intelligence in project execution, and building high-performing teams. Key insight: technical skills get you into project management, but leadership makes the difference between good and great.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.linkedin.com/learning/certificates/861ed1739a4cf790119323b5579efaced631064721816839cd146639e8b9b0fb",
  },
  {
    title: "Career Essentials in GitHub Professional Certificate",
    organization: "GitHub",
    date: "11/2024 - Present",
    description:
      "Certification focused on GitHub essentials, including version control, collaboration, and GitHub workflows.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.linkedin.com/learning/certificates/09d4179f14da2a1e501430a52ffcc31c540c7d4aa7cacbdb4cf7c9735738e1a8",
  },
  {
    title: "Practical GitHub Actions",
    organization: "LinkedIn Learning",
    date: "11/2024 - Present",
    description:
      "Hands-on training in GitHub Actions for automating workflows, CI/CD pipelines, and deployment processes.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.linkedin.com/learning/certificates/15fba1dd8e83c0964d18c6195db957f8b4f811fa78a6136aecde0009a15dc782",
  },
  {
    title: "Practical GitHub Code Search",
    organization: "LinkedIn Learning",
    date: "11/2024 - Present",
    description:
      "Advanced techniques for searching and navigating code across GitHub repositories efficiently.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.linkedin.com/learning/certificates/44bb55500720f42efa51693ca77346a51ceb481fb2bcb1f3f24aee811be9c985",
  },
  {
    title: "Practical GitHub Copilot",
    organization: "LinkedIn Learning",
    date: "11/2024 - Present",
    description:
      "Practical guide to using GitHub Copilot for AI-assisted coding and productivity enhancement.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.linkedin.com/learning/certificates/3ec273264f4ba992a4c89ffbf0fc811cacda649102c306f10df7829e4b9b4920",
  },
  {
    title: "Practical GitHub Project Management and Collaboration",
    organization: "LinkedIn Learning",
    date: "11/2024 - Present",
    description:
      "Comprehensive training on using GitHub for project management, team collaboration, and workflow optimization.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.linkedin.com/learning/certificates/011a6bb3d4234a4dc95dac16cf1fce371b11c512df20625bf09a4a846282aa90",
  },
  {
    title: "Agile Project Management by Google",
    organization: "Google",
    date: "05/2023 – Present",
    description:
      "A comprehensive course on Agile methodologies, focusing on practical applications and project management skills.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/K9TRVQZ3X48M",
  },
  {
    title: "JavaScript Basic - Webfront Security Course",
    organization: "Web Security Institute",
    date: "09/2022 -Present",
    description:
      "Basic course on JavaScript security practices for web development, focusing on securing applications from common threats.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://portal.securecodewarrior.com/#/stats/62e8f39df25839000ae8691f",
  },
  {
    title: "Certified OKR Professional",
    organization: "OKR Institute",
    date: "07/2022 – Present",
    description:
      "Certification in Objectives and Key Results (OKR) to effectively set and achieve business goals.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.profit.co/certified-okr-professional/?certificateid=Ziran-Fuzooly-P188625-1406",
  },
  {
    title: "Artificial Intelligence Foundations: Machine Learning",
    organization: "Coursera",
    date: "07/2022 – Present",
    description:
      "Foundational knowledge in AI and machine learning, including practical applications and algorithms.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.linkedin.com/learning/certificates/f4cd5a9bb5343ee32a50953b2d9d89347a134004c0f716ea566e1bc8e0faae7d",
  },
  {
    title: "React.js: Building an Interface",
    organization: "LinkedIn Learning",
    date: "08/2021 – Present",
    description:
      "Hands-on experience in building user interfaces with React.js, covering core concepts and best practices.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.linkedin.com/learning/certificates/a9cbdaf32a650398fa6c9d2318609c442170ec554942f31a268a06cf5d150090",
  },

  {
    title: "React: Ecosystems",
    organization: "LinkedIn Learning",
    date: "08/2021 – Present",
    description:
      "Exploration of the React ecosystem, including tools and libraries to enhance development and performance.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.linkedin.com/learning/certificates/ed4659d689bab6619671f446960eb37da24a600835e1108e5b952c769b02ccb7",
  },
  {
    title: "AI For Everyone",
    organization: "Coursera",
    date: "12/2020 – Present",
    description:
      "Introduction to artificial intelligence, its impact, and how it can be applied in various fields.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/GR8NQZK8Y6SG",
  },
  {
    title: "Machine Learning with Python: Foundations",
    organization: "DataCamp",
    date: "09/2019 – Present",
    description:
      "Fundamentals of machine learning using Python, including data analysis and predictive modeling techniques.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.linkedin.com/learning/certificates/70ec5480fd883fb366a849e65f5f7cad3b7d13a5c51f18b53b4d69da38411243",
  },

  {
    title: "React.js Essential Training",
    organization: "LinkedIn Learning",
    date: "07/2022 - Present",
    description:
      "Essential training on React.js, covering core concepts, state management, and component-based development.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.linkedin.com/learning/certificates/57de5248410e1fe57c198592b7b7e37d66a5549d2104c844e61b196142263e64",
  },
  {
    title: "React: Creating and Hosting a Full-Stack Site",
    organization: "LinkedIn Learning",
    date: "08/2021 - Present",
    description:
      "Comprehensive course on building and hosting full-stack applications using React.js.",
    icon: React.createElement(GrCertificate),
    certificateUrl: "https://www.linkedin.com/learning/certificates/78b6e4d9964d7008d271312eab4cdf703b8f38306ad8a61eac6b3651e14cfdf4",
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

export const newsletterData = [
  {
    title: "TechTalks by \"Zee\"",
    description: "Uncover tech's latest, join our vibrant community, and explore the future with 'TechTalks by Zee.' A monthly newsletter covering modern web development topics including React, TypeScript, Next.js, testing frameworks, and full-stack optimization.",
    subscriberCount: 655,
    frequency: "Monthly",
    newsletterUrl: "https://www.linkedin.com/newsletters/7073538314498179072/",
    topics: [
      "React & TypeScript Patterns",
      "Next.js & Full-Stack Development",
      "Redux & State Management",
      "Unit Testing & Best Practices",
      "HTTP & Web Performance",
      "Spring Boot & AWS"
    ],
    recentArticles: [
      "React and TypeScript: Essential Patterns for Developers",
      "HTTP Status Codes: A Comprehensive Guide",
      "Full-Stack Application Performance Optimization",
      "Redux Guide for React Developers",
      "Unit Testing in React and Next.js"
    ],
    imageUrl: techTalksLogo,
    publishedSince: "2024",
  },
] as const;
