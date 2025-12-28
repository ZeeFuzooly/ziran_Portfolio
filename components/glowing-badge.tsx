"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlowingBadgeProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowingBadge({
  children,
  className = "",
  glowColor = "blue",
}: GlowingBadgeProps) {
  const glowColors: Record<string, string> = {
    blue: "group-hover:shadow-blue-500/50",
    purple: "group-hover:shadow-purple-500/50",
    pink: "group-hover:shadow-pink-500/50",
    green: "group-hover:shadow-green-500/50",
    orange: "group-hover:shadow-orange-500/50",
  };

  return (
    <motion.span
      className={`group relative inline-block ${className}`}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span
        className={`relative z-10 inline-block px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg transition-shadow duration-300 ${glowColors[glowColor] || glowColors.blue}`}
      >
        {children}
      </span>
      <motion.span
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.span>
  );
}
