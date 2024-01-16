import { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Header from './components/Header/Header'
import Home from './pages/Home/Home.jsx'
import Modal from './components/Modal/Modal.jsx'
import ModalClone from './components/ModalClone/ModalClone.jsx'

import { useNatGeo } from './hooks/useNatGeo.jsx'

function App() {
  const { showModal, setShowModal } = useNatGeo()

  return (
    <AnimatePresence>
      {showModal && <ModalClone key="modal" />}

      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-800 px-3 py-2"
      >
        Open modal
      </button>
      <Header key="header" />
      <Home key="home" />
    </AnimatePresence>
  )
}

export default App
