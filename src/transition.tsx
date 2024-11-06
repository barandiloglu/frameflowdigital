import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInitialLoad } from "./InitialLoadContext";

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
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [1,0,0,1] }}
          />
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [1,0,0,1] }}
          />
        </>
      </>
    );
  };
};

export default transition;
