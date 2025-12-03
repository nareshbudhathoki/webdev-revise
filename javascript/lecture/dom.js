//Dom manipulation
// let temp = window.document.getElementById("first");
// temp.textContent = "Yes, I'm the Billionare";
// temp.style.color = "green";

// temp.style.backgroundColor  = "wheat";

// console.log(window);

//console.log() is not the part of original javascript
//it is the part of the window object in the dom


//here if we want to select h1 elements without using the getElementById and using manual method
//here is how we can do it

// document.documentElement.children[1].children[0].textContent = "Yes, I'm the Best";

//the above accessing method is hard for developer everytime to do it
//so we have method called getlementbyid or other queryselector so they can go to
//dom created by browser and search inside the document method and find the particular id
//and then change the html docuent and manipulate it

// document is all about html elements and browser converted all html file into
//object form so that we can manipulate html element dynamically that's all about dom
//whole javascript is all about object and its manipulation


//innerHtml shows all the content inside the elements including other html tags too
//for example if the h1 tag hash other tags like span and div it will show them

//innerText will only show what is visible in the browser, it will not show if the
//element inside it has display none etc

//textContent will show if it has display none then it will show this element too but 
//it will not show the html tags but will shows all the content
//textconttent does not care about the css

//you can see the below i'm taking an example of it

// let best = document.getElementById("best");

// best.innerText = "hello";
// best.textContent = "okay";
// console.log(best.innerHTML);
// console.log(best.textContent);
// console.log(best.innerText);

//when setting the value in the html using textContent and innerText they both behave same
//but when getting the value from the html elements they behave differently
//innertext respect css and only get the values that are displayed but the textcontent will 
//get all the values eventhough display has none case it dont respect the css

//you can see the ouput in the browser not in the console cause document is not the part of nodejs

//HTMLCollection
// here we are selecting html lements on the basis of the tags

// list = document.getElementsByTagName("li") 

//it will show the ouput in the browsers console a html collection
//it will select all the list items and store it in collection
// you can then loop in that elements, for and for -of but not the for -each

// console.log(list)

// for(let num of list){
//     console.log(num);
// }

//the return array is not a complete array its a arrya type collection having length
//so if you want to convert it in the full array we can convert it using spreadd operator
//so that u can use all the array methods and operations
//here is how u can  do it

// let newarr = [4,2,4,,2,45];

// console.log(newarr.push(0));

// const arr = [...list];

// console.log(arr);
// let a = arr.push("be healthy");
// console.log(arr);
// console.log(a);

//selecting element based on the class

// let p = document.getElementsByClassName("billion")[0];

//selecting using the class became old and now use the querselector

// let p = document.querySelector(".billion") //here we used dot(.) caues its clss for id we use #
// //querselector only return the first element
// // querselectorAll returns the nodelist where class based selection returns html collections
// p.textContent = "Welcome to the billion dollar club";
// p.id = "para";

// let h4 = document.querySelector(".million");

// //this will return the first elements only even if there present multiple elments having same clss

// h4.textContent = "you gonna see what i mean one day";

// //it only chage the first immediate class not all

//so to select multiple items we use querselectorAll and it will return the nodelist

// let nodlist = document.querySelectorAll(".million");
// //this nodelist is not full array and we can not use the all array methods
// //so we can do this

// let list = [...nodlist]; //now it is full array having all mthods present


// console.log(nodlist);
// console.log(list)