import ButtonWhiteBar from '../ButtonWhiteBar/ButtonWhiteBar.jsx'

const Image = ({ src, newGhost, ...props }) => {
  return (
    <>
      <div {...props}>
        <img src={src} />
        <ButtonWhiteBar text={'WATCH NOW'} />
      </div>
    </>
  )
}
export default Image
