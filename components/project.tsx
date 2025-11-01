"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { ExternalLink } from "lucide-react";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  index,
}: ProjectProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={`flex flex-col ${
          isEven ? "sm:flex-row" : "sm:flex-row-reverse"
        } items-center gap-6 sm:gap-8 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800/40 dark:to-gray-900/40 border border-gray-200 dark:border-gray-700/50 rounded-2xl shadow-lg p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-300 dark:hover:border-blue-600/50 max-w-5xl mx-auto`}
      >
        {/* Image */}
        <div className="relative w-full sm:w-1/2 h-64 sm:h-56 rounded-xl overflow-hidden shadow-md">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Text Content */}
        <div className="w-full sm:w-1/2 space-y-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 dark:from-white dark:via-gray-100 dark:to-blue-200 bg-clip-text text-transparent">
              {title}
            </h3>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.div>
          </div>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 shadow-sm hover:shadow-md hover:scale-105 transition-all"
              >
                {tag}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
