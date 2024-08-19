import { motion } from 'framer-motion';

const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

const AnimatedPage = ({ id, children }) => {
  return (
    <motion.div 
      id={id} 
      className="section flex flex-col gap-4 min-h-full min-w-full bg-white justify-center items-center"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage;
