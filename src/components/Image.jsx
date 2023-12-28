const Image = ({ src, ...props }) => {
  return (
    <>
      <div className="cover border-2">
        <img src={src} className="max-h-[575px]" />
        <div className="absolute flex justify-center bottom-16 mx-auto left-0 right-0">
          <button className="bg-yellow-500 px-5 py-3 text-sm text-black cursor-pointer">
            WATCH NOW
          </button>
        </div>
      </div>
    </>
  )
}
export default Image
