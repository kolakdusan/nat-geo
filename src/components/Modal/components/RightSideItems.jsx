import styled from 'styled-components'

import { rightSideItems } from '../data/menuContent'

const Item = styled.a`
  display: inline-block;
  padding: 20px 0;
  /* border: 2px solid blue; */
  min-width: fit-content;
  max-width: 100%;
  width: 500px;
`

const RightSideItems = () => {
  return rightSideItems.map((item) => <Item key={item}>{item}</Item>)
}
export default RightSideItems
