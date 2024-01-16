import styled from 'styled-components'

const HeaderWrapper = styled.section.attrs({
  className:
    'fixed top-0 left-0 w-full h-[50px] z-[4000] flex items-center justify-between bg-white text-sm overflow-hidden shadow-md',
})`
  transition: all 0.5s ease-in-out;
  &.hidden2 {
    @apply top-[-49px];
  }
  /* font-family: Geograph, Arial, Helvetica, sans-serif; */
`

export { HeaderWrapper }
