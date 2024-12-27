import { easeInOut, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInitialLoad } from "./InitialLoadContext";
import logo from "./assets/logo_transition.png";

const getCurrentYear = () => new Date().getFullYear();

const transition = (OgComponent: React.ComponentType) => {
  return () => {
    const { isInitialLoad } = useInitialLoad();
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
      setHasMounted(true);
    }, []);

    if (isInitialLoad && !hasMounted) return <OgComponent />;

    return (
      <>
        <OgComponent />
        <>
          <motion.div
            className="slide-in flex items-center justify-center font-josefin text-light"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [1, 0, 0, 1] }}
          >
            <motion.div className="flex h-full w-full flex-col items-center justify-center space-y-4 font-josefin">
              <div className=""></div>
              <motion.img
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                exit={{ rotateY: 0 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
                className="h-24 w-24"
                src={logo}
              />
              <motion.span
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 20 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ delay: 1, duration: 1, ease: easeInOut }}
              >
                Designed and coded by FrameFlow © {getCurrentYear()}
              </motion.span>
            </motion.div>
          </motion.div>
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [1, 0, 0, 1] }}
          ></motion.div>
        </>
      </>
    );
  };
};

export default transition;
