import { useNatGeo } from './hooks/useNatGeo.jsx'
import { AnimatePresence } from 'framer-motion'

import Modal from './components/Modal/Modal.jsx'
import Header from './components/Header/Header'
import Home from './pages/Home/Home.jsx'

function App() {
  const { showModal } = useNatGeo()

  return (
    <AnimatePresence>
      {showModal && <Modal key="modal" />}
      <Header key="header" />
      <Home key="home" />
    </AnimatePresence>
  )
}

export default App
