import { useEffect, useState } from "react";
import { MotionProps, motion, useAnimation, useScroll } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiMapPin } from "react-icons/fi";
import { SiInstagram, SiLinkedin, SiTiktok } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import transition from "../transition";

import logo from "../assets/logo.png";
import img1 from "../assets/services/1.png";
import img2 from "../assets/services/2.png";
import img3 from "../assets/services/3.png";
import img4 from "../assets/services/4.png";
import img5 from "../assets/services/5.png";
import img7 from "../assets/services/7.png";
import torontoVector from "../assets/toronto-vector.png";

import "../index.css";
import "../css/HomePage.css";

const services = [
  {
    heading: "SOCIAL MEDIA MANAGEMENT",
    subheading: "See our projects",
    imgSrc: img1,
    scrolltoRef: "socialMediaRef",
  },
  {
    heading: "CONTENT CREATION",
    subheading: "Our services",
    imgSrc: img2,
    scrolltoRef: "contentCreationRef",
  },
  {
    heading: "SEARCH ENGINE OPTIMIZATION",
    subheading: "Why choose us?",
    imgSrc: img3,
    scrolltoRef: "seoRef",
  },
  {
    heading: "WEB DESIGN",
    subheading: "Get in touch",
    imgSrc: img4,
    scrolltoRef: "webRef",
  },
  {
    heading: "PHOTOGRAPHY/VIDEOGRAPHY",
    subheading: "Get in touch",
    imgSrc: img5,
    scrolltoRef: "pvRef",
  },
  {
    heading: "PHOTO/VIDEO EDITING",
    subheading: "Get in touch",
    imgSrc: img7,
    scrolltoRef: "editRef",
  },
];

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
      if (width < 768) {
        setYDown(30);
        setYUp(-30);
      } else if (width < 1024) {
        setYDown(45);
        setYUp(-45);
      } else if (width < 1280) {
        setYDown(50);
        setYUp(-50);
      } else {
        setYDown(100);
        setYUp(-100);
      }
    };

    updateYValues();

    window.addEventListener("resize", updateYValues);
    return () => window.removeEventListener("resize", updateYValues);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
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
      setYDown(newYDown);
      setYUp(newYUp);

      const newOpacity = scrollPercentage === 1 ? 0 : 1 - scrollPercentage;
      setOpacity(newOpacity);

      controlsDown.start({
        y: newYDown,
        opacity: newOpacity,
        transition: { ease: [0.25, 0.1, 0.25, 1], delay: 0, duration: 0.1 },
      });

      controlsUp.start({
        y: newYUp,
        opacity: newOpacity,
        transition: { ease: [0.25, 0.1, 0.25, 1], delay: 0, duration: 0.1 },
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controlsDown, controlsUp]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
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
        transition: { ease: [0.25, 0.1, 0.25, 1], delay: 0, duration: 0.1 },
      });

      controlsUp.start({
        y: newYUp,
        opacity: newOpacity,
        transition: { ease: [0.25, 0.1, 0.25, 1], delay: 0, duration: 0.1 },
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controlsDown, controlsUp]);

  const banner = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delay: 0.75 },
    },
  };

  const bannerChild = {
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        ease: "easeIn",
      },
    },
    visible: {
      opacity: [0, 1, 0.5, 1],
      y: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  const bannerSecondChild = {
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        ease: "easeIn",
      },
    },
    visible: {
      opacity: opacity,
      y: yDown,
      transition: {
        duration: 1,
        delay: 0,
        ease: [0.25, 0.1, 0.25, 1],
      },
      transitionEnd: {
        color: "#ffffeb",
      },
    },
    colorChange: {
      opacity: [1, 0.5, 1],
      transition: {
        duration: 0.5,
        yoyo: Infinity,
      },
    },
  };

  const bannerThirdChild = {
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        ease: "easeIn",
      },
    },
    visible: {
      opacity: opacity,
      y: yUp,
      transition: {
        duration: 1,
        delay: 0,
        ease: [0.25, 0.1, 0.25, 1],
      },
      transitionEnd: {
        color: "#d18d29",
      },
    },
    colorChange: {
      opacity: [1, 0.5, 1],
      transition: {
        duration: 0.5,
        yoyo: Infinity,
      },
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      textShadow: [
        "0px 0px 0px rgba(0,0,0,0)",
        "0px 10px 15px rgba(0,0,0,0.3)",
        "0px 0px 0px rgba(0,0,0,0)",
      ],
      transition: { duration: 2, repeat: Infinity, repeatType: "loop" },
    });
  }, [controls]);

  const { scrollYProgress } = useScroll();

  return (
    <div className="mx-auto flex min-h-screen flex-col items-center bg-secondary">
      <section className="mt-20 min-h-[20vh] md:min-h-[30vh] lg:min-h-[30vh] xl:min-h-[55vh] 2xl:min-h-[55vh]">
        <div className="z-10 flex overflow-hidden px-2 font-lemonmilk text-[calc(12vw)] uppercase tracking-tighter text-light md:text-[calc(10vw)] lg:text-[calc(10vw)]">
          <motion.div
            variants={banner}
            initial="hidden"
            animate="visible"
            className="z-10 overflow-hidden px-2 text-[calc(12vw)] font-bold uppercase tracking-tighter md:text-[calc(10vw)] lg:text-[calc(10vw)]"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={bannerChild}
                className="font-lemonmilk text-light"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <motion.div
            variants={banner}
            initial="hidden"
            animate="visible"
            className="absolute z-10 overflow-hidden px-2 text-[calc(12vw)] font-bold uppercase tracking-tighter md:text-[calc(10vw)] lg:text-[calc(10vw)]"
          >
            {letters2.map((letter, index) => (
              <motion.span
                key={index}
                variants={bannerChild}
                className="font-lemonmilk text-primary"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={bannerSecondChild}
            className="absolute z-0 flex overflow-hidden px-2 text-[calc(12vw)] font-bold uppercase tracking-tighter md:text-[calc(10vw)] lg:text-[calc(10vw)]"
          >
            {letters2.map((letter, index) => (
              <motion.span
                key={index}
                variants={bannerSecondChild}
                animate="colorChange"
                className="text-stroke-light font-lemonmilk text-transparent"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={bannerThirdChild}
            className="absolute z-0 flex overflow-hidden px-2 text-[calc(12vw)] font-bold uppercase tracking-tighter md:text-[calc(10vw)] lg:text-[calc(10vw)]"
          >
            {letters2.map((letter, index) => (
              <motion.span
                key={index}
                variants={bannerThirdChild}
                animate="colorChange"
                className="text-stroke font-lemonmilk text-transparent"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full max-[1200px]:mt-20">
        <div className="min-h-screen bg-secondary px-4 py-12">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{
              staggerChildren: 0.3,
            }}
            className="mx-auto grid max-w-6xl grid-flow-dense grid-cols-12 gap-4"
          >
            <HeaderBlock />
            <SocialsBlock />
            <AboutBlock />
            <WhyBlock />

            <LocationBlock />
            {/* <EmailListBlock /> */}
            <ContactBlock />
          </motion.div>
        </div>
      </section>

      <section className="mb-10 w-full">
        <div className="z-10 flex flex-col items-center justify-center overflow-hidden px-2 text-center font-lemonmilk text-[calc(6vw)] tracking-tighter text-light md:text-[calc(4vw)] lg:text-[calc(4vw)] xl:text-[calc(4vw)] 2xl:text-[calc(4vw)]">
          <motion.div
            initial="hidden"
            animate="visible"
            className="z-10 flex flex-col items-center justify-center overflow-hidden px-2 font-bold uppercase tracking-tighter"
          >
            <div className="flex flex-row space-x-8">
              <motion.span animate={controls} className="text-light">
                ELEVATE
              </motion.span>
              <motion.span className="text-light">YOUR</motion.span>
            </div>
            <div className="flex flex-row space-x-8">
              <motion.span>ONLINE</motion.span>
              <motion.span>PRESENCE</motion.span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mb-20 flex w-full flex-col">
        <div className="grid w-full grid-cols-2 justify-items-center gap-8 px-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service, index) => (
            <DividedBlock
              key={index}
              heading={service.heading}
              subheading={service.subheading}
              imgSrc={service.imgSrc}
              scrollToRef={service.scrolltoRef}
            />
          ))}
        </div>
      </section>

      <motion.div
        className="progress-bar z-10"
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
        className,
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src={logo}
      alt="avatar"
      className="mb-4 size-[calc(5vw)] md:size-[calc(2vw)] lg:size-[calc(2.5vw)] xl:size-[calc(3vw)]"
    />
    <h1 className="mb-12 text-lg font-medium leading-tight text-light md:text-xl lg:text-3xl xl:text-3xl">
      <span className="font-alata">Hello</span>
      <motion.span
        animate={{
          rotate: [0, 0, 15, -15, 15, -15, 0, 0],
          scale: [1, 1.5, 1.5, 1.5, 1.5, 1],
        }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ display: "inline-block", transformOrigin: "bottom" }}
      >
        👋{" "}
      </motion.span>
      <span className="font-josefin text-lg text-zinc-400 md:text-lg lg:text-2xl xl:text-xl">
        {" "}
        Tell us your vision for your brand, and we will collaborate with you to
        develop a customized strategy that propels you forward in the digital
        landscape.
      </span>
    </h1>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-12 md:col-span-6"
      style={{
        background: "linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)",
      }}
    >
      <a
        href="https://www.instagram.com/frameflowdigital/"
        className="grid h-full place-content-center text-3xl text-white"
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
        href="https://www.linkedin.com/company/frameflowdigital/"
        className="grid h-full place-content-center text-3xl text-white"
        target="_blank"
        rel="noopener noreferrer"
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
        className="grid h-full place-content-center text-3xl text-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiTiktok />
      </a>
    </Block>
  </>
);

const AboutBlock = () => {
  return (
    <Block className="col-span-12 flex flex-col space-y-2 bg-primary p-8 leading-snug">
      <span className="font-alata text-lg font-bold text-secondary md:text-xl lg:text-3xl xl:text-3xl">
        Building a business is easy, but creating a unique identity takes
        expertise and thoughtful strategy.
      </span>
      <span className="font-josefin text-lg text-light md:text-lg lg:text-2xl xl:text-xl">
        At FrameFlow, we’re here to help you craft the most fitting identity for
        your business, ensure its consistent growth, and steadily increase its
        visibility.
      </span>
      <span className="font-josefin text-lg text-light md:text-lg lg:text-2xl xl:text-xl">
        With over a decade of combined experience across various marketing
        fields, the professionals at FrameFlow are more than just a marketing
        company—we’re your most crucial partner on the path to growth.
      </span>
      <span className="font-josefin text-lg text-light md:text-lg lg:text-2xl xl:text-xl">
        We understand how busy you are, which is why we pride ourselves on being
        accessible. When you work with us, you won’t have to wait endlessly for
        answers. Our team is always available, ready to provide prompt support
        whenever you need it.
      </span>
    </Block>
  );
};

const WhyBlock = () => {
  return (
    <Block className="col-span-12 flex flex-col space-y-2 bg-primary p-8 leading-snug">
      <span className="font-alata text-lg font-bold text-secondary md:text-xl lg:text-3xl xl:text-3xl">
        Why Choose FrameFlow?
      </span>
      <span className="font-josefin text-lg text-light md:text-lg lg:text-2xl xl:text-xl">
        <ul className="ml-8 mt-4 list-disc space-y-4">
          <li>
            Data-driven strategies that enhance your brand’s visibility and
            engagement.
          </li>

          <li>
            Custom SEO and content marketing solutions to improve organic
            traffic.
          </li>
          <li>
            Paid advertising campaigns designed to maximize your return on
            investment (ROI).
          </li>
          <li>
            Social media management that builds brand loyalty and strengthens
            your online presence.
          </li>
          <li>
            Real-time analytics and reporting that keep you informed and your
            strategies optimized.
          </li>
        </ul>
      </span>
    </Block>
  );
};

const LocationBlock = () => (
  <Block
    className="col-span-12 flex flex-col items-center justify-center gap-4 text-[calc(8vw)] md:col-span-3 md:text-[calc(2vw)] lg:text-[calc(1.25vw)]"
    style={{
      backgroundImage: `url(${torontoVector})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    <FiMapPin className="mb-4 size-[calc(6vw)] font-alata font-bold text-light md:size-[calc(2vw)] lg:size-[calc(2.5vw)] xl:size-[calc(1.75vw)]" />
    <p className="text-center text-[calc(5vw)] font-bold text-light md:text-[calc(2vw)] lg:text-[calc(1.75vw)]">
      Toronto
    </p>
  </Block>
);

{
  /* const EmailListBlock = () => (
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
  ); */
}

const ContactBlock = () => (
  <Block
    whileHover={{
      scale: 1.1,
    }}
    className="col-span-12 md:col-span-9"
  >
    <button
      type="submit"
      className="flex w-full flex-col items-center gap-2 space-y-2 rounded bg-zinc-800 px-2 py-8 text-[calc(2.5vw)] font-medium text-light md:text-[calc(1.5vw)] lg:text-[calc(1vw)] xl:text-[calc(1.5vw)]"
    >
      <span className="font-alata text-lg font-bold text-light md:text-xl lg:text-3xl xl:text-3xl">
        Ready to create a lasting identity for your business?{" "}
      </span>
      <span className="font-josefin text-lg text-light md:text-lg lg:text-2xl xl:text-2xl">
        Let’s partner up and start building your future today!
      </span>
    </button>
  </Block>
);

interface Service {
  heading: string;
  subheading: string;
  imgSrc: string;
  scrollToRef: string;
}

const DividedBlock: React.FC<Service> = ({
  heading,
  subheading,
  imgSrc,
  scrollToRef,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services", { state: { scrollToRef } });
  };

  return (
    <motion.div
      className="flex h-[calc(45vw)] w-[calc(45vw)] flex-col sm:h-[calc(45vw)] sm:w-[calc(45vw)] md:h-[calc(30vw)] md:w-[calc(30vw)] lg:h-[calc(30vw)] lg:w-[calc(30vw)] xl:h-[calc(15vw)] xl:w-[calc(15vw)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex w-full flex-1 items-center justify-center bg-black text-light">
          <h1 className="flex h-full w-full items-center justify-center font-lemonmilk text-[calc(2.5vw)] md:text-[calc(1.5vw)] lg:text-[calc(1.5vw)] xl:text-[calc(.75vw)] 2xl:text-[calc(.75vw)]">
            {heading}
          </h1>
        </div>
        <div className="flex h-1/2 w-full flex-row">
          <div className="flex w-1/2">
            <motion.img
              src={imgSrc}
              className="absolute inset-0 h-full w-full"
              initial={{ scale: 1, x: 0, y: 0 }}
              animate={
                isHovered
                  ? { scale: 0.5, x: "-25%", y: "25%" }
                  : { scale: 1, x: 0, y: 0 }
              }
              transition={{ duration: 0.3, ease: "easeIn" }}
              alt="Background"
            />
          </div>
          <div className="flex w-1/2 flex-row items-center justify-center bg-light text-black">
            <button
              className="flex h-full w-full flex-row items-center justify-center font-josefin text-[calc(2.5vw)] md:text-[calc(1.5vw)] lg:text-[calc(1.5vw)] xl:text-[calc(.75vw)] 2xl:text-[calc(.75vw)]"
              onClick={handleClick}
            >
              MORE <GoArrowUpRight className="font-bold" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default transition(HomePage);
