import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const Loader = ({ onFinish }) => {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 20 });
  const animatedPercent = useTransform(springValue, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onFinish, 500);
          }, 200);
          return 100;
        }
        return prev + 4;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [onFinish]);

  useEffect(() => {
    motionValue.set(percent);
  }, [percent, motionValue]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.p
            className="text-3xl font-bold text-white font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span>{animatedPercent}</motion.span>%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
