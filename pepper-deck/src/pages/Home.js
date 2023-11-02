import InterviewItem from "../components/InterviewItem";
import './Home.css'
import Icon from '../assets/icons8-add-new-50.png'

function Home() {
  const example = [
    {date: '10/31',
     company: 'Facebook',
     position: 'front-end Engineer'},
     {date: '12/10',
     company: 'Oracle',
     position: 'back-end Engineer'}, 
     {date: '12/25',
     company: 'IBM',
     position: 'Front-end Engineer'},

  ]
  for(let i = 0; i<example.length; i++){
     <InterviewItem props = {example[i]}></InterviewItem>
  }
  
  return (
    <div className="bodyContainer">

      <div class = 'titleContainer'>
        <h2 class = 'homeTitle' > Upcoming Interviews</h2>
      </div>
      <div className="categories">
        <h2>Interview Date</h2>
        <h2>Company</h2>
        <h2>Position</h2>
      </div>
      <div className="interviewsContainer">
        {<InterviewItem/>}
      </div>
      <div className = "addIntBtnContainer">
        <button className = "addIntBtn  ">
          <img className = 'btnImage' src = {Icon} alt = "Add Interview" ></img>
        </button>
      </div>
    </div>
  );
}

export default Home;
