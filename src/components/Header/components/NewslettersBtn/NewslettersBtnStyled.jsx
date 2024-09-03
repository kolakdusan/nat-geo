import styled from 'styled-components'

const NewsletterBtnWrapper = styled.div`
  display: flex;
  position: relative;
  margin-left: 0.5rem;
  margin-right: 1.25rem;
  justify-content: center;
`

const NewslettersBtnText = styled.a.attrs({
  className: 'fontLight',
})`
  z-index: 10;
  font-weight: 100;
  cursor: pointer;
  &:hover + .yellow-bar {
    height: 110%;
  }
`

const NewslettersBtnYellowBar = styled.div.attrs({
  className: 'yellow-bar',
})`
  position: absolute;
  bottom: -2px;
  width: 100%;
  height: 3px;
  z-index: 5;
  transition: all 0.15s ease-in-out;
  background: #ffd700;
`

export { NewsletterBtnWrapper, NewslettersBtnText, NewslettersBtnYellowBar }
