import './Deck.css'
import Card from '../components/Card'

function Deck(props) {
  const testArray = [1,2,3];


  return (
    <div>
      <div className='job_description'>
        <h1>JOB TITLE</h1>
        <p>job description</p>
      </div>
      <div>
        {testArray.map(card => <Card />)}
      </div>
    </div>
  );
}

export default Deck;