import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition";
import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Services | Emmanuel Ebri</title>
        <meta
          name="description"
          content="Full-stack development services — frontend, backend, and database management with modern technologies."
        />
        <meta property="og:title" content="Services | Emmanuel Ebri" />
        <meta
          property="og:description"
          content="Full-stack development services — frontend, backend, and database management."
        />
      </Helmet>
      <div className="pt-20">
        <Services />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
