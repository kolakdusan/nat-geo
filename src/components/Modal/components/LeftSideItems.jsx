import styled from 'styled-components'

import { leftSideItems } from '../data/menuContent'

const Item = styled.a`
  display: inline-block;
  padding: 35px 0;
  /* border: 2px solid red; */
  min-width: fit-content;
  max-width: 100%;
  width: 500px;
`

const LeftSideItems = () => {
  return leftSideItems.map((item) => <Item key={item}>{item}</Item>)
}

export default LeftSideItems
