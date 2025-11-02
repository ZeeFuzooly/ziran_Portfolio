"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";
import { HiHeart, HiMail, HiLocationMarker } from "react-icons/hi";
import { links } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/ZeeFuzooly",
      color: "#333",
      hoverColor: "#24292e",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/ziranfuzooly/",
      color: "#0077B5",
      hoverColor: "#006399",
    },
    {
      name: "Medium",
      icon: FaMedium,
      url: "https://medium.com/@ziranfuzooly",
      color: "#000",
      hoverColor: "#1a1a1a",
    },
  ];

  const quickLinks = links.slice(0, 6);

  return (
    <footer className="relative w-full border-t border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/10">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/5 dark:bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* About Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              Ziran Fuzooly
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 max-w-sm">
              Lead Engineer specializing in building exceptional digital experiences. Passionate about creating scalable, user-centric applications with modern technologies.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <HiLocationMarker className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                <span>Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <HiMail className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:ziranfuzooly@gmail.com"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  ziranfuzooly@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 4 }}>
                  <a
                    href={link.hash}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all shadow-sm hover:shadow-md"
                    aria-label={social.name}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      backgroundColor: social.color,
                      color: "#fff"
                    }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Let's connect and build something amazing together!
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          {/* Copyright & Tech Stack */}
          <motion.div
            className="text-center sm:text-left max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              &copy; {year} Ziran Fuzooly. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Crafted with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="inline-block"
              >
                <HiHeart className="text-red-500 inline" />
              </motion.span>{" "}
              using <span className="font-medium text-gray-700 dark:text-gray-300">Next.js</span> • <span className="font-medium text-gray-700 dark:text-gray-300">TypeScript</span> • <span className="font-medium text-gray-700 dark:text-gray-300">Tailwind CSS</span>
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.a
            href="#home"
            className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-4 h-4 group-hover:animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
