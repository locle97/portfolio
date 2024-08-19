const Page = ({ id, children }) => {
  return (
    <div id={id} className="section flex flex-col gap-4 min-h-full min-w-full bg-white justify-center items-center">
      {children}
    </div>
  )
}

export default Page;
