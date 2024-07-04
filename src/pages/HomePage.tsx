import { useEffect, useState } from 'react';
import { MotionProps, motion, useAnimation, useScroll, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiInstagram, SiLinkedin, SiTiktok } from "react-icons/si";
import transition from "../transition";

import '../index.css'; // Ensure you have this import to apply the custom CSS
import '../css/HomePage.css'

const HomePage = () => {
    const letters2 = Array.from("THE CONTENT");
    const letters = Array.from("WE CREATE");

    const [yDown, setYDown] = useState(100);
    const [yUp, setYUp] = useState(-100);
    const [opacity, setOpacity] = useState(1);

    const controlsDown = useAnimation();
    const controlsUp = useAnimation();

    useEffect(() => {
        const updateYValues = () => {
            const width = window.innerWidth;
            if (width < 768) { // Small screens
                setYDown(30);
                setYUp(-30);
            } else if (width < 1024) { // Medium screens
                setYDown(45);
                setYUp(-45);
            } else if (width < 1280) { // Large screens
                setYDown(50);
                setYUp(-50);
            } else { // Extra large screens
                setYDown(100);
                setYUp(-100);
            }
        };

        // Initial update
        updateYValues();

        // Update on window resize
        window.addEventListener('resize', updateYValues);
        return () => window.removeEventListener('resize', updateYValues);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = Math.min(scrollY / maxScroll, 1);

            let maxYDown = 100;
            let maxYUp = -100;
            const width = window.innerWidth;

            if (width < 768) { // Small screens
                maxYDown = 30;
                maxYUp = -30;
            } else if (width < 1024) { // Medium screens
                maxYDown = 45;
                maxYUp = -45;
            } else if (width < 1280) { // Large screens
                maxYDown = 50;
                maxYUp = -50;
            }

            const newYDown = maxYDown - scrollPercentage * maxYDown;
            const newYUp = maxYUp + scrollPercentage * Math.abs(maxYUp);
            setYDown(newYDown);
            setYUp(newYUp);

            const newOpacity = scrollPercentage === 1 ? 0 : 1 - scrollPercentage;
            setOpacity(newOpacity);

            controlsDown.start({
                y: newYDown,
                opacity: newOpacity,
                transition: { ease: [0.25, 0.1, 0.25, 1], delay: 0, duration: 0.1 }
            });
    
            controlsUp.start({
                y: newYUp,
                opacity: newOpacity,
                transition: { ease: [0.25, 0.1, 0.25, 1], delay: 0, duration: 0.1 }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controlsDown, controlsUp]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = Math.min(scrollY / maxScroll, 1);

            let maxYDown = 100;
            let maxYUp = -100;
            const width = window.innerWidth;

            if (width < 768) { 
                maxYDown = 30;
                maxYUp = -30;
            } else if (width < 1024) {
                maxYDown = 45;
                maxYUp = -45;
            } else if (width < 1280) {
                maxYDown = 50;
                maxYUp = -50;
            }

            const newYDown = maxYDown - scrollPercentage * maxYDown;
            const newYUp = maxYUp + scrollPercentage * Math.abs(maxYUp);

            const newOpacity = scrollPercentage === 1 ? 0 : 1 - scrollPercentage;
            setOpacity(newOpacity);

            setYDown(newYDown);
            setYUp(newYUp);

            controlsDown.start({
                y: newYDown,
                opacity: newOpacity,
                transition: { ease: [0.25, 0.1, 0.25, 1], delay: 0, duration: 0.1 }
            });
    
            controlsUp.start({
                y: newYUp,
                opacity: newOpacity,
                transition: { ease: [0.25, 0.1, 0.25, 1], delay: 0, duration: 0.1 }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controlsDown, controlsUp]);

    const banner = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delay: 0.75 } // Slightly staggered for flicker effect
        }
    };

    const bannerChild = {
        hidden: {
            opacity: 0,
            y: 0, // Start from below
            transition: {
                ease: "easeIn"
            },
        },
        visible: {
            opacity: [0, 1, 0.5, 1], // Keyframes for flicker effect
            y: 0,
            transition: {
                duration: 1, // Adjust duration as needed
                ease: "easeIn"
            },
        }
    };

    const bannerSecondChild = {
        hidden: {
            opacity: 0,
            y: 0, // Start from original position
            transition: {
                ease: "easeIn"
            },
        },
        visible: {
            opacity: opacity,
            y: yDown, // Move down
            transition: {
                duration: 1,
                delay: 0, // Delay to start after the first animation ends
                ease: [0.25, 0.1, 0.25, 1] // Cubic-bezier curve for fast-to-slow effect
            },
            transitionEnd: {
                color: '#ffffeb' // Change color after moving down
            }
        },
        colorChange: {
            opacity: [1, 0.5, 1], // Flicker effect
            transition: {
                duration: 0.5,
                yoyo: Infinity
            }
        }
    };

    const bannerThirdChild = {
        hidden: {
            opacity: 0,
            y: 0, // Start from below
            transition: {
                ease: "easeIn"
            },
        },
        visible: {
            opacity: opacity,
            y: yUp, // Move up
            transition: {
                duration: 1,
                delay: 0, // Delay to start after the first animation ends
                ease: [0.25, 0.1, 0.25, 1] // Cubic-bezier curve for fast-to-slow effect
            },
            transitionEnd: {
                color: '#d18d29' // Change color after moving up
            }
        },
        colorChange: {
            opacity: [1, 0.5, 1], // Flicker effect
            transition: {
                duration: 0.5,
                yoyo: Infinity
            }
        }
    };

    const { scrollYProgress } = useScroll();
    
    return (
        <div className='flex flex-col items-center min-h-screen mx-auto bg-secondary'>
            <section className='mt-20 min-h-[20vh] md:min-h-[30vh] lg:min-h-[30vh] xl:min-h-[55vh] 2xl:min-h-[55vh]'>
                <div className='px-2 flex uppercase overflow-hidden font-lemonmilk tracking-tighter text-[calc(12vw)] md:text-[calc(10vw)] lg:text-[calc(10vw)] z-10 text-light'>
                    <motion.div
                        variants={banner}
                        initial="hidden"
                        animate="visible"
                        className="px-2 uppercase overflow-hidden font-bold tracking-tighter text-[calc(12vw)] md:text-[calc(10vw)] lg:text-[calc(10vw)] z-10">
                        {letters.map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={bannerChild}
                                className='text-light font-lemonmilk'>
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
                <div className='flex items-center justify-center mt-8'>
                    <motion.div
                        variants={banner}
                        initial="hidden"
                        animate="visible"
                        className="px-2 absolute uppercase overflow-hidden font-bold tracking-tighter text-[calc(12vw)] md:text-[calc(10vw)] lg:text-[calc(10vw)] z-10">
                        {letters2.map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={bannerChild}
                                className='text-primary font-lemonmilk'>
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={bannerSecondChild}
                        className="px-2 absolute uppercase overflow-hidden font-bold tracking-tighter flex text-[calc(12vw)] md:text-[calc(10vw)] lg:text-[calc(10vw)] z-0">
                        {letters2.map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={bannerSecondChild}
                                animate="colorChange"
                                className='text-transparent font-lemonmilk text-stroke-light'>
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={bannerThirdChild}
                        className="px-2 absolute uppercase overflow-hidden font-bold tracking-tighter flex text-[calc(12vw)] md:text-[calc(10vw)] lg:text-[calc(10vw)] z-0">
                        {letters2.map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={bannerThirdChild}
                                animate="colorChange"
                                className='text-transparent font-lemonmilk text-stroke'>
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className='w-full mb-40'>
                <div className="min-h-screen px-4 py-12 bg-secondary">
                <motion.div
                    initial="initial"
                    animate="animate"
                    transition={{
                        staggerChildren: 0.3,
                        }}
                    className="grid max-w-6xl grid-cols-12 gap-4 mx-auto grid-flow-dense"
                >
                    <HeaderBlock />
                    <SocialsBlock />
                    <AboutBlock />
                    <LocationBlock />
                    {/* <EmailListBlock /> */}
                    <ContactBlock />
                </motion.div>
                </div>
            </section>

            <motion.div
                className="z-10 progress-bar"
                style={{ scaleX: scrollYProgress }}
            />


        </div>
    );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};
  
  const HeaderBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6 font-alata">
      <img
        src="./src/assets/logo.png"
        alt="avatar"
        className="mb-4 size-[calc(5vw)] md:size-[calc(2vw)] lg:size-[calc(1.5vw)] xl:size-[calc(3vw)] rounded-full"
      />
      <h1 className="mb-12 text-[calc(4vw)] md:text-[calc(2vw)] lg:text-[calc(1.25vw)] xl:text-[calc(1.5vw)] text-light font-medium leading-tight">
        <span>Hello</span>
        <motion.span
          animate={{ rotate: [0, 0, 15, -15, 15, -15, 0, 0], scale: [1, 1.5, 1.5, 1.5, 1.5, 1]}}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ display: 'inline-block', transformOrigin: 'bottom' }}
        >
          👋{" "}
        </motion.span>
        <span className="text-zinc-400 text-[calc(4vw)] md:text-[calc(2vw)] lg:text-[calc(1.25vw)] xl:text-[calc(1.5vw)]">
         {" "} Tell us your vision for your brand, and we will collaborate with you to develop a customized strategy that propels you forward in the digital landscape. 
        </span>
      </h1>
      <a
        href="#"
        className="flex items-center gap-1 text-primary hover:underline text-[calc(2vw)] md:text-[calc(1.5vw)] lg:text-[calc(1vw)] xl:text-[calc(1.25vw)]"
      >
          <Link to={"/contact-us"}>
            Contact us
          </Link>
          <FiArrowRight />
      </a>
    </Block>
  );
  
  const SocialsBlock = () => (
    <>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-12 md:col-span-6"  // Adjusted for full width on smaller screens
        style={{
            background: 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)'
          }}
      >
        <a
          href="https://www.instagram.com/frameflowdigital/"
          className="grid h-full text-3xl text-white place-content-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiInstagram />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-[#2868B2] md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full text-3xl text-white place-content-center"
        >
          <SiLinkedin />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-zinc-50 md:col-span-3"
      >
        <a
          href="https://www.tiktok.com/@frameflowdigital"
          className="grid h-full text-3xl text-black place-content-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTiktok />
        </a>
      </Block>
      {/* Twitter Block Removed */}
    </>
  );
  
  const AboutBlock = () => {
    return (
      <Block className="flex flex-col space-y-2 col-span-12 text-3xl leading-snug bg-primary p-8 font-alata text-[calc(4vw)] md:text-[calc(1.5vw)] lg:text-[calc(1vw)] xl:text-[calc(1.5vw)]">
        <span className="font-bold text-secondary">
          STAND OUT IN THE DIGITAL STAMPEDE.
        </span>
        <span className="text-light">
          FrameFlow doesn't just build brands, we cultivate captivating experiences. Through strategic content creation, flawless web design, and meticulous social media management, we elevate your brand identity and propel it toward unparalleled success.
        </span>
      </Block>
    );
  };
  
  const LocationBlock = () => (
    <Block 
      className="col-span-12 flex flex-col items-center justify-center gap-4 md:col-span-3 text-[calc(8vw)] md:text-[calc(2vw)] lg:text-[calc(1.25vw)]"
      style={{ 
        backgroundImage: "url('./src/assets/toronto-vector.png')", 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
      }}
    >
      <FiMapPin className="size-[calc(6vw)] md:size-[calc(2vw)] lg:size-[calc(1.5vw)] xl:size-[calc(2vw)] mb-4 font-bold font-alata text-light" />
      <p className="text-[calc(6vw)] md:text-[calc(2vw)] lg:text-[calc(1.25vw)] font-bold text-center text-light">Toronto</p>
    </Block>
  );
  
  {/* const EmailListBlock = () => (
    <Block className="col-span-12 md:col-span-9">
      <p className="mb-3 text-lg">Join my mailing list</p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-2"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
        />
        <button
          type="submit"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded whitespace-nowrap bg-zinc-50 text-zinc-900 hover:bg-zinc-300"
        >
          <FiMail /> Join the list
        </button>
      </form>
    </Block>
  ); */}

  const ContactBlock = () => (
    <Block         
      whileHover={{
        scale: 1.1,
      }} 
      className="col-span-12 md:col-span-9"
    >
      <button
        type="submit"
        className="flex items-center gap-2 rounded bg-zinc-800 w-full px-2 py-8 font-medium text-light text-[calc(4vw)] md:text-[calc(1.5vw)] lg:text-[calc(1vw)] xl:text-[calc(1.5vw)]"
      >
        Let FrameFlow be the architect of your digital presence.
      </button>
    </Block>
  );
  


export default transition(HomePage);
