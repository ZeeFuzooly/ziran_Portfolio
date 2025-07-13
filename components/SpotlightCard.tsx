"use client";

import React from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  border?: boolean;
};

const SpotlightCard = ({
  children,
  className,
  glowColor = "rgba(59, 130, 246, 0.25)",
  border = true,
}: SpotlightCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl transition duration-300",
        "bg-white/90 dark:bg-white/5 backdrop-blur-md",
        border && "border border-border",
        "shadow-md hover:shadow-xl hover:ring-2 hover:ring-primary/30 dark:hover:ring-primary/20",
        "w-full max-w-full sm:max-w-2xl md:max-w-3xl mx-auto", // ✅ responsive width
        className
      )}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top left, ${glowColor}, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />
      <div className="relative z-10 p-4 sm:p-6">{children}</div>
    </div>
  );
};

export default SpotlightCard;
