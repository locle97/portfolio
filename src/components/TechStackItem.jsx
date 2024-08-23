function TechStackItem({ techCode }) {
  const techMapping = {
    'react': {
      logo: 'images/logo/react.svg',
      alt: 'React'
    },
    'html': {
      logo: 'images/logo/html.svg',
      alt: 'HTML'
    },
    'css': {
      logo: 'images/logo/css.svg',
      alt: 'CSS'
    },
    'javascript': {
      logo: 'images/logo/javascript.svg',
      alt: 'Javascript'
    },
    'tailwindcss': {
      logo: 'images/logo/tailwindcss.svg',
      alt: 'Tailwind CSS'
    },
  }

  return (
    <div className="flex flex-col justify-center items-center text-center hover:scale-125 transistion-all delay-150 duration-300">
      <img
        className="w-10 h-10"
        src={techMapping[techCode].logo}
        alt={techMapping[techCode].alt}
      />
      <p>{techMapping[techCode].alt}</p>
    </div>
  );
};

export default TechStackItem;
