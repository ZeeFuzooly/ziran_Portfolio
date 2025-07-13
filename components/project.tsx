"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal"; // ✅ make sure this exists
import { projectsData } from "@/lib/data";

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
    <ScrollReveal
      baseOpacity={0}
      enableBlur
      baseRotation={5}
      blurStrength={10}
    >
      <div
        className={`flex flex-col-reverse sm:flex-row ${
          !isEven ? "sm:flex-row-reverse" : ""
        } items-center gap-6 sm:gap-10 bg-white/80 dark:bg-white/5 border border-border/30 rounded-xl shadow-md p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-lg max-w-5xl mx-auto`}
      >
        {/* Text Content */}
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl font-bold mb-2 text-foreground dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground dark:text-white/80 leading-relaxed">
            {description}
          </p>

          <ul className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, idx) => (
              <li
                key={idx}
                className="text-xs bg-primary/90 text-white px-3 py-1 rounded-full uppercase tracking-wide font-medium"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="w-full sm:w-1/2 h-56 sm:h-48 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={300}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </ScrollReveal>
  );
}
