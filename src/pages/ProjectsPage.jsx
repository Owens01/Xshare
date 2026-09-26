import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition";
import Projects from "../components/Project";

const ProjectsPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Projects | Owen</title>
        <meta
          name="description"
          content="Explore my portfolio of web/mobile app development projects."
        />
        <meta property="og:title" content="Projects | Owen" />
        <meta
          property="og:description"
          content="Explore my portfolio of web/mobile app development projects."
        />
      </Helmet>
      <div className="pt-20">
        <Projects />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
