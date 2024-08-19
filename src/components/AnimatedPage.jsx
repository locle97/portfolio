import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const animation = {
  initial: { y: "-100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: 0 }
};

const AnimatedPage = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      className="flex flex-col gap-4 min-h-full min-w-full bg-white justify-center items-center"
      variants={animation}
      transition={{ duration: 0.5 }}

      initial="initial"
      animate="animate"
      exit="exit"

    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage;
