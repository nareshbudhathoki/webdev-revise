// function App(){
//   let count = 0;
//   function increaseNumber(){
//     count++;
//     // console.log(count);
//     const para = document.querySelector("p");
//     para.textContent = `Counter: ${count}`;
//     // const h = document.querySelector("h1");

//     h.textContent  = "Welcome to the Billionare Club";
//   }
//   return (
//     <>
//     <p></p>
//     <button onClick={increaseNumber}>Increment</button>
//     {/* <h1></h1> */}
//     </>
//   );

// }

// export default App;

import { useState } from "react";

function App(){

  const [count, setCount] = useState(0);

  function increaseNumber(){
    setCount(count+1);
  }

  
  return (
    <>
    <p>Counter : {count}</p>
    <button onClick={increaseNumber}>Increment</button>
    </>
  );
}


export default App;