import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <section
      id="home"
      className="min-h-dvh px-4 sm:px-5 md:px-5 flex bg-indigo-100 pt-20 dark:bg-inherit dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-5 md:gap-x-16 mt-20 w-full md:justify-between md:items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5 }}
          className="flex-1 max-w-2xl"
        >
          <h1 className="text-xl font-bold md:text-2xl lg:text-4xl text-gray-800 mb-6 dark:text-white/80">
            Hi, I'm Owen
          </h1>

          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-700 mb-6 dark:text-white/80">
            I craft scalable, user-focused digital experiences as a{" "}
            <span className="text-indigo-400 font-semibold">
              <Typewriter
                words={[
                  "Mobile App Engineer",
                  "Frontend Engineer",
                ]}
                loop={0}
                cursor
                cursorStyle=""
                typeSpeed={120}
                deleteSpeed={130}
                delaySpeed={2000}
              />
            </span>
            , combining clean design with efficient, production ready code.
          </p>

          <Link
            to="/projects"
            className="inline-flex text-base items-center bg-indigo-400 text-white px-4 py-3 rounded-md hover:bg-indigo-500 transition gap-3"
          >
            Explore <FaChevronRight />
          </Link>
        </motion.div>

        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <img
            src="/assets/hero-image.jpeg"
            alt="Owen image"
            className="w-full rounded-xl object-cover"
          />
          <div className="absolute top-0 right-0 left-0 bottom-14 bg-black/5 dark:bg-black/30 rounded-lg rounded-tl-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
