import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import allProjects from "../data/projects";
import Aos from "aos";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 px-4 sm:px-10"
    >
      <h2
        className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-700 dark:text-white"
        data-aos="fade-down"
      >
        My Projects
      </h2>

      <div className="flex justify-center gap-4 mb-12 flex-wrap items-center">
        {["all", "frontend", "Backend", "full-stack"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white border-gray-300 dark:border-gray-600"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[minmax(200px,_auto)] gap-8">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className={`bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out group block no-underline ${project.span}`}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="lazy"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600/80 px-4 py-2 rounded-lg">
                  View Details
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              {/* <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p> */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm text-blue-600 dark:text-blue-400">
                <span className="group-hover:underline">View Project →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
