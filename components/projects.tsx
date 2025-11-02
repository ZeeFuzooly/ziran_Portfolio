"use client";

import React, { useState, useCallback } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import ProjectModal from "./project-modal";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViewDetails = useCallback((project: (typeof projectsData)[number], index: number) => {
    setSelectedProject(project);
    setCurrentIndex(index);
    setIsModalOpen(true);
  }, []);

  const handleNavigate = useCallback((direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? Math.max(0, currentIndex - 1)
        : Math.min(projectsData.length - 1, currentIndex + 1);

    setCurrentIndex(newIndex);
    setSelectedProject(projectsData[newIndex]);
  }, [currentIndex]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <section ref={ref} id="projects" className="scroll-mt-28 px-3 sm:px-4 md:px-8 mb-28 sm:mb-40">
        <SectionHeading>Featured Projects</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto [&>*:last-child:nth-child(3n+1)]:lg:col-start-2">
          {projectsData.map((project, index) => (
            <Project
              key={index}
              {...project}
              index={index}
              onClick={() => handleViewDetails(project, index)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
        onNavigate={handleNavigate}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < projectsData.length - 1}
      />
    </>
  );
}
