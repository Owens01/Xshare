import React from 'react'
import { motion } from 'framer-motion'

const facts = [
  {
    id: 1,
    title: '2 Years Coding',
    desc: 'Started my journey in 2024, building full-stack apps.',
  },
  {
    id: 2,
    title: 'MongoDB + Express',
    desc: 'MERN stack specialist for modern web platforms.',
  },
  {
    id: 3,
    title: 'E-learning Projects',
    desc: 'Built platforms for remote learning with video & real-time chat.',
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-[#090e34] dark:bg-inherit  text-gray-300 dark:text-white"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold mb-10 text-center px-4 text-blue-600"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-grow-1 flex-col md:flex-row gap-8 px-6 md:px-20 items-center">
        <motion.div
          className="flex justify-center flex-1 "
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/assets/pic2.jpg"
            alt="Emmanuel Ebri profile photo"
            className="rounded-2xl shadow-xl object-cover w-full "
          />
        </motion.div>

        {/* Right: Bio and skills */}
        <motion.div
          className="space-y-6 flex-1"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-base sm:text-sm  ">
            Full-stack software engineer with 2+ years of experience building
            scalable, production-ready web applications. Skilled in React,
            Next.js, TypeScript, Node.js, Express, MongoDB, MySQL, PostgreSQL,
            Django, and Flask, with strong expertise in designing secure APIs,
            responsive interfaces, and high-performance systems. Experienced in
            developing real-time applications, role-based platforms, and modern
            API-driven architectures while maintaining clean, maintainable, and
            efficient code. Proficient with state management and frontend tools
            including Redux, Redux Toolkit, Zustand, React Query, Context API,
            and Axios. Focused on delivering reliable, user-centered solutions
            with strong attention to performance, scalability, and overall user
            experience from development to deployment.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
