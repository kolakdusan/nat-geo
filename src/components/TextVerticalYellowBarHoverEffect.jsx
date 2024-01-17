import styled from 'styled-components'

const Wrapper = styled.div.attrs({
  className: 'relative  ',
})`
  width: fit-content;
  div:hover {
    color: black;
    .yellowLineStreamNow {
      height: 115%;
    }
  }
`

const TextVerticalYellowBarHoverEffect = ({ text, isSmaller }) => {
  return (
    <Wrapper>
      <div
        className={` relative transition-all duration-300 ease-in-out cursor-pointer tracking-[3.5px] text-center ${
          isSmaller ? 'text-xs' : 'text-sm'
        } `}
      >
        <p className="relative z-10">{text}</p>
        <span className="yellowLineStreamNow absolute bottom-[-2px] left-[-2.5px] w-[100%] h-[2px] bg-[#ffd700] transition-all duration-300 ease-in-out z-5"></span>
      </div>
    </Wrapper>
  )
}
export default TextVerticalYellowBarHoverEffect
