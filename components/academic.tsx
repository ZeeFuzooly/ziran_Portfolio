"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { academicData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import AcademicModal from "./academic-modal";

export default function AcademicExperience() {
  const { ref } = useSectionInView("Academic", 0.3);
  const { theme } = useTheme();
  const [selectedAcademic, setSelectedAcademic] = useState<(typeof academicData)[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViewDetails = (academic: (typeof academicData)[number], index: number) => {
    setSelectedAcademic(academic);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleNavigate = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? Math.max(0, currentIndex - 1)
        : Math.min(academicData.length - 1, currentIndex + 1);

    setCurrentIndex(newIndex);
    setSelectedAcademic(academicData[newIndex]);
  };

  return (
    <>
      <section
        id="academic-experience"
        ref={ref}
        className="scroll-mt-28 px-4 sm:px-8 mb-28 sm:mb-40"
      >
        <SectionHeading>Academic Background</SectionHeading>

        <VerticalTimeline lineColor="">
          {academicData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light"
                      ? "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
                      : "linear-gradient(135deg, rgba(139, 92, 246, 0.8) 0%, rgba(236, 72, 153, 0.8) 100%)",
                  fontSize: "1.5rem",
                  color: "white",
                  boxShadow: theme === "light"
                    ? "0 0 0 4px #fff, 0 0 0 6px #8b5cf6"
                    : "0 0 0 4px rgba(0,0,0,0.3), 0 0 0 6px rgba(139, 92, 246, 0.6)",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="mx-auto w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl p-4 sm:p-6 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 group cursor-pointer"
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
                  <div className="flex items-start justify-between gap-2 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-pink-700 dark:group-hover:from-purple-300 dark:group-hover:to-pink-300 transition-all">
                        {item.degree}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                        <span className="break-words">{item.institution}</span>
                      </p>

                      {/* Truncated description */}
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {Array.isArray(item.description)
                          ? item.description[0]
                          : item.description}
                      </p>
                    </div>

                    {/* View Details Button - Better Touch Target */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0 p-2 sm:p-3 -m-2 sm:-m-3 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-full transition-colors"
                      aria-label="View full details"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.button>
                  </div>

                  {/* View Details Label */}
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                      Click to view full details
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0">
                      {index + 1} of {academicData.length}
                    </span>
                  </div>
                </motion.div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </section>

      {/* Modal */}
      <AcademicModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        academic={selectedAcademic}
        onNavigate={handleNavigate}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < academicData.length - 1}
      />
    </>
  );
}
