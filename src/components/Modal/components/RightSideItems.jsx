import { rightSideItems } from '../data/menuContent'

const RightSideItems = () => {
  return rightSideItems.map((item) => <a key={item}>{item}</a>)
}
export default RightSideItems
