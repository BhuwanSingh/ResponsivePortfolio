import './about.css'
import award from '../../img/award.png'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.unsplash.com/photo-1556642389-0cd5fd882f5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80"
            alt="photographer"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1>About Me</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          incidunt dolorum iusto quam suscipit omnis voluptates temporibus non
          animi optio libero doloremque, quas voluptas et in pariatur minus
          nihil architecto.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          animi quod, iste blanditiis eos, rem sequi eveniet labore, voluptatum
          quam sunt ipsa dolor cum iure ullam neque fugit deleniti consequuntur!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quas
          autem mollitia nisi ab ducimus fugit sint nulla vel distinctio? Animi
          eveniet ducimus architecto ipsum quis repellendus porro incidunt
          itaque?
        </p>
        <div className="a-award">
          <img src={award} alt="award" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
