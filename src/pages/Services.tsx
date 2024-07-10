import transition from "../transition";
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";

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
            <section className='w-full mt-12'>
                <div className='px-2 flex flex-col items-center justify-center overflow-hidden text-center font-lemonmilk tracking-tighter text-[calc(10vw)] md:text-[calc(8vw)] lg:text-[calc(6vw)] xl:text-[calc(8vw)] 2xl:text-[calc(6vw)] z-10 text-light'>
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

            <section className="w-full flex flex-col">
                <div className="w-full flex flex-row items-center justify-center space-x-8">
                    <DividedBlock />
                    <DividedBlock />
                    <DividedBlock />
                </div>
                <div className="w-full flex flex-row items-center justify-center space-x-8 mt-8">
                    <DividedBlock />
                    <DividedBlock />
                    <DividedBlock />
                </div>
            </section>           
        </div>
    );
};

const DividedBlock: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        className="relative flex flex-col w-[calc(20vw)] h-[calc(20vw)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-center flex-1 bg-black text-light">
            <h1>See</h1>
          </div>
          <div className="flex flex-row w-full h-1/2">
            <div className="flex w-1/2">
              <motion.img
                src="src/assets/posts/1.png"
                className="absolute inset-0 object-cover w-full h-full"
                initial={{ scale: 1, x: 0, y: 0 }}
                animate={isHovered ? { scale: 0.5, x: '-25%', y: '25%' } : { scale: 1, x: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                alt="Background"
                />
            </div>
            <div className="flex flex-row items-center justify-center w-1/2 text-black bg-light">
              <button className="flex w-full h-full flex-row items-center justify-center">MORE <GoArrowUpRight /></button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };



export default transition(Services);
