import React from "react";
import { motion, Variants, Transition } from "framer-motion";

const loadingContainer: React.CSSProperties = {
  width: "2rem",
  height: "2rem",
  display: "flex",
  justifyContent: "space-around"
};

const loadingCircle: React.CSSProperties = {
  display: "block",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: "white",
  borderRadius: "0.25rem"
};

const loadingContainerVariants: Variants = {
  start: {
    transition: {
      staggerChildren: 0.1
    }
  },
  end: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const loadingCircleVariants: Variants = {
  start: {
    y: "0%"
  },
  end: {
    y: "100%"
  }
};

const loadingCircleTransition: Transition = {
  duration: 0.4,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut"
};

const ThreeDotsWave: React.FC = () => {
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
};

export default ThreeDotsWave;