//object in javascript
//key and value format

// const user = {
//     name:"Naresh",
//     amount:"Billion Dollar",
//     age:30,
//     email:"email@gmail.com",
// }

// console.log(user);

//we can perform CRUD operation in objects--> Create, Read, Update, Delete

//accessing the value inside the object using the . notaion

// console.log(user.name);

//addign new properties
// user.post = "CEO";

// //update the object properties
// user.age = 44,

// //delete in objects
// delete user.email;
// console.log(user);

// const user = {
//     name:"Naresh",
//     amount:"Billion Dollar",
//     age:30,
//     email:"email@gmail.com",
// }

//object also stores the key in string format and for us to make it easir they remove quotes from key,
//here is the proof why they are the way they are

// console.log(user["name"]); //here we used quotes to access the value of name and wihout quotes  it will give error
//it becomes possible cause we are stored in the string format.
// console.log([amount]) //it will give error

// const user = {
//     name:"Naresh",
//     amount:"Billion Dollar",
//     age:30,
//     email:"email@gmail.com",
//     "address" : "california, silicon valley" //this is also valid
// }

// console.log(user.address); //if not it shoud give error na casue we are not using quotes here
// //so in js we treat them string and while using dot, it converst address into string internally and access it
// console.log(user['address'])

// const user = {
//     name:"Naresh",
//     amount:"Billion Dollar",
//     age:30,
//     email:"email@gmail.com",
//     "address" : "california, silicon valley", //this is also valid
//     "company address" :"google headquarter" //this is why  we use strigs
// }

// console.log(user["company address"]) 

// const user2 = user;
// user2.age = 34; //it will chage the original obect cause object share references not value
//and here eventhough the user2 is const we can update casue we  are updating value inside the
//references not the address references

// console.log(user2);

//to see the user objects keys we can access it this way

// console.log(Object.keys(user));
// //to see the values of objects use this code

// console.log(Object.values(user));

// console.log(user);

// console.log(Object.entries(user))// it will give the objects in the keys and values format in the arra


//loops in the objects
//for in loop is only used for objects most of the time

// for(let keys in user){
//     console.log(keys, user[keys]);
// }

// const user = {
//     name:"Naresh",
//     amount:"Billion Dollar",
//     age:30,
//     email:"email@gmail.com",
//     "address" : "california, silicon valley", //this is also valid
//     "company address" :"google headquarter" //this is why  we use strigs
// }

//old way not useful much
// const name = user.name;
// const age = user.age;

// console.log(name,age);

//destructuring is the best way to assign the variables

// const {name, age, amount} = user;

// console.log(name, age, amount);

// //array destructuring

// const arr = [10,34,3,34,];
// const [first, second] = arr;

// console.log(first,second);

// const user = {
//     name:"Naresh",
//     amount:"Billion Dollar",
//     age:30,
//     email:"email@gmail.com",
//     "address" : "california, silicon valley", //this is also valid
//     "company address" :"google headquarter" //this is why  we use strigs
// }

// //sometimes we can even wants to store the value from object ot different name lik this
// const {name:userName, age:userAge} = user;

// console.log(userName, userAge);


// const user = {
//     name:"Naresh",
//     amount:"Billion Dollar",
//     age:30,
//     email:"email@gmail.com",
//     "address" : "california, silicon valley", //this is also valid
//     "company address" :"google headquarter" //this is why  we use strigs
// }

//for in loop is not recommended in the ohjects that's why we have to use for of loop
//here is how we use for of loops in javascript

//for of loop is used in array so here we have to manupulate objects intor array then use loop

// const arrKey = Object.keys(user);
// const arrValue = Object.values(user);
// for(let keys of arrKey){
//     console.log(user[keys]);

// }

// for(let value of arrValue){
//     console.log(value);
// }

// const arrEntries = Object.entries(user) //using key and value

// //using for of loop

// for(let [key, value] of arrEntries){
//     console.log(key, value);
// }


//methods in the function
// const user = {
//     name:"Naresh",
//     amount:"Billion Dollar",
//     age:30,
//     email:"email@gmail.com",
//     "address" : "california, silicon valley", //this is also valid
//     "company address" :"google headquarter", //this is why  we use strigs
//     greeting : function(){
//         console.log(`Hello : ${this.name}`); //this is must important best approach
//         return 0;
//     }
// }

//basically what does this keywords does is, it store the reference of the object
//who is callingg to the function where the this keyword is used
//here user.greeting , user is calling the greeting function and inside function there is
//this keyword so it is pointing the user reference
// user.greeting();

// const user2 = {
//     name:"Anna",
//     amount:"Million Dollar",
// }

// user2.greeting = user.greeting; //if i dont use the this keyword above it will print the user name not user2

// user2.greeting()

// const user = {
//     name:"Naresh",
//     amount:"Billion Dollar",
//     age:30,
//     email:"email@gmail.com",
//     "address" : "california, silicon valley", //this is also valid
//     "company address" :"google headquarter", //this is why  we use strigs
//     greeting : function(){
//         console.log(`Hello : ${this.name}`); //this is must important best approach
//         return 0;
//     },

//     subjects:{
//         major: "Computer Science",
//         minor: "Philosophy",
//     },
// }
//nested objects
// console.log(user);
//to access the nested objects
// console.log(user["subjects"]["major"]);
// console.log(user.subjects["major"]);

// let user = {
//     name:"Naresh",
//     amount:"Billion",
//     post:"CEO",
//     address: {
//         country:"Nepal",
//         city:"Kathmandu",
//     }
// }
// //creating the same another objects who points to another references not same
// //so for this we use ...spread method


// //shallow copy 
// const user2 = {...user};
// user2.name =  "Jenith";
// user2.address.city = "New delhi"
// //here both the objects has two different references
// console.log(user2);
// console.log(user);


//deep copy

// const user ={
//     name:"Naresh",
//     amount:"77 Billion Dollar",
//     address:{
//         country: "Nepal",
//         city:"Kathmandu",
//     },
//     email:"email@gmail.com",
// }

//deep copy:This is how we do deep copy

// const user2 = structuredClone(user);


// user2.address.city = "new delhi" //this will not change the output in the user cause its deep copy
// //it will also handle the nested too
// console.log(user);
// console.log(user2);

// const user ={
//     name:"Naresh",
//     amount:"77 Billion Dollar",
//     address:{
//         country: "Nepal",
//         city:"Kathmandu",
//     },
//     email:"email@gmail.com",
//     0:200,
//     1:"jenpx"
// }

// console.log(user["1"]); //this way is okay
// console.log(user[0]) //this way is okay too

// // in js keys can be string and symbol

// const symb = Symbol("id");

// // console.log(symb);


// //symbol in js
// const user ={
//     name:"Naresh",
//     age:34,
//     [symb] :"unique",
// }


// console.log(user[symb]);

