"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import ExperienceModal from "./experience-modal";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useTheme();
  const [selectedExperience, setSelectedExperience] = useState<(typeof experiencesData)[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViewDetails = (experience: (typeof experiencesData)[number], index: number) => {
    setSelectedExperience(experience);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleNavigate = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? Math.max(0, currentIndex - 1)
        : Math.min(experiencesData.length - 1, currentIndex + 1);

    setCurrentIndex(newIndex);
    setSelectedExperience(experiencesData[newIndex]);
  };

  return (
    <>
      <section id="experience" ref={ref} className="scroll-mt-28 px-4 sm:px-8 mb-28 sm:mb-40">
        <SectionHeading>Professional Journey</SectionHeading>
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                className="custom-timeline-element"
                contentStyle={{
                  background: "transparent",
                  boxShadow: "none",
                  border: "none",
                  padding: "0",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #3b82f6"
                      : "0.4rem solid rgba(59, 130, 246, 0.6)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light"
                      ? "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)"
                      : "linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)",
                  fontSize: "1.5rem",
                  color: "white",
                  boxShadow: theme === "light"
                    ? "0 0 0 4px #fff, 0 0 0 6px #3b82f6"
                    : "0 0 0 4px rgba(0,0,0,0.3), 0 0 0 6px rgba(59, 130, 246, 0.6)",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="mx-auto w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl p-6 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 group cursor-pointer"
                  onClick={() => handleViewDetails(item, index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleViewDetails(item, index);
                    }
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 dark:group-hover:from-blue-300 dark:group-hover:to-purple-300 transition-all">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.location}
                      </p>

                      {/* Truncated description */}
                      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {Array.isArray(item.description)
                          ? item.description[0]
                          : item.description}
                      </p>
                    </div>

                    {/* View Details Button */}
                    {/* Expand Button - Better Touch Target */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0 p-3 -m-3 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors"
                      aria-label="View full details"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
                  </div>

                  {/* View Details Label */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      Click to view full details
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {index + 1} of {experiencesData.length}
                    </span>
                  </div>
                </motion.div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </section>

      {/* Modal */}
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        experience={selectedExperience}
        onNavigate={handleNavigate}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < experiencesData.length - 1}
      />
    </>
  );
}
