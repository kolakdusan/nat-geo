import { useState, useEffect } from 'react'
import { useNatGeo } from '../../hooks/useNatGeo'

import styled from 'styled-components'

import { BtnContainer } from './components/HeaderStyles'
import Logo from './components/Logo/Logo'
import LoginBtn from './components/LoginBtn/LoginBtn'
import SearchBtn from './components/SearchBtn/SearchBtn'
import NewslettersBtn from './components/NewslettersBtn/NewslettersBtn'
import SubscribeBtn from './components/SubscribeBtn/SubscribeBtn'
import MenuBtn from './components/MenuBtn/MenuBtn'

import './Header.scss'
import BasicMotionDivWrapper from '../MotionDivWrappers/BasicMotionDivWrapper'

const Wrapper = styled.section`
  /* font-family: Geograph, Arial, Helvetica, sans-serif; */
`

const Header = () => {
  const { showModal, setShowModal } = useNatGeo()

  const [show, setShow] = useState(true)
  let lastScrollY = 0

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false)
    } else {
      setShow(true)
    }

    lastScrollY = window.scrollY
  }

  // useEffect(() => {
  //   window.addEventListener('scroll', controlNavbar)
  //   // cleanup function
  //   return () => {
  //     window.removeEventListener('scroll', controlNavbar)
  //   }
  // }, [lastScrollY])

  // const scrollFunc = () => {}

  // useEffect(() => {
  //   window.addEventListener(scroll, scrollFunc)
  // }, [])

  return (
    <BasicMotionDivWrapper>
      <Wrapper className={`active ${!show && 'hidden2 '}`} id="navbar">
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
