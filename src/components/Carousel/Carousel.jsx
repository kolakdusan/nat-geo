import { useState, useEffect } from 'react'
import useLongPress from './../hooks/useLongPress'

import Image from './Image.jsx'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import imgData from '../../data'

const TRANSITION_TIME = 5000
const VISIBLE_IMG_COUNT = 7
const IMG_COUNT = imgData.length

const styles = {
  transition: 'all 0s ease !important',
}

const Carousel = () => {
  const [scrollingDirection, setScrollDirection] = useState(0)
  const [timer, setTimer] = useState(null)

  const [activeImgIdx, setActiveImgIdx] = useState(Math.floor(IMG_COUNT / 2))
  const [myCustomInterval, setMyCustomInterval] = useState(null)

  const [activeImgsIdxs, setActiveImgsIdxs] = useState(
    Array.from(
      { length: VISIBLE_IMG_COUNT },
      (_, idx) => activeImgIdx + idx - Math.floor(VISIBLE_IMG_COUNT / 2)
    )
  )

  const handleScroll = (direction) => {
    setScrollDirection(direction)
    setTimer(
      setTimeout(() => {
        setActiveImgIdx(
          (prevState) => (prevState + direction + IMG_COUNT) % IMG_COUNT
        )
        setScrollDirection(0)
        console.log(timer)
      }, TRANSITION_TIME)
    )

    return () => clearTimeout(timer)
  }

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

  useEffect(() => {
    setActiveImgsIdxs((prevActiveImgsIdxs) =>
      prevActiveImgsIdxs.map(
        (_, idx) =>
          (activeImgIdx + idx - Math.floor(VISIBLE_IMG_COUNT / 2) + IMG_COUNT) %
          IMG_COUNT
      )
    ),
      TRANSITION_TIME
  }, [activeImgIdx, myCustomInterval])

  const scrollingClasses =
    scrollingDirection === -1
      ? 'scrollLeft '
      : scrollingDirection === 1
      ? 'scrollRight '
      : undefined

  return (
    <>
      <div className="container2">
        <div className={`container ${scrollingClasses}  mx-auto `}>
          {activeImgsIdxs.map((imgIdx) => {
            return (
              <Image key={imgIdx} src={imgData[imgIdx]} className="cover" />
            )
          })}
          <Image
            src={imgData[(activeImgIdx - 1 + IMG_COUNT) % IMG_COUNT]}
            className={`ghost-cover left`}
            style={styles}
          />
          <Image
            src={imgData[(activeImgIdx + 1) % IMG_COUNT]}
            className={`ghost-cover right`}
          />
          <button
            className="-left-36 chevron mt-12"
            // onClick={() => handleScroll(-1)}
            // onMouseDown={handleMouseDownLeft}
            {...leftClickLongPress}
            disabled={scrollingDirection !== 0}
          >
            <FaChevronLeft />
          </button>
          <button
            className="-right-36 chevron mt-12"
            onClick={() => handleScroll(1)}
            // disabled={scrollingDirection !== 0}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  )
}

export default Carousel
