import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";

import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";
import ContactUs from "./pages/ContactUs";
import AcornAccounting from "./pages/projects/AcornAccounting";
import AcornEvents from "./pages/projects/AcornEvents";
import AnatolianBreeze from "./pages/projects/AnatolianBreeze";
import BigBearsBakedPotato from "./pages/projects/BigBearsBakedPotato";
import EduPathways from "./pages/projects/EduPathways";
import NorthernPathways from "./pages/projects/NorthernPathways";
import TeachWays from "./pages/projects/TeachWays";
import Tutorialist from "./pages/projects/Tutorialist";

import { InitialLoadProvider } from "./InitialLoadContext";

import "./App.css";

const projectPages: Record<string, React.ComponentType> = {
  "acorn-accounting": AcornAccounting,
  "acorn-events": AcornEvents,
  "anatolian-breeze": AnatolianBreeze,
  "big-bears-baked-potato": BigBearsBakedPotato,
  "edu-pathways": EduPathways,
  "northern-pathways": NorthernPathways,
  "teach-ways": TeachWays,
  tutorialist: Tutorialist,
};

function DynamicProjectPage() {
  const { brand } = useParams<{ brand: string }>(); // Specify the parameter type

  if (!brand || !projectPages[brand]) {
    // Handle the case where the brand is undefined or not in the mapping
    return <div className="mt-10 text-center text-lg">Project not found!</div>;
  }

  const ProjectComponent = projectPages[brand];

  return <ProjectComponent />;
}

function App() {
  const location = useLocation();

  return (
    <InitialLoadProvider>
      <div>
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage />} />

            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact-us" element={<ContactUs />} />

            {/* Dynamic Route */}
            <Route path="/projects/:brand" element={<DynamicProjectPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </InitialLoadProvider>
  );
}

export default App;
