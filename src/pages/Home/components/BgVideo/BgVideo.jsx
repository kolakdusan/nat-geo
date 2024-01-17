import ReactPlayer from 'react-player'
import styled from 'styled-components'
import video from '../../../../assets/video/bg-video.webm'
import { IoMdPlay, IoMdPause } from 'react-icons/io'
import { useState } from 'react'

const BgVideoWrapper = styled.div.attrs({
  className: 'relative mt-32 h-[100vh] w-[100vw]',
})``

const BgVideoContainer = styled.div.attrs({
  className:
    'absolute  w-[100vw] h-[90vh] overflow-hidden  flex justify-start items-center space-y-8',
})`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgb(0, 0, 0, 0.5),
      rgb(0, 0, 0, 0.5) 20%,
      black 100%
    );

    background: ${(props) =>
      props.$isvideoplaying
        ? 'linear-gradient(rgb(0, 0, 0, 0.3),rgb(0, 0, 0, 0.3) 20%,black 100%)'
        : 'linear-gradient(rgb(0, 0, 0, 0.6),rgb(0, 0, 0, 0.6) 20%,black 100%)'};
  }
`

const ContentWrapper = styled.div.attrs({
  className:
    'absolute top-0 left-0 w-full h-full flex flex-col items-center pt-56 space-y-8',
})``

const PlayBtn = styled.button.attrs({
  className:
    'absolute top-0 left-10 w-16 h-16 bg-[rgba(20,20,20,0.7)] rounded-full flex items-center justify-center text-3xl ',
})``

const BgVideo = ({ children }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)

  return (
    <BgVideoWrapper>
      <BgVideoContainer $isvideoplaying={isVideoPlaying}>
        <ReactPlayer
          muted={true}
          url={video}
          playing={isVideoPlaying}
          controls={true}
          loop={true}
          width={'140vw'}
          height={'150vh'}
          pip={false}
        />
        <ContentWrapper>{children}</ContentWrapper>
        <PlayBtn
          onClick={() =>
            setIsVideoPlaying((prevIsVideoPlaying) => !prevIsVideoPlaying)
          }
        >
          {isVideoPlaying ? <IoMdPause /> : <IoMdPlay className="ml-1" />}
        </PlayBtn>
      </BgVideoContainer>
    </BgVideoWrapper>
  )
}

export default BgVideo
