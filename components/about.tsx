"use client";

import React, { useMemo } from "react";
import SectionHeading from "./section-heading";
import { motion, useReducedMotion } from "framer-motion";
import Highlight from "./Highlight";
import { useSectionInView } from "@/lib/hooks";
import { Briefcase, GraduationCap, Heart } from "lucide-react";

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

type TimelineItemType = "current" | "past" | "education" | "passion";

interface ParagraphContent {
  id: string;
  type: TimelineItemType;
  label?: string;
  content: React.ReactNode;
}

// ═══════════════════════════════════════════════════════════
// ANIMATION VARIANTS
// ═══════════════════════════════════════════════════════════

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
  },
};

// Reduced motion fallback (WCAG 2.1 AA compliance)
const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════

export default function About() {
  const { ref } = useSectionInView("About");
  const shouldReduceMotion = useReducedMotion();

  const paragraphs: ParagraphContent[] = useMemo(
    () => [
      {
        id: "current-role",
        type: "current",
        label: "Currently",
        content: (
          <>
            As <Highlight variant="role">Lead Engineer – Product Experience</Highlight> at{" "}
            <Highlight variant="company">SimHealth AI</Highlight> (UK), I design and deliver{" "}
            <Highlight variant="tech">scalable, high-performance</Highlight> digital solutions
            that power next-generation AI-driven healthcare simulations. My work bridges the gap
            between product vision, engineering excellence, and user experience, ensuring every
            technical decision contributes to meaningful impact in clinical education.
          </>
        ),
      },
      {
        id: "leadership",
        type: "current",
        label: "Leadership",
        content: (
          <>
            I also act as an <Highlight variant="role">Engineering Manager</Highlight>, leading{" "}
            <Highlight variant="tech">agile delivery</Highlight>, mentoring engineers, and driving
            collaboration between design, product, and data teams. I play a key role in{" "}
            <Highlight variant="achievement">recruiting and onboarding</Highlight> new engineering
            talent, helping scale a mission-driven team that's shaping the future of healthcare learning.
          </>
        ),
      },
      {
        id: "global-experience",
        type: "past",
        label: "Global Experience",
        content: (
          <>
            Throughout my career, I've had the privilege of working with forward-thinking teams across{" "}
            <Highlight variant="company">Sri Lanka</Highlight>,{" "}
            <Highlight variant="company">Singapore</Highlight>,{" "}
            <Highlight variant="company">the UAE</Highlight>,{" "}
            <Highlight variant="company">the USA</Highlight>,{" "}
            <Highlight variant="company">Australia</Highlight>, and{" "}
            <Highlight variant="company">the UK</Highlight> — leading projects that merge creativity,
            innovation, and precision across gaming, telecommunications, restaurant POS, transport
            management, and healthcare technology.
          </>
        ),
      },
      {
        id: "recent-roles",
        type: "past",
        label: "2025",
        content: (
          <>
            Before SimHealth AI, I served as{" "}
            <Highlight variant="role">Senior Software Engineer</Highlight> at{" "}
            <Highlight variant="company">Insharp Technologies</Highlight>, deputed to{" "}
            <Highlight variant="company">ITWorx Consulting</Highlight> (Australia), where I led
            development of <Highlight variant="tech">React</Highlight> and{" "}
            <Highlight variant="tech">.NET</Highlight> enterprise solutions, optimizing performance,
            scalability, and CI/CD delivery.
          </>
        ),
      },
      {
        id: "softvil-circles",
        type: "past",
        label: "2022 - 2024",
        content: (
          <>
            Previously, I contributed to{" "}
            <Highlight variant="company">Softvil Technologies</Highlight> (deputed to{" "}
            <Highlight variant="company">Grubtech</Highlight>) and{" "}
            <Highlight variant="company">Circles.Life</Highlight>, helping build data-driven,
            customer-centric digital ecosystems that improved experience and reliability at scale.
          </>
        ),
      },
      {
        id: "early-career",
        type: "past",
        label: "2020 - 2021",
        content: (
          <>
            Earlier, as a <Highlight variant="role">Front-End Engineer</Highlight> at{" "}
            <Highlight variant="company">Motion Miracles</Highlight>, I created interactive dashboards
            and immersive interfaces for global gaming and animation projects — a foundation that
            deepened my passion for clean design, usability, and storytelling in tech.
          </>
        ),
      },
      {
        id: "mentorship",
        type: "passion",
        label: "Mentorship",
        content: (
          <>
            Beyond engineering, I'm passionate about{" "}
            <Highlight variant="achievement">mentorship and growth</Highlight>. As a{" "}
            <Highlight variant="role">Future Ready Mentor</Highlight> at the{" "}
            <Highlight variant="company">University of Westminster</Highlight>, I guide emerging
            engineers on career strategy, communication, and leadership, helping them navigate both
            the technical and human sides of the industry.
          </>
        ),
      },
      {
        id: "philosophy",
        type: "passion",
        content: (
          <>
            I believe great engineering isn't just about code — it's about{" "}
            <Highlight variant="achievement">crafting experiences that inspire</Highlight>,{" "}
            <Highlight variant="achievement">leading with empathy</Highlight>, and building
            technology that moves industries forward.
          </>
        ),
      },
    ],
    []
  );

  const variants = shouldReduceMotion ? reducedMotionVariants : itemVariants;

  return (
    <motion.section
      ref={ref}
      id="about"
      aria-label="About Ziran Fuzooly - Career journey and background"
      className="scroll-mt-28 px-4 sm:px-8 max-w-[56rem] mx-auto mb-28 sm:mb-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <SectionHeading>About Me</SectionHeading>

      <div className="space-y-8 sm:space-y-10">
        {paragraphs.map((item) => (
          <TimelineItem
            key={item.id}
            type={item.type}
            label={item.label}
            variants={variants}
          >
            {item.content}
          </TimelineItem>
        ))}
      </div>
    </motion.section>
  );
}

