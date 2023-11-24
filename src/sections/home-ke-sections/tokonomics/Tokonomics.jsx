import "./Tokonomics.css"
import toko_img from "../../../assets/images/toko4.png"
// import { color } from "framer-motion"

const Tokonomics = () => {
  return (
    <>
      <div id="toko-head">
      <h1 id="toko-h" >TOKENOMICS</h1>
      <p id="toko-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quisquam earum impedit tempore voluptatum ullam aspernatur omnis cupiditate ducimus reiciendis. Aperiam repudiandae vitae dolorem nemo!</p>

      </div>
      <div id="toko-main" >
        <div id="toko-right">
          <h5>TOKEN UTILITY</h5>
          <div id="util-1">
            <span id="util-left"> Token Name</span>
            <span id="util-right"> VICTA </span>
           </div>
          <div id="util-1">
            <span id="util-left">  Symbol</span>
            <span id="util-right"> VCTA </span>
           </div>
          <div id="util-1">
            <span id="util-left">  Total Supply </span>
            <span id="util-right"> 450 million / crore </span>
           </div>
          <div id="util-1">
            <span id="util-left">  Decimal</span>
            <span id="util-right"> 18 </span>
           </div>
          <div id="util-1">
            <span id="util-left">  Network </span>
            <span id="util-right">  BEP20 </span>
           </div>


        </div>
        <div id="toko-left">
          <img src={toko_img} alt="" />
        </div>
        
        <div id="toko-right">
          <h5>TOKEN DISTRIBUTION</h5>
          <div className="toko-card" style={{ borderLeft: '9px solid #084DA5' }}>
            <h5> <span style={{ color:'#084DA5'}}>35%</span> COMMUNITY</h5>
            {/* <p>To create the pair on DEX</p> */}
          </div>
          <div className="toko-card" style={{ borderLeft: '9px solid #057DCF' }}>
            <h5> <span style={{ color:'#057DCF'}}>20%</span>BURNING</h5>
            {/* <p>To create the pair on DEX</p> */}
          </div>
          <div className="toko-card" style={{ borderLeft: '9px solid #01A7FE' }}>
            <h5> <span style={{ color:'#01A7FE'}}>15%</span> FOUNDER</h5>
            {/* <p>To create the pair on DEX</p> */}
          </div>
          <div className="toko-card" style={{ borderLeft: '9px solid #01D5FF' }}>
            <h5> <span style={{ color:'#01D5FF'}}>10%</span> TREASURY</h5>
            {/* <p>To create the pair on DEX</p> */}
          </div>
          <div className="toko-card" style={{ borderLeft: '9px solid #5BD5FF' }}>
            <h5> <span style={{ color:'#5BD5FF'}}>10%</span> ADVISORS</h5>
            {/* <p>To create the pair on DEX</p> */}
          </div>
          <div className="toko-card" style={{ borderLeft: '9px solid #99E7FF' }}>
            <h5> <span style={{ color:'#99E7FF'}}>10%</span>INVESTOR</h5>
            {/* <p>To create the pair on DEX</p> */}
          </div>
          
          
        </div>
        
    </div>
    </>
  )
}

export default Tokonomics