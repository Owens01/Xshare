import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Owen, Frontend Developer</title>
        <meta
          name="description"
          content="Agunwa Chidiebele(Owen) — Frontend developer building scalable web/mobile applications."
        />
        <meta
          property="og:title"
          content="Owen, Frontend Developer"
        />
        <meta
          property="og:description"
          content="Frontend developer building scalable web/mobile application."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="pb-14">
        <Hero />
      </div>
    </PageTransition>
  );
};

export default HomePage;
