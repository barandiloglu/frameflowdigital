import { motion, useAnimation, MotionProps, easeInOut } from "framer-motion";
import transition from "../transition";
import { useRef, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { twMerge } from "tailwind-merge";

import baran from "../assets/team/baran.jpg";
import yigit from "../assets/team/yigit.jpg";
import gul from "../assets/team/gul.jpg";
import kubra from "../assets/team/kubra.jpg";

import { SlSocialLinkedin } from "react-icons/sl";
import { MdEmail } from "react-icons/md";

const photoLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.1, delay: 0.75 },
  },
};

const photoRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.1, delay: 0.75 },
  },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.75, // Adjust stagger timing for smoother flow
      ease: [0.42, 0, 0.58, 1], // Smooth cubic-bezier easing
    },
  },
};

const text = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const line = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1, ease: "easeInOut" } },
};

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

  const h2Variants = {
    hidden: { x: 100, opacity: 0 },
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
    <div className="flex min-h-screen w-full flex-col bg-secondary p-4">
      <div className="flex items-center text-light">
        <div className="flex flex-col">
          <h1 className="font-lemonmilk text-[calc(6vw)] md:text-[calc(4vw)] lg:text-[calc(4vw)] xl:text-[calc(4vw)] 2xl:text-[calc(3vw)]">
            WHY CHOOSE
          </h1>
          <div className="flex flex-row">
            <motion.h1
              className="font-quicksand text-[calc(6vw)] font-bold md:text-[calc(4vw)] lg:text-[calc(4vw)] xl:text-[calc(4vw)] 2xl:text-[calc(3vw)]"
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
              className="h-[calc(6.5vw)] w-[calc(6.5vw)] border-red-500 md:h-[calc(4.5vw)] md:w-[calc(4.5vw)] lg:h-[calc(4vw)] lg:w-[calc(4vw)] xl:h-[calc(4vw)] xl:w-[calc(4vw)] 2xl:h-[calc(3vw)] 2xl:w-[calc(3vw)]"
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
          className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 xl:h-48 xl:w-48 2xl:h-64 2xl:w-64"
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
        className="mt-4 flex flex-row text-light"
        initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move to its original position
        transition={{ duration: 1, ease: easeInOut }} // Customize duration and easing
      >
        <HeaderBlock />
      </motion.div>
      <motion.div className="mt-8 flex flex-col items-end justify-end text-light">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={h2Variants}
          onAnimationComplete={handleH1AnimationComplete}
          className="font-lemonmilk text-[calc(6vw)] md:text-[calc(4vw)] lg:text-[calc(4vw)] xl:text-[calc(4vw)] 2xl:text-[calc(3vw)]"
        >
          MEET OUR TEAM
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
      >
        <TeamMemberOne />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
      >
        <TeamMemberTwo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeInOut" }}
      >
        <TeamMemberThree />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
      >
        <TeamMemberFour />
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
    <div className="flex flex-col space-y-4 text-lg font-medium leading-tight text-light md:text-lg lg:text-2xl xl:text-xl">
      <span className="font-josefin text-zinc-200">
        At FrameFlow, we understand the challenges of being a small business.
        This knowledge drives us to align our goals with our clients'
        expectations, providing them with detailed insights into how our system
        works when necessary.
      </span>
      <span className="font-josefin text-zinc-200">
        Starting with just two people, we quickly expanded to a team of four. To
        ensure the highest service quality, we decided to slow down and
        reevaluate our approach. Our aim is to continually improve our service
        levels through dynamic teamwork and innovative strategies.
      </span>
      <span className="font-josefin text-zinc-200">
        Instead of blindly fulfilling client requests, we take the time to guide
        them towards the best possible outcomes, especially when their initial
        ideas might not lead to the desired results.
      </span>
      <span className="font-josefin text-zinc-200">
        We never settle for "good enough." In fact, complacency is our biggest
        fear.
      </span>
      <span className="font-josefin text-zinc-200">
        Let's get to know each other better so we can provide you with the best
        possible service!
      </span>
    </div>
  </Block>
);

