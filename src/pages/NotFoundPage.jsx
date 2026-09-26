import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const NotFoundPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>404 — Page Not Found | Emmanuel Ebri</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#121212] text-gray-900 dark:text-white px-6">
        <motion.h1
          className="text-8xl font-bold text-blue-600 mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage;
