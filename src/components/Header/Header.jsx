import { useState, useEffect } from 'react'
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

const Wrapper = styled.section`
  /* font-family: Geograph, Arial, Helvetica, sans-serif; */
`

const Header = () => {
  const { showModal, setShowModal } = useNatGeo()
  const [headerPosition, setHeaderPosition] = useState('top')

  useEffect(() => {
    let lastVal = 0
    window.onscroll = function () {
      let y = window.scrollY
      if (y > lastVal) {
        setHeaderPosition('down')
      }
      if (y < lastVal) {
        setHeaderPosition('up')
      }
      if (y === 0) {
        setHeaderPosition('top')
      }
      lastVal = y
    }
  }, [])

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
