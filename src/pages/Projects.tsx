// src/App.tsx

import React from "react";
import { useState, useEffect, useRef } from "react";

import transition from "../transition";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const [activeYear, setActiveYear] = useState(2022);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const years = [2019, 2021, 2022, 2023];

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;

      // Update scroll position for parallax effect
      setScrollPosition(scrollTop);

      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);

      // Dynamically determine active year based on scroll
      const yearIndex = Math.min(
        Math.floor(scrollPercentage * years.length),
        years.length - 1,
      );
      setActiveYear(years[yearIndex]);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-secondary p-8">
      <div className="flex w-full">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="my-8 flex min-h-screen w-1/4 items-center justify-center border-r border-r-zinc-800"
        >
          <div className="relative flex flex-col space-y-16">
            {years.map((year, index) => {
              // Calculate parallax effect for each year
              const parallaxOffset = (scrollPosition - index * 100) * 0.1;

              return (
                <div
                  key={year}
                  className={`text-2xl font-bold ${
                    activeYear === year ? "text-white" : "text-zinc-500"
                  }`}
                  style={{
                    transform: `translateY(${parallaxOffset}px)`, // Parallax effect
                    transition: "transform 0.1s ease-out", // Smooth motion
                  }}
                >
                  {year}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex w-3/4">
          <p className="text-xl text-white">Selected Year: {activeYear}</p>
        </div>
      </div>
    </div>
  );
};

export default transition(Projects);
