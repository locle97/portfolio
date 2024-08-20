function SkillBar({ skill, current }) {
  const colors = ["bg-gray-400", "bg-gray-500", "bg-gray-600", "bg-gray-800", "bg-gray-950"];
  const levels = ["Begginer", "Intermediate", "Advanced", "Expert", "Master"];
  const defaultColor = "bg-gray-100";

  return (
    <>
      <div className="flex flex-col h-max w-full gap-1">
        <div className="flex justify-between">
          <p>
            { skill }
          </p>
          <p>
            { levels[current - 1] }
          </p>
        </div>
        <div className="h-[7px] w-full">
          <div className="h-full w-full mb-2 flex gap-2">
            {
              colors.map((color, index) => {
                const combinedColor = index < current ? color : defaultColor;
                return (<span className={"w-[20%] rounded-xl " + combinedColor}></span>);
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillBar;
