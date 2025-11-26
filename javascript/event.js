// function handleClick(){
//     const first = document.getElementById("first");
//     first.textContent = "I'm the Best";
// }

// const second = document.getElementById("second");

// second.onclick = function(){
//     second.style.backgroundColor = "blue";
// }

// second.onclick = function handleClick(){
//     second.textContent = "I'm the best";
// }

//those above both cases are not used in the real life scenrio caus its not the best way
//cause it will override the previous function if you need to multiple event listener 
//in the same element
//here in these above case the second function will immediately assign new value


//here is the best way using the addEventListener

// const second = document.getElementById("second");

// second.addEventListener("click",()=> {
//     second.textContent = "I'm the best"
// });

// second.addEventListener("dblclick", () =>{ //this is double click
//     second.style.backgroundColor = "red";
// });

// second.addEventListener("mouseenter", ()=>{
//     second.textContent = "Welcome to the millionare club";
// });


//the following method to use the eventlistener for each element inside container is lengthy

// const child1 = document.getElementById("child1");
// child1.addEventListener("click", () =>{
//     child1.textContent = "I'm child one";
// })

//so here is one approach but it is also not efficient for
// the many elements so for this we have concept of event bubbling.

// const parent = document.getElementById("parent");
// console.log(parent.children);

// for(let child of parent.children){
//     child.addEventListener("click", ()=>{
//         child.textContent = "I'm Clicked";
//     });
// }

//+++++++++

//concept of event bubbling

// const grandparent = document.getElementById("grandparent");

// grandparent.addEventListener("click", (e)=>{
//     console.log(e.target);
//     // console.log("grandparent is clicked");
// },false);

// const parent = document.getElementById("parent");
// parent.addEventListener("click", (e)=>{
//     // console.log(e);
//     // console.log("parent is clicked");
// },false);


// const child = document.getElementById("child");
// child.addEventListener("click", (e)=>{
//     // console.log(e);
//     // e.stopPropagation();
//     // console.log("child is clicked");
// },false);

// capture phase
//target phase
//bubbling phase

//when capture phase is on, event will triggering from top to bottom
//when capture phase is false, it will go down to the target elements and check 
//if it has eventlisteners on or not, if it has it will execute it here
//and it will start bubbling phase from bottom to top and it will trigger all the eventlistern 


//best approach

const parent = document.getElementById("parent");

function handleClick(e){
    e.target.textContent = "I'm clicked";
}

perent.addEventListener("click", handleClick);
//sometime you have to remove the eventlistnere for this , you have to do this for better approach

parent.removeEventListener("click", handleClick);

// parent.addEventListener("click", (e)=>{
//     // console.log(e.target);
//     e.target.textContent = "I'm clicked";
// })



// console.log(parent.children);

//no need to put event listener to each child

// for(let child of parent.children){
//     child.addEventListener("click", ()=>{
//         child.textContent = "I'm Clicked";
//     });
// }