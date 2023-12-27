import { useState, useEffect, useRef } from 'react'

import img1 from './assets/lifeBelowZero.jpg'

import imgData from './data'
// const TRANSITION_TIME = 600
const TRANSITION_TIME = 600
const VISIBLE_IMG_COUNT = 7
const IMG_COUNT = imgData.length

function App() {
  const [isScrollingRight, setIsScrollingRight] = useState(false)
  const [isScrollingLeft, setIsScrollingLeft] = useState(false)
  const [activeImgIdx, setActiveImgIdx] = useState(Math.floor(IMG_COUNT / 2))

  const [activeImgsIdxs, setActiveImgsIdxs] = useState(() => {
    const initialActiveImgsIdxs = Array.from(
      { length: VISIBLE_IMG_COUNT },
      (_, idx) => activeImgIdx + idx - Math.floor(VISIBLE_IMG_COUNT / 2)
    )
    return initialActiveImgsIdxs
  })

  // const [imgWindow, setImgWindow] = useState(imgData.reduce((_, idx) => {
  //   idx
  // }))

  const handleScrollRight = () => {
    setIsScrollingLeft(false)
    setIsScrollingRight(true)
    setTimeout(() => {
      setIsScrollingRight(false)
      setActiveImgIdx((prevState) => prevState + 1)
    }, TRANSITION_TIME)
  }

  const handleScrollLeft = () => {
    setIsScrollingRight(false)
    setIsScrollingLeft(true)
    setTimeout(() => {
      setIsScrollingLeft(false)
      setActiveImgIdx((prevState) => prevState - 1)
    }, TRANSITION_TIME)
  }

  useEffect(() => {
    setActiveImgsIdxs((prevActiveImgsIdxs) =>
      prevActiveImgsIdxs.map(
        (_, idx) => activeImgIdx + idx - Math.floor(VISIBLE_IMG_COUNT / 2)
      )
    )
  }, [activeImgIdx])

  const scrollingClasses = isScrollingRight
    ? 'scrollRight '
    : isScrollingLeft
    ? 'scrollLeft'
    : undefined

  return (
    <>
      <div className="container2">
        <div className={`container ${scrollingClasses}`}>
          {activeImgsIdxs.map((imgIdx) => {
            return (
              <img
                key={imgData[imgIdx]}
                src={imgData[imgIdx]}
                className="cover"
              />
            )
          })}
          <img src={imgData[activeImgIdx - 1]} className={`ghost-cover left`} />
          <img
            src={imgData[activeImgIdx + 1]}
            className={`ghost-cover right`}
          />
        </div>
        <div className="absolute h-full border-2 border-green-500 top-0 left-0 w-full">
          <div className={`ghost-container ${scrollingClasses}`}>
            <img src={imgData[activeImgIdx - 1]} className={`ghost-cover`} />
            <img src={imgData[activeImgIdx + 1]} className={`ghost-cover`} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end -mt-20">
        <button
          className="bg-white text-black px-10 py-3 z-[1000] "
          onClick={handleScrollLeft}
          disabled={isScrollingLeft || isScrollingRight}
        >
          left
        </button>
        <button
          className="bg-white text-black px-10 py-3 z-[1000] "
          onClick={handleScrollRight}
          disabled={isScrollingLeft || isScrollingRight}
        >
          right
        </button>
      </div>
    </>
  )
}

export default App
