import Hero_bottom_cards from "../../../components/Hero_bottom_cards"
import "./Hero_bottom.css"
// import card1img from "../../../assets/images/hero bottom card 1.jpg"
// import card2img from "../../../assets/images/hero bottom card 2.jpg"
// import card3img from "../../../assets/images/hero bottom card 3.jpg"

import hb_i1 from "../../../assets/logo/hb i1.svg"
import hb_i2 from "../../../assets/logo/hb i2.svg"
import hb_i3 from "../../../assets/logo/hb i3.svg"
// import hb_i4 from "../../../assets/logo/hb i4.svg"

const Hero_section = () => {
  return (
    <div id="hero-bottom-main">
      <div id="hero-head">
        <h1>Project Overview:</h1>
        <p>VICTA represents a groundbreaking initiative designed to address the challenges and limitations of traditional systems</p>
      </div>
      
      <div id="hero-bottom-left">

        <Hero_bottom_cards
          image={hb_i1}
          h4={'Token Detail'}
          pera={"VCTA, the native token of the VICTA ecosystem, is a meticulously crafted BEP20 token on the Binance Smart Chain with 450 million total supply and 18 decimal places, serving as the primary medium of exchange for the project's ambitious goals."}
        />

        <div id="mid-card"  >

          <Hero_bottom_cards

            image={hb_i2}
            h4={'The Market Need'}
            pera={'VICTA offers a unified and secure decentralized solution, spanning utility payments, e-commerce, electric vehicle applications, short video hosting, OTT platforms, and the metaverse, addressing the growing need for decentralization across diverse sectors.'}
          />
        </div>
        <Hero_bottom_cards
          image={hb_i3}
          h4={'Technical Overview'}
          pera={"VICTA's robust technical foundation, utilizing the BEP20 standard on the Binance Smart Chain, facilitates fast and cost-effective transactions. The innovative consensus mechanism enhances security, ensuring the integrity of the entire ecosystem."}
        />

      </div>

      
    </div>
  )
}

export default Hero_section