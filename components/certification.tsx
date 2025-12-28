"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import CertificationModal from "./certification-modal";

export default function Certifications() {
  const { ref } = useSectionInView("Certifications", 0.2);
  const [selectedCertification, setSelectedCertification] = useState<(typeof certificationsData)[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViewDetails = (certification: (typeof certificationsData)[number], index: number) => {
    setSelectedCertification(certification);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleNavigate = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? Math.max(0, currentIndex - 1)
        : Math.min(certificationsData.length - 1, currentIndex + 1);

    setCurrentIndex(newIndex);
    setSelectedCertification(certificationsData[newIndex]);
  };

  return (
    <>
      <section
        id="certifications"
        ref={ref}
        className="scroll-mt-28 px-4 sm:px-8 mb-28 sm:mb-40 max-w-7xl mx-auto"
      >
        <SectionHeading>Certifications & Credentials</SectionHeading>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certificationsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20 cursor-pointer overflow-hidden"
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
              {/* Header with Icon */}
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 truncate">
                      {item.organization}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.date.split(" - ")[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-gray-100 line-clamp-2 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Footer with View Link */}
              <div className="px-4 pb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                    View Details
                    <ExternalLink className="w-3 h-3" />
                  </span>
                  {"certificateUrl" in item && item.certificateUrl && (
                    <span className="text-gray-400 dark:text-gray-500">
                      Certificate Available
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Total: <span className="font-semibold text-emerald-600 dark:text-emerald-400">{certificationsData.length}</span> Professional Certifications
          </p>
        </motion.div>
      </section>

      {/* Modal */}
      <CertificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certification={selectedCertification}
        onNavigate={handleNavigate}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < certificationsData.length - 1}
      />
    </>
  );
}
