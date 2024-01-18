import { useNatGeo } from './hooks/useNatGeo.jsx'
import { AnimatePresence } from 'framer-motion'

import Modal from './components/Modal/Modal.jsx'
import Header from './components/Header/Header'
import Home from './pages/Home/Home.jsx'

import { Scrollbars } from 'react-custom-scrollbars'

function App() {
  const { showModal } = useNatGeo()

  return (
    <Scrollbars
      renderTrackVertical={(props) => (
        <div {...props} className="track-vertical" />
      )}
      renderThumbVertical={(props) => (
        <div {...props} className="thumb-vertical" />
      )}
      renderView={(props) => <div {...props} className="view" />}
      style={{ width: '100%', height: '100vh' }}
    >
      <AnimatePresence>
        {showModal && <Modal key="modal" />}
        <Header key="header" />
        <Home key="home" />
      </AnimatePresence>
    </Scrollbars>
  )
}

export default App
