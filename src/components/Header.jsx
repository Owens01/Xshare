import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const certifications = [
  {
    name: "AI-driven software development",
    file: "/certificates/AI-driven.jpg",
  },
  {
    name: "Building Restful APIs with Node.js",
    file: "/certificates/APIs.jpg",
  },
  {
    name: "The complete full-stack web development bootcamp",
    file: "/certificates/full-stack.jpg",
  },
  {
    name: "Next.js and React - The complete guide",
    file: "/certificates/nextjs.jpg",
  },
  {
    name: "The ultimate react course 2025: React, Next.js, Redux, and more",
    file: "/certificates/ultimate.jpg",
  },
];

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCertDropdown, setShowCertDropdown] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleClickOutside = () => setShowCertDropdown(false);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleCertDropdown = (e) => {
    e.stopPropagation();
    setShowCertDropdown((prev) => !prev);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-3 flex items-center gap-6 justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          <Link to="/">
            {isDarkMode ? (
              <img
                src="/assets/logo-white.png"
                alt="Emmanuel Ebri logo"
                className="w-20"
              />
            ) : (
              <img
                src="/assets/logo-black.png"
                alt="Emmanuel Ebri logo"
                className="w-20"
              />
            )}
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 text-base text-gray-700 dark:text-gray-200 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `border-b-2 pb-1 transition-colors ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400"
                    : "border-transparent hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-5 relative">
          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Certifications (Desktop) */}
          <div className="relative hidden lg:block">
            <button
              onClick={toggleCertDropdown}
              className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-sm font-medium"
            >
              Certifications
            </button>

            <AnimatePresence>
              {showCertDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 mt-3 w-[40rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center mb-4 last:mb-0"
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-200">
                        {cert.name}
                      </span>
                      <a
                        href={cert.file}
                        download
                        className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                      >
                        Download
                      </a>
                    
                    </div>
                    
                  ))}
                  
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-3/4 bg-white dark:bg-gray-900 z-50 transform transition-transform duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 pt-20 space-y-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-800 dark:text-gray-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Certifications (Mobile) */}
          <div>
            <button
              onClick={toggleCertDropdown}
              className="w-full text-left text-lg text-gray-800 dark:text-gray-100"
            >
              Certifications
            </button>

            <AnimatePresence>
              {showCertDropdown && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 space-y-2 overflow-hidden"
                >
                  {certifications.map((cert, index) => (
                    <a
                      key={index}
                      href={cert.file}
                      download
                      className="block text-sm bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded"
                    >
                      {cert.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        />
      )}
    </header>
  );
};

export default Header;