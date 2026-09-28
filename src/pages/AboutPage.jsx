import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition";
import About from "../components/About";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Testimonials from "../components/Testimonials";

const AboutPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About | Owen</title>
        <meta
          name="description"
          content="Learn about Owen — a frontend developer with a background in computer science, building scalable web/mobile applications."
        />
        <meta property="og:title" content="About | Owen" />
        <meta
          property="og:description"
          content="Learn about Owen — a frontend developer who loves building scalable web/mobile applications."
        />
      </Helmet>
      <div className="pt-20">
        <About />
        <div className="px-6 md:px-20 bg-indigo-100 dark:bg-[#0e0e0e] transition-colors duration-300">
          <ExperienceTimeline />
        </div>
        {/* <div className="px-6 md:px-20 py-10 bg-white dark:bg-[#121212] transition-colors duration-300">
          <Testimonials />
        </div> */}
      </div>
    </PageTransition>
  );
};

export default AboutPage;
