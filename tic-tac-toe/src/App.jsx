import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function Square() {
  return (
    <>
    <div className="board-row">
      <button className="square">1</button>
      <button className="square">2</button>
      <button className="square">3</button>
    </div>
    <div className="board-row">
      <button className="square">4</button>
      <button className="square">5</button>
      <button className="square">6</button>
    </div>
    <div className="board-row">
      <button className="square">7</button>
      <button className="square">8</button>
      <button className="square">9</button>
    </div>
    </>
  );
}

// function App() {
//   const [playerOne, setPlayerOne] = useState('Player 1');
//   const [playerTwo, setPlayerTwo] = useState('Player 2');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'playerOne') {
//       setPlayerOne(value);
//     } else if (name === 'playerTwo') {
//       setPlayerTwo(value);
//     }
//   }

//   return <>
//   <nav>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//     </ul>
//     </nav>
//     <main>
//       <Routes>
//         <Route path="/users" element={<UsersPage />} />
//         <Route path='/' element=
//       </Routes>
//     </main>
// }
