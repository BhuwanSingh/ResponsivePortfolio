import './intro.css'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">Bhuwan Singh</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Competitive Programmer</div>
                <div className="i-title-item">Student</div>
                <div className="i-title-item">Content Creator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">right</div>
    </div>
  )
}

export default Intro
