import styled from 'styled-components'

const GridContainer = styled.div.attrs({
  className: `mt-12 flex w-[1000px] justify-between gap-5`,
})`
  flex-direction: ${(props) => props.$reversed && 'row-reverse'} !important;
  img {
    transition: all 0.3s ease !important;
    transform: scale(100%);
  }
  .hero-image:hover {
    img {
      transform: scale(110%);
    }
  }
`

export default GridContainer
