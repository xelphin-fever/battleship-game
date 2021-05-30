import React, { useState} from 'react';
import Game from './components/Game';
import ChooseBoard from './components/ChooseBoard';
import './App.css';

function App() {
  const shipSizes = [3,2,2];
  const [playerShipArrays, setPlayerShipArray] = useState([
    [96,97], [88,89]
  ]);

  const [gameMode, setGameMode] = useState(false)

  const playerFinishedChoosing = (playerChoices) => {
    alert('Player Finished Choosing: ', playerChoices);
    console.log('Player Finished Choosing: ', playerChoices);
    setPlayerShipArray(playerChoices);
    setGameMode(true);
  }

  const displayWinner = (winner) => {
    if (winner === 0){
      alert('human has won');
    } else {
      alert('computer has won');
    }
  }

  return (
    <div className="App">
      <div className="title-div">
        <h1>BATTLE-SHIP</h1>
      </div>
      <div>
        {
          gameMode === false 
            ? <ChooseBoard shipSizes={shipSizes} finished = {playerFinishedChoosing} />
            : <Game playerShips ={playerShipArrays} shipSizes={shipSizes} finish={displayWinner}/>
        }
      </div>
    </div>
  );
}

export default App;


  /*

  */