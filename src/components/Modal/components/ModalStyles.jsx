import styled from 'styled-components'
import { FiChevronsUp } from 'react-icons/fi'

export const ModalWrapper = styled.div.attrs({
  className:
    'flex items-start justify-between h-full px-[50px] tracking-[3.5px] text-gray-400 ',
})``

export const LeftSideMenu = styled.div.attrs({
  className:
    'flex flex-col w-2/3 h-full justify-start gap-[65px]  text-5xl font-bold pt-24',
})``

export const RightSideMenu = styled.div.attrs({
  className:
    'flex flex-col w-1/3 h-full gap-[30px] justify-start pt-24 text-xl ',
})``

const LeftMenuLabelWrapper = styled.div`
  display: flex;
`

const MenuLabelText = styled.p.attrs({
  className: 'text-xl',
})``

const MenuLabelWhiteBar = styled.div.attrs({
  className: 'my-auto ml-2 w-[40px] h-[1px] bg-gray-300',
})``

export const TopicsLabel = () => {
  return (
    <LeftMenuLabelWrapper>
      <MenuLabelText>TOPICS</MenuLabelText>
      <MenuLabelWhiteBar />
    </LeftMenuLabelWrapper>
  )
}

const RightMenuLabelWrapper = styled.div.attrs({
  className: 'mb-5',
})`
  display: flex;
`

export const SitesLabel = () => {
  return (
    <RightMenuLabelWrapper>
      <MenuLabelText>SITES</MenuLabelText>
      <MenuLabelWhiteBar />
    </RightMenuLabelWrapper>
  )
}

const ModalCloseBtnWrapper = styled.div.attrs({
  className: 'absolute top-0 right-0 mr-7 mt-2  ',
})``

const ModalCloseBtnInnerWrapper = styled.button.attrs({
  className:
    'opacity-70 hover:opacity-100 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-800 py-1 px-2',
})``

export const ModalCloseBtn = ({ onClick }) => {
  return (
    <ModalCloseBtnWrapper>
      <ModalCloseBtnInnerWrapper onClick={onClick}>
        <FiChevronsUp className="text-2xl " />
      </ModalCloseBtnInnerWrapper>
    </ModalCloseBtnWrapper>
  )
}
