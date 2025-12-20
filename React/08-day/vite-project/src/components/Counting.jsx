import { useState } from "react";

function Counting({name}){

    const [count, setCount] = useState(0);
    return(
        <>
        <div style={{border:"2px solid green", borderRadius:"5px", padding:"10px", marginTop:"20px"}}>
        <p>Our first Counter app: {name}</p>
        <h3>Counter: {count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
        </>
    )
}

export default Counting;