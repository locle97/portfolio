import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { About } from './pages/About';

import './App.css'

function App() {
  return (
    <>
      <div className="wrapper absolute w-screen h-screen z-10 bg-gray-200">
      </div>
      <div className="flex absolute w-screen h-screen z-20 justify-center items-center text-gray-400">
        <div className="flex gap-8 w-[80%] h-[80%]">
          <NavBar />
          <div className="w-full h-full flex flex-col">
            <AnimatePresence>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
