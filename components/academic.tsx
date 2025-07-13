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
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My Academic Journey</SectionHeading>

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
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <SpotlightCard
                className="mx-auto mt-4"
                glowColor={theme === "light" ? "#3b82f6" : "#0ea5e9"}
              >
                <h3 className="text-xl sm:text-2xl font-bold capitalize">
                  {item.degree}
                </h3>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.institution}
                </p>

                {Array.isArray(item.description) ? (
                  <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-gray-700 dark:text-white/80">
                    {item.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-gray-700 dark:text-white/80">
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
