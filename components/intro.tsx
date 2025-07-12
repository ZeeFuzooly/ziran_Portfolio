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
      className="mb-28 sm:mb-40 scroll-mt-28 px-6 sm:px-0 text-center max-w-2xl mx-auto"
    >
      {/* Avatar */}
      <div className="flex justify-center mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
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
            className="absolute bottom-0 right-0 text-4xl"
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
        className="mb-8 text-2xl sm:text-4xl font-semibold leading-tight text-balance"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="font-bold">Hi, I’m Ziran Fuzooly.</span>
        <br />A <span className="text-primary font-bold">Senior Software Engineer</span> building{" "}
        <span className="italic">scalable</span> and <span className="italic">impactful</span>{" "}
        digital experiences.
      </motion.h1>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 text-base sm:text-lg font-medium"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group inline-flex items-center gap-2 rounded-full bg-primary text-white px-7 py-3 transition-transform hover:scale-105 focus:scale-110 active:scale-100"
        >
          Contact Me
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="https://drive.google.com/uc?export=download&id=1m6pkHHmjXktqOFWkuYFfSiKQz1yjvyGO"
          className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-3 border border-border transition-transform hover:scale-105 focus:scale-110 active:scale-100 dark:bg-white/10"
          download
        >
          
          Download CV
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/ziranfuzooly/"
          target="_blank"
          className="p-4 text-2xl rounded-full border border-border bg-background hover:scale-110 focus:scale-110 active:scale-100 transition dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/ZeeFuzooly"
          target="_blank"
          className="p-4 text-2xl rounded-full border border-border bg-background hover:scale-110 focus:scale-110 active:scale-100 transition dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
