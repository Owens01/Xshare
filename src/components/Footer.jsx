import React from "react";
import { Link } from "react-router-dom";
import socialLinks from "../data/socialLinks.jsx";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-[#090e34] text-gray-700 dark:text-gray-300 py-10 px-6 md:px-20 transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center md:flex-row gap-6 text-sm">
            <Link to="/" className="hover:text-indigo-400 transition">
              Home
            </Link>
            <Link to="/services" className="hover:text-indigo-400 transition">
              Services
            </Link>
            <Link to="/projects" className="hover:text-indigo-400 transition">
              Projects
            </Link>
            <Link to="/about" className="hover:text-indigo-400 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-indigo-400 transition">
              Contact
            </Link>
          </div>
          <div className="text-center text-xs text-gray-400 dark:text-gray-500">
            &copy; {currentYear} OwenVisuals — Building digital experiences that
            matter.
          </div>
        </div>

        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="hover:text-indigo-400 transition mt-2 md:mt-0"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
