import styled from 'styled-components'

const LeftMenuLabelWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  color: #aaa;
`

const MenuLabelText = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
`

const MenuLabelWhiteBar = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 0.5rem;
  background-color: #d1d5db;
  width: 40px;
  height: 1px;
`

const TopicsLabel = () => {
  return (
    <LeftMenuLabelWrapper>
      <MenuLabelText>TOPICS</MenuLabelText>
      <MenuLabelWhiteBar />
    </LeftMenuLabelWrapper>
  )
}

export default TopicsLabel
