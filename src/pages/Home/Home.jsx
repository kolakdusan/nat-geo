import BasicMotionDivWrapper from './../../components/MotionDivWrappers/BasicMotionDivWrapper'
import LatestStories from './components/LatestStories'
import BgVideo from './components/BgVideo/BgVideo'
import BgVideoContent from './components/BgVideoContent'
import NatGeoTv from './components/NatGeoTv'
import HomeContainer from './components/HomeContainer'
import DisneyPlusSlider from './components/DisneyPlusSlider'

import styled from 'styled-components'

const WhiteStuffDelete = styled.div.attrs({
  className: 'w-[120%] h-[100px] ml-5 bg-white mt-[120px] mb-[-130px]',
})``

const Home = () => {
  return (
    <BasicMotionDivWrapper>
      <HomeContainer>
        <LatestStories />
        {/* <WhiteStuffDelete /> */}
        <BgVideo>
          <BgVideoContent />
        </BgVideo>
        <DisneyPlusSlider />
      </HomeContainer>
      <NatGeoTv />
    </BasicMotionDivWrapper>
  )
}
export default Home
