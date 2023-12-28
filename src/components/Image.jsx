import ButtonWhiteBar from './ButtonWhiteBar/ButtonWhiteBar'

const Image = ({ src, ...props }) => {
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
