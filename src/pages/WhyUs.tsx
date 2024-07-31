import { motion } from 'framer-motion';
import transition from '../transition';

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
  return (
    <div className="flex flex-col min-h-screen w-full bg-secondary p-4">
        <div className='w-3/4 flex flex-col'>
            <div className="flex items-center px-4">
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
            <div className="flex flex-col ">
                <motion.p
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.2 }}
                    variants={textVariant}
                    className="text-[calc(3.5vw)] md:text-[calc(3vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] text-light mb-4"
                >
                    At FrameFlow, we understand the challenges of being a small business. This knowledge drives us to align our goals with our clients' expectations, providing them with detailed insights into how our system works when necessary.
                </motion.p>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.4 }}
                    variants={textVariant}
                    className="text-[calc(3.5vw)] md:text-[calc(3vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] text-light mb-4"
                >
                    Starting with just two people, we quickly expanded to a team of four. To ensure the highest service quality, we decided to slow down and reevaluate our approach. Our aim is to continually improve our service levels through dynamic teamwork and innovative strategies.
                </motion.p>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.6 }}
                    variants={textVariant}
                    className="text-[calc(3.5vw)] md:text-[calc(3vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] text-light mb-4"
                >
                    Instead of blindly fulfilling client requests, we take the time to guide them towards the best possible outcomes, especially when their initial ideas might not lead to the desired results.
                </motion.p>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.8 }}
                    variants={textVariant}
                    className="text-[calc(3.5vw)] md:text-[calc(3vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] text-light mb-4"
                >
                    We never settle for "good enough." In fact, complacency is our biggest fear.
                </motion.p>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 1 }}
                    variants={textVariant}
                    className="text-[calc(3.5vw)] md:text-[calc(3vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] text-light"
                >
                    Let's get to know each other better so we can provide you with the best possible service!
                </motion.p>
            </div>
        </div>

    </div>
  );
};

export default transition(WhyUs);
