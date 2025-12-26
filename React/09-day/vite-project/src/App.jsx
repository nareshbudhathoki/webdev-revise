import { useState, useMemo, useCallback } from 'react';
import Sum from './components/sum';
import Post from './components/Post';

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10000);

  // function handleHello(){
  //   console.log("Hello thre, Welcome to the Billionare Club");
  // }

  //use call back remebers function across the call back

  const handleHello = useCallback(()=>{
    console.log("Welcome to the Billionare Club", count);
  }, [])

// use memo remembers value across the re render
 const prime = useMemo(()=>{
  let total = 1; //2 is count already

  for(let i = 3; i <= number; i++){
   total++;
   for(let j = 2; j<i; j++){
     if(i%j == 0){
       total--;
       break;
     }
   }
  }
 return total;
 },[number]
 );
  function handleClick(){
    setCount(count+1);
  }

  return (
    <>
     <h1>Counter : {count}</h1>
     <button onClick={handleClick}>Increment Count</button>
     <h2>Your Current Number:</h2>
     <button onClick={()=>setNumber(number + 1000)}>Increment Number</button>
     <h3>Total Number of prime : {prime}</h3>
     <button onClick={handleHello}>Click</button>
     <Sum num={number}></Sum>
     <Post value={{name:"Jenith", age:30}}></Post>
    </>
  )
}

export default App
