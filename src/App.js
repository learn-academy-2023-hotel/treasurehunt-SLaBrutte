import React, { useState } from "react"
import Square from "./components/Square"

import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className = "board">           
        {board.map((value, index) => {         //This creates function that shows all 9 squares 
          console.log(value, index)
          return <Square value ={value}/>   
        })}
      </div>

    </>
  )
}

export default App
