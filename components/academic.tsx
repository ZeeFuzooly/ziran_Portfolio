"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { academicData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import SpotlightCard from "./SpotlightCard";

export default function AcademicExperience() {
  const { ref } = useSectionInView("Academic");
  const { theme } = useTheme();

  return (
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
              contentStyle={{
                background: "transparent",
                boxShadow: "none",
                border: "none",
                padding: "0",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #8b5cf6"
                    : "0.4rem solid rgba(139, 92, 246, 0.6)",
              }}
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
              <SpotlightCard
                className="mx-auto mt-4 w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
                glowColor={theme === "light" ? "#8b5cf6" : "#a855f7"}
              >
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  {item.degree}
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  {item.institution}
                </p>

                {Array.isArray(item.description) ? (
                  <ul className="list-none pl-0 mt-4 space-y-2.5 text-sm text-gray-700 dark:text-gray-300">
                    {item.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </SpotlightCard>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
