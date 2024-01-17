import BasicMotionDivWrapper from './../../components/MotionDivWrappers/BasicMotionDivWrapper'
import LatestStories from './components/LatestStories'
import BgVideo from './components/BgVideo/BgVideo'
import NatGeoTv from './components/NatGeoTv'
import HomeContainer from './components/HomeContainer'

const Home = () => {
  return (
    <BasicMotionDivWrapper>
      <HomeContainer>
        <LatestStories />
        <BgVideo />
        <NatGeoTv />
      </HomeContainer>
    </BasicMotionDivWrapper>
  )
}
export default Home
