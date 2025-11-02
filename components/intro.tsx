"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      aria-label="Introduction and hero section"
      className="mb-16 sm:mb-20 max-w-[75rem] mx-auto text-center scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Avatar with enhanced effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.7,
            }}
            className="relative"
          >
            {/* Animated gradient background rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full opacity-75 blur-2xl animate-pulse-slow"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-50 blur-xl"></div>

            {/* Image container */}
            <div className="relative">
              <Image
                src="/images/sassaas.png"
                alt="Ziran Fuzooly - Lead Engineer Product Experience"
                width={192}
                height={192}
                quality={95}
                priority={true}
                className="h-32 w-32 rounded-full object-cover object-top border-4 border-white shadow-2xl dark:border-gray-800 sm:h-48 sm:w-48"
                style={{ objectPosition: '50% 20%' }}
              />

              {/* Status indicator */}
              <motion.div
                className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.4,
                  duration: 0.7,
                }}
                aria-label="Available for work"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                  <div className="relative h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-green-500 border-2 border-white dark:border-gray-800 shadow-lg" role="status" aria-label="Online and available"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Text content */}
      <motion.div
        className="mt-8 sm:mt-10 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mb-4 inline-block"
        >
          <div className="relative px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800">
            <p className="text-sm font-medium text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <span className="text-lg">👋</span>
              <span>Hey there! I'm</span>
            </p>
          </div>
        </motion.div>

        {/* Main heading with gradient */}
        <motion.h1
          className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Ziran Fuzooly
          </span>
        </motion.h1>

        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/50 dark:shadow-blue-500/30">
            <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
            <span className="text-sm font-semibold text-white sm:text-base">
              Lead Engineer - Product Experience
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="mb-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          Building <span className="font-semibold text-gray-900 dark:text-white">scalable</span> and{" "}
          <span className="font-semibold text-gray-900 dark:text-white">impactful</span> digital experiences
          that power next-generation AI-driven healthcare simulations at{" "}
          <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SimHealth AI
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 text-base font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* Primary CTA */}
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="group relative inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/60 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:shadow-blue-500/30 dark:hover:shadow-blue-500/40"
            aria-label="Navigate to contact section to connect with Ziran"
          >
            <span>Let's Connect</span>
            <BsArrowRight className="text-sm transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          {/* Secondary CTA */}
          <a
            href="https://drive.google.com/uc?export=download&id=1m6pkHHmjXktqOFWkuYFfSiKQz1yjvyGO"
            className="group inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 shadow-md transition-all hover:shadow-lg hover:scale-105 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            download
            aria-label="Download Ziran Fuzooly's CV in PDF format"
          >
            <span>Download CV</span>
            <HiDownload className="text-sm transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          role="navigation"
          aria-label="Social media links"
        >
          <a
            href="https://www.linkedin.com/in/ziranfuzooly/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center h-12 w-12 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 shadow-md transition-all hover:shadow-lg hover:scale-110 hover:text-blue-600 hover:border-blue-300 dark:hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Visit Ziran Fuzooly's LinkedIn profile (opens in new tab)"
          >
            <BsLinkedin className="h-5 w-5" aria-hidden="true" />
          </a>

          <a
            href="https://github.com/ZeeFuzooly"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center h-12 w-12 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 shadow-md transition-all hover:shadow-lg hover:scale-110 hover:text-gray-900 hover:border-gray-400 dark:hover:text-white dark:hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            aria-label="Visit Ziran Fuzooly's GitHub profile (opens in new tab)"
          >
            <FaGithubSquare className="h-5 w-5" aria-hidden="true" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Scroll to explore
            </p>
            <svg
              className="h-5 w-5 text-gray-400 dark:text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
