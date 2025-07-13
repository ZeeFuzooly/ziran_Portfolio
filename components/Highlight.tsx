"use client";

import React from "react";
import { cn } from "@/lib/utils"; // or use clsx/tailwind-merge if preferred

type HighlightProps = {
  children: React.ReactNode;
  className?: string;
};

const Highlight = ({ children, className }: HighlightProps) => {
  return (
    <span
      className={cn(
        "relative inline-block font-semibold text-foreground dark:text-white",
        "bg-gradient-to-br from-primary/20 to-primary/5 px-1.5 py-0.5 rounded-md",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Highlight;
