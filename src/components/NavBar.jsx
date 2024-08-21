import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import avatarUrl from '../assets/images/avatar.jpeg';
import { routing } from '../routing';

import './NavBar.css';

export function Avatar({ isFlipped }) {
  return <div className="avatar w-1/3">
    <img className="rounded-full w-full aspect-square grayscale"
      src={avatarUrl}
      alt="avatar" />
  </div>;
}

export function NavItems({ activeSection, onLinkClick }) {
  const navItems = routing;

  return (
    <>
      <ul id="navlinks" className="flex flex-col items-center gap-4">
        {navItems.map((item, index) => (
          <li key={index} className="hover:text-gray-700" onClick={onLinkClick}>
            <a className={activeSection === item.id ? "active" : ""} href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { name: "Youtube", class: "fi fi-brands-youtube", link: "#" },
    { name: "Facebook", class: "fi fi-brands-facebook", link: "#" },
    { name: "Linkedin", class: "fi fi-brands-linkedin", link: "#" },
    { name: "Github", class: "fi fi-brands-github", link: "#" }
  ];

  return (
    <>
      <div className="flex flex-col gap-6 footer text-center items-center">
        <div className="copyright">
          <p>Copyright © {year} by <span className="text-black">Loc Le</span></p>
          <p>All rights are reserved</p>
        </div>
        <div className="flex gap-4 justify-center items-center text-gray-500">
          {socials.map((social, index) => (
            <a href={social.link} key={index} className="hover:text-black">
              <i key={index} className={social.class}></i>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

const animation = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.2 }
}

export function MobileMenu({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        <div className="z-50 lg:hidden absolute left-0 top-0 transition-all lg:hidden flex w-full h-12 p-8 justify-end">
          <div className="text-black text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fi fi-sr-menu-burger"></i>
          </div>
        </div>
        {isMenuOpen &&
          (
            <>
              <div className="z-50 lg:hidden absolute w-full h-full bg-gray-700 opacity-50" onClick={() => setIsMenuOpen(false)}>
              </div>
              <motion.div
                key="navmenu"
                className="z-50 lg:hidden absolute bg-white right-0 top-0 min-w-xs max-w-xs h-full flex flex-col overflow-y-auto scroll-smooth no-scrollbar"
                variants={animation}
                initial="initial"
                animate="animate"
                exit="initial"
                transition={animation.transition}
              >
                <div className="close-modal w-full h-12 flex flex-col items-end p-8">
                  <div className="text-black text-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className="fi fi-sr-cross"></i>
                  </div>
                </div>
                <div className="flex flex-col h-full justify-center items-center py-36 gap-16">
                  <Avatar isFlipped={true} />
                  <NavItems activeSection={activeSection} onLinkClick={() => setIsMenuOpen(false)} />
                  <Footer />
                </div>
              </motion.div>
            </>
          )
        }
      </AnimatePresence>
    </>
  )
}

export function NavBar({ activeSection }) {
  return (
    <>
      <div className="hidden lg:flex flex-col w-1/3 h-full bg-white justify-center items-center py-36 gap-16">
        <Avatar isFlipped={false} />
        <NavItems activeSection={activeSection} />
        <Footer />
      </div>
      <MobileMenu activeSection={activeSection} />
    </>
  );
}
