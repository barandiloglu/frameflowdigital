import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import transition from "../transition";

const projects = [
    { heading: "SOCIAL MEDIA MANAGEMENT", subheading: "See our projects", imgSrc: "./src/assets/services/1.png" },
    { heading: "CONTENT CREATION", subheading: "Our services", imgSrc: "./src/assets/services/2.png" },
    { heading: "SEARCH ENGINE OPTIMIZATION", subheading: "Why choose us?", imgSrc: "./src/assets/services/3.png" },
    { heading: "WEB DESIGN", subheading: "Get in touch", imgSrc: "./src/assets/services/4.png" },
    { heading: "PHOTOGRAPHY/VIDEOGRAPHY", subheading: "Get in touch", imgSrc: "./src/assets/services/5.png" },
    { heading: "PHOTO/VIDEO EDITING", subheading: "Get in touch", imgSrc: "./src/assets/services/7.png" },
];

const ONE_SECOND = 500;
const AUTO_DELAY = ONE_SECOND * 10;

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
            }, 500);
        }, 800); 
    };

    const text = "IN PROGRESS";

    return (
        <div className="flex flex-col w-full min-h-screen bg-secondary">
{/*            <div className="w-full overflow-hidden bg-transparent">
                <motion.div
                    animate={{
                        translateX: `-${imgIndex * 75}%`,
                    }}
                    transition={{ ease: 'easeInOut', duration: 0.65 }}
                    className="flex"
                >
                    <Images imgIndex={imgIndex} expanded={expanded} />
                </motion.div>
            </div>
*/}
            <div className="flex flex-col items-center justify-center w-full min-h-screen space-y-8">
                <div className="flex text-light font-alata text-[calc(5vw)] md:text-[calc(3vw)] lg:text-[calc(2vw)] xl:text-[calc(3vw)]">
                    {text.split(" ").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ color: "#ffffeb" }}
                            animate={{ color: "#d18d29" }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: index * 0.1,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            {letter}&nbsp;
                        </motion.span>
                    ))}
                    {[".", ".", "."].map((dot, index) => (
                        <motion.span
                            key={index + text.length} 
                            initial={{ opacity: 0, color: "#ffffeb" }}
                            animate={{ opacity: 1, color: "#d18d29" }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                                delay: 1.5 + index * 0.3, 
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            {dot}
                        </motion.span>
                    ))}
                </div>

                <motion.img
                    src="src/assets/inProgress.png"
                    className="xl:w-[calc(20vw)] xl:h-[calc(20vw)] lg:w-[calc(30vw) lg:h-[calc(30vw)] md:w-[calc(35vw)] md:h-[calc(35vw)] w-[calc(40vw) h-[calc(40vw)]"
                    initial={{ scale: 0, borderRadius: "0rem" }}
                    animate={{ scale: [0, 1.2, 1], borderRadius: "2rem" }}
                    transition={{
                        scale: { duration: 1 },
                        borderRadius: { delay: 1, duration: 1 },
                        ease: "easeInOut"
                    }}
                />
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
                    transition={{ ease: 'easeInOut', duration: 0.65 }}
                    className="flex flex-row justify-start w-[75%] h-full bg-transparent aspect-video shrink-0"
                >
                    <div className="relative w-full overflow-hidden">
                        <motion.div className="flex flex-row justify-start">
                            <motion.div className="flex w-[45%] h-[calc(25vw)] sm:h-[calc(25vw)] md:h-[calc(25vw)] lg:h-[calc(27.5vw)] xl:h-[calc(30vw)]">
                                <motion.img
                                    className="object-cover w-full"
                                    src={project.imgSrc}
                                    animate={{ marginBottom: imgIndex === idx && expanded ? '0vw' : '5vw' }}
                                    transition={{ type: 'spring', stiffness: 100, damping: 30, duration: 1 }}
                                />
                            </motion.div>
                            <motion.div className="flex flex-col p-4 bg-zinc-800 w-[45%] h-[calc(20vw)] sm:h-[calc(20vw)] md:h-[calc(20vw)] lg:h-[calc(22.5vw)] xl:h-[calc(25vw)]">
                                <h1 className="text-white font-lemonmilk">{project.heading}</h1>
                                <h1 className="text-white font-lemonmilk">{project.subheading}</h1>
                                <p className="text-white font-lemonmilk">{project.subheading}</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </>
    );
};

export default transition(Projects);
