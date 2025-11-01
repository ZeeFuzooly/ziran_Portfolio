"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SkillBadge from "./SkillBadge";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-28 px-4 sm:px-8 max-w-6xl mx-auto mb-28 sm:mb-40"
    >
      <SectionHeading>Technical Expertise</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
        {skillsData.map((skill, index) => (
          <SkillBadge key={index} name={skill.name} icon={skill.icon} index={index} />
        ))}
      </ul>
    </section>
  );
}
