import "./Parteners.css"
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import partener1 from "../../../assets/logo/pr1.svg"
import partener2 from "../../../assets/logo/pr2.png"
import partener3 from "../../../assets/logo/pr3.png"
import partener4 from "../../../assets/logo/pr4.svg"
// import partener5 from "../../../assets/logo/pr5.svg"

const Parteners = () => {
  

  return (
    <>
    <div id="parteners-main" >
    <h1 id="H1">OUR PARTENERS</h1>  
    <div id="parteners-main2" >
        <img src={partener1} alt="" />
        <img src={partener2} alt="" />
        <img src={partener3} alt="" />
        <img src={partener4} alt="" />
        {/* <img src={partener5} alt="" /> */}
    </div>
    </div>
    </>
  );

 
}

export default Parteners