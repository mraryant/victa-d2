 
 
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation'; // Import navigation module styles
import './Roadmap.css'; // Import your custom styles

import RoadmapCard from '../../../components/Roadmap_card'; 
// import Carousel from "react-elastic-carousel";
import Carousel from "@itseasy21/react-elastic-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import r1 from "../../../assets/images/r1.jpg"
import r2 from "../../../assets/images/r2.jpg"
import r3 from "../../../assets/images/r4.jpg"
import r4 from "../../../assets/images/r5.jpg"
import r5 from "../../../assets/images/r61.jpg"
import r6 from "../../../assets/images/r6.jpg"
import r7 from "../../../assets/images/r7.jpg"
import r8 from "../../../assets/images/r8.jpg"
import r9 from "../../../assets/images/r9.jpg"
 
 





 
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  
];




export default function Roadmap() {
   

  return (
    <>
      <div id="roadmap-main">
        <div id="roadmap-head">

          <h1 style={{ textAlign: "center", color: 'var(--light)' }}>ROADMAP</h1>
          <p>
            This involves strategic planning to ensure {"VICTA's"} continual evolution, promoting growth, and integrating innovations to maintain a dynamic and thriving ecosystem that meets evolving user needs.</p>
        </div>
        <div className="App">
          <Carousel breakPoints={breakPoints}
            style={{    }}
          >
            
            <RoadmapCard
              bg="#E3EDFF"
              h4="PHASE - 1 "
              image={r1}
              h4_2=" Utility Wallet Launch"
              p= "Mobile, electricity, Fastag, water, gas, and corporation bill recharge. Flight, bus booking, insurance renewal, and solar panel services available."
            >One</RoadmapCard>


            <RoadmapCard
              bg="#D9EAE8"
              h4="PHASE - 2"
              image={r2}
              h4_2=" Cashback Utility Integration "
              p="
E-commerce: clothing, shoes, beauty, grocery, gadgets, home appliances, decor. Events, insurance, hotels, tours, gaming, fintech, cashback services."
            >One</RoadmapCard>


            <RoadmapCard
              bg="#F2E7E4"
              h4="PHASE - 3 "
              image={r3}
              h4_2="EV App Development"
              p="
EV App launched with token redemption and unit purchases. One-stop solution for electric bike users, including maintenance services."
            >One</RoadmapCard>

            <RoadmapCard
              bg="#E3EDFF"
              h4="PHASE - 4"
              image={r4}
              h4_2="Short Videos Platform"
              p="
Short videos platform launch with viewer channel subscriptions and reward tokens for user engagement."
            >One</RoadmapCard>



            <RoadmapCard
              bg="#D9EAE8"
              h4="PHASE - 5"
              image={r5}
              h4_2=" Metaverse OTT Platform"
              p="Local market, gaming, short storytelling, and motivational content services introduced, seamlessly integrated with the immersive metaverse experience."
            >One</RoadmapCard>
            <RoadmapCard
              bg="#F2E7E4"
              h4="PHASE - 6"
              image={r6}
              h4_2="Metaverse Expansion"
              p=" Metaverse development featuring VR, AR, portals, gaming, and adventure parks. Seamless integration of adventure parks enhances the immersive virtual experience."
            >One</RoadmapCard>
            <RoadmapCard
              bg="#E3EDFF"
              h4="PHASE - 7"
              image={r7}
              h4_2=" Dating App Launch"
              p="
Dating app launch with peer-to-peer services and a bucket list feature for shared interests. Group chats, family get-togethers, and metaverse travel services integrated."
            >One</RoadmapCard>
            <RoadmapCard
              bg="#D9EAE8"
              h4="PHASE - 8"
              image={r8}
              h4_2="Green Energy Blockchain"
              p="
Blockchain powered by renewable energy introduced, hosting green energy projects with reduced fees for a sustainable and eco-friendly approach."
            >One</RoadmapCard>
            <RoadmapCard
              bg="#F2E7E4"
              h4="PHASE - 9"
              image={r9}
              h4_2="(Coming Soon)"
              p=" Future developments: Ongoing innovation and growth driven by user feedback and industry trends to meet evolving needs effectively."
            >One</RoadmapCard>
            
          </Carousel>
        </div>
      </div>
    </>
  );
}
