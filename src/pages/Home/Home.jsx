import BasicMotionDivWrapper from './../../components/MotionDivWrappers/BasicMotionDivWrapper'
import LatestStories from './components/LatestStories'
import BgVideo from './components/BgVideo/BgVideo'
import BgVideoContent from './components/BgVideoContent'
import NatGeoTv from './components/NatGeoTv'
import HomeContainer from './components/HomeContainer'
import DisneyPlusSlider from './components/DisneyPlusSlider'

const Home = () => {
  return (
    <BasicMotionDivWrapper>
      <HomeContainer>
        <LatestStories />
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
