"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedGradientBorderProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedGradientBorder({
  children,
  className = "",
}: AnimatedGradientBorderProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated gradient border */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
