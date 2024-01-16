import LatestStoriesTwo from './LatestStoriesTwo'

const LatestStories = () => {
  return (
    <div className="mt-16 flex flex-col justify-center items-center tracking-[1px]">
      <p className="text-6xl mt-20">LATEST STORIES</p>
      <p className="mt-8 p">
        <p className="inline relative subscribezz">
          Subscribe <div className="lineSubscribe"></div>
        </p>
        for full access to read stories from National Geographic
      </p>
      <div className="mt-6 w-[60px] h-[3px] bg-[#ffd700]"></div>

      <LatestStoriesTwo />
    </div>
  )
}
export default LatestStories
