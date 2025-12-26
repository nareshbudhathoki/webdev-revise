import React from "react";
import { useCallback, useMemo, useState } from "react";

const Post = React.memo(({value})=>{

    console.log("Post re render");

    return(
        <>
        <h1>Your Name is: {value.name} <br></br> age is: {value.age}</h1>
        </>
    )
})

export default Post;