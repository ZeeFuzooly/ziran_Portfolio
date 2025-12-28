"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      className="group relative w-full h-14 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/50 dark:shadow-blue-500/30 transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
      style={{ backgroundSize: "200% 100%" }}
      disabled={pending}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.5)"
      }}
      whileTap={{ scale: 0.98 }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{
        backgroundPosition: {
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }
      }}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
        animate={{ translateX: ["-100%", "200%"] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      />

      {/* Sparkle particles on hover */}
      <motion.div
        className="absolute top-2 left-4 opacity-0 group-hover:opacity-100"
        animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles className="w-3 h-3 text-yellow-300" />
      </motion.div>
      <motion.div
        className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-100"
        animate={{ rotate: [360, 0], scale: [1.2, 0.8, 1.2] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <Sparkles className="w-3 h-3 text-yellow-300" />
      </motion.div>

      {pending ? (
        <div className="relative flex items-center justify-center gap-2">
          <motion.div
            className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <span>Sending...</span>
        </div>
      ) : (
        <span className="relative flex items-center justify-center gap-2">
          Send Message
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Send className="w-4 h-4" />
          </motion.span>
        </span>
      )}
    </motion.button>
  );
}
