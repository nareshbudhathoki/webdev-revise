import { useState } from "react"
import Counting from "./Counting";

function Clock(){
    const [clocks, setClocks] = useState(["Million", "Billion", "Dollar"]);

    function handleChange(){
        setClocks(["Amount", ...clocks])
    }

    return(
        <>
        <button onClick={handleChange}>Increment Clocks</button>
        <div style={{display:"flex", textAlign:"center", justifyContent:"center", alignItems:"center", gap:"20px", flexWrap:"wrap"}}>
            {clocks.map((clock, index) =><Counting key={clock + index} name={clock}></Counting>)}
        </div>
        </>
    )
}

export default Clock;