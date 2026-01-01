import { useState } from 'react'


//stopwatch: start, stop, reset
function App() {
  const [time, setTime] = useState(0);

  function handleStart(){
    setInterval(()=>{
      setTime(time+1);
    },1000)
  }
  return (
    <>
     <h1>Stopwatch : {time}</h1>
     <div>
      <button onClick={handleStart}>Start</button>
      <button>Stop</button>
      <button>Reset</button>
     </div>
    </>
  )
}

export default App;
