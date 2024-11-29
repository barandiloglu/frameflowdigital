// src/App.tsx

import React from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import transition from "../transition";
import { PiArrowFatRightFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    brand: "Acorn Events",
    type: "Social Media Marketing & Website Development",
    img: "./src/assets/services/1.png",
  },
  {
    brand: "Acorn Accounting",
    type: "Web Application Development",
    img: "./src/assets/services/1.png",
  },
  {
    brand: "Anatolian Breeze",
    type: "Social Media Marketing",
    img: "./src/assets/services/2.png",
  },
  {
    brand: "Big Bears Baked Potato",
    type: "Brand Management",
    img: "./src/assets/services/1.png",
  },
  {
    brand: "EduPathways Education & Career Consulting",
    type: "Brand Management",
    img: "./src/assets/services/1.png",
  },
  {
    brand: "Northern Pathways Immigration Consulting",
    type: "Social Media Marketing",
    img: "./src/assets/services/1.png",
  },
  {
    brand: "TeachWays",
    type: "Website Development",
    img: "./src/assets/services/1.png",
  },
  {
    brand: "Tutorialist",
    type: "Social Media Management",
    img: "./src/assets/services/1.png",
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

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const navigate = useNavigate();

  const formatBrand = (brand: string): string => {
    return brand.toLowerCase().replace(/\s+/g, "_"); // Convert spaces to underscores
  };

  const handleRedirect = (brand: string) => {
    const formattedBrand = formatBrand(brand); // Format the brand name
    navigate(`/projects/${formattedBrand}`); // Navigate using the formatted name
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-secondary">
      <div className="flex w-full flex-row">
        {/* Left Div with Buttons */}
        <div className="relative flex w-1/2 flex-col space-y-4 divide-y divide-gray-300 font-lemonmilk text-light">
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
        <div className="flex w-1/2 flex-col space-y-4 pr-40 text-light">
          <div className="flex w-full items-end justify-between">
            <h1 className="text-4xl font-bold uppercase">Projects</h1>
            <span className="text-lg">9</span>
          </div>
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
                    className={`group flex w-full flex-row justify-between py-6 ${
                      index === 0 ? "border-t-2 border-light" : ""
                    }`}
                    onClick={() => handleRedirect(project.brand)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial="initial"
                    whileHover="hover"
                  >
                    <div className="flex flex-row items-center">
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
                        className="font-josefin"
                        variants={{
                          initial: { x: -30, opacity: 1 },
                          hover: { x: -10, opacity: 1 },
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-xl">{project.brand}</span>
                      </motion.div>
                    </div>
                    <div>
                      <span className="font-alata text-light">
                        {project.type}
                      </span>
                    </div>
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default transition(Projects);
