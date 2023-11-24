 
import Hero_section from "../sections/home-ke-sections/hero/Hero_section"
import About_section from "../sections/home-ke-sections/about/About_section"
// import Navbar from "../sections/home-ke-sections/navbar/Navbar"
import Hero_bottom from "../sections/home-ke-sections/herobottom/Hero_bottom"
import Benifits from "../sections/home-ke-sections/benifits/Benifits"
import Usecase from "../sections/home-ke-sections/usecase/Usecase"
import Roadmap from "../sections/home-ke-sections/roadmap/Roadmap"
import Tokonomics from "../sections/home-ke-sections/tokonomics/Tokonomics"
import Parteners from "../sections/home-ke-sections/parteners/Parteners"
import Team from "../sections/home-ke-sections/team_members/Team_members"
import FAQ from "../sections/home-ke-sections/faq/FAQ"
import Footer from "../sections/home-ke-sections/footer/Footer"
 

const Home = () => {
  
  return (
    <div>
    
      
      <Hero_section />
      <Hero_bottom/>
      <About_section />
      
      <Usecase />
      <Roadmap />
      <Tokonomics/>
      <Parteners />
      {/* <Team /> */}
      <FAQ />
      <Benifits />
      <Footer/>
    </div>
  )
}

export default Home