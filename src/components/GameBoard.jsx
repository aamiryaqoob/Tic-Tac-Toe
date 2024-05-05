
import React, { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


export default function GameBoard({ onSelectSquare }) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = onSelectSquare;
            return updatedBoard;
        })
        onSelectSquare();
    }

    return (

        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymol, colIndex) => <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{onSelectSquare}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}