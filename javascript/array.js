//Array in Js
// let marks = [100,34,43,34,53,3];

// console.log(marks);
// console.log(marks.length);
//in js we can store the  different types of the data types.

// let arr = [4,53,3, "hi", true];

// console.log(arr);
// //array are mutable and can be change
// arr[0] ="hello";

// console.log(arr);

//push operation, insert elements at the start
// let arr = [43,43,4,3,'fun']
// arr.push("million dollar");
// arr.push("Billion");
// console.log(arr);

//pop operation -- delete elements  from end

// arr.pop();
// console.log(arr);

//insert the elements at the start and delete the elements at the start

// arr.unshift("Knowledge");
// console.log(arr);

// arr.shift();
// console.log(arr);
//shift and unshift operation reduces the performances so it is advised to not use

//iteration over the array

// let arr = [4,3,4,3,5,3,2,4,1];

// // for(let i = 0; i <arr.length; i++){
// //     console.log(arr[i]);
// }

//for of loop
// for(let num of arr){
//     console.log(num);
// }

// let arr2 = arr;
// arr2.push(50);
// console.log(arr);
// const arr = [4,3,5];
// arr[1] = 90; //allowed cause its address is not changed
// arr = [0,9,7]; //not allowed cause its completely new array so its address is different and const arr can not be changed

// console.log(arr);


//slicing in array

// const arr = [4,3,34,43,1,31,5];

// console.log(arr.slice(2,4)); //4th element not included

// let arr2 = arr.slice(1,4);
// console.log(arr2);

//splice in array and it is only in array not applicable for string, cause string are not mutable cause they are primitive data types

const arr = [4,3,34,43,1,31,5];
// console.log(arr.splice(0,3)); //it trim out elements from original array
// console.log(arr);
//other splice funciton
console.log(arr.splice(2, 4, "Million", "Dollar")); //trim and add in their place

console.log(arr);

//in slice there is no change in origina array but in splice there is change in orginal array this is the difference between.
