"use client";

import React from "react";
import { motion } from "framer-motion";

interface WaveTextProps {
  children: string;
  className?: string;
}

export default function WaveText({ children, className = "" }: WaveTextProps) {
  const letters = children.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.span
      className={`inline-flex ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          whileHover={{
            y: -5,
            color: "#3b82f6",
            transition: { duration: 0.1 },
          }}
          className="inline-block cursor-default"
          style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
