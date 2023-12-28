import './ButtonWhiteBar.scss'

const ButtonWhiteBar = ({ text }) => {
  return (
    <>
      <div className="watch-now-btn-container">
        <div className="watch-now-btn-wrapper ">
          <button className="watch-now-btn">{text}</button>
          <div className="watch-now-btn-white-bar"></div>
        </div>
      </div>
    </>
  )
}
export default ButtonWhiteBar
