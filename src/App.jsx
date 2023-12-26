import { useState, useEffect, useRef } from 'react'

import img1 from './assets/lifeBelowZero.jpg'
import img2 from './assets/lostCities.jpg'
import img3 from './assets/incredibleDrPol.jpg'

const repetitions = [1, 2, 3]
const images = [1, 2, 3]
// const realImgs = [img1, img1, img1, img2, img3, img3, img3]
const realImgs = [img1, img1, img1, img1, img1, img1, img1, img1, img1]

function App() {
  const carouselRef = useRef()
  const imgRef = useRef()

  useEffect(() => {
    const beginningOfCenterImg = imgRef.current.offsetLeft
    const centerImgWidth = imgRef.current.getBoundingClientRect().width
    const containerWidth = carouselRef.current.getBoundingClientRect().width
    const amountNeededToScroll =
      beginningOfCenterImg - containerWidth / 2 + centerImgWidth / 2

    carouselRef.current.scrollTo(amountNeededToScroll, 0)
  }, [carouselRef, imgRef])

  return (
    <>
      <div id="container">
        <div id="carousel" ref={carouselRef}>
          {realImgs.map((img, idx) => {
            return (
              <img
                key={Math.random() + 1}
                src={img}
                alt=""
                className={`img ${idx === 4 ? 'grayscale' : undefined}`}
                ref={idx === 4 ? imgRef : null}
              />
            )
          })}
        </div>
      </div>
      <button onClick={() => carouselRef.current.scrollTo(200, 0)}>
        click me
      </button>
    </>
  )
}

export default App
