import { 
  motion, 
  useAnimation, 
  AnimatePresence } from 'framer-motion';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from './assets/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const textControls = useAnimation();
    const logoControls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            await textControls.start({
                scale: [1, 1.2, 1],
                opacity: 1,
                transition: { duration: 0.6, ease: 'easeInOut' }
            });
            await textControls.start({
                x: 45, // Move to the right by 45px
                transition: { duration: 0.6, ease: 'easeInOut' }
            });
            logoControls.start({    
                opacity: [0, 0.5, 1],
                transition: { duration: 0.6, ease: 'easeInOut' }
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

    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
      setOpen((prevOpen: boolean) => !prevOpen); // Explicitly set the type of 'prevOpen' to boolean
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
      { title: "Projects", href: "/projects", img: "./src/assets/posts/1.png"},
      { title: "Services", href: "/services", img: "./src/assets/posts/2.png"},
      { title: "Why Us?", href: "/why-us", img: "./src/assets/posts/3.png" },
      { title: "Contact Us", href: "/contact-us", img: "./src/assets/posts/4.png" },
    ];

    return (
        <header>
            <nav className=" p-5 bg-secondary text-light font-alata w-full">
                <div className="  flex items-center justify-between mx-auto h-[5vh] w-full">
                    <div className="flex flex-row items-center relative">
                        <Link
                            to='/'
                            className="flex flex-row items-center"
                        >
                            <motion.img
                                src={logo}
                                alt="Logo"
                                initial={{ opacity: 0 }}
                                animate={logoControls}
                                className="flex h-8 ml-2 w-8" // Adjust the size and position as needed
                            />
                            <motion.div
                                initial={{ scale: 1, opacity: 0 }}
                                animate={textControls}
                                className="absolute px-4  w-[170px] flex text-2xl font-bold"
                            >
                                Frame Flow
                            </motion.div>
                        </Link>
                    </div>
                    <div className='flex items-center'>
                      <motion.div 
                          className='lg:flex hidden right-4 items-center space-x-8 mr-4'
                          variants={container}
                          initial="hidden"
                          animate="visible"
                      >
                          {navLinks.map((link) => ( // Renamed item to link
                              <motion.button
                              key={link.title}
                              variants={item} // Apply item variants here
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              >
                              <Link to={link.href}>
                                  {link.title}
                              </Link>
                              </motion.button>
                          ))}
                          <motion.button
                              variants={item}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="px-4 py-2 bg-primary text-light"
                          >
                              <Link to='/contact-us'>
                                  CONTACT US
                              </Link>
                          </motion.button>
                      </motion.div>
                      <div
                          className="flex right-5 cursor-pointer text-md text-light text-xl"
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
                        className="fixed left-0 top-0 w-full h-screen origin-top bg-zinc-800 text-zinc-300 mx-auto pt-8 px-5 font-alata z-20"
                    >
                        <div className="flex h-full flex-col">
                            <div className="flex justify-end">
                                <p
                                    className="cursor-pointer text-md text-zinc-300 text-xl font-bold"
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
                                className="flex flex-col h-full justify-center items-center space-y-8"
                            >
                                {navLinks.map((link, index) => (
                                <div key={index} className="overflow-hidden flex flex-row">
                                    <MobileNavLink title={link.title} href={link.href} setOpen={setOpen} img={link.img}/>
                                </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

interface MobileNavLinkProps {
    title: string;
    href: string;
    img: string;
    setOpen: (open: boolean) => void;
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

  const imageVariants = {
    hidden: { scale: 0, rotate: 0 },
    visible: { scale: 1, rotate: 2.5 },
  };
  

  const MobileNavLink: React.FC<MobileNavLinkProps> = ({ title, href, img, setOpen }) => {
    return (
      <motion.div
        variants={mobileLinkVars}
        className="flex flex-row group text-[calc(13vw)] md:text-[calc(8vw)] lg:text-[calc(5vw)] uppercase"
      >
        <Link to={href} onClick={() => setOpen(false)}>{title}</Link>
        <motion.span
          className="absolute bottom-0 left-0 w-[80%] h-[2px] bg-zinc-300 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
        />
        <motion.img 
          src={img} 
          alt={title} 
          className="w-28 h-28 rounded-xl mt-4 ml-8" 
        />
      </motion.div>
    );
  };
  
export default Navbar;
