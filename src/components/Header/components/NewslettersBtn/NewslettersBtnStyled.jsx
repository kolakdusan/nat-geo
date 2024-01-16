import styled from 'styled-components'

const NewsletterBtnWrapper = styled.div.attrs({
  className: 'newsletter-wrapper relative flex justify-center mr-5 ml-2',
})``

const NewslettersBtnText = styled.a.attrs({
  className: 'cursor-pointer font-thin newsletters z-10 fontLight',
})`
  /* @font-face {
    font-family: GeographLight;
    src: url(../../assets/fonts/geographeditwebregular.ttf) format('truetype');
  }
  font-family: GeographLight, Arial, Helvetica, sans-serif; */

  &:hover + .yellow-bar {
    height: 110%;
  }
`

const NewslettersBtnYellowBar = styled.div.attrs({
  className:
    'absolute w-full bottom-[-2px] h-[3px] bg-[#ffd700] z-5 yellow-bar transition-all duration-150 ease-in-out ',
})``

export { NewsletterBtnWrapper, NewslettersBtnText, NewslettersBtnYellowBar }
