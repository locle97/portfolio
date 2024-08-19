import avatarUrl from '../assets/images/avatar.jpeg';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

export function Avatar() {
  return <div className="avatar w-36">
    <img className="rounded-full w-full aspect-square"
      src={avatarUrl}
      alt="avatar" />
  </div>;
}

export function NavItems() {
  const navItems = [
    { name: "Home", link: "/"},
    { name: "About", link: "/about"},
    { name: "Projects", link: "/projects"},
    { name: "Portfolio", link: "/portfolio"},
    { name: "Contact", link: "/contact"},
  ];

  return (
    <>
      <ul id="navlinks" className="flex flex-col items-center gap-4">
        {navItems.map((item, index) => (
          <li key={index} className="hover:text-gray-700">
            <NavLink to={item.link}>{item.name}</NavLink>
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

export function NavBar() {
  return (
    <>
      <div className="flex flex-col w-1/3 h-full bg-white justify-center items-center py-36 gap-16">
        <Avatar />
        <NavItems />
        <Footer />
      </div>
    </>
  );
}

