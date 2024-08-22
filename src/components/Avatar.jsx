import avatarUrl from '../assets/images/avatar.jpeg';


export function Avatar({ isFlipped }) {
  return <div className="avatar w-[120px]">
    <img className="rounded-full w-full aspect-square"
      src={avatarUrl}
      alt="avatar" />
  </div>;
}

