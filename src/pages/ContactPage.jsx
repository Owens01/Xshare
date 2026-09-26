import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact | Emmanuel Ebri</title>
        <meta
          name="description"
          content="Get in touch with Emmanuel Ebri for web development projects, collaborations, or freelance opportunities."
        />
        <meta property="og:title" content="Contact | Emmanuel Ebri" />
        <meta
          property="og:description"
          content="Get in touch with Emmanuel Ebri for web development projects and collaborations."
        />
      </Helmet>
      <div className="pt-20">
        <Contact />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
