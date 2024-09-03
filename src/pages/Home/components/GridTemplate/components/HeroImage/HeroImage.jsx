import styled from 'styled-components'
import { RiShoppingBag2Line } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'

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

const HeroImageInner = ({ heroImage }) => {
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

const HeroImage = ({ heroImage }) => {
  return (
    <HeroImageWrapper>
      <HeroImageInner heroImage={heroImage} />
    </HeroImageWrapper>
  )
}
export default HeroImage
