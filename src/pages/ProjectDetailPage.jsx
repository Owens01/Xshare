import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import allProjects from "../data/projects";
import PageTransition from "../components/PageTransition";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageTransition>
      <Helmet>
        <title>{project.title} | Emmanuel Ebri</title>
        <meta name="description" content={project.description} />
        <meta
          property="og:title"
          content={`${project.title} | Emmanuel Ebri`}
        />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
      </Helmet>

      <div className="pt-24 pb-20 px-4 mt-6 sm:px-10 max-w-5xl mx-auto">
        {/* Back button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium transition-colors"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Project hero image */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-2xl mb-10 cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={[{ src: project.image }]}
        />

        {/* Project info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mb-12">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              <FaExternalLinkAlt /> Live Preview
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition font-semibold"
            >
              <FaGithub /> Source Code
            </a>
          </div>

          {/* Case study sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                The Challenge
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                The Solution
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Features */}
          {project.features && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetailPage;
