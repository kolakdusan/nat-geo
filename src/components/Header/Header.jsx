import { useNatGeo } from '../../hooks/useNatGeo'

import styled from 'styled-components'

import BasicMotionDivWrapper from '../MotionDivWrappers/BasicMotionDivWrapper'
import { BtnContainer } from './components/HeaderStyles'
import Logo from './components/Logo/Logo'
import LoginBtn from './components/LoginBtn/LoginBtn'
import SearchBtn from './components/SearchBtn/SearchBtn'
import NewslettersBtn from './components/NewslettersBtn/NewslettersBtn'
import SubscribeBtn from './components/SubscribeBtn/SubscribeBtn'
import MenuBtn from './components/MenuBtn/MenuBtn'

import './Header.scss'

const Wrapper = styled.section.attrs({
  className:
    'fixed top-0 left-0 w-full h-[50px] z-[4000] flex items-center justify-between bg-white text-sm overflow-hidden shadow-md',
})`
  transition: all 0.5s ease-in-out;

  &.top {
    top: 0px;
  }

  &.down {
    top: -49px;
  }

  &.up {
    top: 0px;
  }

  /* font-family: Geograph, Arial, Helvetica, sans-serif; */
`

const Header = () => {
  const { setShowModal, headerPosition } = useNatGeo()

  return (
    <BasicMotionDivWrapper>
      <Wrapper className={`active ${headerPosition}`} id="navbar">
        <Logo />
        <BtnContainer>
          <LoginBtn />
          <SearchBtn />
          <NewslettersBtn />
          <SubscribeBtn />
          <MenuBtn onClick={() => setShowModal(true)} />
        </BtnContainer>
      </Wrapper>
    </BasicMotionDivWrapper>
  )
}

export default Header
