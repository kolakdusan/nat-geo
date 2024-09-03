import styled from 'styled-components'
import { FiChevronsUp } from 'react-icons/fi'

const ModalCloseBtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0.5rem;
  margin-right: 0.75rem;
`

const ModalCloseBtnInnerWrapper = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  opacity: 0.7;
  font-size: 1.5rem;
  line-height: 2rem;
  &:hover {
    background-color: #1f2937;
    opacity: 1;
  }
`

export const ModalCloseBtn = ({ onClick }) => {
  return (
    <ModalCloseBtnWrapper>
      <ModalCloseBtnInnerWrapper onClick={onClick}>
        <FiChevronsUp />
      </ModalCloseBtnInnerWrapper>
    </ModalCloseBtnWrapper>
  )
}
