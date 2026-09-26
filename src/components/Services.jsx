import React, { useEffect } from "react";
import { services, techStack } from "../data/services.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="services"
      className="bg-[#090e34] relative dark:bg-inherit mt-8"
    >
      <div className="max-w-7xl mx-auto px-4 text-center py-8">
        <h2
          className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 dark:text-blue-700"
          data-aos="fade"
          data-aos-duration="500"
          data-aos-delay="700"
        >
          What I Do
        </h2>
        <p
          className="text-white mb-12 dark:text-white/60"
          data-aos="slide-right"
          data-aos-delay="1000"
          data-aos-duration="2000"
        >
          I'm a full-stack engineer delivering robust, scalable, and efficient
          web solutions.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 1000}
              className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition dark:bg-gray-800"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-base font-semibold text-gray-800 mb-2 dark:text-white/60">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-white/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <h3
          className="text-xl md:text-2xl text-blue-600 font-semibold mb-4"
          data-aos="slide-left"
          data-aos-delay="400"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          Tech Stack
        </h3>
        <div className="relative px-4">
          <div className="flex justify-between items-center px-2 md:px-4 py-4">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="flex flex-col justify-between items-center gap-2"
              >
                {tech.icon}
                <span className="mt-2 md:text-sm text-[8px] text-white dark:text-white/80">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
