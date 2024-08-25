import { NavLink } from "react-router-dom";
import { routing } from "../routing";
import { downloadCV } from "../utils/Utils";


export function NavItems({ onLinkClick }) {
  const navItems = routing;

  return (
    <>
      <ul id="navlinks" className="flex flex-col items-center gap-4">
        {navItems.map((item, index) => (
          <li key={index} className="hover:text-gray-700" onClick={onLinkClick}>
            <NavLink to={item.link}>{item.name}</NavLink>
          </li>
        ))}
        <li id="download-cv-navbar" className="hover:text-gray-700" onClick={downloadCV}>
          <button>
            <span>Download CV</span>
            {/*<i className="fi fi-sr-download"></i>*/}
          </button>
        </li>
      </ul>
    </>
  );
}

