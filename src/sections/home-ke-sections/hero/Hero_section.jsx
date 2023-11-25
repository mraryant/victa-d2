import "./Hero_section.css"
import roket_bg from "../../../assets/logo/hero left rocket bg.svg"
import roket from "../../../assets/logo/hero left rocket.svg"
import coin from "../../../assets/logo/VICTA COIN-1-02.png"
// import blob from "../../../assets/logo/hero right blob.svg"
// import astronot from "../../../assets/logo/hero right astronot.svg"
import Navbar from "..//navbar/Navbar"
// import bghome from "../../../assets/images/e3.mp4"
import bghome from "../../../assets/logo/e3_aMmiWCy6.mp4"
import {    useState } from "react"
import copy from "/src/assets/icons/copyi.png"
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"

const Hero_section = () => {

  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  const [copied, setCopied] = useState(false);
  const text = "0x7f376fad327f428052ccad5d810bc04d2d2cba0d"

  const handleCopy = () => {
    navigator.clipboard.writeText('0x7f376fad327f428052ccad5d810bc04d2d2cba0d') // Replace with the text you want to copy
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
              <motion.div id="hero-rocket"
                initial={{
                  scale: 1
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                whileInView={{
                  scale: 1.1,
                }}
              >
                <img src={roket_bg} alt="" />
                <img src={roket} alt="" />
              </motion.div>
              With Victa

            </span>
          </h1>

          <h6>VICTA Is A Groundbreaking Decentralized Platform  </h6>
          <div id="hero-buttons">

            <button className="button-87 " type="submit" style={{ fontSize: 14 }}> <a style={{ textDecoration: 'none', color: 'white' }} target="block" href="https://presale.victacapitals.com/">Buy Tokens</a></button>
            <button className="button-87 " type="submit" style={{ fontSize: 14 }}>Whitepaper</button>
          </div>

          {/* <button className="btn2  " type="submit">Buy Tokens</button> */}
        </div>

        {/* <img id="astronot" src={astronot} alt="" /> */}


        <div id="hero-right">
          {/* <img id="blob" src={blob} alt="" /> */}
          <Tilt options={defaultOptions} style={{ height: 250, width: 250 }} >

          <img id="right_img" src={coin} alt="" />
        </Tilt>
        </div>
        
        <div id="hero-gredient">
        </div>
        <div id="contract">

          <h5 style={{color:'white'}}>Contract Address</h5>
          <h3 style={{color:'white'}}>{ text}</h3>
          <button className="button-87"   onClick={handleCopy}><span ><img src={copy} style={{ width: 25, height: 25, marginRight: 15, }} alt="" />
            Copy Address</span>
          </button>
          {copied && <div className="popup mt-3" style={{ color: "white", }}>Copied to clipboard!</div>}
        </div>
      </div>
    </>
  )
}

export default Hero_section