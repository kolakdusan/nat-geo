import styled from 'styled-components'
import bottomCardImg1 from '../../../../../../assets/latest-stories/bottomcard1.jpg'
import bottomCardImg2 from '../../../../../../assets/latest-stories/bottomcard2.jfif'
import { RiShoppingBag2Line } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'

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

const BottomCards = () => {
  return (
    <>
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
    </>
  )
}
export default BottomCards
