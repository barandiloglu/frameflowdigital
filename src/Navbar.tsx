import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";

import logo from "./assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import Modal from "./Modal";
import ContactUs from "./pages/ContactUs";

const Navbar = () => {
  const textControls = useAnimation();
  const logoControls = useAnimation();
  const [menuAnimationComplete, setMenuAnimationComplete] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      await textControls.start({
        scale: [1, 1.2, 1],
        opacity: 1,
        transition: { duration: 0.6, ease: "easeInOut" },
      });
      await textControls.start({
        transition: { duration: 0.6, ease: "easeInOut" },
      });
      logoControls.start({
        opacity: [0, 0.5, 1],
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    };
    sequence();
  }, [textControls, logoControls]);

  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const toggleMenu = async () => {
    if (!open) {
      setMenuAnimationComplete(false);
    }

    await new Promise<void>((resolve) => {
      setMenuAnimationComplete(false);
      resolve();
    });

    setOpen((prevOpen: boolean) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const navLinks = [
    {
      heading: "Projects",
      subheading: "See our projects",
      imgSrc: "./src/assets/posts/1.png",
      href: "/projects",
    },
    {
      heading: "Services",
      subheading: "Our services",
      imgSrc: "./src/assets/posts/2.png",
      href: "/services",
    },
    {
      heading: "Why Us?",
      subheading: "Why choose us?",
      imgSrc: "./src/assets/posts/3.png",
      href: "/why-us",
    },
    {
      heading: "Contact Us",
      subheading: "Get in touch",
      imgSrc: "./src/assets/posts/4.png",
      href: "/contact-us",
    },
  ];

  return (
    <header>
      <nav className="w-full bg-secondary p-5 font-alata text-light">
        <div className="mx-auto flex h-[5vh] w-full items-center justify-between">
          <div className="flex flex-row items-center">
            <Link to="/" className="flex flex-row items-center">
              <motion.div className="flex flex-col">
                <motion.div
                  initial={{ scale: 1, opacity: 1 }}
                  className="flex w-[170px] px-4 font-quicksand text-2xl font-bold"
                >
                  frame
                </motion.div>
                <motion.div
                  initial={{ scale: 1, opacity: 1 }}
                  className="flex w-[170px] px-4 font-quicksand text-2xl font-bold"
                >
                  flo
                </motion.div>
              </motion.div>
              <motion.img
                src={logo}
                alt="Logo"
                initial={{ opacity: 1, x: -130, y: 15 }}
                animate={textControls}
                className="ml-2 flex h-8 w-8"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <motion.div
              className="right-4 mr-4 hidden items-center space-x-8 lg:flex"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {navLinks.slice(0, 3).map((link) => (
                <motion.button
                  key={link.heading}
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link to={link.href}>{link.heading}</Link>
                </motion.button>
              ))}
              <motion.button
                variants={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-primary px-4 py-2 text-light"
                onClick={() => setIsModalOpen(true)}
              >
                CONTACT US
              </motion.button>
            </motion.div>
            <div
              className="text-md right-5 flex cursor-pointer text-xl text-light"
              onClick={toggleMenu}
            >
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 z-20 mx-auto h-screen w-full origin-top bg-zinc-800 px-5 pt-8 font-alata text-zinc-300"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-end">
                <p
                  className="text-md cursor-pointer text-xl font-bold text-zinc-300"
                  onClick={toggleMenu}
                >
                  <AiOutlineClose />
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex h-full w-full flex-col items-center justify-center space-y-8"
                onAnimationComplete={() => setMenuAnimationComplete(true)}
              >
                {navLinks.map((link, index) => (
                  <div
                    key={index}
                    className={`flex w-full flex-row items-center justify-start ${
                      !menuAnimationComplete ? "overflow-hidden" : " "
                    }`}
                  >
                    <MobileNavLink
                      heading={link.heading}
                      subheading={link.subheading}
                      imgSrc={link.imgSrc}
                      href={link.href}
                      setOpen={(open) => {
                        setOpen(open);
                        setMenuAnimationComplete(false);
                      }}
                      setIsModalOpen={setIsModalOpen}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactUs />
      </Modal>
    </header>
  );
};

interface MobileNavLinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
  setOpen: (open: boolean) => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  heading,
  imgSrc,
  subheading,
  href,
  setOpen,
  setIsModalOpen,
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (heading === "Contact Us") {
      e.preventDefault();
      setIsModalOpen(true);
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <motion.div
      variants={mobileLinkVars}
      className="flex w-full flex-row text-[calc(13vw)] uppercase md:text-[calc(8vw)] lg:text-[calc(5vw)]"
    >
      <Link
        className="ml-8 mr-8 w-full"
        to={href}
        onClick={(e) => handleClick(e)}
      >
        <motion.a
          href={href}
          ref={ref}
          onMouseMove={handleMouseMove}
          initial="initial"
          whileHover="whileHover"
          className="group relative flex w-full items-center justify-between border-b-2 border-neutral-400 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
        >
          <div>
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: -16 },
              }}
              transition={{
                type: "spring",
                staggerChildren: 0.075,
                delayChildren: 0.25,
              }}
              className="relative z-10 block text-3xl font-bold text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
            >
              {[...heading].map((l, i) => (
                <motion.span
                  key={i}
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: 16 },
                  }}
                  transition={{ type: "spring" }}
                  className="inline-block"
                >
                  {l === " " ? "\u00A0" : l}
                </motion.span>
              ))}
            </motion.span>
            <span className="relative z-10 mt-2 block text-base text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50">
              {subheading}
            </span>
          </div>

          <motion.img
            style={{
              top,
              left,
              translateX: "-0%",
              translateY: "-50%",
            }}
            variants={{
              initial: { scale: 0, rotate: "-12.5deg" },
              whileHover: { scale: 1, rotate: "12.5deg" },
            }}
            transition={{ type: "spring" }}
            src={imgSrc}
            className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
            alt={`Image representing a link for ${heading}`}
          />

          <motion.div
            variants={{
              initial: {
                x: "25%",
                opacity: 0,
              },
              whileHover: {
                x: "0%",
                opacity: 1,
              },
            }}
            transition={{ type: "spring" }}
            className="relative z-10 p-4"
          >
            <FiArrowRight className="text-5xl text-neutral-50" />
          </motion.div>
        </motion.a>
      </Link>
    </motion.div>
  );
};

export default Navbar;
