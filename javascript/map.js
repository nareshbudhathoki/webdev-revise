//forEach, filter, reducer, map, set

// let arr = [10,20,30,90]
// let sum = 0;
// //implementation of foreach loop in js
// arr.forEach((number, index, arr)=>{
//     // console.log(index, number, arr[index]);
//     sum +=number;
// })

// console.log(sum);


//filter

// let arr = [10,20,30,90]

// const filteredArr = arr.filter((number) => number>25);
// console.log(filteredArr);
// filteredArr.forEach(number =>{
//     console.log(number);
// })

//creating own filter function
//custom method

// const arr = [10, 20, 30, 40, 50];
// arr.filtering = function(compare){
//     const ans = [];

//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }

//     return ans;
// }

// let newar = arr.filtering(num => num>10);

// console.log(newar);

//map method

// const arr = [1,2,3,4,5,67,0];
// let newarr = arr.map((num) => num*3);

// newarr.forEach(num => {
//     console.log(num);
// });
// // console.log(newarr);

//reducer

// const numbers = [1, 2, 3];

// let sum = numbers.reduce((accumulator, currentValue) =>{
//     return accumulator+currentValue;
// }, 0)

// console.log(sum);

// let sum = 0;
// function add(numbers){
//     for(let i of numbers){
//         return sum= sum +i;
//     }
// }
// add(numbers);
// console.log(sum);



// let sum = numbers.reduce((accumulator, currentValue) =>{
//     return accumulator+currentValue;
// }, 0)

// console.log(sum);

// Data strucutre: set

//set store the unique value


// const arr = [10,39,0,10,10,0,1];

// // console.log(arr);

// const s1 = new Set(arr);

// s1.add(3);
// console.log(s1.size);
// console.log(s1);


// console.log(s1.has(3));
// console.log(s1.delete(0));
// s1.clear();

// console.log(s1);

//set is used to find the unique element in the array
//in real world scenerio it is used to remove the duplicate items

// const email = ["r@gm", "ro@gm", "r@gm", "re@gm"];

// // let uniqueEmail =[...new Set(email)];


// let newEmail = new  Set(email);

// // console.log(newEmail);

// // let uniqueEmail  = [...new Set(email)];

// // console.log(uniqueEmail);


// for(let num of newEmail){
//     console.log(num);
// }


//Map data structure
//this map is different than map method in array

const m1 = new Map(
    [
        ["jenith", 40],
        [2, "jen"],
        [true, 11],
        [[1,2,3,4], "kitty"],
    ]
);

// console.log(m1);

// m1.set({name:"ken", amount:1000}, "Billion");

// console.log(m1);

// console.log(m1.has(2));

// console.log(m1.get(true));

for(let [keys, value] of m1){
    console.log(keys, value);
}