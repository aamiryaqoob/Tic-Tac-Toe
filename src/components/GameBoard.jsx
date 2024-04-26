import { useState } from "react";



export default function GameBoard({onselectsquare, turns, board}) {
    
    let game_board = initialGameBoard;

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBorad) => {
    //         const updatedBoard = [...prevGameBorad.map(innerArray => [...innerArray])];
    //         updatedBoard [rowIndex] [colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     } )
    //     onselectsquare();
    // }
    return (

        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => onselectsquare(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}