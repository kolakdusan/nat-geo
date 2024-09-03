import { useNatGeo } from '../../hooks/useNatGeo'

import MenuAnimatedWrapper from './components/MenuAnimatedWrapper/MenuAnimatedWrapper.jsx'
import MenuContainer from './components/MenuContainer/MenuContainer.jsx'
import LeftSideMenu from './components/LeftSideMenu/LeftSideMenu.jsx'
import RightSideMenu from './components/RightSideMenu/RightSideMenu.jsx'
import TopicsLabel from './components/TopicsLabel/TopicsLabel.jsx'
import SitesLabel from './components/SitesLabel/SitesLabel.jsx'

import { ModalCloseBtn } from './components/ModalStyles'

import LeftSideItems from './components/LeftSideItems'
import RightSideItems from './components/RightSideItems'

import ModalScrollbar from './components/ModalScrollbar/ModalScrollbar.jsx'

const Modal = () => {
  const { setShowModal } = useNatGeo()

  return (
    <MenuAnimatedWrapper>
      <ModalScrollbar>
        <MenuContainer>
          <LeftSideMenu>
            <TopicsLabel />
            <LeftSideItems />
          </LeftSideMenu>

          <RightSideMenu>
            <SitesLabel />
            <RightSideItems />
          </RightSideMenu>

          <ModalCloseBtn onClick={() => setShowModal(false)} />
        </MenuContainer>
      </ModalScrollbar>
    </MenuAnimatedWrapper>
  )
}
export default Modal
