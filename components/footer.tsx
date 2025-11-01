"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Left: Copyright */}
          <motion.div
            className="text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                &copy; {year} Ziran Fuzooly
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1.5 justify-center sm:justify-start">
              Built with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="inline-block"
              >
                <HiHeart className="text-red-500 inline" />
              </motion.span>
              using Next.js, TypeScript & Tailwind
            </p>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.a
              href="https://github.com/ZeeFuzooly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="GitHub"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#333",
                color: "#fff"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-lg" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ziranfuzooly/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="LinkedIn"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#0077B5",
                color: "#fff"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-lg" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom: Optional back to top link */}
        <motion.div
          className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href="#home"
            className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
            whileHover={{ y: -2 }}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to top
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
