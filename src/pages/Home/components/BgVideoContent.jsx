import styled from 'styled-components'

const BgVideoContent = () => {
  return (
    <>
      <p className="tracking-[3.5px] text-2xl mr-[3.5px]">
        INCREDIBLE ANIMAL JOURNEYS
      </p>
      <p className="max-w-3xl fontLight text-center text-lg">
        We might think we are the world’s greatest explorers, but we’re not.
        Millions of animals migrate across our planet daily using routes passed
        down through generations. <b>INCREDIBLE ANIMAL JOURNEYS</b> puts us in
        the action as they soar, fly and swim from the Antarctic to the African
        savanna and the Pacific Ocean to Alaska.
      </p>
      <StreamNowWrapper>
        <div className="  transition-all duration-300 ease-in-out cursor-pointer tracking-[3.5px]  text-sm text-center ">
          <p className="relative z-10">STREAM NOW</p>
          <span className="yellowLineStreamNow absolute bottom-[-2px] left-[-2.5px] w-[100%] h-[2px] bg-[#ffd700] transition-all duration-300 ease-in-out z-5"></span>
        </div>
      </StreamNowWrapper>
    </>
  )
}

const StreamNowWrapper = styled.div.attrs({
  className: 'relative',
})`
  div:hover {
    color: black;
    .yellowLineStreamNow {
      height: 115%;
    }
  }
`

export default BgVideoContent
