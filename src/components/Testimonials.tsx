import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import testimonials from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-16">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What People Say
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <FaQuoteLeft className="text-blue-600/20 text-4xl mb-4" />
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>
            <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
              <h4 className="font-bold text-gray-800 dark:text-white">
                {testimonial.name}
              </h4>
              <p className="text-sm text-blue-600">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
