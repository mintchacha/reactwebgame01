import Button from './Button'
import Border from './Border'
import './App.css'
import { useState } from 'react';
function App() {
  const [myhistory, setHistory] = useState([])
  const [otherhistory, setOtherHistory] = useState([])

  function random(n){
    return Math.ceil(Math.random() * n)
  }
  function playClick(){
    const nextMyNum = random(6)
    const nextOtherNum = random(6)
    setHistory([...myhistory,nextMyNum])
    setOtherHistory([...otherhistory,nextOtherNum])
  }
  function resetClick(){

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
        <Border name="A팀" color="red" gameHistory={myhistory}/>
        <Border name="B팀" color="blue" gameHistory={otherhistory}/>
      </div>
    </div>
  );
}

export default App
