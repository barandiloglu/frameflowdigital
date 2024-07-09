import transition from "../transition";
import { motion, useAnimation, useMotionValue, useTransform, useSpring} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";

const services = [
    { heading: "Social Media Management", subheading: "See our projects", imgSrc: "./src/assets/posts/1.png", href: "/projects" },
    { heading: "Content Creation", subheading: "Our services", imgSrc: "./src/assets/posts/2.png", href: "/services" },
    { heading: "SEO (SEARCH ENGINE OPTIMIZATION)", subheading: "Why choose us?", imgSrc: "./src/assets/posts/3.png", href: "/why-us" },
    { heading: "WEB DESIGN", subheading: "Get in touch", imgSrc: "./src/assets/posts/4.png", href: "/contact-us" },
    { heading: "PHOTOGRAPHY / VIDEOGRAPHY", subheading: "Get in touch", imgSrc: "./src/assets/posts/4.png", href: "/contact-us" },
    { heading: "PHOTO / VIDEO EDITING", subheading: "Get in touch", imgSrc: "./src/assets/posts/4.png", href: "/contact-us" },

  ];

const Services = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            y: [0, -10, 0],
            textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 15px rgba(0,0,0,0.3)", "0px 0px 0px rgba(0,0,0,0)"],
            transition: { duration: 2, repeat: Infinity, repeatType: "loop" }
        });
    }, [controls]);

    return (
        <div className='flex flex-col items-center min-h-screen mx-auto bg-secondary'>
            <section className='w-full mt-20'>
                <div className='px-2 flex flex-col items-center justify-center overflow-hidden text-center font-lemonmilk tracking-tighter text-[calc(10vw)] md:text-[calc(8vw)] lg:text-[calc(6vw)] xl:text-[calc(8vw)] z-10 text-light'>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="z-10 flex flex-col items-center justify-center px-2 overflow-hidden font-bold tracking-tighter uppercase">
                        <div className="flex flex-row space-x-8">
                            <motion.span
                                animate={controls}
                                className="text-light"
                            >
                                ELEVATE
                            </motion.span>
                            <motion.span
                                className="text-light"
                            >
                                YOUR
                            </motion.span>
                        </div>
                        <div className="flex flex-row space-x-8">
                            <motion.span>
                                ONLINE
                            </motion.span>
                            <motion.span>
                                PRESENCE
                            </motion.span>
                        </div>
                    </motion.div>
                </div>
            </section> 

            <section>
                <div className="flex items-center justify-center bg-gray-100">
                    <DividedBlock />
                </div>
            </section>           
        </div>
    );
};

const DividedBlock: React.FC = () => {
    return (
      <div className="flex flex-col w-64 h-64">
        <div className="bg-black  text-light h-1/2">
            <h1>See</h1>
        </div>
        <div className="flex flex-row w-full">
            <div className="flex w-1/2">
                <img className="object-cover w-32 h-32" src="src/assets/posts/1.png"></img>
            </div>
            <div className="flex flex-row items-end justify-end w-1/2 text-black bg-light">
                <h1>MORE</h1>
                <FiArrowRight />
            </div>
        </div>
      </div>    
    );
  };



export default transition(Services);
