import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Deck from './pages/Deck';

function App() {
  return (
    <>
      <nav className='navBar'>
        <ul>
          <li>
            <h1>PepperDeck</h1>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/deck'>Deck</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/deck' element={<Deck />}/>
      </Routes>
    </>
  );
}

export default App;
