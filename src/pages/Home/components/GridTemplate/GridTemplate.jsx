import styled from 'styled-components'
import { RiShoppingBag2Line } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import bottomCardImg1 from '../../../../assets/latest-stories/bottomcard1.jpg'
import bottomCardImg2 from '../../../../assets/latest-stories/bottomcard2.jfif'
import TextVerticalYellowBarHoverEffect from '../../../../components/TextVerticalYellowBarHoverEffect.jsx'

const GridContainer = styled.div.attrs({
  className: `mt-12 flex w-[1000px] justify-between gap-5`,
})`
  flex-direction: ${(props) => props.$reversed && 'row-reverse'} !important;
  img {
    transition: all 0.3s ease !important;
    transform: scale(100%);
  }
  .hero-image:hover {
    img {
      transform: scale(110%);
    }
  }
`

const VerticalTopicsContainer = styled.div.attrs({
  className: 'flex flex-col w-1/3 pr-6 gap-5 ',
})``

const ImagesContainer = styled.div.attrs({
  className: 'flex flex-col w-2/3 ',
})``

const HeroImageWrapper = styled.div.attrs({
  className: 'max-h-[500px] overflow-hidden relative',
})`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    --overlay-gradient: rgba(0, 0, 0, 0.3);
    background: linear-gradient(
      rgba(0, 0, 0, 0.5) 0%,
      var(--overlay-gradient) 20%,
      transparent,
      var(--overlay-gradient) 80%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 5;
  }
`

const HeroImage = ({ heroImage }) => {
  return (
    <div className="relative cursor-pointer hero-image">
      <img
        src={heroImage}
        className=" object-cover bg-center bg-cover h-[450px]"
      />
      <div className="absolute top-0 left-0 w-full h-full  z-10 flex flex-col justify-end px-6 py-8 space-y-3 text-xs ">
        <p className="tracking-[3.5px] flex items-center gap-2">
          <RiShoppingBag2Line className="inline text-lg text-yellow-500" />
          ENVIRONMENT
        </p>
        <p className="text-4xl tracking-[0.5px]  leading-normal pb-3 ">
          10 simple ways to change your life in 2024
        </p>
        <p className="tracking-[3.5px] flex items-center gap-2">
          <GiHamburgerMenu className="inline text-lg " />
          READ
        </p>
      </div>
    </div>
  )
}

const BottomImagesContainer = styled.div.attrs({
  className: 'flex gap-10 mt-10',
})``

const BottomCard = styled.div.attrs({
  className: 'flex flex-col w-1/2 cursor-pointer max-h-[600px]',
})`
  &:hover img {
    transform: scale(110%);
  }
`

const BottomCardBody = styled.div.attrs({
  className:
    'flex flex-1 flex-col bg-white text-black   px-5 pt-4 pb-8 gap-4 text-xs tracking-[3.5px] justify-center',
})``

const BottomCardImageWrapper = styled.div.attrs({
  className: 'bottom-image-wrapper max-h-[250px] max-w-1/2 overflow-hidden ',
})``

const SideCard = ({ img, tag, content }) => {
  return (
    <div className="flex gap-5 items-start py-1 cursor-pointer">
      <img
        src={img}
        className="w-1/4 aspect-square object-cover max-h-[80px]"
      />
      <div className="flex flex-1 flex-col w-2/3 text-sm tracking-[3.5px]">
        <p className="hover:underline"> {tag}</p>
        <p className="main-content tracking-wide leading-normal mt-2 text-[16px] fontLight hover:underline ">
          {content}
        </p>
      </div>
    </div>
  )
}

const GridTemplate = ({ title, isReversed, heroImage }) => {
  return (
    <div className="">
      <GridContainer $reversed={isReversed}>
        <VerticalTopicsContainer>
          <div className="flex items-center gap-5">
            <div className="w-[5px] h-2/3 bg-[#ffd700]"></div>
            <p className="text-4xl">{title}</p>
          </div>
          <SideCard
            img={bottomCardImg1}
            tag="ENVIRONMENT"
            content="This is what the world could look like in 2070"
          />
          <SideCard
            img={'https://picsum.photos/200/?random&dummyParam1'}
            tag="SPACE"
            content="Cosmic wonders, black hole secrets"
          />

          <SideCard
            img={'https://picsum.photos/200/?random&dummyParam2'}
            tag="WILDLIFE"
            content="Rare moments, endangered lives"
          />

          <SideCard
            img={'https://picsum.photos/200/?random&dummyParam3'}
            tag="DISCOVERY"
            content="Unveiling ancient civilizations buried beneath the earth's surface"
          />

          <SideCard
            img={'https://picsum.photos/200/?random&dummyParam4'}
            tag="OCEANS"
            content="Deep ocean mysteries, unexplored depths"
          />

          <SideCard
            img={'https://picsum.photos/200/?random&dummyParam5'}
            tag="INNOVATION"
            content="Transforming agriculture for a more sustainable food future"
          />
          <TextVerticalYellowBarHoverEffect text="SEE MORE" isSmaller={true} />
        </VerticalTopicsContainer>
        <ImagesContainer>
          <HeroImageWrapper>
            <HeroImage heroImage={heroImage} />
          </HeroImageWrapper>
          <BottomImagesContainer>
            <BottomCard>
              <BottomCardImageWrapper>
                <img
                  src={bottomCardImg1}
                  className="max-w-full h-[250px] object-cover"
                />
              </BottomCardImageWrapper>
              <BottomCardBody>
                <p className="flex gap-2 items-center">
                  <RiShoppingBag2Line className="inline text-lg text-yellow-500" />
                  SCIENCE
                </p>
                <p className=" text-2xl tracking-normal pb-3">
                  What is 'inflammaging' and how can we control it?
                </p>
                <p className="flex gap-2 items-center">
                  <GiHamburgerMenu className="inline text-lg " />
                  READ
                </p>
              </BottomCardBody>
            </BottomCard>
            <BottomCard>
              <BottomCardImageWrapper>
                <img
                  src={bottomCardImg2}
                  className="max-w-full  h-[250px] object-cover "
                />
              </BottomCardImageWrapper>
              <BottomCardBody>
                <p className="flex gap-2 items-center">TRAVEL</p>
                <p className=" text-2xl tracking-normal pb-3">
                  Get ready for your next adventure like a pro with these tips
                </p>
                <p className="flex gap-2 items-center">
                  <GiHamburgerMenu className="inline text-lg " />
                  READ
                </p>
              </BottomCardBody>
            </BottomCard>
          </BottomImagesContainer>
        </ImagesContainer>
      </GridContainer>
    </div>
  )
}
export default GridTemplate
