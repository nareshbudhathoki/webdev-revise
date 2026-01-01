import { useState } from 'react'
import { useRef } from 'react';
import Login from './components/Login';
import Video from './components/Video';

//stopwatch: start, stop, reset
function App() {
  const [time, setTime] = useState(0);
  const intervalIdRef = useRef(null);

  function handleStart(){

    if(intervalIdRef.current != null){
      return;
    }
   intervalIdRef.current = setInterval(()=>{
      setTime(time => time+1);
    },1000)
  }

  function handleStop(){
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  }

  function handleReset(){
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setTime(0);
  }

  return (
    <>
     {/* <h1>Stopwatch : {time}</h1>
     <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
     </div> */}
     <Login/>
     <Video></Video>
    </>
  )
}

export default App;
