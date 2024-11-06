import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "./pages/HomePage";
import Projects from './pages/Projects';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';
import ContactUs from './pages/ContactUs';

import { InitialLoadProvider } from './InitialLoadContext';

import './App.css'

function App() {
  const location = useLocation();

  return (
    <InitialLoadProvider>
      <>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </AnimatePresence>
      </>
    </InitialLoadProvider>
  );
}

export default App;
