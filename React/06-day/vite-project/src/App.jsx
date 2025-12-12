import { useEffect } from "react";
import { useState } from "react";

function App(){

  const [users, setUsers] = useState([]);
  // const [name, setName] = useState("");
  const[count, setCount] = useState(30);


  useEffect(()=>{
    async function GithubProfile(){
      const response = await fetch(`https://api.github.com/users?per_page=${count}`);
      const data = await response.json();
      setUsers(data);
      console.log("Hello");
    }
  
    GithubProfile();
  },[count])


  // function handleChange(e){
  //   console.log(e.target.value);
  //   setName(e.target.value.toUpperCase());
  // }
  return(
    <>
    <h1>Github Users</h1>
    <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}></input>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px", flexWrap:"wrap"}}>
      {
        users.map(user =>(
          <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.login}/>
        ))
      }
    </div>
    </>
  );
}

export default App;