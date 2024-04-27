
import React from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


export default function GameBoard() {


    return (

        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymol, colIndex) => <li key={colIndex}><button>{playerSymol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}