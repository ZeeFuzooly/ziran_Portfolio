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
        I am a Senior Software Engineer at Softvil Technologies, currently deputed to Grubtech. I specialize in full-stack development, delivering impactful software solutions and improving system efficiency.
      </p>

      <p className="mb-3">
        Previously, at Circles.Life, I developed features for a SaaS platform serving global telcos, with a focus on front-end development. I also contributed to a dashboard project at Motion Miracles, enhancing UI/UX and backend systems using ReactJS and Firebase.
      </p>

      <p className="mb-3">
        Outside of work, I mentor aspiring software engineers at Westminster, providing career guidance and technical support.
      </p>

      <p>
        My technical skills include React.js, Next.js, JavaScript, TypeScript, Java, Spring Boot, MongoDB, UI/UX design, and more. I am always learning and strive to stay ahead of industry trends.
      </p>
    </motion.section>
  );
}
