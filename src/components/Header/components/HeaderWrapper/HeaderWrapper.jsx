import styled from 'styled-components'

const HeaderWrapper = styled.section`
  width: 100%;
  height: 50px;
  display: flex;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  z-index: 4000;
  transition: all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  &.top {
    top: 0px;
  }
  &.down {
    top: -49px;
  }
  &.up {
    top: 0px;
  }
`

export default HeaderWrapper
