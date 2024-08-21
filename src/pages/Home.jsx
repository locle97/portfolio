import { useEffect, useRef } from "react";

export function Home({ scrollY = 0, name = "Loc Le", title = "Fullstack Developer", navigateToNextSection }) {
  const ref = useRef(0);

  useEffect(() => {
    const opacity = Math.max((1 - scrollY / 200), 0);
    ref.current.style.opacity = opacity;

  }, [scrollY]);

  return (
    <div id='home' className='relative min-w-full min-h-full bg-white flex flex-col gap-4 justify-center items-center'>
      <button ref={ref} onClick={navigateToNextSection}
        className={"text-gray-900 absolute flex flex-col justify-center items-center bottom-[5px] animate-bounce"}>
        <p>Discover me!</p>
        <i className="text-2xl fi fi-rs-angle-circle-down"></i>
      </button>
      <h1 className="text-6xl text-black font-bold">{name}</h1>
      <p className="text-gray-400 text-lg">{title}</p>
    </div>
  );
}

