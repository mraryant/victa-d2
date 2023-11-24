import Team_card from "../../../components/Team_card"
import "./Team_members.css"
// import pro1 from "../../../assets/logo/pro1.svg"
const Team_members = () => {
  return (
    <div id="team-main" >
      <h1>OUR TEAM</h1>
      <div id="team-cards">
        <Team_card
          image= ""
          name="Arnav"
          profasion =" Founder of xyz"
        />
        <Team_card
          image="" 
          name="Arnav"
          profasion =" Founder of xyz"
        />
        
        <Team_card
          image= ""
          name="Arnav"
          profasion =" Founder of xyz"
        />
        
      </div>
    </div>
  )
}

export default Team_members