const LatestStoriesTwo = ({ title }) => {
  return (
    <div className="border-2">
      <div className="mt-12 flex w-[1000px] justify-between">
        <div className="flex flex-col w-1/3 ">
          <div className="flex items-center gap-5">
            <div className="w-[5px] h-2/3 bg-[#ffd700]"></div>
            <p className="text-4xl">{title}</p>
          </div>
        </div>
        <div className="flex flex-col w-2/3  ">imggg</div>
      </div>
    </div>
  )
}
export default LatestStoriesTwo
