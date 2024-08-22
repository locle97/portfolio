import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import './NavBar.css';
import { Footer } from './Footer';
import { Avatar } from './Avatar';
import { NavItems } from './NavItems';

const animation = {
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.2 }
}

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="z-50 lg:hidden absolute left-0 top-0 transition-all lg:hidden flex w-full h-12 px-8 justify-end items-end bg-white">
        <div className="text-black text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className="fi fi-sr-menu-burger"></i>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen &&
          (
            <>
              <div className="z-50 lg:hidden absolute w-full h-full bg-gray-700 opacity-50" onClick={() => setIsMenuOpen(false)}>
              </div>
              <motion.div
                key="navmenu"
                className="z-50 lg:hidden absolute bg-white right-0 top-0 min-w-[300px] h-full flex flex-col overflow-y-auto scroll-smooth no-scrollbar"
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
                  <NavItems onLinkClick={() => setIsMenuOpen(false)} />
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

export function NavBar() {
  return (
    <>
      <div className="hidden lg:flex flex-col w-1/3 min-w-[300px] h-full bg-white justify-center items-center py-36 gap-16">
        <Avatar isFlipped={false} />
        <NavItems />
        <Footer />
      </div>
      <MobileMenu />
    </>
  );
}
