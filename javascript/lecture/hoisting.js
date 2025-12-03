//Code Run -->Execution Context
//1. Memory allocation
//2. Execution Phase
// console.log(a);

// let a = 4;

// var x =4;
// var y =2;

// var sum = sum(x, y);

// console.log(sum);

// function sum(x,y){
//     sum = x + y;
//     return sum;
// }

// console.log(a);  //temporal dead zone , you cant access

//in memory allocation phase, for the variable using var keywords
// they assigned undefined

//for the vairable using let and const 
//they assigned uninitialised and which can not be accessed so it gives error
//to access it

//but using var will not give the error it will give output as undefined

let a = 4;
const b = 2;

var result = add(a,b);
console.log(result);

function add(a,b){
    let sum = a+b;
    return sum;
}