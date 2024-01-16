import styled from 'styled-components'

const MenuBtnWrapper = styled.div.attrs({
  className:
    'h-14 flex items-center justify-center px-5 cursor-pointer gap-2 hover:opacity-50 transition-all duration-150 ease-in-out',
})``

const MenuBtnText = styled.a.attrs({
  className: 'cursor-pointer z-10 tracking-[3.5px] mr-[-3.5px]',
})``

export { MenuBtnWrapper, MenuBtnText }
