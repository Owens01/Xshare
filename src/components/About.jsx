import React from "react";
import { motion } from "framer-motion";

const facts = [
  {
    id: 1,
    title: "2 Years Coding",
    desc: "Started my journey in 2024, building full-stack apps.",
  },
  {
    id: 2,
    title: "MongoDB + Express",
    desc: "MERN stack specialist for modern web platforms.",
  },
  {
    id: 3,
    title: "E-learning Projects",
    desc: "Built platforms for remote learning with video & real-time chat.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-indigo-50 dark:bg-[#090e34] dark:bg-inherit  text-gray-300 dark:text-white"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold mb-10 text-center px-4 text-indigo-400"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-grow-1 flex-col md:flex-row gap-8 px-6 md:px-20 items-center">
        {/* <motion.div
          className="flex justify-center flex-1 "
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/assets/pic2.jpg"
            alt="owen profile photo"
            className="rounded-2xl shadow-xl object-cover w-full "
          />
        </motion.div> */}

        {/* Right: Bio and skills */}
        <motion.div
          className="space-y-6 flex-1"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm md:text-base w-full max-w-[800px] mx-auto text-black dark:text-white">
            Frontend Engineer focused on building clean, responsive,
            and user-friendly digital experiences. Skilled in developing modern
            web and cross-platform mobile applications using technologies such
            as React, Next.js, React Native, Expo, TypeScript, and Tailwind CSS.
            I enjoy collaborating with teams to solve complex problems, deliver
            high-quality products, and create intuitive user experiences. With
            experience across fintech, social media, e-commerce, and software
            agency environments, I have built scalable web applications and
            cross platform mobile solutions that prioritize performance,
            accessibility, and maintainability. Committed to continuous learning
            and growth, I enjoy leveraging technology to solve real-world
            challenges and deliver meaningful value to users.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
