import './intro.css'
import me from '../../img/me.png'
import scroll from '../../img/scroll.svg'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">Bhuwan Singh</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Programmer</div>
              <div className="i-title-item">Student</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <div className="i-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nulla corporis adipisci illo magni amet nesciunt, quas minus,
            quibusdam vel libero exercitationem repudiandae sit laborum eius
            sunt deleniti, mollitia cupiditate?
          </div>
        </div>
        <img src={scroll} alt="scroll" className="i-scroll" />
      </div>
      <div className="i-right">
        <div className="i-bg">
          <img src={me} alt="me" className="i-img" />
        </div>
      </div>
    </div>
  )
}

export default Intro
