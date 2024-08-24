import avatarUrl from '../assets/images/avatar.jpeg';


export function Avatar({ isFlipped = false, grayscale = false }) {
  const imgClass = `rounded-full w-full aspect-square ${grayscale ? 'grayscale' : ''}`;
  return <div className="avatar w-[100px] lg:w-[120px]">
    <img className={imgClass}
      src={avatarUrl}
      alt="avatar" />
  </div>;
}

