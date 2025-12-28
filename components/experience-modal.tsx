"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { experiencesData } from "@/lib/data";

type ExperienceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  experience: (typeof experiencesData)[number] | null;
  onNavigate?: (direction: "prev" | "next") => void;
  hasPrev?: boolean;
  hasNext?: boolean;
};

// Helper function to calculate duration
function calculateDuration(dateRange: string): string {
  const parts = dateRange.split(" – ");
  if (parts.length !== 2) return "";

  const [startStr, endStr] = parts;
  const isPresent = endStr.toLowerCase() === "present";

  // Parse months and years
  const parseDate = (str: string) => {
    const [month, year] = str.split(" ");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return { month: months.indexOf(month.substring(0, 3)), year: parseInt(year) };
  };

  const start = parseDate(startStr);
  const end = isPresent ? { month: new Date().getMonth(), year: new Date().getFullYear() } : parseDate(endStr);

  // Calculate difference
  let months = (end.year - start.year) * 12 + (end.month - start.month);

  if (months < 1) return "Less than 1 mo";
  if (months === 1) return "1 mo";
  if (months < 12) return `${months} mos`;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) return years === 1 ? "1 yr" : `${years} yrs`;
  return `${years} yr${years > 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
}

export default function ExperienceModal({
  isOpen,
  onClose,
  experience,
  onNavigate,
  hasPrev = false,
  hasNext = false,
}: ExperienceModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap and keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
    closeButtonRef.current?.focus();

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    // ESC key handler
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev && onNavigate) onNavigate("prev");
      if (e.key === "ArrowRight" && hasNext && onNavigate) onNavigate("next");
    };

    // Focus trap
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleTab);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleTab);
    };
  }, [isOpen, onClose, onNavigate, hasPrev, hasNext]);

  if (!experience) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Modal */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto overscroll-contain bg-white dark:bg-gray-900 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Navigation */}
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                {/* Previous Button */}
                <button
                  onClick={() => onNavigate?.("prev")}
                  disabled={!hasPrev}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-gray-100 dark:disabled:hover:bg-gray-800"
                  aria-label="Previous experience"
                  title="Previous (←)"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>

                {/* Close Button */}
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Close modal (ESC)"
                  title="Close (ESC)"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>

                {/* Next Button */}
                <button
                  onClick={() => onNavigate?.("next")}
                  disabled={!hasNext}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-gray-100 dark:disabled:hover:bg-gray-800"
                  aria-label="Next experience"
                  title="Next (→)"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 pb-8">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-500 dark:to-purple-600 text-blue-700 dark:text-white text-2xl mb-4"
                >
                  {experience.icon}
                </motion.div>

                {/* Title */}
                <h2
                  id="modal-title"
                  className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1"
                >
                  {experience.title}
                </h2>

                {/* Company & Employment Type */}
                <p className="text-base font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {experience.location.split("·")[0].trim()}
                  <span className="mx-2 text-gray-400">·</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {"employmentType" in experience ? experience.employmentType : "Full-time"}
                  </span>
                </p>

                {/* Date & Duration */}
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <time dateTime={experience.date}>
                    {experience.date}
                  </time>
                  {" · "}
                  <span>
                    {("duration" in experience ? experience.duration : calculateDuration(experience.date)) as string}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {experience.location.split("·").slice(1).join("·").trim()}
                </div>

                {/* Website Link */}
                {"website" in experience && experience.website && (
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg font-medium transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit Website
                  </a>
                )}

                {/* Platforms (for SimHealth) */}
                {"platforms" in experience && experience.platforms && (experience.platforms as string[]).length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Platforms I Lead
                    </h3>
                    <ul className="space-y-2.5" role="list">
                      {(experience.platforms as string[]).map((platform: string, idx: number) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-purple-500 mt-1.5 flex-shrink-0">◆</span>
                          <span>{platform}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Description */}
                <div id="modal-description" className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    Key Responsibilities
                  </h3>
                  {Array.isArray(experience.description) ? (
                    <ul className="space-y-2.5" role="list">
                      {experience.description.map((point, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {experience.description}
                    </p>
                  )}
                </div>

                {/* Skills */}
                {"skills" in experience && experience.skills && experience.skills.length > 0 && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        Skills:
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation Hint */}
                {(hasPrev || hasNext) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400"
                  >
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 font-mono text-xs">
                      ←
                    </kbd>
                    <span>Navigate between experiences</span>
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 font-mono text-xs">
                      →
                    </kbd>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
