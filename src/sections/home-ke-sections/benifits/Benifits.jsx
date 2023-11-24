import "./Benifits.css"

import benifit_img from "../../../assets/logo/benifit-img.svg"

const Benifits = () => {
  return (
    <div id="benifits-main" >

      {/* <div id="benifits-top">
        <div id="b-top-container">
          <h2>Benefits of buying VICTA in pre-sale</h2>
          <hr />
          <p>There will never be another opportunity to get VICTA for a better price than during our presale. Here are some of the benefits!</p>
        </div>
      </div> */}

      <div id="benifits-bottom">
        <div id="b-bottom-left">
          <p>Choosing VICTA: Unlocking the Future of Blockchain</p>
          <h1>VICTA Coin: Redefining Blockchain, Empowering {"Tomorrow's"} Digital Evolution.</h1>
          <p>VICTA transforms transactions with an ecosystem spanning utility, e-commerce, EVs, and entertainment. User-centric design and innovative solutions simplify experiences for all. Pioneering a green energy blockchain, VICTA ensures sustainability and security. Aligned with market trends, {"VICTA's"} unique dating app fosters meaningful connections through shared bucket lists.</p>

         

        </div>
        <div id="b-bottom-right">
          <img src={benifit_img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Benifits