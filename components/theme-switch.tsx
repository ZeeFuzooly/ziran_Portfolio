"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="fixed bottom-5 right-5 z-40 bg-white/90 dark:bg-gray-900/90 w-12 h-12 sm:w-14 sm:h-14 backdrop-blur-md border-2 border-gray-200/50 dark:border-gray-700/50 shadow-lg rounded-full flex items-center justify-center transition-colors group"
      onClick={toggleTheme}
      whileHover={{ scale: 1.15, rotate: 15 }}
      whileTap={{ scale: 0.95, rotate: -15 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-yellow-500 text-xl"
          >
            <BsSun />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0, rotate: 180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: -180, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-blue-400 text-xl"
          >
            <BsMoon />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-blue-400 dark:to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity blur-xl -z-10" />
    </motion.button>
  );
}
