

function Food({foods}){
    return(
        <>
        <ul>
            {/* bad approach to give key */}
            {/* {foods.map((food,index )=> <li key={index}>{food}</li>)} */}

            {/* good approach to give key */}
            {foods.map((food,index )=> <li key={food  + index}>{food}</li>)}
        </ul>
        </>
    )
}

export default Food;