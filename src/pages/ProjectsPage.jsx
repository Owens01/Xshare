import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition";
import Projects from "../components/Project";

const ProjectsPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Projects | Emmanuel Ebri</title>
        <meta
          name="description"
          content="Explore my portfolio of web development projects including e-commerce platforms, edu-tech apps, and healthcare solutions."
        />
        <meta property="og:title" content="Projects | Emmanuel Ebri" />
        <meta
          property="og:description"
          content="Explore my portfolio of web development projects."
        />
      </Helmet>
      <div className="pt-20">
        <Projects />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
