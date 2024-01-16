import { MenuBtnWrapper, MenuBtnText } from './MenuBtnStyled'
import { FiChevronsDown } from 'react-icons/fi'

const MenuBtn = ({ onClick }) => {
  return (
    <MenuBtnWrapper onClick={onClick}>
      <MenuBtnText>MENU</MenuBtnText>
      <FiChevronsDown className="text-2xl" />
    </MenuBtnWrapper>
  )
}
export default MenuBtn
