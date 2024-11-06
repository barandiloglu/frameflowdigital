import { motion } from 'framer-motion';
import transition from '../transition';
import { useRef, useState, useEffect } from 'react';

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const questionMarkVariant = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: {
      opacity: 1,
      scale: 1.5,
      x: 0,
      transition: {
        duration: 1,
        type: 'spring',
        stiffness: 100,
        delay: 0.5,
      },
    },
  };

const WhyUs = () => {
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0
      });

    const divRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(dimensions.height + 100);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.clientHeight);
        }
    }, []);

  
    useEffect(() => {
      if (!divRef.current) return;
  
      const { width, height, top, left } = divRef.current.getBoundingClientRect();
  
      setDimensions({ width, height, top, left });
    }, []);


  return (
    <div className="flex flex-col w-full min-h-screen p-4 bg-secondary">
        <div className='flex flex-col w-full'>
            <div className="flex items-center px-4 font-lemonmilk">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    variants={textVariant}
                    className="text-[calc(5vw)] md:text-[calc(3.5vw)] lg:text-[calc(3vw)] xl:text-[calc(3vw)] font-bold text-light mb-6"
                >
                    Why Choose Frame Flow
                </motion.h1>
                <motion.span
                    initial="hidden"
                    animate="visible"
                    whileHover="vibrate"
                    variants={questionMarkVariant}
                    style={{ color: '#ffffeb' }}
                    className="text-[calc(5vw)] md:text-[calc(3.5vw)] lg:text-[calc(3vw)] xl:text-[calc(3vw)] font-bold mb-6"
                >
                    <motion.span
                    animate={{ color: '#d18d29' }}
                    transition={{ delay: 1, duration: 0.5 }}
                    >
                        ?
                    </motion.span>
                </motion.span>
            </div>
            <div className="flex flex-col w-full px-2 font-alata">
                <div ref={divRef} className="flex xl:w-full sm:w-full">
                    <motion.svg
                        className="svg-border"
                        width={dimensions.width + 100}
                        height={(window.innerHeight / 4) * 3}
                        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <filter
                                id="neon"
                                filterUnits="userSpaceOnUse"
                                x="-50%"
                                y="-50%"
                                width="200%"
                                height="200%"
                            >
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="5"
                                    result="blur5"
                                />
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="10"
                                    result="blur10"
                                />
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="20"
                                    result="blur20"
                                />
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="30"
                                    result="blur30"
                                />
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="50"
                                    result="blur50"
                                />

                                <feMerge result="blur-merged">
                                    <feMergeNode in="blur10" />
                                    <feMergeNode in="blur20" />
                                    <feMergeNode in="blur30" />
                                    <feMergeNode in="blur50" />
                                </feMerge>

                                <feColorMatrix
                                    result="red-blur"
                                    in="blur-merged"
                                    type="matrix"
                                    values="1 0 0 0 0
                                            0 0.06 0 0 0
                                            0 0 0.44 0 0
                                            0 0 0 1 0"
                                />
                                <feMerge>
                                    <feMergeNode in="red-blur" />
                                    <feMergeNode in="blur5" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        <svg className="neon" x={0} y={0}>
                            <motion.path
                                d={`M 0 0 h ${dimensions.width} v ${dimensions.height} h -${dimensions.width} v -${dimensions.height}`}
                                stroke="#d18d29"
                                strokeWidth="3"
                                animate={{
                                    pathLength: [0, 1],
                                    pathOffset: [0, 1],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    ease: "easeInOut",
                                    repeat: 0
                                }}
                            />
                        </svg>

                        <foreignObject x="8" y="0" width={dimensions.width} height={dimensions.height}>
                            <div className='flex flex-col w-full space-y-8'>
                                <motion.p
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 1, delay: 0.6 }}
                                    variants={textVariant}
                                    className="text-[calc(3.5vw)] md:text-[calc(3vw)] lg:text-[calc(2vw)] xl:text-[calc(2vw)] text-light mb-4"
                                >
                                    At FrameFlow, we understand the challenges of being a small business. This knowledge drives us to align our goals with our clients' expectations, providing them with detailed insights into how our system works when necessary.
                                </motion.p>
                                <motion.p
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 1, delay: 0.6 }}
                                    variants={textVariant}
                                    className="text-[calc(3.5vw)] md:text-[calc(3vw)] lg:text-[calc(2vw)] xl:text-[calc(2vw)] text-light mb-4"
                                >
                                    Starting with just two people, we quickly expanded to a team of four. To ensure the highest service quality, we decided to slow down and reevaluate our approach. Our aim is to continually improve our service levels through dynamic teamwork and innovative strategies.
                                </motion.p>
                                <motion.p
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 1, delay: 0.6 }}
                                    variants={textVariant}
                                    className="text-[calc(3.5vw)] md:text-[calc(3vw)] lg:text-[calc(2vw)] xl:text-[calc(2vw)] text-light mb-4"
                                >
                                    Instead of blindly fulfilling client requests, we take the time to guide them towards the best possible outcomes, especially when their initial ideas might not lead to the desired results.
                                </motion.p>
                                <motion.p
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 1, delay: 0.8 }}
                                    variants={textVariant}
                                    className="text-[calc(3.5vw)] md:text-[calc(3vw)] lg:text-[calc(2vw)] xl:text-[calc(2vw)] text-light mb-4"
                                >
                                    We never settle for "good enough." In fact, complacency is our biggest fear.
                                </motion.p>
                                <motion.p
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 1, delay: 1 }}
                                    variants={textVariant}
                                    className="text-[calc(3.5vw)] md:text-[calc(3vw)] lg:text-[calc(2vw)] xl:text-[calc(2vw)] text-light"
                                >
                                    Let's get to know each other better so we can provide you with the best possible service!
                                </motion.p>
                            </div>
                        </foreignObject>
                    </motion.svg>
                </div>
            </div>
        </div>

    </div>
  );
};

export default transition(WhyUs);
