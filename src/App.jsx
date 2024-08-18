import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './Home';
import { NavBar } from './NavBar';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { About } from './About';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper absolute w-screen h-screen z-10 bg-gray-200">
      </div>
      <div className="flex absolute w-screen h-screen z-20 justify-center items-center text-gray-400">
        <div className="flex gap-8 w-[80%] h-[80%]">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
