import { useEffect, useRef } from 'react'

import { useNatGeo } from '../../hooks/useNatGeo'
import { motion } from 'framer-motion'
import { FiChevronsUp } from 'react-icons/fi'

import './Modal.scss'

const ModalWrapper = ({ children }) => {
  return (
    <div
      className="flex items-start justify-between h-full px-[50px] tracking-[3.5px] text-gray-400 "
      id="abc"
      ref={ref}
    >
      {children}
    </div>
  )
}

const Modal = () => {
  const { showModal, setShowModal } = useNatGeo()
  const modalRef = useRef(null)

  // useEffect(() => {
  //   let timeoutId
  //   if (showModal) {
  //     document.documentElement.style.overflowY = 'hidden'
  //     const asdf = document.getElementById('navbar')
  //     asdf.style.paddingRight = '17px'
  //     document.getElementById('root').style.paddingLeft = 'calc(100vw - 100%)'
  //     modalRef.current.style.paddingRight = '17px'
  //   } else {
  //     document.getElementById('root').style.paddingLeft = 'calc(100vw - 100%)'
  //     timeoutId = setTimeout(() => {
  //       // closeModalBtnRef.current.style.marginLeft = '17px'
  //       document.getElementById('root').style.paddingLeft = '0px'
  //       modalRef.current.style.paddingRight = '0px'

  //       const asdf = document.getElementById('navbar')
  //       asdf.style.paddingRight = '0px'
  //       document.documentElement.style.overflowY = 'auto'
  //     }, 0)
  //   }

  //   return () => {
  //     clearTimeout(timeoutId)
  //   }
  // }, [showModal])

  return (
    <motion.div
      key="dule2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-class absolute  border-red-500 w-full h-full top-0 left-0 bg-black opacity-50 z-[10000000] transition-all duration-300 ease-in-out "
    >
      <div>
        {/* <button
          ref={modalRef}
          onClick={() => setShowModal(false)}
          className="bg-red-800 px-3 py-2"
        >
          Close modal
        </button> */}
        <div
          className="flex items-start justify-between h-full px-[50px] tracking-[3.5px] text-gray-400 "
          id="abc"
          ref={modalRef}
        >
          <div className="flex flex-col w-2/3 h-full justify-start gap-[65px]  text-5xl font-bold pt-24">
            <div className="flex">
              <p className="text-xl ">TOPICS</p>
              <div className="my-auto ml-2 w-[40px] h-[1px] bg-gray-300"></div>
            </div>
            <a>ANIMALS</a>
            <a>ENVIRONMENT</a>
            <a>HISTORY & CULTURE</a>
            <a>SCIENCE</a>
            <a>TRAVEL</a>
          </div>
          <div className="flex flex-col w-1/3 h-full gap-[30px] justify-start pt-24 text-xl ">
            <div className="flex mb-5">
              <p className="text-xl ">SITES</p>
              <div className="my-auto ml-2 w-[40px] h-[1px] bg-gray-300"></div>
            </div>
            <a>WATCH TV!</a>
            <a>READ THE MAGAZINE</a>
            <a>VISIT NAT GEO FAMILY</a>
            <a>BOOK A TRIP</a>
            <a>INSPIRE YOUR KIDS</a>
            <a>LISTEN TO PODCASTS</a>
            <a>SHOP NAT GEO</a>
            <a>ATTEND A LIVE EVENT</a>
            <a>LEARN ABOUT OUR IMPACT</a>
            <a>SUPPORT OUR MISSION</a>
          </div>
          <div className={`absolute top-0 right-0 mr-7 mt-2  `}>
            <button
              onClick={() => setShowModal(false)}
              className="opacity-70 hover:opacity-100 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-800 py-1 px-2"
            >
              <FiChevronsUp className="text-2xl " />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default Modal
