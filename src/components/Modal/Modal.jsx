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
  const { setShowModal } = useNatGeo()

  return (
    <ModalMotionDivWrapper>
      <ModalWrapper>
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
