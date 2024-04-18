import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onselectsquare, activePlayerSymbol, turns}) {
    let game_board = initialGameBoard;

    for ()

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBorad) => {
            const updatedBoard = [...prevGameBorad.map(innerArray => [...innerArray])];
            updatedBoard [rowIndex] [colIndex] = activePlayerSymbol;
            return updatedBoard;
        } )
        onselectsquare();
    }
    return (

        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}