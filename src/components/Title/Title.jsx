import styled from 'styled-components'

import LatestStoriesTwo from './LatestStoriesTwo'

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

const Title = ({ title, hasDescription, description }) => {
  return (
    <TitleWrapper>
      <TitleText>{title}</TitleText>

      {hasDescription && (
        <DescriptionWrapper>
          {description.split(' ').map((word, idx) => {
            if (word.toLowerCase() === 'subscribe') {
              return (
                <p key={idx} className="inline relative subscribezz">
                  Subscribe <span className="lineSubscribe"></span>
                </p>
              )
            } else {
              return <span key={idx}>{`${word} `}</span>
            }
          })}
        </DescriptionWrapper>
      )}

      <YellowHorizontalLine />
    </TitleWrapper>
  )
}
export default Title
