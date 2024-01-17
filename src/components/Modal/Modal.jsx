import { useEffect, useRef } from 'react'
import { useNatGeo } from '../../hooks/useNatGeo'

import {
  ModalWrapper,
  LeftSideMenu,
  RightSideMenu,
  TopicsLabel,
  SitesLabel,
  ModalCloseBtn,
} from './components/ModalStyles'
import LeftSideItems from './components/LeftSideItems'
import RightSideItems from './components/RightSideItems'
import ModalMotionDivWrapper from './components/ModalMotionDivWrapper'
import './Modal.scss'

const Modal = () => {
  const { showModal, setShowModal } = useNatGeo()
  const modalRef = useRef(null)

  useEffect(() => {
    let timeoutId
    const header = document.getElementById('navbar')

    if (showModal) {
      document.documentElement.style.overflowY = 'hidden'
      header.style.paddingRight = '17px'
      document.getElementById('root').style.paddingLeft = 'calc(100vw - 100%)'
      modalRef.current.style.paddingRight = '17px'
    } else {
      timeoutId = setTimeout(() => {
        // closeModalBtnRef.current.style.marginLeft = '17px'
        document.documentElement.style.overflowY = 'auto'
        document.getElementById('root').style.paddingLeft = '0px'
        modalRef.current.style.paddingRight = '0px'
        header.style.paddingRight = '0px'
      }, 150)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [showModal])

  return (
    <ModalMotionDivWrapper>
      <ModalWrapper ref={modalRef}>
        <LeftSideMenu>
          <TopicsLabel />
          <LeftSideItems />
        </LeftSideMenu>

        <RightSideMenu>
          <SitesLabel />
          <RightSideItems />
        </RightSideMenu>

        <ModalCloseBtn onClick={() => setShowModal(false)} />
      </ModalWrapper>
    </ModalMotionDivWrapper>
  )
}
export default Modal
