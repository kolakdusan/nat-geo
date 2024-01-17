import { useState } from 'react'

import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import 'swiper/scss/autoplay'

import imgData from '../../../data'
import TextVerticalYellowBarHoverEffect from './../../../components/TextVerticalYellowBarHoverEffect'
const shuffledImageData = imgData.reverse()

const DisneyPlusTextContainer = styled.div.attrs({
  className:
    'flex justify-between items-center max-w-4xl w-full mb-5 tracking-[3.5px] ',
})`
  p {
    cursor: pointer;
  }
`

const DisneyPlusText = () => {
  return (
    <>
      <p>DISCOVER MORE ON DISNEY+</p>
      <TextVerticalYellowBarHoverEffect text="SEE SHOWS" isSmaller={true} />
    </>
  )
}

const DisneyPlusSlider = () => {
  return (
    <>
      <div className=" mt-[-32]  flex items-center justify-center text-white not-selectable mb-32">
        <div className="translate-y-[-30%] flex flex-col items-center absolute max-w-7xl ">
          <DisneyPlusTextContainer>
            <DisneyPlusText />
          </DisneyPlusTextContainer>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            slidesPerGroup={4}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            speed={500}
            navigation
            className="sample-slider"
          >
            {shuffledImageData.map((img, idx) => (
              <SwiperSlide key={Math.random()}>
                <div className="max-h-[250px] max-w-[175px] overflow-hidden">
                  <img
                    src={img}
                    className="h-[250px] object-cover transition-all duration-300 ease-in-out hover:scale-[110%] cursor-pointer"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
export default DisneyPlusSlider
