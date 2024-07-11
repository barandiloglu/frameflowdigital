import transition from "../transition";
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";

const socialMediaRef = useRef<HTMLDivElement>(null);
const contentCreationRef = useRef<HTMLDivElement>(null);
const seoRef = useRef<HTMLDivElement>(null);
const webRef = useRef<HTMLDivElement>(null);
const pvRef = useRef<HTMLDivElement>(null);
const editRef = useRef<HTMLDivElement>(null);

const services = [
    { heading: "SOCIAL MEDIA MANAGEMENT", subheading: "See our projects", imgSrc: "./src/assets/services/1.png", scrollToRef: socialMediaRef},
    { heading: "CONTENT CREATION", subheading: "Our services", imgSrc: "./src/assets/services/2.png", scrollToRef: contentCreationRef},
    { heading: "SEARCH ENGINE OPTIMIZATION", subheading: "Why choose us?", imgSrc: "./src/assets/services/3.png", scrollToRef: seoRef},
    { heading: "WEB DESIGN", subheading: "Get in touch", imgSrc: "./src/assets/services/4.png", scrollToRef: webRef},
    { heading: "PHOTOGRAPHY/VIDEOGRAPHY", subheading: "Get in touch", imgSrc: "./src/assets/services/5.png", scrollToRef: pvRef},
    { heading: "PHOTO/VIDEO EDITING", subheading: "Get in touch", imgSrc: "./src/assets/services/7.png", scrollToRef: editRef},
  ];

const Services = () => {
    const controls = useAnimation();

    const { scrollYProgress } = useScroll();

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

            <section className="flex flex-col w-full mt-20 mb-20">
                <div className="grid w-full grid-cols-2 gap-8 px-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 justify-items-center">
                    {services.map((service, index) => (
                        <DividedBlock key={index} heading={service.heading} subheading={service.subheading} imgSrc={service.imgSrc} scrollToRef={service.scrollToRef} />
                    ))}
                </div>
            </section>    

            <section className="flex flex-col w-full">
                <div className="bg-secondary text-light">
                    <TextParallaxContent
                        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        subheading="Collaborate"
                        heading="SOCIAL MEDIA MANAGEMENT"
                        scrollToRef={socialMediaRef}
                    >
                        <ExampleContent />
                    </TextParallaxContent>
                    <TextParallaxContent
                        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        subheading="Quality"
                        heading="CONTENT CREATION"
                        scrollToRef={contentCreationRef}
                    >
                        <ExampleContent />
                    </TextParallaxContent>
                    <TextParallaxContent
                        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        subheading="Modern"
                        heading="SEARCH ENGINE OPTIMIZATION"
                        scrollToRef={seoRef}
                    >
                        <ExampleContent />
                    </TextParallaxContent>
                    <TextParallaxContent
                        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        subheading="Collaborate"
                        heading="WEB DESIGN"
                        scrollToRef={webRef}
                    >
                        <ExampleContent />
                    </TextParallaxContent>
                    <TextParallaxContent
                        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        subheading="Collaborate"
                        heading="PHOTOGRAPGY / VIDEOGRAPHY"
                        scrollToRef={pvRef}
                    >
                        <ExampleContent />
                    </TextParallaxContent>
                    <TextParallaxContent
                        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        subheading="Collaborate"
                        heading="PHOTO / VIDEO EDITING"
                        scrollToRef={editRef}
                    >
                        <ExampleContent />
                    </TextParallaxContent>
                </div>
            </section>

            <motion.div
                className="z-10 progress-bar"
                style={{ scaleX: scrollYProgress }}
            />       
        </div>
    );
};

interface Service {
    heading: string;
    subheading: string;
    imgSrc: string;
    scrollToRef: React.RefObject<HTMLDivElement>;
}

const DividedBlock: React.FC<Service> = ({ heading, subheading, imgSrc, scrollToRef }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (scrollToRef.current) {
        scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
      <motion.div
        className="flex flex-col w-[calc(45vw)] h-[calc(45vw)] sm:w-[calc(45vw)] sm:h-[calc(45vw)] md:w-[calc(30vw)] md:h-[calc(30vw)] lg:w-[calc(30vw)] lg:h-[calc(30vw)] xl:w-[calc(30vw)] xl:h-[calc(30vw)] "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-center flex-1 w-full bg-black text-light">
            <h1 className="w-full items-center justify-center flex h-full max-[1024px]:text-[calc(2vw)] min-[1024px]:text-[calc(1.5vw)] font-lemonmilk">{heading}</h1>
          </div>
          <div className="flex flex-row w-full h-1/2">
            <div className="flex w-1/2">
              <motion.img
                src={imgSrc}
                className="absolute inset-0 w-full h-full"
                initial={{ scale: 1, x: 0, y: 0 }}
                animate={isHovered ? { scale: 0.5, x: '-25%', y: '25%' } : { scale: 1, x: 0, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeIn' }}
                alt="Background"
                />
            </div>
            <div className="flex flex-row items-center justify-center w-1/2 text-black bg-light">
              <button className="flex flex-row items-center max-[1024px]:text-[calc(2vw)] min-[1024px]:text-[calc(1.5vw)] justify-center w-full h-full font-alata">MORE <GoArrowUpRight className="font-bold"/></button>
            </div>
          </div>
        </div>
      </motion.div>
    );
};

interface TextParallaxContentProps {
    imgUrl: string;
    subheading: string;
    heading: string;
    children: React.ReactNode;
    scrollToRef: React.RefObject<HTMLDivElement>;
}

const TextParallaxContent: React.FC<TextParallaxContentProps> = ({ imgUrl, subheading, heading, children, scrollToRef }) => {
    return (
        <div ref={scrollToRef}>
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};

interface StickyImageProps {
    imgUrl: string;
}

const StickyImage: React.FC<StickyImageProps> = ({ imgUrl }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["end end", "end start"],
    });
  
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
    return (
      <motion.div
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: `calc(100vh`,
          top: 0,
          scale,
        }}
        ref={targetRef}
        className="sticky z-0 overflow-hidden rounded-2xl"
      >
        <motion.div
          className="absolute inset-0 bg-neutral-950/70"
          style={{
            opacity,
          }}
        />
      </motion.div>
    );
};

interface OverlayCopyProps {
    subheading: string;
    heading: string;
}

const OverlayCopy: React.FC<OverlayCopyProps> = ({ subheading, heading }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
  
    return (
      <motion.div
        style={{
          y,
          opacity,
        }}
        ref={targetRef}
        className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-white"
      >
        <p className="mb-2 text-xl text-center md:mb-4 md:text-3xl">
          {subheading}
        </p>
        <p className="text-4xl font-bold text-center md:text-7xl">{heading}</p>
      </motion.div>
    );
};

const ExampleContent: React.FC = () => (
  <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 pt-12 pb-24 mx-auto md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-light md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-light md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button className="w-full py-4 text-xl text-white transition-colors rounded bg-neutral-900 px-9 hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);



export default transition(Services);