// ═══════════════════════════════════════════════════════════
// TIMELINE ITEM SUB-COMPONENT
// ═══════════════════════════════════════════════════════════

interface TimelineItemProps {
  type: TimelineItemType;
  label?: string;
  children: React.ReactNode;
  variants: any;
}

function TimelineItem({ type, label, children, variants }: TimelineItemProps) {
  const Icon =
    type === "education" ? GraduationCap :
    type === "passion" ? Heart :
    Briefcase;

  const isCurrentRole = type === "current";
  const isPassion = type === "passion";

  return (
    <motion.div
      variants={variants}
      className="relative group"
    >
      {/* Timeline indicator */}
      <div className="absolute left-0 top-1 hidden sm:flex flex-col items-center">
        <div
          className={`
            w-9 h-9 rounded-full flex items-center justify-center
            border-2 transition-all duration-300
            ${
              isCurrentRole
                ? "bg-blue-50 dark:bg-blue-500/10 border-blue-500 text-blue-600 dark:text-blue-400 shadow-lg shadow-blue-500/20"
                : isPassion
                ? "bg-purple-50 dark:bg-purple-500/10 border-purple-500 text-purple-600 dark:text-purple-400 shadow-lg shadow-purple-500/20"
                : "bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 group-hover:border-blue-400 group-hover:text-blue-500"
            }
          `}
        >
          <Icon className="w-4 h-4" aria-hidden="true" />
        </div>

        {/* Connecting line */}
        <div
          className={`
            w-0.5 flex-grow mt-2 min-h-[3rem]
            ${
              isCurrentRole
                ? "bg-gradient-to-b from-blue-400/40 to-transparent dark:from-blue-500/40"
                : isPassion
                ? "bg-gradient-to-b from-purple-400/40 to-transparent dark:from-purple-500/40"
                : "bg-gray-200 dark:bg-gray-700/20"
            }
          `}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="sm:pl-16">
        {/* Label/Badge */}
        {label && (
          <div className="mb-3 flex items-center gap-2">
            <span
              className={`
                inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium
                ${
                  isCurrentRole
                    ? "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 ring-1 ring-blue-500/20 animate-pulse"
                    : isPassion
                    ? "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 ring-1 ring-purple-500/20"
                    : "bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 ring-1 ring-gray-300 dark:ring-gray-700/40"
                }
              `}
            >
              {isCurrentRole && (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden="true" />
              )}
              {label}
            </span>
          </div>
        )}

        {/* Paragraph text */}
        <p
          className={`
            leading-relaxed sm:leading-loose
            text-base sm:text-[1.0625rem] md:text-[1.125rem]
            text-gray-600 dark:text-gray-400
            ${isCurrentRole ? "text-gray-700 dark:text-gray-300" : ""}
          `}
          style={{
            textAlign: "left",
            hyphens: "auto",
            wordSpacing: "normal",
          }}
        >
          {children}
        </p>
      </div>
    </motion.div>
  );
}
