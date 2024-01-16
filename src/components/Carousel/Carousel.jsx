import { useState, useEffect } from 'react'
import useLongPress from './../hooks/useLongPress'

import Image from './Image.jsx'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import imgData from '../../data'

const TRANSITION_TIME = 500
const VISIBLE_IMG_COUNT = 7
const IMG_COUNT = imgData.length

const Carousel = () => {
  const [canStartScrolling, setCanStartScrolling] = useState(0)
  const [scrollingDirection, setScrollDirection] = useState(0)
  const [timeoutId, setTimeoutId] = useState(null)
  const [activeImgIdx, setActiveImgIdx] = useState(Math.floor(IMG_COUNT / 2))
  const [myCustomInterval, setMyCustomInterval] = useState(null)
  const [activeImgsIdxs, setActiveImgsIdxs] = useState(
    Array.from(
      { length: VISIBLE_IMG_COUNT },
      (_, idx) => activeImgIdx + idx - Math.floor(VISIBLE_IMG_COUNT / 2)
    )
  )

  const handleScroll = (direction) => {
    if (scrollingDirection !== 0) {
      updateCarouselImages()
      setScrollDirection(0)
    }

    setCanStartScrolling(direction)
    clearTimeout(timeoutId)
    setActiveImgIdx(
      (prevState) => (prevState + direction + IMG_COUNT) % IMG_COUNT
    )
  }

  const updateCarouselImages = () => {
    setActiveImgsIdxs((prevActiveImgsIdxs) =>
      prevActiveImgsIdxs.map(
        (_, idx) =>
          (activeImgIdx + idx - Math.floor(VISIBLE_IMG_COUNT / 2) + IMG_COUNT) %
          IMG_COUNT
      )
    )
  }

  useEffect(() => {
    clearTimeout(timeoutId)
    if (canStartScrolling === 1) {
      setScrollDirection(1)
    } else if (canStartScrolling === -1) {
      setScrollDirection(-1)
    }

    setTimeoutId(
      setTimeout(() => {
        updateCarouselImages()
        setScrollDirection(0)
      }, TRANSITION_TIME)
    )

    return () => clearTimeout(timeoutId)
  }, [activeImgIdx, canStartScrolling])

  const scrollingClasses =
    scrollingDirection === -1
      ? 'scrollLeft '
      : scrollingDirection === 1
      ? 'scrollRight '
      : undefined

  const leftClickLongPress = useLongPress(
    () => {
      setMyCustomInterval(
        setInterval(() => {
          handleScroll(-1)
        }, 400)
      )
    },
    myCustomInterval,
    510
  )

  const {
    onMouseUp: onMouseUpLongPress,
    onMouseDown: onMouseDownLongPress,
    onTouchStart: onTouchStartLongPress,
    onTouchEnd: onTouchEndLongPress,
  } = leftClickLongPress

  return (
    <>
      <div className="carousel-wrapper">
        <div className={`carousel-container ${scrollingClasses} `}>
          {activeImgsIdxs.map((imgIdx) => {
            return (
              <Image
                key={imgIdx}
                src={imgData[imgIdx]}
                className="carousel-item"
              />
            )
          })}
          <button
            className="-left-36 chevron mt-12"
            onClick={() => handleScroll(-1)}
            // onMouseDown={handleMouseDownLeft}
            // {...leftClickLongPress}
          >
            <FaChevronLeft />
          </button>
          <button
            className="-right-36 chevron mt-12"
            onClick={() => handleScroll(1)}
          >
            <FaChevronRight />
          </button>
        </div>
        <div className=" absolute z-[5001] w-full h-full top-0 left-0 pointer-events-none">
          <div className={`containerGGG ${scrollingClasses}  mx-auto `}>
            {activeImgsIdxs.map((imgIdx) => {
              return (
                <Image
                  key={imgIdx + 1000}
                  src={imgData[imgIdx]}
                  className="coverGGG"
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel
