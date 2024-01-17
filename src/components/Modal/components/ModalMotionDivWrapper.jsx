import { motion } from 'framer-motion'

const ModalMotionDivWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-class absolute w-full h-full top-0 left-0 bg-black"
    >
      {children}
    </motion.div>
  )
}

export default ModalMotionDivWrapper
