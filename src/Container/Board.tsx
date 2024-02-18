import { useState } from "react"
import Squear from "../Componets/Squear"
import styled from "styled-components"


const Board = () => {
    const[squares,setSquares] = useState(Array(9).fill(null))
    const [currentPlayer,setCurrentPlayer] = useState<'X' | 'O'>(Math.round(Math.random()*1)===1 ? "X":"O")
    const[winner,setWinner] = useState(null)

    function reset(){
        setSquares(Array(9).fill(null))
        setWinner(null)
        setCurrentPlayer(Math.round(Math.random()*1)===1 ? "X":"O")
    }

    function setSquearValue(index:any){
      const newData = squares.map((val,i)=> {
        if(i === index){
            return currentPlayer
        }
        return val
      })
      setSquares(newData)
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }

    return (
    <div>
        <Sp>Hey {currentPlayer},it's your turn</Sp>
        <SDiv>
        {Array(9).fill(null).map((_,i)=>{
            return<Squear
            winner={winner}
            key={i}
            onClick={() => setSquearValue(i)}
            value={squares[i]}
            />
        })}
        </SDiv>
        <Rbut onClick={reset}>Reset</Rbut>
    </div>
  )
}

export default Board

const Rbut = styled.button`
    width: 100px;
    height: 50px;
    background-color: green;
    outline: none;
    border: none;
    margin-top: 20px;
    cursor: pointer;
`

const SDiv = styled.div`
    display: grid;
    grid-template-areas:"one two thre"
                        "four five six"
                        'seven eigth nine';
    height: 250px;
    width: 250px;
    margin-top: 30px;
`
const Sp = styled.p `
    color: #ff00ff;
`