"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a results-driven Software Engineer with a deep passion for Computer Science. 
        I hold a BEng(Hons) in Software Engineering from the University of Westminster, in collaboration with the Informatics Institute of Technology. 
        My journey has been marked by a strong foundation in software development, honed through both academic excellence and hands-on industry experience.
      </p>

      <p className="mb-3">
        During my academic career, I developed excellent communication skills and demonstrated a natural aptitude for leadership. 
        I completed a significant Third-year Industrial Placement at Motion Miracles as a Software Engineer Intern, where I contributed to impactful projects and honed my technical abilities.
      </p>

      <p>
        Currently, I am working as a Software Engineer at Circles.Life, where I leverage my technical expertise to drive the company's success. 
        I am passionate about continuing to grow as a developer and am always eager to take on new challenges in the field of software engineering.
      </p>
    </motion.section>
  );
}
