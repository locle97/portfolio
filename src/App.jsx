import { useState, useEffect, useRef } from 'react';
import React from "react";
import AnimatedCursor from "react-animated-cursor"

import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { routing } from './routing';

import './App.css'

const url = '/data.json';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [data, setData] = useState({});
  let ref = useRef(0);

  function navigateTo(sectionId) {
    const sectionElm = document.getElementById(sectionId);
    if (sectionElm && routing.map(t => t.id).includes(sectionId)) {
      sectionElm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();

      setData(jsonData);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const containerRect = ref.current.getBoundingClientRect();
      let currentSection = activeSection;

      const homeSection = document.getElementById('home');
      const scrollYFromTop = Math.abs(homeSection.getBoundingClientRect().top - containerRect.top);
      setScrollY(scrollYFromTop);

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= containerRect.top + 1) {
          currentSection = section.id;
        }

        if (rect.top <= containerRect.bottom + 100) {
          // TODO: Directly scroll if the section is not fully visible
        }
      });

      setActiveSection(currentSection);
    };

    ref.current.addEventListener('scroll', handleScroll);
    return () => ref.current.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Catch the initial hash id to navigate to the correct section
    if (window.location.hash) {
      const sectionId = window.location.hash.slice(1);
      navigateTo(sectionId);
    }
  }, [data]);


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
      <div className="flex flex-col lg:flex absolute w-screen h-screen z-20 justify-center items-center text-gray-400">
        <div className="transition-all flex flex-col lg:flex-row gap-8 w-full h-full lg:w-[80%] lg:h-[80%]">
          <NavBar activeSection={activeSection} />
          <div ref={ref} id="sections-container" className="w-full h-full flex flex-col overflow-y-auto scroll-smooth no-scrollbar">
            <Home scrollY={scrollY} name={data?.about?.name} title={data.about?.title} navigateToNextSection={() => navigateTo("about")}/>
            <About about={data.about} />
            <Projects projects={data.projects} />
            <Contact />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
