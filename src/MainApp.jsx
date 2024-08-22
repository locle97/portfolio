import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { routing } from './routing';
import { AnimatePresence } from 'framer-motion';

const dataUrl = '/data.json';

function MainApp() {
  const [data, setData] = useState({});
  const location = useLocation();

  function navigateTo(sectionId) {
    const sectionElm = document.getElementById(sectionId);
    if (sectionElm && routing.map(t => t.id).includes(sectionId)) {
      sectionElm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(dataUrl);
      const jsonData = await response.json();

      setData(jsonData);
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col lg:flex absolute w-screen h-screen z-20 justify-center items-center text-gray-400">
      <div className="transition-all flex flex-col lg:flex-row gap-8 w-full h-full lg:w-[80%] lg:h-[80%]">
        <NavBar />
        <div id="sections-container" className="w-full h-full flex flex-col overflow-y-auto scroll-smooth no-scrollbar">
          <AnimatePresence mode='wait'>
            <Routes location={window.location} key={window.location.pathname}>
              <Route path="/" element={<Home name={data?.about?.name} title={data.about?.title} navigateToNextSection={() => navigateTo("about")} />} />
              <Route path="about" element={<About about={data.about} />} />
              <Route path="projects" element={<Projects projects={data.projects} />} />
              <Route path="contact" element={<Contact about={data.about} />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default MainApp;
