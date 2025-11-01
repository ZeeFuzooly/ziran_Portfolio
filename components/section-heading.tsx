"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className = ""
}: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <h2
        className={`
          text-3xl sm:text-4xl font-bold capitalize text-center
          bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700
          dark:from-white dark:via-gray-100 dark:to-gray-300
          bg-clip-text text-transparent
          ${className}
        `.trim()}
      >
        {children}
      </h2>

      {/* Decorative underline with animation */}
      <motion.div
        className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400/40 via-blue-500 to-blue-400/40"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 64, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}
