import InterviewItem from "../components/InterviewItem";
import './Home.css'

function Home() {
  return (
    <div className="bodyContainer">

      <div class = 'titleContainer'>
        <h2 class = 'homeTitle' > Upcoming Interviews</h2>
      </div>
      <div className="interviewsContainer">
        <InterviewItem/>

      </div>
    </div>
  );
}

export default Home;
