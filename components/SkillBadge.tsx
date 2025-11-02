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
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group relative flex items-center gap-3 px-5 py-3 rounded-2xl",
        "bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800/60 dark:to-gray-900/40",
        "border border-gray-200 dark:border-gray-700/50",
        "shadow-md hover:shadow-xl",
        "text-base sm:text-lg font-medium",
        "text-gray-800 dark:text-gray-200",
        "transition-all duration-300 cursor-pointer",
        "hover:border-blue-300 dark:hover:border-blue-600/50"
      )}
    >
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />

      {/* Icon */}
      <motion.div
        className="relative z-10"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon icon={icon} width={24} height={24} />
      </motion.div>

      {/* Name */}
      <span className="relative z-10">{name}</span>
    </motion.li>
  );
});

export default SkillBadge;