const TeamMemberOne = () => (
  <Block className="col-span-12 row-span-2 mt-4 w-full rounded-xl md:col-span-6">
    <motion.div className="mt-4 flex flex-col text-light">
      <motion.div className="flex flex-row">
        <motion.div
          className="relative w-1/4"
          variants={photoLeft}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            className="w-full rounded-lg"
            src={baran}
            alt="Gradient Image"
          />
          <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-l from-transparent to-zinc-800 opacity-100"></div>
        </motion.div>
        <motion.div className="flex w-full flex-col items-start p-4">
          <motion.h1
            variants={text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="font-lemonmilk text-base text-zinc-200 sm:text-[calc(4vw)] md:text-[calc(3vw)] lg:text-[calc(2.5vw)] xl:text-[calc(2vw)] 2xl:text-[calc(1.5vw)]"
          >
            BARAN DILOGLU
          </motion.h1>
          <motion.h1
            variants={text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-6 font-josefin text-base italic text-zinc-400 sm:text-[calc(3vw)] md:text-[calc(2.5vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] 2xl:text-[calc(1vw)]"
          >
            Co-Founder
          </motion.h1>
          <motion.div className="mt-4 flex flex-col items-start space-y-4">
            <motion.div className="flex flex-row items-center space-x-2">
              <motion.span>
                <MdEmail className="h-[calc(3vw)] w-[calc(3vw)] md:h-[calc(2.5vw)] md:w-[calc(2.5vw)] lg:h-[calc(2vw)] lg:w-[calc(2vw)] xl:h-[calc(1.5vw)] xl:w-[calc(1.5vw)] 2xl:h-[calc(1vw)] 2xl:w-[calc(1vw)]" />
              </motion.span>
              <motion.span className="font-josefin text-base italic text-zinc-400 sm:text-[calc(3vw)] md:text-[calc(2.5vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] 2xl:text-[calc(0.75vw)]">
                Email: baran@frameflow.ca
              </motion.span>
            </motion.div>

            <motion.div
              className="flex cursor-pointer flex-row items-center space-x-2"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/barandiloglu/",
                  "_blank",
                )
              }
            >
              <motion.span>
                <SlSocialLinkedin className="h-[calc(3vw)] w-[calc(3vw)] md:h-[calc(2.5vw)] md:w-[calc(2.5vw)] lg:h-[calc(2vw)] lg:w-[calc(2vw)] xl:h-[calc(1.5vw)] xl:w-[calc(1.5vw)] 2xl:h-[calc(1vw)] 2xl:w-[calc(1vw)]" />
              </motion.span>
              <motion.span className="font-josefin text-base italic text-zinc-400 underline sm:text-[calc(3vw)] md:text-[calc(2.5vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] 2xl:text-[calc(0.75vw)]">
                LinkedIn
              </motion.span>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-2 h-[2px] w-full bg-zinc-400"
            variants={line}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          />
          <motion.div className="flex w-full flex-col items-start justify-start md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
            <motion.div className="flex w-full flex-col md:w-full lg:w-1/2 xl:w-3/4 2xl:w-3/4">
              <motion.div
                className="mt-4 font-josefin text-lg text-zinc-200 md:text-lg lg:text-2xl xl:text-xl"
                variants={text}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                With an inventive mind and a passion for cutting-edge
                technology, Baran Diloğlu is the driving force behind FrameFlow
                Digital’s most ambitious projects. From developing seamless web
                applications to ensuring flawless cloud integrations, Baran
                brings a unique blend of technical expertise and creativity to
                the table. He’s not just solving problems—he’s crafting
                innovative solutions that elevate every aspect of our digital
                strategy.
              </motion.div>
              <motion.div
                className="mt-4 font-josefin text-lg text-zinc-200 sm:w-full md:text-lg lg:text-2xl xl:text-xl"
                variants={text}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Behind the scenes, Baran’s meticulous attention to detail
                ensures that each project runs smoothly, but it’s his ability to
                fuse precision with creativity that truly sets him apart. At
                FrameFlow Digital, Baran is more than a developer—he’s the
                architect of our next big breakthrough.
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  </Block>
);

const TeamMemberTwo = () => (
  <Block className="col-span-12 row-span-2 mt-4 w-full rounded-xl md:col-span-6">
    <motion.div className="mt-4 flex flex-col text-light">
      <motion.div className="flex flex-row">
        <motion.div className="flex w-full flex-col items-end p-4">
          <motion.h1
            variants={text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="font-lemonmilk text-base text-zinc-200 sm:text-[calc(4vw)] md:text-[calc(3vw)] lg:text-[calc(2.5vw)] xl:text-[calc(2vw)] 2xl:text-[calc(1.5vw)]"
          >
            YIGIT PALA
          </motion.h1>
          <motion.h1
            variants={text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-6 font-josefin text-base italic text-zinc-400 sm:text-[calc(3vw)] md:text-[calc(2.5vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] 2xl:text-[calc(1vw)]"
          >
            Co-Founder
          </motion.h1>
          <motion.div className="mt-4 flex flex-col items-start space-y-4">
            {/* Email Section */}
            <motion.div className="flex flex-row items-center space-x-2">
              <motion.span>
                <MdEmail className="h-[calc(3vw)] w-[calc(3vw)] md:h-[calc(2.5vw)] md:w-[calc(2.5vw)] lg:h-[calc(2vw)] lg:w-[calc(2vw)] xl:h-[calc(1.5vw)] xl:w-[calc(1.5vw)] 2xl:h-[calc(1vw)] 2xl:w-[calc(1vw)]" />
              </motion.span>
              <motion.span className="font-josefin text-base italic text-zinc-400 sm:text-[calc(3vw)] md:text-[calc(2.5vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] 2xl:text-[calc(0.75vw)]">
                Email: yigit@frameflow.ca
              </motion.span>
            </motion.div>

            <motion.div
              className="flex cursor-pointer flex-row items-center space-x-2"
              onClick={() =>
                window.open("https://www.linkedin.com/in/palayigit/", "_blank")
              }
            >
              <motion.span>
                <SlSocialLinkedin className="h-[calc(3vw)] w-[calc(3vw)] md:h-[calc(2.5vw)] md:w-[calc(2.5vw)] lg:h-[calc(2vw)] lg:w-[calc(2vw)] xl:h-[calc(1.5vw)] xl:w-[calc(1.5vw)] 2xl:h-[calc(1vw)] 2xl:w-[calc(1vw)]" />
              </motion.span>
              <motion.span className="font-josefin text-base italic text-zinc-400 underline sm:text-[calc(3vw)] md:text-[calc(2.5vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] 2xl:text-[calc(0.75vw)]">
                LinkedIn
              </motion.span>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-2 h-[2px] w-full bg-zinc-400"
            variants={line}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          />
          <motion.div className="flex w-full flex-col items-end justify-end md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
            <motion.div className="flex w-full flex-col md:w-full lg:w-1/2 xl:w-3/4 2xl:w-3/4">
              <motion.div
                className="mt-4 font-josefin text-lg text-zinc-200 md:text-lg lg:text-2xl xl:text-xl"
                variants={text}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                With a keen eye for digital trends and a knack for creative
                strategy, Yiğit brings a fresh perspective to everything
                FrameFlow does. Whether he's crafting innovative marketing
                campaigns or diving deep into data analytics, he thrives on
                turning ambitious ideas into engaging realities.
              </motion.div>
              <motion.div
                className="mt-4 font-josefin text-lg text-zinc-200 sm:w-full md:text-lg lg:text-2xl xl:text-xl"
                variants={text}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Behind the scenes, he's the master of seamless operations, but
                his true strength lies in adding a bit of flair to even the most
                technical projects. At FrameFlow Digital, Yiğit isn’t just
                leading the charge—he’s ensuring that every click, post, and
                campaign reflects the unique edge we bring to our clients.
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative w-1/4"
          variants={photoRight}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            className="w-full rounded-lg"
            src={yigit}
            alt="Gradient Image"
          />
          <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-transparent to-zinc-800 opacity-100"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  </Block>
);

const TeamMemberThree = () => (
  <Block className="col-span-12 row-span-2 mt-4 w-full rounded-xl md:col-span-6">
    <motion.div className="mt-4 flex flex-col text-light">
      <motion.div className="flex flex-row">
        <motion.div
          className="relative w-1/4"
          variants={photoLeft}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            className="w-full rounded-lg"
            src={gul}
            alt="Gradient Image"
          />
          <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-l from-transparent to-zinc-800 opacity-100"></div>
        </motion.div>
        <motion.div className="flex w-full flex-col items-start p-4">
          <motion.h1
            variants={text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="font-lemonmilk text-base text-zinc-200 sm:text-[calc(4vw)] md:text-[calc(3vw)] lg:text-[calc(2.5vw)] xl:text-[calc(2vw)] 2xl:text-[calc(1.5vw)]"
          >
            GUL KOC NALBANT
          </motion.h1>
          <motion.h1
            variants={text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-6 font-josefin text-base italic text-zinc-400 sm:text-[calc(3vw)] md:text-[calc(2.5vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] 2xl:text-[calc(1vw)]"
          >
            Lead Art Director
          </motion.h1>
          <motion.div className="mt-4 flex flex-col items-start space-y-4">
            {/* Email Section */}
            <motion.div className="flex flex-row items-center space-x-2">
              <motion.span>
                <MdEmail className="h-[calc(3vw)] w-[calc(3vw)] md:h-[calc(2.5vw)] md:w-[calc(2.5vw)] lg:h-[calc(2vw)] lg:w-[calc(2vw)] xl:h-[calc(1.5vw)] xl:w-[calc(1.5vw)] 2xl:h-[calc(1vw)] 2xl:w-[calc(1vw)]" />
              </motion.span>
              <motion.span className="font-josefin text-base italic text-zinc-400 sm:text-[calc(3vw)] md:text-[calc(2.5vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] 2xl:text-[calc(0.75vw)]">
                Email: gul@frameflow.ca
              </motion.span>
            </motion.div>

            <motion.div
              className="flex cursor-pointer flex-row items-center space-x-2"
              onClick={() =>
                window.open("https://www.linkedin.com/in/-gul-koc-/", "_blank")
              }
            >
              <motion.span>
                <SlSocialLinkedin className="h-[calc(3vw)] w-[calc(3vw)] md:h-[calc(2.5vw)] md:w-[calc(2.5vw)] lg:h-[calc(2vw)] lg:w-[calc(2vw)] xl:h-[calc(1.5vw)] xl:w-[calc(1.5vw)] 2xl:h-[calc(1vw)] 2xl:w-[calc(1vw)]" />
              </motion.span>
              <motion.span className="font-josefin text-base italic text-zinc-400 underline sm:text-[calc(3vw)] md:text-[calc(2.5vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] 2xl:text-[calc(0.75vw)]">
                LinkedIn
              </motion.span>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-2 h-[2px] w-full bg-zinc-400"
            variants={line}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          />
          <motion.div className="flex w-full flex-col items-start justify-start md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
            <motion.div className="flex w-full flex-col md:w-full lg:w-1/2 xl:w-3/4 2xl:w-3/4">
              <motion.div
                className="mt-4 font-josefin text-lg text-zinc-200 md:text-lg lg:text-2xl xl:text-xl"
                variants={text}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Bringing boundless energy and creativity to the team, Gül is our
                go-to for all things design and client relations. With a talent
                for crafting visuals that speak volumes, she’s mastered the art
                of turning brand identities into eye-catching social media
                content.
              </motion.div>
              <motion.div
                className="mt-4 font-josefin text-lg text-zinc-200 sm:w-full md:text-lg lg:text-2xl xl:text-xl"
                variants={text}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Beyond her design skills, Gül excels in problem-solving and
                client management, making sure that every project not only meets
                expectations but exceeds them. Whether she's collaborating with
                the team or working directly with clients, her attention to
                detail and ability to juggle multiple tasks shine through. Gül’s
                passion for both design and customer service is the driving
                force behind her outstanding results at FrameFlow Digital.
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  </Block>
);

const TeamMemberFour = () => (
  <Block className="col-span-12 row-span-2 mt-4 w-full rounded-xl md:col-span-6">
    <motion.div className="mt-4 flex flex-col text-light">
      <motion.div className="flex flex-row">
        <motion.div className="flex w-full flex-col items-end p-4">
          <motion.h1
            variants={text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="font-lemonmilk text-base text-zinc-200 sm:text-[calc(4vw)] md:text-[calc(3vw)] lg:text-[calc(2.5vw)] xl:text-[calc(2vw)] 2xl:text-[calc(1.5vw)]"
          >
            KUBRA BILBIK
          </motion.h1>
          <motion.h1
            variants={text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-6 font-josefin text-base italic text-zinc-400 sm:text-[calc(3vw)] md:text-[calc(2.5vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] 2xl:text-[calc(1vw)]"
          >
            Web Development Coordinator
          </motion.h1>
          <motion.div className="mt-4 flex flex-col items-start space-y-4">
            {/* Email Section */}
            <motion.div className="flex flex-row items-center space-x-2">
              <motion.span>
                <MdEmail className="h-[calc(3vw)] w-[calc(3vw)] md:h-[calc(2.5vw)] md:w-[calc(2.5vw)] lg:h-[calc(2vw)] lg:w-[calc(2vw)] xl:h-[calc(1.5vw)] xl:w-[calc(1.5vw)] 2xl:h-[calc(1vw)] 2xl:w-[calc(1vw)]" />
              </motion.span>
              <motion.span className="font-josefin text-base italic text-zinc-400 sm:text-[calc(3vw)] md:text-[calc(2.5vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] 2xl:text-[calc(0.75vw)]">
                Email: kubra@frameflow.ca
              </motion.span>
            </motion.div>

            <motion.div
              className="flex cursor-pointer flex-row items-center space-x-2"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/kubra-bilbik/",
                  "_blank",
                )
              }
            >
              <motion.span>
                <SlSocialLinkedin className="h-[calc(3vw)] w-[calc(3vw)] md:h-[calc(2.5vw)] md:w-[calc(2.5vw)] lg:h-[calc(2vw)] lg:w-[calc(2vw)] xl:h-[calc(1.5vw)] xl:w-[calc(1.5vw)] 2xl:h-[calc(1vw)] 2xl:w-[calc(1vw)]" />
              </motion.span>
              <motion.span className="font-josefin text-base italic text-zinc-400 underline sm:text-[calc(3vw)] md:text-[calc(2.5vw)] lg:text-[calc(2vw)] xl:text-[calc(1.5vw)] 2xl:text-[calc(0.75vw)]">
                LinkedIn
              </motion.span>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-2 h-[2px] w-full bg-zinc-400"
            variants={line}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          />
          <motion.div className="flex w-full flex-col items-end justify-end md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
            <motion.div className="flex w-full flex-col md:w-full lg:w-1/2 xl:w-3/4 2xl:w-3/4">
              <motion.div
                className="mt-4 font-josefin text-lg text-zinc-200 md:text-lg lg:text-2xl xl:text-xl"
                variants={text}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Kübra blends mathematical precision with software engineering
                expertise to keep FrameFlow’s web development on the cutting
                edge. With a strong foundation in both front-end and back-end
                development, she ensures every site is responsive, scalable, and
                user-friendly.
              </motion.div>
              <motion.div
                className="mt-4 font-josefin text-lg text-zinc-200 sm:w-full md:text-lg lg:text-2xl xl:text-xl"
                variants={text}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                As our Web Development Coordinator, she orchestrates
                cross-functional teams, driving projects from strategy to
                execution. Her commitment to improving user experiences and
                delivering high-performing websites shines through in every
                project, making sure our clients are always a step ahead.
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative w-1/4"
          variants={photoRight}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            className="w-full rounded-lg"
            src={kubra}
            alt="Gradient Image"
          />
          <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-transparent to-zinc-800 opacity-100"></div>
        </motion.div>
      </motion.div>
    </motion.div>
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
        className,
      )}
      {...rest}
    />
  );
};

export default transition(WhyUs);
