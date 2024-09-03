import styled from 'styled-components'

const TitleWrapper = styled.div.attrs({
  className: 'mt-16 flex flex-col justify-center items-center tracking-[1px]',
})``

const TitleText = styled.p.attrs({
  className: 'text-6xl mt-20',
})``

const DescriptionWrapper = styled.div.attrs({
  className: 'mt-8 fontLight',
})``

const YellowHorizontalLine = styled.div.attrs({
  className: 'mt-6 w-[60px] h-[3px] bg-[#ffd700]',
})``

const UnderlinedText = styled.p.attrs({
  className:
    'inline relative  transition-all duration-300 ease-in-out cursor-pointer',
})`
  &:hover {
    color: #000;

    .lineSubscribe {
      height: 115%;
    }
  }
`

const LineSubscribe = styled.span.attrs({
  className:
    'lineSubscribe absolute bottom-[-2px] left-[-1px] w-[100%] h-[2px] bg-[#ffd700] z-[-5] transition-all duration-300 ease-in-out',
})``

const Title = ({ title, hasDescription, description }) => {
  return (
    <TitleWrapper>
      <TitleText>{title}</TitleText>

      {hasDescription && (
        <DescriptionWrapper>
          {description.split(' ').map((word, idx) => {
            if (word.toLowerCase() === 'subscribe') {
              return (
                <UnderlinedText key={idx}>
                  Subscribe
                  <LineSubscribe></LineSubscribe>
                </UnderlinedText>
              )
            } else {
              return <span key={idx}>{` ${word}`}</span>
            }
          })}
        </DescriptionWrapper>
      )}

      <YellowHorizontalLine />
    </TitleWrapper>
  )
}
export default Title
