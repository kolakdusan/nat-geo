import { leftSideItems } from '../data/menuContent'

const LeftSideItems = () => {
  return leftSideItems.map((item) => <a key={item}>{item}</a>)
}
export default LeftSideItems
