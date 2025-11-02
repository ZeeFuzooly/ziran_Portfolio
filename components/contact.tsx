"use client";

import React, { useState, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { Mail, MessageSquare, User } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [charCount, setCharCount] = useState(0);
  const MAX_MESSAGE_LENGTH = 5000;
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,48rem)] mx-auto px-4 sm:px-8"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Let's Connect</SectionHeading>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>

        {/* Quick Contact Methods */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <motion.a
            href="mailto:ziranfuzooly@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Email Ziran Fuzooly"
          >
            <Mail className="w-4 h-4" />
            Email
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ziranfuzooly/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Connect on LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/ZeeFuzooly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View GitHub profile"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </motion.a>
        </div>

        {/* Availability Status */}
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800/60 dark:to-gray-900/40 border border-gray-200 dark:border-gray-700/50 rounded-2xl shadow-xl p-6 sm:p-8"
      >
        <form
          ref={formRef}
          className="flex flex-col gap-5"
          action={async (formData) => {
            const { error} = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Message sent successfully! I'll get back to you soon.", {
              duration: 5000,
              icon: "✅",
            });

            // Reset form and character count
            formRef.current?.reset();
            setCharCount(0);
          }}
        >
          {/* Name Input */}
          <div className="relative">
            <label
              htmlFor="senderName"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <motion.input
                id="senderName"
                className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                name="senderName"
                type="text"
                required
                maxLength={100}
                placeholder="John Doe"
                whileFocus={{ scale: 1.01 }}
                aria-required="true"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label
              htmlFor="senderEmail"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <motion.input
                id="senderEmail"
                className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="your@email.com"
                whileFocus={{ scale: 1.01 }}
                aria-required="true"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Your Message
              </label>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {charCount}/{MAX_MESSAGE_LENGTH}
              </span>
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 pointer-events-none" />
              <motion.textarea
                id="message"
                className="w-full h-48 pl-12 pr-4 pt-4 pb-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none"
                name="message"
                placeholder="Tell me about your project, idea, or just say hello..."
                required
                maxLength={MAX_MESSAGE_LENGTH}
                onChange={(e) => setCharCount(e.target.value.length)}
                whileFocus={{ scale: 1.005 }}
                aria-required="true"
              />
            </div>
            {charCount > MAX_MESSAGE_LENGTH * 0.9 && (
              <p className="mt-1 text-xs text-amber-600 dark:text-amber-500">
                Approaching character limit
              </p>
            )}
          </div>

          {/* Submit Button */}
          <SubmitBtn />
        </form>
      </motion.div>

      {/* Additional Contact Info */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Typically responds within 24 hours
        </p>
      </motion.div>
    </motion.section>
  );
}
