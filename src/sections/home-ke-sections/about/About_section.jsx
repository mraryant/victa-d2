import About_card from "../../../components/About_card"
import "./About_section.css"
import about_left_img from "../../../assets/logo/hero right  img.svg"
import blob from "../../../assets/logo/hero right blob.svg"

const About_section = () => {
  return (
    <>
      <div id="about-main">
      

         
          <h5 id="about-h" >ABOUT US</h5>
        <div id="about-middle">
          <div id="about-mid-left">

            <About_card
              
              h3={`Genesis marks the commencement of our ambitious journey.`}
              p1={`Founded in [Year], VICTA was born out of a collective passion for blockchain and a commitment to driving positive change. Our journey started with a simple idea: to build a platform that not only leverages the power of blockchain but also enriches the lives of those who embrace it.`}
               
            />
            <About_card
              h3={` Mission 🚀`}
              p1={`At the core of VICTA is a mission to democratize access to blockchain, making it intuitive, user-friendly, and relevant to everyday life. We aim to provide a comprehensive ecosystem that goes beyond the traditional boundaries of decentralized platforms.`}
               
            />
            <About_card
              h3={`Creativity fuels groundbreaking advancements.`}
              p1={`We are relentless innovators, pushing the boundaries of what blockchain can achieve. Our commitment to continuous improvement fuels our quest for groundbreaking solutions that shape the future of decentralized technologies.`}
              
            />
            <About_card
              h3={` Security and Compliance 🔐`}
              p1={`Security is non-negotiable. We operate steadfastly committed to the highest security and legal compliance standards. Smart contract audits, encryption protocols, and adherence to regulatory frameworks underscore our dedication to providing a safe environment for our users.
`}
               
            />
            <About_card
              h3={` Community-Centric Approach `}
              p1={`VICTA thrives on community engagement. We believe in the collective power of a vibrant and engaged community. Your feedback, ideas, and enthusiasm drive the evolution of VICTA, making it a shared endeavor..`}
               
            />
            
          </div>

          <div id="about-mid-right">
            <img id="img1" src={blob} alt="" />
            <img id="img2" src={about_left_img} alt="" />
          </div>

        </div>

       
        
      </div>
    </>
  )
}

export default About_section