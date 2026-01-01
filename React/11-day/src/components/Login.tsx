import React, { useState } from 'react';
import { useRef } from 'react';

function Login(){
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    console.log("render");

    function handleSubmit(e){
        e.preventDefault();
        if (emailRef.current && passwordRef.current) {
            console.log(emailRef.current.value);
            console.log(passwordRef.current.value);
        }
    }

        return(
            <>
            <form action="" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id='email' ref={emailRef} />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' ref={passwordRef}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
            </>
        )
}

export default Login;