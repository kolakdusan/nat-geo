import ButtonWhiteBar from '../ButtonWhiteBar/ButtonWhiteBar.jsx'

const Image = ({ src, newGhost, ...props }) => {
  if (newGhost) {
    return (
      <>
        <div {...props}>
          <img src={src} />
          <ButtonWhiteBar text={'WATCH NOW'} />
          {/* <div className="newGhost"></div> */}
        </div>
        {/* <section className="new-ghost-cover">
          duleeeeeeeeeeeeeeeeeeeeeee eeeeeeee e e e e e
        </section> */}
      </>
    )
  }

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
