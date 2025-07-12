"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function About() {
  const { ref } = useSectionInView("About");

  const paragraphs = [
    `I am a <strong>Senior Software Engineer</strong> with a deep passion for technology, engineering, and innovation. I graduated with a <strong>First-Class BEng(Hons)</strong> in Software Engineering from the <strong>University of Westminster</strong> and completed an industrial placement at <strong>Motion Miracles</strong>.`,
    `Currently, I lead the development of scalable, high-performance applications at <strong>ITWorx</strong> via <strong>Insharp Technologies</strong>, focusing on modern stacks like <strong>.NET</strong> and <strong>React</strong>.`,
    `Previously, I worked as a <strong>Senior Software Engineer</strong> at <strong>Grubtech</strong> via <strong>Softvil Technologies</strong>, leading full-stack product development with <strong>React</strong>, <strong>Java</strong>, and <strong>Spring Boot</strong>. My role included building robust APIs, integrating POS systems, and optimizing performance for seamless customer experience.`,
    `I also contributed to <strong>Circles.Life</strong> by building and enhancing scalable features across both front-end and back-end systems, supporting a SaaS platform for global telcos.`,
  ];

  return (
    <motion.section
      ref={ref}
      id="about"
      className="scroll-mt-28 px-4 sm:px-0 max-w-3xl mx-auto mb-28 sm:mb-40 leading-relaxed text-muted-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
    >
      <SectionHeading>About Me</SectionHeading>

      {paragraphs.map((html, i) => (
        <motion.p
          key={i}
          custom={i}
          variants={paragraphVariants}
          className="mb-6 text-lg"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ))}
    </motion.section>
  );
}
