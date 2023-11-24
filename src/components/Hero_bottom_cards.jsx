import "./style/Hero_bottom_card.css"

const Hero_bottom_cards = (prop) => {
  return (

    <div id="hb-pera-div" >

      <div id="hb-pera"> 
        
        <img id="hb-img" src={prop.image} alt="" />
        <h4>{prop.h4}</h4>
        <p>{prop.pera}</p>
        
      </div>
    </div>

  )
}

export default Hero_bottom_cards