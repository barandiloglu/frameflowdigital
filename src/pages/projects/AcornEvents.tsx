import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import transition from "../../transition";

import banner from "../../assets/projects/acornEvents/acornEventsBanner.png";

const AcornEvents = () => {
  const heading = "ACORN EVENTS";

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-secondary">
      {/* Logo and Shapes */}
      <motion.div className="mt-0 flex w-3/5 items-center justify-center">
        <motion.img
          src={banner}
          className="rounded-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          alt="Acorn Events Banner"
        />
      </motion.div>

      <motion.div className="mt-8 flex w-3/5 flex-col">
        <motion.h1
          className="flex font-lemonmilk text-4xl text-primary"
          initial="hidden"
          animate="visible"
        >
          {heading.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{
                opacity: 0,
                scale: 0.5, // Start smaller
                rotate: index % 2 === 0 ? -15 : 15, // Alternate rotation: Clockwise and Counterclockwise
              }}
              animate={{
                opacity: 1,
                scale: 1, // Return to normal size
                rotate: 0, // End upright
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
                delay: index * 0.1, // Stagger effect for each letter
              }}
            >
              {letter === " " ? "\u00A0" : letter} {/* Add space for " " */}
            </motion.span>
          ))}
        </motion.h1>
        <div className="mt-4 w-full border-t border-white"></div>
        <div className="flex w-full flex-row">
          <div className="flex w-1/2 flex-col">
            <div className="mt-4 flex flex-row space-x-8">
              <h1 className="font-lemonmilk text-2xl uppercase text-light">
                Category
              </h1>
              <div className="mt-1 flex flex-col space-y-2">
                <span className="font-josefin text-lg text-light">
                  Social Media Marketing
                </span>
                <span className="font-josefin text-lg text-light">
                  Website Development
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-1/2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default transition(AcornEvents);
