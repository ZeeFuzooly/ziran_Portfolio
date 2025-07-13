"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col items-center justify-between gap-4 sm:flex-row text-sm text-muted-foreground">
        {/* Left: Copyright */}
        <div className="text-center sm:text-left">
          <span className="block font-medium text-foreground dark:text-white">
            &copy; {year} Ziran Fuzooly
          </span>
          <span className="text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS & React.
          </span>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-5 text-xl">
          <a
            href="https://github.com/ZeeFuzooly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ziranfuzooly/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
