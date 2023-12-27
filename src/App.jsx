import { useState, useEffect, useRef } from 'react'

import img1 from './assets/lifeBelowZero.jpg'
import img2 from './assets/lostCities.jpg'
import img3 from './assets/incredibleDrPol.jpg'

import imgData from './data'
// const TRANSITION_TIME = 600
const TRANSITION_TIME = 2000
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
      <div id="container">
        <div id="carousel">
          <img src={img} className="base" />
          {activeImgsIdxs.map((imgIdx, idx) => {
            let classes = ''
            switch (idx) {
              case 0: {
                classes = 'left3 '
                break
              }
              case 1: {
                classes = 'left2 '
                break
              }
              case 2: {
                classes = 'left1 '
                break
              }
              case 3: {
                classes = 'middle '
                break
              }
              case 4: {
                classes = 'right1 '
                break
              }
              case 5: {
                classes = 'right2 '
                break
              }
              case 6: {
                classes = 'right3 '
                break
              }
              default: {
                classes = 'middle '
                break
              }
            }
            classes += `${scrollingClasses}`
            return (
              <img
                key={imgData[imgIdx]}
                src={imgData[imgIdx]}
                className={classes}
              />
            )
          })}
          {/* <img src={img} className={`left3 sepia ${scrollingClasses}`} />
          <img src={img} className={`left2 sepia ${scrollingClasses}`} />
          <img src={img} className={`left1 blur ${scrollingClasses}`} />
          <img src={img} className={`middle grayscale ${scrollingClasses}`} />
          <img src={img} className={`right1 blur ${scrollingClasses}`} />
          <img src={img} className={`right2 sepia ${scrollingClasses}`} />
          <img src={img} className={`right3 sepia ${scrollingClasses}`} /> */}
        </div>
        <div className="absolute h-full border-2 border-green-500 top-0 left-0 w-full">
          <div id="ghost-carousel">
            <img
              src={imgData[activeImgIdx - 1]}
              className={`left1 ${scrollingClasses}`}
            />
            <img
              src={imgData[activeImgIdx + 1]}
              className={`right1 ${scrollingClasses}`}
            />
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
          <img className="base" src={img} />
        </div>
        <div className="absolute h-full border-2 border-green-500 top-0 left-0 w-full">
          <div className={`ghost-parent ${scrollingClasses}`}>
            <img src={imgData[activeImgIdx - 1]} className={`ghost-dupe`} />
            <img src={imgData[activeImgIdx + 1]} className={`ghost-dupe`} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
