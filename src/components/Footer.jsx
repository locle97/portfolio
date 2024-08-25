
export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { name: "Github", class: "fi fi-brands-github", link: "https://github.com/locle97/portfolio" },
    { name: "Linkedin", class: "fi fi-brands-linkedin", link: "https://www.linkedin.com/in/loc-le-phat-2b639020a/" },
    { name: "Facebook", class: "fi fi-brands-facebook", link: "https://www.facebook.com/lpl212757" },
    { name: "Youtube", class: "fi fi-brands-instagram", link: "https://www.instagram.com/rubber_.duck/" },
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
            <a href={social.link} target="_blank" key={index} className="hover:text-black">
              <i key={index} className={social.class}></i>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

