import { motion } from 'framer-motion'
import styled from 'styled-components'

const MenuAnimatedWrapper = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  z-index: 500000;
  a {
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    &:hover {
      color: #ffd700;
    }
  }
`

export default MenuAnimatedWrapper
