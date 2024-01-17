import ReactPlayer from 'react-player'
import styled from 'styled-components'
import video from '../../../../assets/video/bg-video.webm'

const BgVideoWrapper = styled.div.attrs({
  className: 'relative mt-32 h-[100vh] w-[100vw]',
})``

const BgVideoContainer = styled.div.attrs({
  className:
    'absolute -top-16 -left-8  w-[100vw] h-[90vh] overflow-hidden  flex justify-start items-center',
})`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(0, 0, 0, 0.5), black 80%);
  }
`

const BgVideo = () => {
  return (
    <BgVideoWrapper>
      <p>BgVideo</p>
      <BgVideoContainer>
        <ReactPlayer
          muted={true}
          url={video}
          playing={true}
          controls={true}
          loop={true}
          width={'140vw'}
          height={'150vh'}
          pip={false}
        />
      </BgVideoContainer>
    </BgVideoWrapper>
  )
}
export default BgVideo
