//String
// const str = "jen";
// const str1 = 'kaya';
// const age = 43;
// const str3 = `We can even
// break the line it will not give error using the back tic thats wahy it is best appraoch`;

// const bestApproach = `What is your age ${age}`;
// console.log(str3);
// console.log(bestApproach);

//length 

// let str = "You are the best";

// console.log(str.length);

// console.log(str [0]);

//strings are immutable

// str[0] = "I";
// console.log(str);

//upper case
// str = str.toUpperCase();
// console.log(str.toUpperCase());
// console.log(str)

//operations in String in js
// const str = `Hello Coder Army Coder`;

// console.log(str.indexOf('Cod')); //if present give result else it will give -1

// console.log(str.lastIndexOf("Cod"));

// console.log(str.includes("ll"));

// console.log(str.includes("")); //true casue every string has empty string

//slicing

// const str = "Hello Coder Army Coder";

// console.log(str.slice(2,7)); //2 to 7 and 7 is not included
// console.log(str.slice(3)); //include 3 to till last of string

// console.log(str.slice(-5, -2)); //last char will be -1 and -2. -3 likewise to left. -5 to -2

// console.log(str.substring(2,5)); //it will work same as slice but u can not mark negative index 


// const str1 = "Billion Dollar";
// const str2 = "million Dollar";
// const str3 = str1+ ", " + str2;
// console.log(str3);

// console.log(24 + "hello world");
// console.log(24 + 3+ "hello world");

//replace

// const str = `Hello Coder Army Coder`;

// console.log(str.replace("ode", "iam"));

// const user = " Rohit ";
// console.log(user.trim());
//likewise .trimStart() / .trimEnd()

// const names = "Rohit, Mohit Suraj, Rohan, Anna";

// console.log(names.split(",")); //it splits and stored in the array


//Date object in the js

// const now = new Date();
// console.log(now);

// const now = new Date();
// console.log(now);
// console.log(now.toLocaleString());
// console.log(now.toLocaleString("en-US", { timeZone: "Asia/Kathmandu" }));

//today's day

// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getMonth()); //motnhs counts from 0 so even 11 month is shows 10
// console.log(now.getFullYear());

//days: mon-tue(1 based)
//Month: 0 to start 11

//year month date hour minute second millisecond
// const now = new Date(2025, 10, 19, 9, 54); // manual passing date
// console.log(now);

//new way to get the date 

const now = Date.now(); //it will give the dates in milliseconds to solve it again use this

const date = new Date(now); //putting same milliseconds date to get in human readable format
console.log(date);