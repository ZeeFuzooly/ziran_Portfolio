"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils"; // Tailwind merge or clsx-compatible

type SkillBadgeProps = {
  name: string;
  icon: any;
  index: number;
};

const fadeInVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, index }) => {
  return (
    <motion.li
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-xl",
        "bg-white dark:bg-white/10 border border-border/50 text-sm sm:text-base",
        "transition-all duration-300 hover:scale-105 hover:shadow-md dark:text-white/80"
      )}
    >
      <Icon icon={icon} width={20} height={20} />
      <span>{name}</span>
    </motion.li>
  );
};

export default SkillBadge;
