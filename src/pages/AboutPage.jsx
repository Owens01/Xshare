import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition";
import About from "../components/About";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Testimonials from "../components/Testimonials";

const AboutPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About | Emmanuel Ebri</title>
        <meta
          name="description"
          content="Learn about Emmanuel Ebri — a full-stack developer with a background in public health, passionate about building scalable web applications."
        />
        <meta property="og:title" content="About | Emmanuel Ebri" />
        <meta
          property="og:description"
          content="Learn about Emmanuel Ebri — a full-stack developer passionate about building scalable web applications."
        />
      </Helmet>
      <div className="pt-20">
        <About />
        <div className="px-6 md:px-20 bg-gray-50 dark:bg-[#0e0e0e] transition-colors duration-300">
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
