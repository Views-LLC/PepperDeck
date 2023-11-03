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
      <div className='card_display'>
        {testArray.map(card => <Card />)}
      </div>
      <div>
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Add Card
        </button>
      </div>
    </div>
  );
}

export default Deck;