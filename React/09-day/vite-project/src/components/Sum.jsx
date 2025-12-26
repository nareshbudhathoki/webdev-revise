import React from "react";

const Sum = React.memo(({num})=>{

    function calculateSum(){
        let sum = 0;
        for(let i = 1; i<=num; i++){
            sum+=i;
        }

        return sum;
    }

    const total = calculateSum();

    return (
        <>
        <h1>Welcome to the Billionare Club</h1>
        <h2>First Month Earning from startup: {total}</h2>
        </>

    )

})

export default Sum;