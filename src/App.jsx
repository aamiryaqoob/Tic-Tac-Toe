import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/WinningCombinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2"
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

export default function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let Winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol) {
      Winner = players[firstSquareSymbol];
    }

  }

  const hasDraw = gameTurns.length === 9 && !Winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      return updatedTurns;
    })
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handleNewName(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} onChangeName={handleNewName} />
          <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} onChangeName={handleNewName} />
        </ol>
        {(Winner || hasDraw) && <GameOver winner={Winner} restart={handleRematch} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main >
  )
}
