import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import transition from "../transition";

import acornLogo from "../assets/projects/acorn-logo.png";
const Projects = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full min-h-screen bg-secondary p-4">
      <button className="flex flex-col items-center justify-center aspect-square rounded-lg border border-zinc-700 bg-zinc-800 p-6">
        <img src={acornLogo}></img>
        <h1 className="flex text-light font-lemonmilk text-4xl">
          Acorn Accounting
        </h1>
      </button>
      <button className="flex flex-col items-center justify-center aspect-square rounded-lg border border-zinc-700 bg-zinc-800 p-6">
        <img src={acornLogo}></img>
        <h1 className="flex text-light font-lemonmilk text-4xl">
          Acorn Events
        </h1>
      </button>
      <button className="flex flex-col items-center justify-center aspect-square rounded-lg border border-zinc-700 bg-zinc-800 p-6">
        <img src={acornLogo}></img>
        <h1 className="flex text-light font-lemonmilk text-4xl">
          Anatolian Breeze
        </h1>
      </button>
      <button className="flex flex-col items-center justify-center aspect-square rounded-lg border border-zinc-700 bg-zinc-800 p-6">
        <img src={acornLogo}></img>
        <h1 className="flex text-light font-lemonmilk text-4xl">
          Big Bears Baked Potato
        </h1>
      </button>
      <button className="flex flex-col items-center justify-center aspect-square rounded-lg border border-zinc-700 bg-zinc-800 p-6">
        <img src={acornLogo}></img>
        <h1 className="flex text-light font-lemonmilk text-4xl">Edupathways</h1>
      </button>
      <button className="flex flex-col items-center justify-center aspect-square rounded-lg border border-zinc-700 bg-zinc-800 p-6">
        <img src={acornLogo}></img>
        <h1 className="flex text-light font-lemonmilk text-4xl">
          Northern Pathways
        </h1>
      </button>
      <button className="flex flex-col items-center justify-center aspect-square rounded-lg border border-zinc-700 bg-zinc-800 p-6">
        <img src={acornLogo}></img>
        <h1 className="flex text-light font-lemonmilk text-4xl">Teachways</h1>
      </button>
      <div className="aspect-square rounded-lg  border-zinc-700 bg-transparent p-6"></div>
    </div>
  );
};

export default transition(Projects);
