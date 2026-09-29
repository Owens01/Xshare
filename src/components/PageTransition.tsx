import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const doorTransition = {
  duration: 0.6,
  ease: [0.76, 0, 0.24, 1],
};

const PageTransition = ({ children }) => {
  const [showDoors, setShowDoors] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowDoors(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Door overlay two halves that split apart */}
      <AnimatePresence>
        {showDoors && (
          <>
            {/* Top half */}
            <motion.div
              className="fixed top-0 left-0 w-full h-1/2 bg-[#090e34] z-[60]"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={doorTransition}
            />
            {/* Bottom half */}
            <motion.div
              className="fixed bottom-0 left-0 w-full h-1/2 bg-[#090e34] z-[60]"
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={doorTransition}
            />
          </>
        )}
      </AnimatePresence>

      {/* Page content fades in after doors open */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
