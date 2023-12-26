import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import img1 from './assets/lifeBelowZero.jpg'
import img2 from './assets/lostCities.jpg'
import img3 from './assets/incredibleDrPol.jpg'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const repetitions = [1, 2, 3]
const images = [1, 2, 3]
const realImgs = [img1, img2, img3, img1, img2, img3, img1, img2, img3]

function App() {
  return (
    <>
      <div id="carousel" className="hidden">
        <Swiper
          id="swiper"
          navigation
          spaceBetween={0}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {realImgs.map((img) => (
            <SwiperSlide>
              <img src={img} className="realImg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div id="carousel">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
          className="swiper"
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {realImgs.map((img) => (
            <SwiperSlide>
              <img src={img} className="realImg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default App
