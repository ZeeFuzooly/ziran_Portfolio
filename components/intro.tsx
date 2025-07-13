"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import BlurText from "./BlurText";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      s
    >
      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative before:absolute before:inset-0 before:rounded-full before:blur-xl before:bg-primary/30 hover:before:opacity-100 before:opacity-0 transition-opacity duration-300"
        >
          <Image
            src="/images/ziran.JPG"
            alt="Ziran Fuzooly portrait"
            width={180}
            height={180}
            priority
            className="rounded-full object-cover shadow-xl ring-4 ring-border hover:scale-105 transition-transform duration-300"
          />
          <motion.span
            className="absolute bottom-0 right-0 text-3xl sm:text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>

      {/* Headline */}
      <motion.h1
        className="mb-4 text-2xl sm:text-4xl font-bold leading-tight text-balance text-foreground dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Hi, I'm Ziran Fuzooly
      </motion.h1>

      {/* Sub-headline */}
      <motion.h2
        className="mb-6 text-base sm:text-xl font-medium text-muted-foreground dark:text-white/80 text-balance"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <BlurText
          text="Senior Software Engineer"
          className="text-primary font-semibold"
        />{" "}
        building <span className="italic">scalable</span> and{" "}
        <span className="italic">impactful</span> digital experiences.
      </motion.h2>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base font-medium mt-6 sm:mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      >
        {/* Contact */}
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group inline-flex items-center justify-center gap-2 rounded-full 
            bg-background px-6 py-3 border border-border 
            transition-transform hover:scale-105 focus:scale-110 active:scale-100 
            dark:bg-white/10 dark:text-white/80"
        >
          Contact Me
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>

        {/* Download CV */}
        <a
          href="https://drive.google.com/uc?export=download&id=17JTsEkCOo6aJ5V41xT6jY0ePOyBtm19Z"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 border border-border transition-transform hover:scale-105 focus:scale-110 active:scale-100 dark:bg-white/10"
          download
        >
          Download CV
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-1 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/ziranfuzooly/"
            target="_blank"
            className="p-3 text-xl rounded-full border border-border bg-background hover:scale-110 transition dark:bg-white/10 dark:text-white/60"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/ZeeFuzooly"
            target="_blank"
            className="p-3 text-xl rounded-full border border-border bg-background hover:scale-110 transition dark:bg-white/10 dark:text-white/60"
            aria-label="GitHub"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
