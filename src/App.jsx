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

  const img = img1

  const scrollingClasses = isScrollingRight
    ? 'scrollRight '
    : isScrollingLeft
    ? 'scrollLeft'
    : undefined

  return (
    <>
      <div className="parent2">
        <div className={`parent ${scrollingClasses}`}>
          {activeImgsIdxs.map((imgIdx) => {
            return (
              <img
                key={imgData[imgIdx]}
                src={imgData[imgIdx]}
                className="dupe"
              />
            )
          })}
          {/* <img className="base" src={img} /> */}
        </div>
        <div className="absolute h-full border-2 border-green-500 top-0 left-0 w-full">
          <div className={`ghost-parent ${scrollingClasses}`}>
            <img src={imgData[activeImgIdx - 1]} className={`ghost-dupe`} />
            <img src={imgData[activeImgIdx + 1]} className={`ghost-dupe`} />
          </div>
        </div>
      </div>
      <button
        className="bg-white text-black px-10 py-3"
        onClick={handleScrollLeft}
        disabled={isScrollingLeft || isScrollingRight}
      >
        left
      </button>
      <button
        className="bg-white text-black px-10 py-3"
        onClick={handleScrollRight}
        disabled={isScrollingLeft || isScrollingRight}
      >
        right
      </button>
    </>
  )
}

export default App
