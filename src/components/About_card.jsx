import "./style/About_card.css"

const About_card = (prop) => {
  return (
      <div id="About-card-main">
          <h4>{prop.h3}</h4>
          <p>{prop.p1} </p>
          <p id="p2" > {prop.p2} </p>
      </div>
  )
}

export default About_card