import { useState, useEffect, useRef } from 'react'

import img1 from './assets/lifeBelowZero.jpg'
import img2 from './assets/lostCities.jpg'
import img3 from './assets/incredibleDrPol.jpg'

const repetitions = [1, 2, 3]
const images = [1, 2, 3]
// const realImgs = [img1, img1, img1, img2, img3, img3, img3]
const realImgs = [img1, img1, img1, img1, img1, img1, img1, img1, img1]

function App() {
  const [isScrollingRight, setIsScrollingRight] = useState(false)
  const [isScrollingLeft, setIsScrollingLeft] = useState(false)

  const handleScrollRight = () => {
    setIsScrollingRight(true)
    setTimeout(() => {
      setIsScrollingRight(false)
    }, 3000)
  }

  const handleScrollLeft = () => {
    setIsScrollingLeft(true)
    setTimeout(() => {
      setIsScrollingLeft(false)
    }, 3000)
  }

  // useEffect(() => {}, [isScrollingRight, isScrollingLeft])

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
          <img src={img} className={`left3 sepia ${scrollingClasses}`} />
          <img src={img} className={`left2 sepia ${scrollingClasses}`} />
          <img src={img} className={`left1 blur ${scrollingClasses}`} />
          <img src={img} className={`middle grayscale ${scrollingClasses}`} />
          <img src={img} className={`right1 blur ${scrollingClasses}`} />
          <img src={img} className={`right2 sepia ${scrollingClasses}`} />
          <img src={img} className={`right3 sepia ${scrollingClasses}`} />
          {/* <div className="ghost-carousel items-center flex">
            <img src={img} className="base" />
            <img
              src={img}
              id="ghostLeft"
              className={`left1 blur ${scrollingClasses}`}
            />
            <img
              src={img}
              id="ghostRight"
              className={`right1 blur ${scrollingClasses}`}
            />
          </div> */}
        </div>
      </div>
      <button
        className="bg-white text-black px-10 py-3"
        onClick={handleScrollLeft}
      >
        left
      </button>
      <button
        className="bg-white text-black px-10 py-3"
        onClick={handleScrollRight}
      >
        right
      </button>
    </>
  )
}

export default App
