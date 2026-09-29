import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition";
import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Services | Owen</title>
        <meta
          name="description"
          content="Frontend development services."
        />
        <meta property="og:title" content="Services | Owen" />
        <meta
          property="og:description"
          content="Frontend development services."
        />
      </Helmet>
      <div className="md:pt-0 bg-indigo-100">
        <Services />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
