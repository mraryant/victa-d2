import "./Hero_section.css"
import roket_bg from "../../../assets/logo/hero left rocket bg.svg"
import roket from "../../../assets/logo/hero left rocket.svg"
import coin from "../../../assets/logo/VICTA COIN-1-02.png"
// import blob from "../../../assets/logo/hero right blob.svg"
// import astronot from "../../../assets/logo/hero right astronot.svg"
import Navbar from "..//navbar/Navbar"
// import bghome from "../../../assets/images/e3.mp4"
import bghome from "../../../assets/logo/e3_aMmiWCy6.mp4"
import { useState } from "react"



const Hero_section = () => {
  const [copied, setCopied] = useState(false);
  const text = "0x7f376fad327f428052ccad5d810bc04d2d2cba0d"

  const handleCopy = () => {
    navigator.clipboard.writeText('0x9e3F29552c7D4651BF14bE395C68032Ef3C91901') // Replace with the text you want to copy
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Hide the popup after 2 seconds
      })
      .catch(err => {
        console.error('Copy failed: ', err);
      });
  };
  return (
    <>
      <div id="hero-main">
        <video id="v1" autoPlay muted loop src={bghome} > </video>

        <Navbar />

        <div id="hero-left">


          <h1> <div>Get Ready </div>
            <span>

              To Fly
              <div id="hero-rocket">
                <img src={roket_bg} alt="" />
                <img src={roket} alt="" />
              </div>
              With Victa

            </span>
          </h1>

          <h6>VICTA Is A Groundbreaking Decentralized Platform  </h6>
          <div id="hero-buttons">

            <button className="button-87 " type="submit" style={{ fontSize: 14 }}>Buy Tokens</button>
            <button className="button-87 " type="submit" style={{ fontSize: 14 }}>Whitepaper</button>
          </div>

          {/* <button className="btn2  " type="submit">Buy Tokens</button> */}
        </div>

        {/* <img id="astronot" src={astronot} alt="" /> */}

        <div id="hero-right">
          {/* <img id="blob" src={blob} alt="" /> */}
          <img id="right_img" src={coin} alt="" />
        </div>
        
        <div id="hero-gredient">
        </div>
        <div id="contract">

          <h5 style={{color:'white'}}>Contract Address</h5>
          <h3 style={{color:'white'}}>{ text}</h3>
          <button className="button-87"   onClick={handleCopy}><span ><img src='/src/assets/icons/copyi.png' style={{ width: 25, height: 25, marginRight: 15, }} alt="" />
            Copy Address</span>
          </button>
          {copied && <div className="popup mt-3" style={{ color: "white", }}>Copied to clipboard!</div>}
        </div>
      </div>
    </>
  )
}

export default Hero_section