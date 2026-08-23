"use client";

import React from "react";
import SectionHeading from "./section-heading";
import AnimatedCounter from "./animated-counter";
import { motion } from "framer-motion";
import { Users, GraduationCap, Newspaper, ArrowRight } from "lucide-react";
import { projectsData, newsletterData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const stats = [
  { end: 6, suffix: "+", label: "Years of Experience" },
  { end: projectsData.length, suffix: "+", label: "Projects Delivered" },
  { end: 6, suffix: "", label: "Products Led" },
  { end: newsletterData[0].subscriberCount, suffix: "+", label: "Newsletter Subscribers" },
];

const highlights = [
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Managing and operating the Sri Lanka engineering office at Hatch Jaffna — building culture, coordinating engineers across the UK, India, and Sri Lanka, and running agile ceremonies, sprint planning, and roadmap alignment as an engineering manager.",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: GraduationCap,
    title: "Mentorship & Recruiting",
    description:
      "Mentoring engineers and interns through code reviews, coding standards, and career guidance — while recruiting and onboarding new engineering talent to scale product and design teams.",
    accent: "from-purple-500 to-pink-500",
  },
  {
    icon: Newspaper,
    title: "TechTalks by Zee",
    description:
      "Writing a monthly newsletter on React, TypeScript, Next.js, and modern web engineering — sharing practical knowledge with a growing community of developers.",
    accent: "from-amber-500 to-orange-500",
    link: { href: "#newsletter", label: "Read the newsletter" },
  },
];

export default function BeyondCode() {
  const { ref } = useSectionInView("Beyond Code", 0.3);

  return (
    <section
      id="beyond-code"
      ref={ref}
      className="scroll-mt-28 px-4 sm:px-8 mb-28 sm:mb-40 w-full max-w-6xl mx-auto"
    >
      <SectionHeading>Beyond Code</SectionHeading>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-5 rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              <AnimatedCounter end={stat.end} suffix={stat.suffix} />
            </div>
            <div className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Highlight cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="flex flex-col p-6 rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white shadow-lg mb-4`}
            >
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
              {item.description}
            </p>
            {item.link && (
              <a
                href={item.link.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {item.link.label}
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
