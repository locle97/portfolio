function TimelineItem({ title, subtitle, description = "", period }) {
  return (
    <>
      <div className="relative flex flex-col h-max w-full gap-1">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-black lg:text-lg">{title}</p>
            <p className="text-sm lg:text-base">{subtitle}</p>
          </div>
        </div>
        <p className="absolute lg:flex right-[-25px] lg:right-0 top-0 text-xs lg:text-base w-max h-max py-2 px-4 text-white bg-gray-400">
          {period}
        </p>
      </div>
    </>
  )
}

export default TimelineItem;