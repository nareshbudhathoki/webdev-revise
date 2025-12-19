//create a h1 element using js

// attributes ={
//     className:"element",
//     id:"first",
   //     style:{
   //         backgroundColor:"green",
   //         color:"white",
    //        fontSize: "40px",
    //    },
// }

// element ={
//     tag:"h1",
//     textContent:"Hello Coder Army",
//     className:"element",
//     id:"first",
   //     style:{
   //         backgroundColor:"green",
   //         color:"white",
    //        fontSize: "40px",
    //    },
// }

// function createElement(tag, attributes, children){
//     const element1 = document.createElement(tag);
//     element1.textContent = children;
//     for(const key in attributes){
//         if(key === 'style'){
//             Object.assign(element1.style, attributes.style);
//         }
//         else{
//             element1[key] = attributes[key];
//         }
//     }

//     return element1;

// }

// const element1 = createElement("h1", {className:"element", id:"first"}, "Hello Coder Army");

// const element2 = createElement("h3",{className:"element2", id:"second", style:{backgroundColor:"green", color:"white", fontSize:"40px"}}, "Welcome to the Billionare Club");
// const root = document.getElementById("root");
// root.append(element1);
// root.append(element2);

// const element1 = document.createElement("h1");
// element1.textContent = "Welcome to the top Mind Club.";
// element1.classList.add("element1");
// element1.id = "first;"

// element1.style.fontSize = "30px";

// element1.style.backgroundColor = "red";
// element1.style.color = "blue";

// const root = document.getElementById("root");

// root.append(element1);



// custom Building react
//react is just a javascript library and object

// const React = {
// createElement: function(tag, attributes, children){
//     const element1 = document.createElement(tag);
//     element1.textContent = children;
//     for(const key in attributes){
//         if(key === 'style'){
//             Object.assign(element1.style, attributes.style);
//         }
//         else{
//             element1[key] = attributes[key];
//         }
//     }

//     return element1;

// }
// }

// const ReactDOM = {
//     render: function(child, parent){
//         parent.append(child);

//     }
// }

const element1 = React.createElement("h1", {className:"element", id:"first"}, "Hello Coder Army");

const element2 = React.createElement("h3",{className:"element2", id:"second", style:{backgroundColor:"green", color:"white", fontSize:"40px"}}, "Welcome to the Billionare Club");
const root = document.getElementById("root");
// root.append(element1);
// root.append(element2);

ReactDOM.render(element1, root);
ReactDOM.render(element2, root);

// function create(type, props, children){
//     return {
//         type:type,
//         props:{
//             ...props,
//             children:children
//         }
//     }
// }