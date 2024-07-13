import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const projects = [
    { heading: "SOCIAL MEDIA MANAGEMENT", subheading: "See our projects", imgSrc: "./src/assets/services/1.png"},
    { heading: "CONTENT CREATION", subheading: "Our services", imgSrc: "./src/assets/services/2.png"},
    { heading: "SEARCH ENGINE OPTIMIZATION", subheading: "Why choose us?", imgSrc: "./src/assets/services/3.png"},
    { heading: "WEB DESIGN", subheading: "Get in touch", imgSrc: "./src/assets/services/4.png"},
    { heading: "PHOTOGRAPHY/VIDEOGRAPHY", subheading: "Get in touch", imgSrc: "./src/assets/services/5.png"},
    { heading: "PHOTO/VIDEO EDITING", subheading: "Get in touch", imgSrc: "./src/assets/services/7.png"},
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 60,
};

const Projects = () => {
    const [imgIndex, setImgIndex] = useState(0);

    const dragX = useMotionValue(0);

    useEffect(() => {
      const intervalRef = setInterval(() => {
        const x = dragX.get();

        if (x === 0) {
          setImgIndex((pv) => {
            if (pv === projects.length - 1) {
              return 0;
            }
            return pv + 1;
          });
        }
      }, AUTO_DELAY);

      return () => clearInterval(intervalRef);
    }, [dragX]);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < projects.length - 1) {
          setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
          setImgIndex((pv) => pv - 1);
        }
      };

    return (
        <div className="flex w-full min-h-screen bg-secondary">
            <div className="relative w-full py-8 overflow-hidden bg-transparent">
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    style={{
                        x: dragX,
                    }}
                    animate={{
                        translateX: `-${imgIndex * 75}%`,
                    }}
                    transition={SPRING_OPTIONS}
                    onDragEnd={onDragEnd}
                    className="flex border border-white cursor-grab active:cursor-grabbing"
                >
                    <Images imgIndex={imgIndex} />
                </motion.div>

                <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
            </div>
        </div>
    );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
    return (
      <>
        {projects.map((project, idx) => {
          return (
            <motion.div
              key={idx}
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
              }}
              transition={SPRING_OPTIONS}
              className="flex flex-row items-center justify-start w-[75%] bg-transparent aspect-video shrink-0 rounded-xl"
            >
              <motion.img
                src={project.imgSrc}
                className="object-cover w-[calc(45vw)] h-[calc(45vw)] sm:w-[calc(45vw)] sm:h-[calc(45vw)] md:w-[calc(30vw)] md:h-[calc(30vw)] lg:w-[calc(30vw)] lg:h-[calc(30vw)] xl:w-[calc(45vw)] xl:h-[calc(45vw)] bg-neutral-800"
              />
              <div className="flex flex-col ml-4">
                <h1>{project.heading}</h1>
                <p>{project.subheading}</p>
              </div>
            </motion.div>
          );
        })}
      </>
    );
  };
  

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="flex justify-center w-full gap-2 mt-4">
      {projects.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

export default Projects;
