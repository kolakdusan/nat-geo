import styled from 'styled-components'

const GridTitleWrapper = styled.div.attrs({
  className: 'flex items-center gap-5',
})``

const GridTitleYellowLine = styled.div.attrs({
  className: 'w-[5px] h-2/3 bg-[#ffd700]',
})``

const GridTitleText = styled.div.attrs({
  className: 'text-4xl',
})``

const GridTitle = ({ title }) => {
  return (
    <GridTitleWrapper>
      <GridTitleYellowLine />
      <GridTitleText>{title}</GridTitleText>
    </GridTitleWrapper>
  )
}
export default GridTitle
