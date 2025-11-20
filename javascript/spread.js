//Spread in Javascript
// const arr = [43,34,34,3];

// const arr2 = ["Billion", "Dollar", 343, true];

// arr.push(arr2);// it will push whole array, not one by one

// console.log(arr);
// const arr1 = ["I", "am", "the", "Best"];
// let arr3 = arr.concat(arr1, arr,arr2,); //It will create new array with both elements in one array

// console.log(arr3);

//spread operator

// const arr3 = [arr, arr2];

// console.log(arr3);

// const arr = [43,34,34,3];

// const arr1 = ["Billion", "Dollar", 343, true];

// const arr3 = [...arr, ...arr1];
// console.log(arr3);

//Join method

// const me = ["I","am", "the", "Best"];
// const dream = ["Billion", "Dollar", "Business", "Billion"];

// console.log(me.toString()); //by default it uses comma to join

//Join method

// console.log(me.join(" "));  //it is the best way to convert than tostring() method.

//searching in the array

// console.log(dream.indexOf("Billion")); //find the index of frist appearing elements


// console.log(dream.lastIndexOf("Billion"));

// console.log(dream.includes("Dollar")); //return boolean value



// const me = ["I","am", "the", "Best"];
// const dream = ["Billion", "Dollar", "Business", "Billion"];

//sorting in array
// me.sort(); //it will change in the original array, and sort using ascii character
// console.log(me);
// dream.reverse(); //it will sort in reverse order not like sort it wont check ascii smply reverse he array

// console.log(dream);
//if we want firs to last descending order there is no metho like sort
//we have to combine sort and reverse, first we will sort the array 
//and sorting array will make it ascending order
//the we will use it reverse() to make it descending order

// const a = [223,1,4,2,9,0]; 
// a.sort(); //here it treats it char by charcter not numner thats why u dont get expected result small to large number
// //cause in js there can be present  different types of data types so for them to sort is difficult
// //so they choose common ground using the char asciii and that will solve this issue
// const b = ["Hello", "there", 4, 3, false, 3.4]
// // console.log(a);
// b.sort();
// console.log(b);

// const arr = [2,4,3,6,8,9,0,1];

// arr.sort((a,b) => a-b); //we can sort array of number using this approach

// console.log(arr);

//flatting the array

// const arr = [2,3,[0,1,[6,7,3, "billon"],0], 4,5] //nested array

// // console.log(arr[2][2][3]); //accessing array inside nested array billionlements

// //to make it in one array
// // arr.flat();
// // console.log(arr);
// // console.log(arr.flat(2)) //it flats the array in different level


// const a = arr.flat(Infinity) //where u dont know how many levels are there
// //it will not change the original array
// console.log(a); 

//arrays are not array in js they are objects

const arr = [2, 22, "Billion",9.2, true];

// console.log(arr["2"]); //here we can access it using string cause it store index as key pair in object

arr.money = "Dollar";

// console.log(arr);
// console.log(arr["2"]);
console.log(arr["5"]["money"]);