import { useState } from 'react';
import Button from './Button'
import Disc from './Disc'
import './App.css'
function App() {
  const [num, setNum] = useState(1)
  const [sum, setSum] = useState(0)
  const [history, setHistory] = useState([])

  function random(n){
    return Math.ceil(Math.random() * n)
  }
  function playClick(){
      // setNum(Math.ceil(Math.random()*6))
      // setSum(sum + num)
    const nextNum = random(6)
    setNum(nextNum)
    setSum(sum + nextNum)
    setHistory([...history, nextNum])
  }
  function resetClick(){
      setNum(1)
      setSum(0)
      setHistory([])
  }
  return (
    <div id="box">
      {/* button */}
      <div id="btn">
        <Button onClick={playClick}>start</Button>
        <Button onClick={resetClick}>reset</Button>
      </div>
      {/* container */}
      <div id="container">
        <h1>Game</h1>
        <Disc num={num}/>
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{history}</p>
      </div>
    </div>
  );
}

export default App
