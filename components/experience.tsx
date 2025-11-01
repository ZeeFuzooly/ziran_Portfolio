"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import SpotlightCard from "./SpotlightCard";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
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
              <SpotlightCard
                className="mx-auto mt-2 w-full max-w-full sm:max-w-2xl md:max-w-3xl"
                glowColor={theme === "light" ? "#3b82f6" : "#0ea5e9"}
              >
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {item.location}
                </p>

                {Array.isArray(item.description) ? (
                  <ul className="list-none pl-0 mt-4 space-y-2.5 text-sm text-gray-700 dark:text-gray-300">
                    {item.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
