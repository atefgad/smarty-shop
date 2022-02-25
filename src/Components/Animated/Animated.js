import React from "react";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};


function Animated({ children }) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      // transform={{ duration: 1.5 }}
      layout
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 1 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default Animated;
