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
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My Certifications</SectionHeading>
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
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon || <GrCertificate />}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
            }}
          >
            <SpotlightCard
              className="mx-auto mt-2 w-full max-w-full sm:max-w-2xl md:max-w-3xl"
              glowColor={theme === "light" ? "#3b82f6" : "#0ea5e9"}
            >
              <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
              <p className="text-sm font-medium text-muted-foreground">
                {item.organization}
              </p>
              <p className="mt-2 text-sm text-gray-700 dark:text-white/80">
                {item.description}
              </p>
            </SpotlightCard>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
