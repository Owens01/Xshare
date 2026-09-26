import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact | Owen</title>
        <meta
          name="description"
          content="Get in touch with Owen for web/mobile app development projects, collaborations, or freelance opportunities."
        />
        <meta property="og:title" content="Contact | Owen" />
        <meta
          property="og:description"
          content="Get in touch with Owen for web/mobile app development projects and collaborations."
        />
      </Helmet>
      <div className="pt-20">
        <Contact />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
