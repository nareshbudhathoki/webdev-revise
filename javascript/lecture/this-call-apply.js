//Here we are going to learn about the this, call and apply 

//strict method vs non strict mode

// 'use strict'

// var a =10;
// b =20;

// console.log(a, b); // it will give error cause we did not define b, using any let,var,const keyword

// function greet(name, name){
//     console.log(name, name);
// }

// greet("kity", "jenny") // here only the jenny is printed cause that last one will store
// //so using the strict mode it will give error cause it will not allow to
// //declare duplicate name variable



// console.log(window);

// console.log(global);

//globalThis points to global object of the environment

// console.log(globalThis);

//Learn about this Keyword

// console.log("ouput");
// console.log(this); //this keyword in global scope points to NodeJs(Empty Object)
//but in browser it points to global object that is window object
// console.log("globalThis output",  globalThis);


//Functions

// const user = {
//     name: "Jen",
//     age :30,
//     greet : function(){
//         console.log(`hello ${this.name}`);
//     },
// }

// const user2 = {
//     name:"kinna",
// }

// user2.greet = user.greet;

// user.greet();
// user2.greet();



// new way to assign thousands of object having same function
// 1000 user: greet function: 1000*memory, code copy paste

// function greet(){
//     console.log(`Welcome to the Billionare Cub : ${this.name}`);
// }

// function incrementAge(value, name){
//     this.age+=value;
//     this.name = name;
//     console.log(this.age);
//     console.log(this.name);
// }

// const user = {
//     name: "Jen",
//     age :30,
// }

// const user2 = {
//     name:"kinna",
//     age:66,
// }


// // incrementAge.call(user,5, "suri");  //this is the call method

// // incrementAge.apply(user, [10, "suri"]) //this is apply method passing parameter as array

// const incr = incrementAge.bind(user, 10, "suri") //it is same as call but it will bind it to that function
// //it will return function and not immediately execute it
// incr();  //now it can run anytime and it will remember it later on and attch this to user object permanently

// // user.greet = greet; 
// // user2.greet = greet;

// // greet.call(user);
// // greet.call(user2);



// // 'use strict'
// // function greet(){
// //     console.log(this);  //in strict mode it points to undefined cause it checks
// //     //who is calling if no one is calling then it will not assign global by default 
// //     //that's why it is strict
// //     //but if it is not in strict mode it will by defaut assume global object
// // }


//Class

// in class constructor, this will point to newly created empty object

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// const p1 = new Person("jen", 30);

// console.log(p1);

//Arrow Function: this does not exist for the arrow function, so it takes the
//lexical environment scope
//console.log(this) //points to empty object

// const greet = () => {
//     console.log(this);
// }

// greet();

// const stopWatch ={
//     second:0,
//     start: function(){
//         // const that = this;
//         // setInterval(function(){
//         //     that.second++;
//         //     console.log(that.second);
//         // }, 1000);
//         //here the function is iinvoked by the setinterval and this points to the setintenrval 
//         //so it gives error so we first store this reference in that and use that later on 
//         //the above code is messy and not good approach so the arrow function solve this issue
//         //cause the arrow function has the lexical scope

//         setInterval(() => {
//             this.second++;
//             console.log(this.second);
            
//         }, 1000);
//     },
// };

// stopWatch.start();


// const user = {
//     name:"jen",
//     greet:()=>{
//         console.log(this); //it goes out and see global scope which is empty object
//         //do not confuse outside is the inside of user it is object not a block level scope
//     },
// }
// user.greet();

const button = document.getElementById("first");

// button.addEventListener("click", function(){
//     console.log(this);
//in above case it is normal function so button invoked it and this refers to that button
button.addEventListener("click", ()=>{
    console.log(this);

    //in this above function this is a arrow function so it will search one step outside which is window
});