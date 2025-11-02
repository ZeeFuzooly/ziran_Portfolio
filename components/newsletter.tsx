"use client";

import React, { useState, useCallback } from "react";
import SectionHeading from "./section-heading";
import { newsletterData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { ExternalLink, Users, Calendar } from "lucide-react";
import NewsletterModal from "./newsletter-modal";
import Image from "next/image";

export default function Newsletter() {
  const { ref } = useSectionInView("Newsletter");
  const [selectedNewsletter, setSelectedNewsletter] = useState<(typeof newsletterData)[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViewDetails = useCallback((newsletter: (typeof newsletterData)[number], index: number) => {
    setSelectedNewsletter(newsletter);
    setCurrentIndex(index);
    setIsModalOpen(true);
  }, []);

  const handleNavigate = useCallback((direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? Math.max(0, currentIndex - 1)
        : Math.min(newsletterData.length - 1, currentIndex + 1);

    setCurrentIndex(newIndex);
    setSelectedNewsletter(newsletterData[newIndex]);
  }, [currentIndex]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <section
        id="newsletter"
        ref={ref}
        className="scroll-mt-28 px-4 sm:px-8 mb-28 sm:mb-40 max-w-5xl mx-auto"
      >
        <SectionHeading>Newsletter & Publications</SectionHeading>

        {/* Featured Newsletter Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {newsletterData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-orange-50/30 dark:from-gray-800/60 dark:to-orange-900/10 backdrop-blur-sm rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all hover:shadow-2xl hover:shadow-orange-500/20 dark:hover:shadow-orange-500/30 overflow-hidden"
            >
              {/* Header Section */}
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 dark:from-orange-600 dark:to-amber-700 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center shadow-xl overflow-hidden"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                        {item.frequency} Newsletter
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                        Since {item.publishedSince}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-orange-50 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8">
                {/* Topics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Topics Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.topics.map((topic, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800/50 rounded-full text-xs font-medium"
                      >
                        {topic}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={item.newsletterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Subscribe on LinkedIn
                  </motion.a>
                  <motion.button
                    onClick={() => handleViewDetails(item, index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold transition-colors"
                  >
                    View All Details
                  </motion.button>
                  <motion.a
                    href="https://medium.com/@ziranfuzooly"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-semibold transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                    Read on Medium
                  </motion.a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-amber-400/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-400/10 to-amber-400/10 rounded-full blur-3xl -z-10" />
            </div>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Sharing knowledge with the developer community through regular newsletters
          </p>
        </motion.div>
      </section>

      {/* Modal */}
      <NewsletterModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        newsletter={selectedNewsletter}
        onNavigate={handleNavigate}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < newsletterData.length - 1}
      />
    </>
  );
}
