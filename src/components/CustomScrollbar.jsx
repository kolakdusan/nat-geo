import { useNatGeo } from '../hooks/useNatGeo'

import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars-2'

const TrackVertical = styled.div`
  right: 0px;
  width: 10px;
  height: 93%;
  margin-top: 55px;
  z-index: 50000;
  background: rgba(255, 255, 255, 0);
  transition: all 0.3s ease;
  border-radius: 50px;

  &:hover,
  &:active {
    width: 17px !important;
    background: rgba(255, 255, 255, 0.1);
    .thumb-vertical {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`

const ThumbVertical = styled.div`
  background: rgba(255, 255, 255, 0.3);
  transition: backgroundColor 0.3s ease;
  border-radius: 50px;
`

let lastVal = 0

const CustomScrollbar = ({ children }) => {
  const { setHeaderPosition } = useNatGeo()

  const handleScroll = (e) => {
    let y = e.srcElement.scrollTop
    console.log(y, lastVal)
    if (y > lastVal) {
      setHeaderPosition('down')
    }
    if (y < lastVal) {
      setHeaderPosition('up')
    }
    if (y === 0) {
      setHeaderPosition('top')
    }
    lastVal = y
  }

  return (
    <Scrollbars
      renderTrackVertical={(props) => <TrackVertical {...props} />}
      renderThumbVertical={(props) => <ThumbVertical {...props} />}
      renderView={(props) => <div {...props} className="view" />}
      style={{ width: '100%', height: '100vh' }}
      onScroll={(e) => handleScroll(e)}
    >
      {children}
    </Scrollbars>
  )
}

export default CustomScrollbar
