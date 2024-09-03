import { useNatGeo } from '../../hooks/useNatGeo'

import BasicMotionDivWrapper from '../MotionDivWrappers/BasicMotionDivWrapper'
import HeaderWrapper from './components/HeaderWrapper/HeaderWrapper'
import { BtnContainer } from './components/HeaderStyles'
import Logo from './components/Logo/Logo'
import LoginBtn from './components/LoginBtn/LoginBtn'
import SearchBtn from './components/SearchBtn/SearchBtn'
import NewslettersBtn from './components/NewslettersBtn/NewslettersBtn'
import SubscribeBtn from './components/SubscribeBtn/SubscribeBtn'
import MenuBtn from './components/MenuBtn/MenuBtn'

const Header = () => {
  const { setShowModal, headerPosition } = useNatGeo()

  return (
    <BasicMotionDivWrapper>
      <HeaderWrapper className={`${headerPosition}`}>
        <Logo />
        <BtnContainer>
          <LoginBtn />
          <SearchBtn />
          <NewslettersBtn />
          <SubscribeBtn />
          <MenuBtn onClick={() => setShowModal(true)} />
        </BtnContainer>
      </HeaderWrapper>
    </BasicMotionDivWrapper>
  )
}

export default Header
