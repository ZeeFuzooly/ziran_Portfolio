"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,42rem)] mx-auto px-4 sm:px-8"
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
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Have a project in mind or want to discuss opportunities? Feel free to reach out directly at{" "}
          <a
            className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
            href="mailto:ziranfuzooly@gmail.com"
          >
            <Mail className="w-4 h-4" />
            ziranfuzooly@gmail.com
          </a>{" "}
          or use the form below.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800/60 dark:to-gray-900/40 border border-gray-200 dark:border-gray-700/50 rounded-2xl shadow-xl p-6 sm:p-8"
      >
        <form
          className="flex flex-col gap-4"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Message sent successfully! I'll get back to you soon.");
          }}
        >
          {/* Email Input */}
          <div className="relative">
            <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="senderEmail"
                className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <textarea
                id="message"
                className="w-full h-48 pl-12 pr-4 pt-4 pb-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none"
                name="message"
                placeholder="Tell me about your project or say hello..."
                required
                maxLength={5000}
              />
            </div>
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
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Typically responds within 24 hours
        </p>
      </motion.div>
    </motion.section>
  );
}
