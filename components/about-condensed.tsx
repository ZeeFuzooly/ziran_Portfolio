"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import Highlight from "./Highlight";
import { useSectionInView } from "@/lib/hooks";
import { Briefcase, ChevronDown, ChevronUp, Users, Globe, Award, Heart, GraduationCap } from "lucide-react";

export default function About() {
  const { ref } = useSectionInView("About");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.section
      ref={ref}
      id="about"
      aria-label="About Ziran Fuzooly - Career journey and background"
      className="scroll-mt-28 px-4 sm:px-8 max-w-[56rem] mx-auto mb-28 sm:mb-40"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading>About Me</SectionHeading>

      {/* Condensed View - Always Visible */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800/60 dark:to-gray-900/40 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
      >
        {/* Current Role Badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-500 dark:to-purple-600 text-blue-700 dark:text-white">
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 ring-1 ring-blue-500/20 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Currently
          </span>
        </div>

        {/* Summary */}
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          As <Highlight variant="role">Lead Engineer – Product Experience</Highlight> at{" "}
          <Highlight variant="company">SimHealth AI</Highlight> (UK), I design and deliver{" "}
          <Highlight variant="tech">scalable, high-performance</Highlight> digital solutions
          that power next-generation AI-driven healthcare simulations.
        </p>

        {/* Expandable Section */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="space-y-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            {/* Education */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-400 dark:to-purple-600 text-indigo-700 dark:text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-2">
                  EDUCATION
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Currently reading <Highlight variant="achievement">MBA in IT</Highlight> at{" "}
                  <Highlight variant="company">University of Moratuwa</Highlight>, Department of Computer Science and Engineering.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Graduated with <Highlight variant="achievement">First Class Honours</Highlight> in{" "}
                  <Highlight variant="achievement">BEng Software Engineering</Highlight> from{" "}
                  <Highlight variant="company">University of Westminster</Highlight> (2018-2022).
                </p>
              </div>
            </div>

            {/* Leadership */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-400 dark:to-indigo-600 text-blue-700 dark:text-white">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                  LEADERSHIP
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I also act as an <Highlight variant="role">Engineering Manager</Highlight>, leading{" "}
                  <Highlight variant="tech">agile delivery</Highlight>, mentoring engineers, and driving
                  collaboration between design, product, and data teams.
                </p>
              </div>
            </div>

            {/* Global Experience */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-400 dark:to-teal-600 text-emerald-700 dark:text-white">
                  <Globe className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  GLOBAL EXPERIENCE
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Throughout my career, I've worked with teams across{" "}
                  <Highlight variant="company">Sri Lanka, Singapore, UAE, USA, Australia, and the UK</Highlight>{" "}
                  — leading projects across gaming, telecommunications, transport management, and healthcare technology.
                </p>
              </div>
            </div>

            {/* Previous Roles Highlight */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-400 dark:to-red-500 text-orange-700 dark:text-white">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-2">
                  CAREER JOURNEY
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Previously at <Highlight variant="company">Insharp Technologies</Highlight>,{" "}
                  <Highlight variant="company">Softvil Technologies</Highlight>,{" "}
                  <Highlight variant="company">Circles.Life</Highlight>, and{" "}
                  <Highlight variant="company">Motion Miracles</Highlight> — building scalable solutions
                  and leading engineering teams across diverse industries.
                </p>
              </div>
            </div>

            {/* Mentorship */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-400 dark:to-pink-600 text-purple-700 dark:text-white">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  MENTORSHIP & GROWTH
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  As a <Highlight variant="role">Future Ready Mentor</Highlight> at{" "}
                  <Highlight variant="company">University of Westminster</Highlight>, I guide emerging
                  engineers on career strategy, communication, and leadership.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-rose-100 to-red-100 dark:from-rose-400 dark:to-red-600 text-rose-700 dark:text-white">
                  <Heart className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  I believe great engineering isn't just about code — it's about{" "}
                  <Highlight variant="achievement">crafting experiences that inspire</Highlight>,{" "}
                  <Highlight variant="achievement">leading with empathy</Highlight>, and building
                  technology that moves industries forward.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expand/Collapse Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-xl font-medium transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp className="w-5 h-5" />
            </>
          ) : (
            <>
              <span>Read Full Story</span>
              <ChevronDown className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
