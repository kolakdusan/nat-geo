import { Scrollbars } from 'react-custom-scrollbars-2'

// Styles
import styled from 'styled-components'

const TrackVertical = styled.div`
  width: 10px;
  height: 100%;
  right: 0;
  z-index: 50000;
  border-radius: 9999px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0);

  &:hover,
  &:active {
    width: 17px !important;
    right: 0;
    background: rgba(255, 255, 255, 0.1);
    .thumb-vertical {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`

const ThumbVertical = styled.div`
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.3);
  transition: backgroundColor 0.3s ease;
`

const CustomDiv = styled.div`
  display: flex;
  align-items: start;
`

const ModalScrollbar = ({ children }) => {
  return (
    <Scrollbars
      renderTrackVertical={(props) => <TrackVertical {...props} />}
      renderThumbVertical={(props) => <ThumbVertical {...props} />}
      renderView={(props) => <CustomDiv {...props} className="view" />}
      style={{ width: '100%', minHeight: '100vh' }}
    >
      {children}
    </Scrollbars>
  )
}

export default ModalScrollbar
