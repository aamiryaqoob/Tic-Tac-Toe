
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";


function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, coIndex) {

    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");
    setGameTurns(prevTuens => {

      let currentPlayer = "X";

      if (prevTuens.length > 0 && prevTuens[0].player === "X") {
        currentPlayer === "O";
      }

      const updatedTurns = [{ square: { row: rowIndex, col: coIndex }, player: currentPlayer }, ...prevTuens]
      return updatedTurns;
    });

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare} />
      </div>
      {/* <Log /> */}
    </main>
  )
}

export default App
