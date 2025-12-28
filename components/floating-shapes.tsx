"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {/* Floating gradient blob 1 */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "5%" }}
      />

      {/* Floating gradient blob 2 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-pink-400/10 to-orange-400/10 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "50%", right: "10%" }}
      />

      {/* Floating gradient blob 3 */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400/10 to-green-400/10 blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "20%", left: "20%" }}
      />
    </div>
  );
}
