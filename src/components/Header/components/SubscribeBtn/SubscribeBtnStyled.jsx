import styled from 'styled-components'

const SubscribeBtnWrapper = styled.div.attrs({
  className:
    'sign-up-wrapper h-[50px] flex items-center justify-center px-5 bg-black text-white hover:text-black duration-150 transition-all relative cursor-pointer overflow-hidden border-b-white border-b-2 ',
})`
  display: flex;
  overflow: hidden;
  position: relative;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
  color: #ffffff;
  background-color: #000000;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  height: 50px;
  &:hover .yellow-full-bar {
    left: 0;
  }
`

const SubscribeBtnText = styled.a.attrs({
  className:
    'mt-[2px] cursor-pointer flex items-center justify-center z-10 tracking-[3.5px] mr-[-3.5px] text-xs text-center',
})``

const SubscribeBtnYellowBar = styled.div.attrs({
  className:
    'yellow-full-bar absolute w-full h-full bg-[#ffd700] top-0 z-5 pointer-events-none transition-all duration-300 ease-in-out left-[-100%] ',
})``

export { SubscribeBtnWrapper, SubscribeBtnText, SubscribeBtnYellowBar }
