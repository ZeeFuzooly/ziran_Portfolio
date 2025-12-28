"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { ExternalLink } from "lucide-react";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
  onClick: () => void;
};

const Project = React.memo<ProjectProps>(function Project({
  title,
  description,
  tags,
  imageUrl,
  index,
  onClick,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -10,
        rotateX: 5,
        rotateY: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group h-full cursor-pointer perspective-1000 preserve-3d"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="flex flex-col h-full bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800/40 dark:to-gray-900/40 border border-gray-200 dark:border-gray-700/50 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/25 group-hover:border-blue-300 dark:group-hover:border-blue-600/50">
        {/* Image */}
        <div className="relative w-full h-40 sm:h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${title} project thumbnail`}
            width={600}
            height={400}
            loading={index < 3 ? "eager" : "lazy"}
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2VlZSIvPjwvc3ZnPg=="
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* External Link Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-900/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 sm:p-5 space-y-2 sm:space-y-3">
          <h3 className="text-base sm:text-xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 dark:from-white dark:via-gray-100 dark:to-blue-200 bg-clip-text text-transparent line-clamp-2">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3 flex-1">
            {description}
          </p>

          {/* Tags */}
          <ul className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
            {tags.slice(0, 4).map((tag, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50"
              >
                {tag}
              </motion.li>
            ))}
            {tags.length > 4 && (
              <li className="text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                +{tags.length - 4}
              </li>
            )}
          </ul>
        </div>
      </div>
    </motion.article>
  );
});

export default Project;
