"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { certificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { GrCertificate } from "react-icons/gr";
import SpotlightCard from "./SpotlightCard"; // ✅ Make sure this exists

export default function Certifications() {
  const { ref } = useSectionInView("Certifications");
  const { theme } = useTheme();

  return (
    <section
      id="certifications"
      ref={ref}
      className="scroll-mt-28 px-4 sm:px-8 mb-28 sm:mb-40"
    >
      <SectionHeading>Certifications & Credentials</SectionHeading>
      <VerticalTimeline lineColor="">
        {certificationsData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "transparent",
              boxShadow: "none",
              border: "none",
              padding: "0",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #10b981"
                  : "0.4rem solid rgba(16, 185, 129, 0.6)",
            }}
            date={item.date}
            icon={item.icon || <GrCertificate />}
            iconStyle={{
              background:
                theme === "light"
                  ? "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)"
                  : "linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(59, 130, 246, 0.8) 100%)",
              fontSize: "1.5rem",
              color: "white",
              boxShadow: theme === "light"
                ? "0 0 0 4px #fff, 0 0 0 6px #10b981"
                : "0 0 0 4px rgba(0,0,0,0.3), 0 0 0 6px rgba(16, 185, 129, 0.6)",
            }}
          >
            <SpotlightCard
              className="mx-auto mt-2 w-full max-w-full sm:max-w-2xl md:max-w-3xl"
              glowColor={theme === "light" ? "#10b981" : "#34d399"}
            >
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {item.organization}
              </p>
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </SpotlightCard>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
