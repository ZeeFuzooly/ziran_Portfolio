"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  name: string;
  icon: any;
  index: number;
};

const fadeInVariants = {
  initial: { opacity: 0, y: 40, scale: 0.9 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.03,
      type: "spring",
      stiffness: 100,
      damping: 10
    },
  }),
};

const SkillBadge = React.memo<SkillBadgeProps>(function SkillBadge({ name, icon, index }) {
  return (
    <motion.li
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      whileHover={{
        scale: 1.1,
        y: -6,
        boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group relative flex items-center gap-3 px-5 py-3 rounded-2xl overflow-hidden",
        "bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800/60 dark:to-gray-900/40",
        "border border-gray-200 dark:border-gray-700/50",
        "shadow-md hover:shadow-2xl",
        "text-base sm:text-lg font-medium",
        "text-gray-800 dark:text-gray-200",
        "transition-all duration-300 cursor-pointer",
        "hover:border-blue-400 dark:hover:border-blue-500/70"
      )}
    >
      {/* Animated shine effect on hover */}
      <motion.div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
      />

      {/* Gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/15 group-hover:via-purple-500/15 group-hover:to-pink-500/15 transition-all duration-300" />

      {/* Pulsing border glow */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300" />

      {/* Icon with bounce */}
      <motion.div
        className="relative z-10"
        whileHover={{
          rotate: [0, -10, 10, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 0.5 }}
      >
        <Icon icon={icon} width={24} height={24} className="drop-shadow-sm" />
      </motion.div>

      {/* Name */}
      <span className="relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{name}</span>
    </motion.li>
  );
});

export default SkillBadge;
