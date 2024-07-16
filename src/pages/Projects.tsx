import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import transition from "../transition";

const projects = [
    { heading: "SOCIAL MEDIA MANAGEMENT", subheading: "See our projects", imgSrc: "./src/assets/services/1.png" },
    { heading: "CONTENT CREATION", subheading: "Our services", imgSrc: "./src/assets/services/2.png" },
    { heading: "SEARCH ENGINE OPTIMIZATION", subheading: "Why choose us?", imgSrc: "./src/assets/services/3.png" },
    { heading: "WEB DESIGN", subheading: "Get in touch", imgSrc: "./src/assets/services/4.png" },
    { heading: "PHOTOGRAPHY/VIDEOGRAPHY", subheading: "Get in touch", imgSrc: "./src/assets/services/5.png" },
    { heading: "PHOTO/VIDEO EDITING", subheading: "Get in touch", imgSrc: "./src/assets/services/7.png" },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 350,
    damping: 60,
};

const Projects = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const [expanded, setExpanded] = useState(true);
    const [isChanging, setIsChanging] = useState(false);


    useEffect(() => {
        const intervalRef = setInterval(() => {
            if (!isChanging) {
                handleImageChange(imgIndex + 1 >= projects.length ? 0 : imgIndex + 1);
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, [imgIndex, isChanging]);


    const handleImageChange = (newIndex: number) => {
        setIsChanging(true);
        setExpanded(false);
        setTimeout(() => {
            setImgIndex(newIndex);
            setTimeout(() => {
                setExpanded(true);
                setIsChanging(false);
            }, 500); // Delay to ensure expansion happens after image change
        }, 800); // Delay to allow collapse animation
    };

    return (
        <div className="flex w-full min-h-screen bg-secondary">
            <div className=" border-white w-full overflow-hidden bg-transparent">
                <motion.div
                    animate={{
                        translateX: `-${imgIndex * 75}%`,
                    }}
                    transition={SPRING_OPTIONS}
                    className="flex"
                >
                    <Images imgIndex={imgIndex} expanded={expanded} />
                </motion.div>
            </div>
        </div>
    );
};

const Images = ({ imgIndex, expanded }: { imgIndex: number; expanded: boolean }) => {
    return (
        <>
            {projects.map((project, idx) => (
                <motion.div
                    key={idx}
                    style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    animate={{
                        scale: imgIndex === idx ? 1 : 1,
                    }}
                    transition={SPRING_OPTIONS}
                    className="flex flex-row items-center justify-start w-[75%] h-full bg-transparent aspect-video shrink-0"
                >
                    <div className="relative w-full overflow-hidden">
                        <motion.div className="flex flex-row justify-start ">
                            <motion.div className=" flex w-[45%] h-[calc(25vw)] sm:h-[calc(25vw)] md:h-[calc(25vw)] lg:h-[calc(27.5vw)] xl:h-[calc(30vw)]">
                                <motion.img
                                    className="object-cover w-full"
                                    src={project.imgSrc}
                                    animate={{ marginBottom: imgIndex === idx && expanded ? '0vw' : '5vw' }}
                                    transition={{ type: 'spring', stiffness: 100, damping: 30, duration: 1 }}
                                />
                            </motion.div>
                            <motion.div className="flex bg-zinc-800 w-[45%] h-[calc(20vw)] sm:h-[calc(20vw)] md:h-[calc(20vw)] lg:h-[calc(22.5vw)] xl:h-[calc(25vw)]">
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </>
    );
};

export default transition(Projects);
