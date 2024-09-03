import { Scrollbars } from 'react-custom-scrollbars-2'

import { useNatGeo } from '../../hooks/useNatGeo'
import { TrackVertical, ThumbVertical } from './CustomScrollbar.styles'

let lastScrollVal = 0

const CustomScrollbar = ({ children }) => {
  const { setHeaderPosition } = useNatGeo()

  const handleScroll = (e) => {
    let y = e.srcElement.scrollTop
    if (y > lastScrollVal) {
      setHeaderPosition('down')
    }
    if (y < lastScrollVal) {
      setHeaderPosition('up')
    }
    if (y === 0) {
      setHeaderPosition('top')
    }
    lastScrollVal = y
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
