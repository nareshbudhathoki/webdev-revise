import { useState } from 'react'
import Sum from './components/sum';

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000);


  function handleClick(){
    setCount(count+1);
  }

  return (
    <>
     <h1>Counter : {count}</h1>
     <button onClick={handleClick}>Increment Count</button>
     <h2>Your Current Number:</h2>
     <button onClick={()=>setNumber(number + 1)}>Increment Number</button>
     <Sum num={number}></Sum>
    </>
  )
}

export default App
