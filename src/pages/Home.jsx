import AnimatedPage from '../components/AnimatedPage'

export function Home({name, title}) {
  return (
    <div id='home' className='min-w-full min-h-full bg-white flex flex-col gap-4 justify-center items-center'>
      <h1 className="text-6xl text-black font-bold">{name}</h1>
      <p className="text-gray-400 text-lg">{title}</p>
    </div>
  );
}

