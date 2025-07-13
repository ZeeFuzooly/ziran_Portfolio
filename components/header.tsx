"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-14">
        {/* Branding */}
        <span className="text-sm font-semibold text-foreground">Ziran Fuzooly</span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-muted-foreground">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.hash}
              className={clsx(
                "px-3 py-2 rounded-md transition hover:text-foreground",
                {
                  "text-foreground dark:text-white":
                    activeSection === link.name,
                }
              )}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-4 pb-4"
          >
            <ul className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    className={clsx(
                      "block w-full px-4 py-2 rounded-md hover:text-foreground transition",
                      {
                        "text-foreground dark:text-white":
                          activeSection === link.name,
                      }
                    )}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
