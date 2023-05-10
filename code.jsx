# code-react
import React, { useState } from "react";
import "./styles.css";

const initialGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export default function App() {
  const [grid, setGrid] = useState(initialGrid);

  const handleInputChange = (e, i, j) => {
    const newGrid = [...grid];
    newGrid[i][j] = Number(e.target.value);
    setGrid(newGrid);
  };

  const solveSudoku = (grid) => {
    // Algorithm to solve the Sudoku grid
  };

  const handleSolveButtonClick = () => {
    const newGrid = solveSudoku(grid);
    setGrid(newGrid);
  };

  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <table>
        <tbody>
          {grid.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  <input
                    type="number"
                    min="1"
                    max="9"
                    value={cell || ""}
                    onChange={(e) => handleInputChange(e, i, j)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSolveButtonClick}>Solve</button>
    </div>
  );
}
