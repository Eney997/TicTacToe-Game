import { useEffect, useState } from "react"
import Squear from "../Componets/Squear"
import styled from "styled-components"
type Player = "X" | "O" | "BOTH" | null 

function calculateWinner(squares:Player[]){
    const lines =[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],
];
for(let i=0;i<lines.length;i++){
    const[a,b,c] = lines[i] 
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a]
    }
}
 return null
}

const Board = () => {
    const[squares,setSquares] = useState(Array(9).fill(null))
    const [currentPlayer,setCurrentPlayer] = useState<'X' | 'O'>(Math.round(Math.random()*1)===1 ? "X":"O")
    const[winner,setWinner] = useState<Player>(null)

    function reset(){
        setSquares(Array(9).fill(null))
        setWinner(null)
        setCurrentPlayer(Math.round(Math.random()*1)===1 ? "X":"O")
    }

    function setSquearValue(index:number){
      const newData = squares.map((val,i)=> {
        if(i === index){
            return currentPlayer
        }
        return val
      })
      setSquares(newData)
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }

    useEffect(()=> {
        const win = calculateWinner(squares)
        if(win){
            setWinner(win)
        }
        if(!win && !squares.filter((square) => !square).length){
         setWinner("BOTH")
        }
    })
    

    return (
    <div>
        {!winner && <Sp>Hey {currentPlayer},it's your turn</Sp>}
        {winner && winner !== "BOTH" &&<Sp>Congretulations {winner}</Sp>}
        {winner && winner === "BOTH" && <Sp>Congretulations you are both winner</Sp>}
        
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
    background-color: aqua;
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