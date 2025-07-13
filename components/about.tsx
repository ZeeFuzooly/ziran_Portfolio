"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import Highlight from "./Highlight";
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
    <>
      I am a <Highlight>Senior Software Engineer</Highlight> with a deep
      passion for technology, engineering, and innovation. I graduated with a{" "}
      <Highlight>First-Class BEng(Hons)</Highlight> in Software Engineering from the{" "}
      <Highlight>University of Westminster</Highlight> and completed an
      industrial placement at <Highlight>Motion Miracles</Highlight>.
    </>,
    <>
      Currently, I lead the development of scalable, high-performance
      applications at <Highlight>ITWorx</Highlight> via{" "}
      <Highlight>Insharp Technologies</Highlight>, focusing on modern stacks
      like <Highlight>.NET</Highlight> and <Highlight>React</Highlight>.
    </>,
    <>
      Previously, I worked as a <Highlight>Senior Software Engineer</Highlight> at{" "}
      <Highlight>Grubtech</Highlight> via <Highlight>Softvil Technologies</Highlight>, leading
      full-stack product development with <Highlight>React</Highlight>,{" "}
      <Highlight>Java</Highlight>, and <Highlight>Spring Boot</Highlight>. My role included building
      robust APIs, integrating POS systems, and optimizing performance for a
      seamless customer experience.
    </>,
    <>
      I also contributed to <Highlight>Circles.Life</Highlight> by building and
      enhancing scalable features across both front-end and back-end systems,
      supporting a SaaS platform for global telcos.
    </>,
  ];

  return (
    <motion.section
      ref={ref}
      id="about"
      className="scroll-mt-28 px-4 sm:px-0 max-w-3xl mx-auto mb-28 sm:mb-40 text-muted-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
    >
      <SectionHeading>About Me</SectionHeading>

      {paragraphs.map((paragraph, i) => (
        <motion.p
          key={i}
          custom={i}
          variants={paragraphVariants}
          className="mb-6 text-lg text-justify leading-relaxed"
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.section>
  );
}
