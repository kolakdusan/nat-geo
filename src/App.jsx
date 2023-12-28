import { useState, useEffect } from 'react'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import imgData from './data'
import Image from './components/Image'
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
      setActiveImgIdx((prevState) => (prevState + 1) % IMG_COUNT)
    }, TRANSITION_TIME)
  }

  const handleScrollLeft = () => {
    setIsScrollingRight(false)
    setIsScrollingLeft(true)
    setTimeout(() => {
      setIsScrollingLeft(false)
      setActiveImgIdx((prevState) => (prevState - 1 + IMG_COUNT) % IMG_COUNT)
    }, TRANSITION_TIME)
  }

  useEffect(() => {
    setActiveImgsIdxs((prevActiveImgsIdxs) =>
      prevActiveImgsIdxs.map(
        (_, idx) =>
          (activeImgIdx + idx - Math.floor(VISIBLE_IMG_COUNT / 2) + IMG_COUNT) %
          IMG_COUNT
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
          <img
            src={imgData[(activeImgIdx - 1 + IMG_COUNT) % IMG_COUNT]}
            className={`ghost-cover left`}
          />
          <img
            src={imgData[(activeImgIdx + 1) % IMG_COUNT]}
            className={`ghost-cover right`}
          />
          <button
            className="left-52 chevron"
            onClick={handleScrollLeft}
            disabled={isScrollingLeft || isScrollingRight}
          >
            <FaChevronLeft />
          </button>
          <button
            className="right-52 chevron"
            onClick={handleScrollRight}
            disabled={isScrollingLeft || isScrollingRight}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
