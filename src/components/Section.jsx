function Section({ title, children }) {
  return (
    <>
      <div className="z-0 relative border-[1px] py-14 px-8">
        <p className="absolute left-8 top-[-20px] text-black font-bold uppercase bg-gray-100 py-2 px-8">{title}</p>
        <div>
          {children}
        </div>
      </div>
    </>
  )
}

export default Section;
