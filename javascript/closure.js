//very important topic in js closure
//react mostly useses closure

//scope, closure, higher order funcition

// let a = 20;  //global scope
// let b = 30;  //global scope

// console.log(a); //can access it

//inside function

// function add(){
//     console.log(a+b);  //allowed to access inside the function cause it a and b are global
//     return 0;
// }

// add();


//inside block level

// if(b){
//     console.log("yes "); //allowd to access
// }

// function greet(){
//     let c = 3; //function level scope
//     console.log(c);
// }
// greet();

// console.log(c)// not allowed to access it cause it is inside the function

// if(true){
//     let d = 5; //block level scope. can not access outside this block
//     console.log(d);
// }

// console.log(d); //can not access it cause d is in block level scope

//this is only valid for the let and const keyword not var keyword

//var dont respect block level scope, it only respect function and global scope

// if(true){
//     var a =4;
// }

// console.log(a); //can access it cause it dont respect block level scope

// let global = 44;  //global scope

// function hello(){
//     let global = 10;
//     console.log(global) //function level scope 
// }
// console.log(global);
// hello();

//we cant access the value outside of inside variabls
//but inside variables and function can  access the outside varaibles


// function createCounter(){
//     function increment(){  //fucntion inside function
//         console.log("I am increment function");
//     }

//     // return increment(); // it will execute here and return nothing
//     return increment;  //return function 
// }

// let inc = createCounter();
// // inc(); //called return function 

// // console.log(inc);

//this is the  example of closure
//here the increment function remebers the count even after the outer function is already executed
//and when the function executed the variables are removed from stack memory
//but the function inside remeber count variable 
//why casue fo closure concept, in this case the to the count variable
//value is assigned in the heap memory by seeing whether it is used somewhere or not

// function counter(){
//     let count = 0;

//     function increment(){
//         count++;
//         return count;
//     }

//     return increment;
// }

// let countValue =  counter();

// // countValue();

// console.log(countValue());
// console.log(countValue());
// console.log(countValue());

//
// function hello(){
//     return;
// }

// console.log(hello()); //it will print the undefined cause if the function has
//no return keyword or have keyword with empty return it will return undefined


//banking application

// let user = {
//     balance: 500,
//     deposit: function(amount){
//         if(typeof amount === "number" && amount > 0){
//             this.balance+=amount;
//             return this.balance;
//         }
//     },

//     withdraw: function(amount){
//         if(typeof amount === "number" && amount>0 &&  this.balance>=amount){
//             this.balance-=amount;
//             return this.balance;
//         }
//     },

//     getBalance:function(){
//         return this.balance;
//     }
// }

// user.deposit(400);

// console.log(user.balance);

// user.withdraw(200);

// console.log(user.balance);

// console.log(user.getBalance());

//closure real case scenerio


// function createBankAccount(){
//     let balance = 500; //here is the example of closure
//     //here we defined variable outside
//     //and even we executed the outer function the inner object remeber the
//     //balance function
//     let user = {
//         deposit: function(amount){
//             if(typeof amount === "number" && amount > 0){
//                 balance+=amount;
//                 return balance;
//             }
//         },
    
//         withdraw: function(amount){
//             if(typeof amount === "number" && amount>0 &&  balance>=amount){
//                 balance-=amount;
//                 return balance;
//             }
//         },
    
//         getBalance:function(){
//             return balance;
//         }
//     }    
//     return user;
// }

// const customer = createBankAccount();

// // customer.deposit("900"); //undefined
// console.log(customer.deposit(0));
// console.log(customer.getBalance());

// console.log(customer.getBalance());
// console.log(typeof customer); //objct

//Higher Order Function

//one of the example is passing function to another as callbakc function
//one is returning another function reference from the fucntion

//here is example

// function higherOrder(){

//     function hello(){
//         console.log("Hello World!!");
//     }

//     return hello;
// }

// const greet = higherOrder();

// greet();

//another way to return directly

function higherOrder(value){

    return function hello(number){
        console.log("Hello World!!");
        return number * value;
    }
}

const greet = higherOrder(5)(4); //immediate invoked function used here

// const result = greet(2);

// console.log(result);

console.log(greet);