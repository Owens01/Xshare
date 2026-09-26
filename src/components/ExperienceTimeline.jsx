import React, { useState } from "react";
import { motion } from "framer-motion";
import { experience, education } from "../data/experience";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const ExperienceTimeline = () => {
  const [activeTab, setActiveTab] = useState("work");

  const items = activeTab === "work" ? experience : education;
  const Icon = activeTab === "work" ? FaBriefcase : FaGraduationCap;

  return (
    <section className="py-16">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience & Education
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        {["work", "education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            {tab === "work" ? "Work" : "Education"}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-600/30" />

        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`relative flex items-start mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Icon dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg">
              <Icon className="text-white text-lg" />
            </div>

            {/* Content card */}
            <div
              className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
              }`}
            >
              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <span className="text-sm text-blue-600 font-semibold">
                  {item.period}
                </span>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-blue-500 font-medium">{item.org}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
