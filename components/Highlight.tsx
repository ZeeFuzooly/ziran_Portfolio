"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

type HighlightVariant = "default" | "company" | "tech" | "role" | "achievement";

type HighlightProps = {
  children: React.ReactNode;
  className?: string;
  variant?: HighlightVariant;
};

// ═══════════════════════════════════════════════════════════
// VARIANT STYLES
// ═══════════════════════════════════════════════════════════

const variantStyles: Record<HighlightVariant, string> = {
  default: `
    bg-gradient-to-br from-blue-500/15 via-blue-500/8 to-blue-500/5
    text-gray-900 dark:text-white
    ring-1 ring-blue-500/10
    hover:ring-blue-500/30 hover:from-blue-500/20
  `,
  company: `
    bg-gradient-to-br from-blue-500/15 via-blue-500/8 to-transparent
    text-blue-700 dark:text-blue-300
    ring-1 ring-blue-500/10
    hover:ring-blue-500/30 hover:from-blue-500/20
  `,
  tech: `
    bg-gradient-to-br from-emerald-500/15 via-emerald-500/8 to-transparent
    text-emerald-700 dark:text-emerald-300
    ring-1 ring-emerald-500/10
    hover:ring-emerald-500/30 hover:from-emerald-500/20
  `,
  role: `
    bg-gradient-to-br from-purple-500/15 via-purple-500/8 to-transparent
    text-purple-700 dark:text-purple-300
    ring-1 ring-purple-500/10
    hover:ring-purple-500/30 hover:from-purple-500/20
  `,
  achievement: `
    bg-gradient-to-br from-amber-500/15 via-amber-500/8 to-transparent
    text-amber-700 dark:text-amber-300
    ring-1 ring-amber-500/10
    hover:ring-amber-500/30 hover:from-amber-500/20
  `,
};

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════

const Highlight = ({
  children,
  className,
  variant = "default"
}: HighlightProps) => {
  return (
    <motion.span
      className={cn(
        // Base styles
        "relative inline-block font-semibold",
        "px-1.5 py-0.5 rounded-md",
        "transition-all duration-200 ease-out",
        "focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",
        // Variant styles
        variantStyles[variant],
        // Custom className
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}

      {/* Subtle gradient underline on hover */}
      <span
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity"
        aria-hidden="true"
      />
    </motion.span>
  );
};

export default Highlight;
