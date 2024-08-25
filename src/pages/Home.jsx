import AnimatedPage from "../components/AnimatedPage";
import { Avatar } from "../components/Avatar";
import DynamicTitle from "../components/DynamicTitle";
import NextPageButton from "../components/NextPageButton";

export function Home({ name = "Loc Le", title = "Fullstack Developer" }) {
  return (
    <AnimatedPage>
      <DynamicTitle title="Loc Le" />
      <div id='home' className='relative min-w-full min-h-full bg-white flex flex-col gap-4 justify-center items-center'>
        <NextPageButton title="Discover me!" nextPage="/about" />

        {/* Avatar in mobile view */}
        <div className="block lg:hidden">
          <Avatar isFlipped={false} grayscale={false} />
        </div>

        {/* Name and Title */}
        <h1 className="text-6xl text-black font-bold">{name}</h1>
        <p className="text-gray-400 text-lg">{title}</p>

      </div>
    </AnimatedPage>
  );
}

