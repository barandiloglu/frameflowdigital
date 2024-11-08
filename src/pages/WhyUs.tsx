import { motion, useAnimation, MotionProps } from "framer-motion";
import transition from "../transition";
import { useRef, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { twMerge } from "tailwind-merge";

const WhyUs = () => {
  const [marginTop, setMarginTop] = useState("0px");

  useEffect(() => {
    const updateMargin = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        setMarginTop(`calc(0.1 * 11vw)`); // 2xl
      } else if (width >= 1280) {
        setMarginTop(`calc(0.1 * 12vw)`); // xl
      } else if (width >= 1024) {
        setMarginTop(`calc(0.1 * 12vw)`); // lg
      } else if (width >= 768) {
        setMarginTop(`calc(0.1 * 8vw)`); // md
      } else {
        setMarginTop(`calc(0.1 * 14vw)`); // default (smaller screens)
      }
    };

    updateMargin();
    window.addEventListener("resize", updateMargin);

    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  const imgControls = useAnimation();

  useEffect(() => {
    imgControls.stop();
  }, [imgControls]);

  const h1Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const handleH1AnimationComplete = () => {
    imgControls.start({
      opacity: [0, 1, 1, 0, 0, 1],
      transition: {
        duration: 0.75,
        repeat: 1,
        ease: "easeInOut",
      },
    });
  };

  return (
    <div className="flex flex-col w-full min-h-screen p-4 bg-secondary">
      <div className="flex text-light items-center">
        <div className="flex flex-col">
          <h1 className=" font-lemonmilk text-[calc(6vw)] md:text-[calc(4vw)] lg:text-[calc(4vw)] xl:text-[calc(4vw)] 2xl:text-[calc(3vw)] ">
            WHY CHOOSE
          </h1>
          <div className="flex flex-row">
            <motion.h1
              className="font-quicksand font-bold text-[calc(6vw)] md:text-[calc(4vw)] lg:text-[calc(4vw)] xl:text-[calc(4vw)] 2xl:text-[calc(3vw)]"
              initial="hidden"
              animate="visible"
              variants={h1Variants}
              onAnimationComplete={handleH1AnimationComplete}
            >
              frameflo
            </motion.h1>
            <motion.img
              src={logo}
              alt="Logo"
              initial={{ opacity: 0 }}
              animate={imgControls}
              className="border-red-500 w-[calc(6.5vw)] h-[calc(6.5vw)] md:w-[calc(4.5vw)] md:h-[calc(4.5vw)] lg:w-[calc(4vw)] lg:h-[calc(4vw)] xl:w-[calc(4vw)] xl:h-[calc(4vw)] 2xl:w-[calc(3vw)] 2xl:h-[calc(3vw)]"
              style={{ marginTop }}
            />
          </div>

          {/* Adjust size and margin as needed */}
        </div>
        <motion.svg
          viewBox="-25.6 -25.6 563.20 563.20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-48 xl:h-48 2xl:w-64 2xl:h-64"
        >
          {/* Animate this path */}
          <motion.path
            d="M396.138,85.295c-13.172-25.037-33.795-45.898-59.342-61.03C311.26,9.2,280.435,0.001,246.98,0.001 c-41.238-0.102-75.5,10.642-101.359,25.521c-25.962,14.826-37.156,32.088-37.156,32.088c-4.363,3.786-6.824,9.294-6.721,15.056 c0.118,5.77,2.775,11.186,7.273,14.784l35.933,28.78c7.324,5.864,17.806,5.644,24.875-0.518c0,0,4.414-7.978,18.247-15.88 c13.91-7.85,31.945-14.173,58.908-14.258c23.517-0.051,44.022,8.725,58.016,20.717c6.952,5.941,12.145,12.594,15.328,18.68 c3.208,6.136,4.379,11.5,4.363,15.574c-0.068,13.766-2.742,22.77-6.603,30.442c-2.945,5.729-6.789,10.813-11.738,15.744 c-7.384,7.384-17.398,14.207-28.634,20.479c-11.245,6.348-23.365,11.932-35.612,18.68c-13.978,7.74-28.77,18.858-39.701,35.544 c-5.449,8.249-9.71,17.686-12.416,27.641c-2.742,9.964-3.98,20.412-3.98,31.071c0,11.372,0,20.708,0,20.708 c0,10.719,8.69,19.41,19.41,19.41h46.762c10.719,0,19.41-8.691,19.41-19.41c0,0,0-9.336,0-20.708c0-4.107,0.467-6.755,0.917-8.436 c0.773-2.512,1.206-3.14,2.47-4.668c1.29-1.452,3.895-3.674,8.698-6.331c7.019-3.946,18.298-9.276,31.07-16.176 c19.121-10.456,42.367-24.646,61.972-48.062c9.752-11.686,18.374-25.758,24.323-41.968c6.001-16.21,9.242-34.431,9.226-53.96 C410.243,120.761,404.879,101.971,396.138,85.295z"
            stroke="#d18d29"
            strokeWidth="10.24"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="M228.809,406.44c-29.152,0-52.788,23.644-52.788,52.788c0,29.136,23.637,52.772,52.788,52.772 c29.136,0,52.763-23.636,52.763-52.772C281.572,430.084,257.945,406.44,228.809,406.44z"
            stroke="#d18d29"
            strokeWidth="10.24"
            fill="#353232"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </motion.svg>
      </div>
      <motion.div
        className="flex flex-row text-light mt-4"
        initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move to its original position
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }} // Customize duration and easing
      >
        <HeaderBlock />
      </motion.div>
    </div>
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src={logo}
      alt="avatar"
      className="mb-4 size-[calc(5vw)] md:size-[calc(2vw)] lg:size-[calc(2.5vw)] xl:size-[calc(3vw)]"
    />
    <div className=" flex flex-col space-y-4 text-lg md:text-xl lg:text-3xl xl:text-3xl text-light font-medium leading-tight">
      <span className="text-zinc-400 text-lg md:text-lg lg:text-2xl xl:text-xl font-josefin">
        {" "}
        At FrameFlow, we understand the challenges of being a small business.
        This knowledge drives us to align our goals with our clients'
        expectations, providing them with detailed insights into how our system
        works when necessary.
      </span>
      <span className="text-zinc-400 text-lg md:text-lg lg:text-2xl xl:text-xl font-josefin">
        {" "}
        Starting with just two people, we quickly expanded to a team of four. To
        ensure the highest service quality, we decided to slow down and
        reevaluate our approach. Our aim is to continually improve our service
        levels through dynamic teamwork and innovative strategies.
      </span>
      <span className="text-zinc-400 text-lg md:text-lg lg:text-2xl xl:text-xl font-josefin">
        {" "}
        Instead of blindly fulfilling client requests, we take the time to guide
        them towards the best possible outcomes, especially when their initial
        ideas might not lead to the desired results.
      </span>
      <span className="text-zinc-400 text-lg md:text-lg lg:text-2xl xl:text-xl font-josefin">
        {" "}
        We never settle for "good enough." In fact, complacency is our biggest
        fear.
      </span>
      <span className="text-zinc-400 text-lg md:text-lg lg:text-2xl xl:text-xl font-josefin">
        {" "}
        Let's get to know each other better so we can provide you with the best
        possible service!
      </span>
    </div>
  </Block>
);

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

export default transition(WhyUs);
