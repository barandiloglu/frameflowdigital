// src/App.tsx

import React, { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import transition from "../transition";
import { PiArrowFatRightFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import acornEvents from "../assets/projects/acornEvents.png";
import acornAccounting from "../assets/projects/acornAccounting.png";
import anatolianBreeze from "../assets/projects/anatolianBreeze.png";
import bbBakedPotato from "../assets/projects/bbBakedPotato.png";
import eduPathways from "../assets/projects/eduPathways.png";
import northernPathways from "../assets/projects/northernPathways.png";
import teachWays from "../assets/projects/teachWays.png";
import tutorialist from "../assets/projects/tutorialist.png";

const projects = [
  {
    brand: "Acorn Events",
    type: "Social Media Marketing & Website Development",
    img: acornEvents,
  },
  {
    brand: "Acorn Accounting",
    type: "Web Application Development",
    img: acornAccounting,
  },
  {
    brand: "Anatolian Breeze",
    type: "Social Media Marketing",
    img: anatolianBreeze,
  },
  {
    brand: "Big Bears Baked Potato",
    type: "Brand Management",
    img: bbBakedPotato,
  },
  {
    brand: "EduPathways Education & Career Consulting",
    type: "Brand Management",
    img: eduPathways,
  },
  {
    brand: "Northern Pathways Immigration Consulting",
    type: "Social Media Marketing",
    img: northernPathways,
  },
  {
    brand: "TeachWays",
    type: "Website Development",
    img: teachWays,
  },
  {
    brand: "Tutorialist",
    type: "Social Media Management",
    img: tutorialist,
  },
];

const listVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Stagger the appearance
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger list items
      delayChildren: 0.2, // Delay before starting children animation
    },
  },
};

const elementVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Stagger the appearance
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navigate = useNavigate();

  const formatBrand = (brand: string): string => {
    return brand.toLowerCase().replace(/\s+/g, "-"); // Convert spaces to underscores
  };

  const handleRedirect = (brand: string) => {
    const formattedBrand = formatBrand(brand); // Format the brand name
    navigate(`/projects/${formattedBrand}`); // Navigate using the formatted name
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-secondary">
      <div className="flex w-full flex-row">
        {/* Left Div with Buttons */}
        <div className="relative hidden w-1/2 flex-col space-y-4 divide-y divide-gray-300 font-lemonmilk text-light md:hidden lg:hidden xl:flex 2xl:flex">
          <AnimatePresence mode="wait">
            {hoveredIndex !== null && (
              <motion.img
                key={hoveredIndex}
                src={projects[hoveredIndex].img}
                alt={projects[hoveredIndex].brand}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute w-3/4 rounded-br-3xl rounded-tr-3xl object-cover"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Right Div */}
        <motion.div className="flex w-full flex-col space-y-4 p-4 text-light md:w-full lg:w-full xl:w-1/2 2xl:w-1/2">
          <motion.div
            className="flex w-full items-end justify-between"
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-2xl font-bold uppercase sm:text-3xl md:text-3xl lg:text-4xl"
              custom={0} // First element
              variants={elementVariants}
              exit="hidden"
            >
              Projects
            </motion.h1>
            <motion.span
              className="text-sm sm:text-base md:text-lg lg:text-xl"
              custom={1} // Second element
              variants={elementVariants}
              exit="hidden"
            >
              {projects.length}
            </motion.span>
          </motion.div>

          <motion.div
            className="flex w-full flex-col"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <motion.ul
              className="flex w-full list-none flex-col divide-y-2 text-light"
              variants={containerVariants}
            >
              {projects.map((project, index) => (
                <motion.li
                  key={index}
                  className="flex"
                  custom={index} // Pass index to stagger animation
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={listVariants}
                >
                  <motion.button
                    className={`group flex w-full flex-row items-center justify-between py-6 ${
                      index === 0 ? "border-t-2 border-light" : ""
                    }`}
                    onClick={() => handleRedirect(project.brand)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial="initial"
                    whileHover="hover"
                  >
                    <div className="flex w-full flex-row items-center">
                      <motion.div
                        className="mr-4 text-light"
                        variants={{
                          initial: { x: -10, opacity: 0 },
                          hover: { x: 0, opacity: 1 },
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <PiArrowFatRightFill />
                      </motion.div>

                      <motion.div
                        className="flex w-full items-center text-start font-josefin"
                        variants={{
                          initial: { x: -30, opacity: 1 },
                          hover: { x: -10, opacity: 1 },
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="flex w-3/4 text-base sm:text-lg md:text-xl lg:text-xl">
                          {project.brand}
                        </span>
                      </motion.div>
                    </div>
                    <div className="flex w-1/4 justify-end text-nowrap">
                      <span className="flex font-alata text-xs text-[#d9d9d4] sm:text-sm md:text-sm lg:text-sm">
                        {project.type}
                      </span>
                    </div>
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default transition(Projects);
