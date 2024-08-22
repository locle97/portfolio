
// TODO: Modify social links
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

