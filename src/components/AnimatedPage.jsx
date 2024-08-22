import { motion } from 'framer-motion';

const motionOptions = {
  initial: { x: "-100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 }
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div id="sections-container" 
      className="w-full h-full flex flex-col overflow-y-auto scroll-smooth no-scrollbar"
      variants={motionOptions} 
      transition={{ duration: 0.5 }}

      initial="initial" 
      animate="animate"
      exit="initial"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage;
