import { useEffect, useRef } from 'react'

import { useNatGeo } from '../../hooks/useNatGeo'
import { motion } from 'framer-motion'
import { FiChevronsUp } from 'react-icons/fi'

import BasicMotionDivWrapper from './../MotionDivWrappers/BasicMotionDivWrapper'

import './ModalClone.scss'

const ModalClone = () => {
  const { showModal, setShowModal } = useNatGeo()
  const modalRef = useRef(null)

  return (
    <BasicMotionDivWrapper>
      <div className="modal-class absolute border-red-500 w-full h-full top-0 left-0 bg-black z-[10000000] transition-all duration-300 ease-in-out ">
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
    </BasicMotionDivWrapper>
  )
}
export default ModalClone
