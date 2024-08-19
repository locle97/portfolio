import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import React from "react";
import AnimatedCursor from "react-animated-cursor"

import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { About } from './pages/About';

import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  let ref = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const containerRect = ref.current.getBoundingClientRect();
      let currentSection = activeSection;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= containerRect.top + 1) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    ref.current.addEventListener('scroll', handleScroll);
    return () => ref.current.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        color='0, 0, 0'
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: '#333'
        }}
        outerStyle={{
          border: '3px solid #333'
        }}
      />
      <div className="wrapper absolute w-screen h-screen z-10 bg-gray-200">
      </div>
      <div className="flex absolute w-screen h-screen z-20 justify-center items-center text-gray-400">
        <div className="flex gap-8 w-[80%] h-[80%]">
          <NavBar activeSection={activeSection} />
          <div ref={ref} id="sections-container" className="w-full h-full flex flex-col overflow-y-auto scroll-smooth no-scrollbar">
            <Home />
            <About />
            <Projects />
            <Portfolio />
            <Contact />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
