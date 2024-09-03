import TextVerticalYellowBarHoverEffect from '../../../../components/TextVerticalYellowBarHoverEffect.jsx'

import GridContainer from './components/GridContainer/GridContainer.jsx'
import VerticalTopicsContainer from './components/VerticalTopicsContainer/VerticalTopicsContainer.jsx'
import GridTitle from './components/GridTitle/GridTItle.jsx'
import SideCards from './components/SideCards/SideCards.jsx'
import HeroImage from './components/HeroImage/HeroImage.jsx'
import ImagesContainer from './components/ImagesContainer/ImagesContainer.jsx'
import BottomImagesContainer from './components/BottomImagesContainer/BottomImagesContainer.jsx'
import BottomCards from './components/BottomCards/BottomCards.jsx'

const GridTemplate = ({ title, isReversed, heroImage }) => {
  return (
    <GridContainer $reversed={isReversed}>
      <VerticalTopicsContainer>
        <GridTitle title={title} />
        <SideCards />
        <TextVerticalYellowBarHoverEffect text="SEE MORE" isSmaller={true} />
      </VerticalTopicsContainer>

      <ImagesContainer>
        <HeroImage heroImage={heroImage} />
        <BottomImagesContainer>
          <BottomCards />
        </BottomImagesContainer>
      </ImagesContainer>
    </GridContainer>
  )
}
export default GridTemplate
