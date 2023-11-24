 
 
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
import r3 from "../../../assets/images/r3.jpg"
import r4 from "../../../assets/images/r4.png"
import r5 from "../../../assets/images/r5.jpg"
import r6 from "../../../assets/images/r6.jpg"
import r7 from "../../../assets/images/r7.jpg"
import r8 from "../../../assets/images/r8.jpg"
 
 





 
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
          <p>Guiding {"VICTA's"} Evolutionary Journey: Unveiling strategic phases, fostering growth, and embracing innovations for a dynamic and thriving ecosystem.</p>
        </div>
        <div className="App">
          <Carousel breakPoints={breakPoints}
            style={{    }}
          >
            
            <RoadmapCard
              bg="#E3EDFF"
              h4="PHASE - 1 "
              image={r1}
              h4_2=" IDEATION & TOKEN DEVELOPMENT"
              p= "VICTA ideates core concepts, vision, and utility token (VCTA), focusing on features and ecosystem integration."
            >One</RoadmapCard>


            <RoadmapCard
              bg="#D9EAE8"
              h4="PHASE - 2"
              image={r2}
              h4_2="ICO MARKETING"
              p="Launch ICO marketing, promote token sale, build awareness, create community for VICTA project funding."
            >One</RoadmapCard>


            <RoadmapCard
              bg="#F2E7E4"
              h4="PHASE - 3 "
              image={r3}
              h4_2="STAKING AND DAPP"
              p="Introduce staking for token rewards, foster user loyalty; unveil DApps for enhanced VICTA functionality."
            >One</RoadmapCard>

            <RoadmapCard
              bg="#F2E7E4"
              h4="PHASE - 4"
              image={r4}
              h4_2="CMC Listing"
              p="Achieve CoinMarketCap listing, boosting VICTA's visibility, credibility, and accessibility in the cryptocurrency community."
            >One</RoadmapCard>



            <RoadmapCard
              bg="#F2E7E4"
              h4="PHASE - 5"
              image={r5}
              h4_2="PancakeSwap Listing"
              p="List on PancakeSwap, Binance Smart Chain's DEX, integrating VICTA into DeFi, enhancing liquidity and decentralized trading."
            >One</RoadmapCard>
            <RoadmapCard
              bg="#F2E7E4"
              h4="PHASE - 6"
              image={r6}
              h4_2="Mobile CRM"
              p=" Launch Mobile CRM for enhanced user engagement and support, enabling seamless VICTA ecosystem interaction on mobile devices."
            >One</RoadmapCard>
            <RoadmapCard
              bg="#F2E7E4"
              h4="PHASE - 7"
              image={r7}
              h4_2="Decentralized Wallet"
              p="Unveil decentralized wallet in seventh quarter, empowering users with secure control over VCTA token storage and transactions."
            >One</RoadmapCard>
            <RoadmapCard
              bg="#F2E7E4"
              h4="PHASE - 8"
              image={r8}
              h4_2="Listing on Global Exchange"
              p="Secure global exchange listing to expand VICTA's reach, enhance liquidity, and boost recognition globally."
            >One</RoadmapCard>
            {/* <RoadmapCard
              bg="#F2E7E4"
              h4="PHASE - 9"
              image=""
              h4_2="(UPCOMING)"
              p=" UPCOMING, phase in ninth quarter signals ongoing evolution, teasing new features, partnerships, and expansions in VICTA ecosystem.."
            >One</RoadmapCard> */}
            
          </Carousel>
        </div>
      </div>
    </>
  );
}
