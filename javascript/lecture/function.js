// //Deep Dive in Function

// function greeting(){
//     console.log("hello world");
// }
// greeting();


//using the rest opearator

// function addition(...num){
//     let sum =0;
//     for(let i of num){
//         sum = sum+i;
//     }
//     console.log(sum);
// }

// addition(3,4,1,1,);


//difference between spread and rest operator

// const arr = [2,3,42,41];
// const arr2 = [4,2,4,1,0];

// // const [first, second, ...num] = arr;

// // console.log(first,second, num);

// const ans = [...arr, ...arr2];

// console.log(ans)

//the difference is in their using, rest operator is used to catch the value and convert them in array one by one//
//while the spread operator is used to open the already present two or more array in one array
//there is other method called flat, it will open every level nested array into single array 
//where spread is only used in one level of the array

 //function as expression

//  addNumber(2,4); //not allowed cause it is not a normal function

//  const addNumber = function(num1, num2){
//     return num1 + num2;
//  }

//  addNumber(2,4);

// hello();  //it is possible cause it is a normal function
// function hello(){
//     console.log("Hello world");
// }

//arrow function in js --> it is mostly used in javascript

// arrow();  //this will also give error casue we can not access the arrow
//function before it's initialization;

// const arrow = () =>{
//     console.log("This is the arrow function in the javascript");
// }

// arrow()

//arrow function  with arguments

// const addNumber = (num1, num2) =>{
//     let sum = num2+num1;
//     console.log(sum);
// }

// addNumber(1,1);

//arrow function in one line

// const addNumber = (num1, num2) => num1+num2;

// console.log(addNumber(2,3));

//example of arrow function
// let arr =[2,4,2,4,24,0];
// arr.sort((a,b) =>a-b);
// console.log(arr);

// const square = num => num*num; //no need to use parenthesis if there is only one parameter

// console.log(square(2));

// const greeting = () =>{
//     let user = {
//         name:"Naresh",
//         amount:"77 Billion Dollar",
//         age:25,
//     };

//     return user.amount;
// };

// console.log(greeting());

// const greeting = () =>{
//     return {
//         name:"Naresh",
//         amount:"77 Billion Dollar",
//         age:25,
//     };
// };

// console.log(greeting());

// const greeting = () => ({name:"Naresh", amount:"77 Billion Dollar", age:25,});

// //here we used parenthesis outside the object otherwise when it sees the curly braces
// //it will assume it that you will use return keyword
// //so to treat them as object use parenthesis outside

// console.log(greeting());

// //here is the same example

// const cube = num => (num*num*num); //here we used parenthesis but it is not even necessary

// console.log(cube(2));

//IIFE function
//Immediately Invoked Function Expression

// (function greeting(){
//     console.log("HELLO imediately invoked function using normal function");
// })();

// //IIF in arrow function
// (()=>{
//     console.log("HELLO imediately invoked function using the arrow function");
// })
// ();

// //with parameters
// (function (name) {
//     console.log("Hello " + name);
// })("Naresh");


//Function call back
//callback function is the heart of js and react js so it is most important

// function greet(){
//     console.log("Hello, There , I'm going to be the Billionare soon!!");
//     return;
// }

// function Millionare(){
//     console.log("I'm going to be the millionare!!");
// }


// function meet(callback){
//     console.log("Meet me after 2 years!! in my office!!");
//     callback();
//     return;
// }
// // greet();
// meet(greet);
// meet(Millionare);

//the best practice is always use the callback function if 
//there is needed to invoke funcion inside another function, 
//do not call function directly inside that function it will not be flexible

//blinkit

function blinktOrderPlaced(){
    console.log("we have started packing your order --blinkit");
}

function zomatoOrderPlaced(){
    console.log("we have started to preparing your food --zomato");
}

function payment(amount, order){
    console.log(`${amount} paymen has initialized`);
    console.log("Payment is received");

    order();
    //Gst to government code here
    //Rider payment code here
    //profit send to company

}

payment(500,zomatoOrderPlaced);
payment(100, blinktOrderPlaced)