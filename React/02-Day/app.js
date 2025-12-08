// JSX : Javascript XML : Look Like HTML

//React Element

// const element = <div>
//     <h1>Hello Coder Army</h1>
//     <h2>Welcome to the  Billionare Club</h2>
// </div>

//React Component

// function App(amount){
//     return (
//         <h1>Welcome to the {amount} Club.</h1>
//     );
// }

// const a = App("Bilion Dollar");
// let a = <App/>;
// console.log(a);

//inside this curly braces we write the js expressions;
//inside this curly braces we can render and display, number, string, array
//we can render but cant display: true, false, null, undefined
//object will throw the Error
//we can show js expression in it too
// const element = <h1>Hello welcome to the one percnet club-- {[1,2,3,4]} </h1>
// const element = <h1>Hello welcome to the one percnet club-- {{name:"jen", age:40}} </h1>

// const age = 30;
// const isLoggedIn = true;
// const element = <h1>Hello Coder {age >10?"Adult":"Child"}</h1>
// const element = <h1>Hello Coder {<h3>HI, future engineer</h3>}</h1>

// const element = <h1>Hello Coder {isLoggedIn?<h2>Logged In</h2>:<h3>Kindly Sign In.</h3>}</h1>



// const element = <h1>Hello welcome to the one percnet club-- {1000} </h1>

// const courses = ["HTML", "CSS", "Javascript", "React"];

// const element = (
//     <ul>
//         {courses.map(course =><li>{course}</li>)}
//     </ul>
// )

// const element = <h2 id="title" className = "first" >Hello Billionare Club</h2>

// function App(props){

//     return(
//         <h4>Hello, top one percent club {props.name} {props.age}</h4>
//     );

// }

// const element = <App name={"jen"} age={40}/>

// const ab = {backgroundColor:"orange", color:"white"};

// const element = <h2 id="title" className = "first" style={ab} >Hello Billionare Club</h2>


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(a);

// root.render(element);
// root.render(App());
// root.render(<h1>Hello world</h1>);


// root.render(<App/>); //this format is used 

//small project
function Header({name}){
    return (
        <h1>Welcome to Billionare Club, {name}</h1>
    );
}

function Main({user}){
    return(
        <>
        <h3>This is the main content section of the Billionare club</h3>
        <h2>Hi, My name is  {user.name}</h2>
        <p>{user.age>18?"I'm adult":"I'm under age"}</p>
        <p>I'm from the {user.city}</p>
        </>
    );
}
function Footer(){
    return (
        <>
        <p>All rights reserved to Billionare Club Project</p>
        </>        
    );
}

function App(){
    return (
        <>  {/* These are the fragments */}
        <Header name="Kiyty"/>
        <Main user ={{name:"jena", age:40, city:"ktm"}}/>
        <Footer/>
        </>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App());

//components are nothing but the function call in react js
//props are nothing but just the parameters