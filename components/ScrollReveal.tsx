"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  enableBlur?: boolean;
}

export default function ScrollReveal({
  children,
  baseOpacity = 0,
  baseRotation = 0,
  blurStrength = 0,
  enableBlur = false,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        rotate: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: baseOpacity,
        rotate: baseRotation,
        filter: enableBlur ? `blur(${blurStrength}px)` : "none",
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
