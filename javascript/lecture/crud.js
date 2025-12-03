// // CRUD operation in javascript

// // console.log("Hello there welcome to the 1 percent club");

// const newElement = document.createElement("h2");
// newElement.textContent = "Welcome to the 1 percent club";
// newElement.id = "second";

// // console.log(newElement);

// // //select element

// const element = document.getElementById("first");
// // // element.before(newElement);

// element.after(newElement);

// const third = document.createElement("h3");
// third.textContent = "I'm the best";
// third.id = "third";
// // third.className = "thirdClass"; //giving class name like this is not the good approach. cause class
// //can be multiple class name and when adding other class name on it, it will override the previous clss name
//  //here we used className instead of class
// //cause in javascript class keuword is already reserved that's why we dont use in js code

// //this is the right way to give the className
// third.classList.add("thirdElement"); //adding class name
// third.classList.add("third");

// // third.classList.remove("third") //removing cladd name

// third.style.backgroundColor = "skyblue"// giving style to the elements using js

// third.style.fontSize = "30px"
// third.style.fontWeight = 100;

// newElement.after(third);

// // console.log(newElement.getAttribute("id"));
// // console.log(third.getAttribute("class")); //here use class not classlist nor className cause it's in string inside quote, and anything inside quote istreated as string

// //setting attribute in html
// newElement.setAttribute("hello", "world");

// // console.log(newElement.getAttribute("hello"));

// const list = document.createElement("li");
// const list2 = document.createElement("li");
// const list3 = document.createElement("li");
// list2.textContent = "Milk";
// list.textContent = "Apple";
// list3.textContent = "water";

// const unEl = document.getElementById("listing");

// const list4 = document.createElement("li");
// list4.id = "guava";
// list4.textContent = "guava";

// const list5 = document.createElement("li");
// list5.textContent = "Coconut";
// // unEl.append(list);
// unEl.prepend(list2);
// // unEl.append(list3);

// unEl.append(list, list3); //we can also do this if we want to append multiple elements at same time

// list.after(list4);

// // console.log(unEl.children); //it will give the array of the unordered list items 
// // console.log(unEl); //it will give the parent container for unordered lit inside of it there will be children in children properties


// unEl.children[2].after(list5); //it wil push the items inside the list below the index 2





// // console.log(third);

//in real world case scenerio
//data fromt the backend will retrived in array format

// const arr = ["milk", "sugar", "water", "tea seed"];

// const unorderedElement = document.getElementById("listing");

// const fragment = document.createDocumentFragment();


//using fragment is the effiecient method to show  the items in dom once

// for(let item of arr){
//     // console.log(item);
//     const list = document.createElement("li");
//     list.textContent = item;
//     fragment.append(list);
// }

// unorderedElement.append(fragment); //best practice and this is the modern approach


// const first = document.getElementById("first");
// first.remove(); //to remove the element from the DOM



//using innerHtml is risky

const firstElement = document.getElementById("first");

firstElement.innerHTML = "<h1>Here we can inject code if we use innerHTML"// it is risky
//how it is risky, suppose in youtube commnet if youtube renders its comment using the 
//innerHTML then the user can use any tag and push the comment and it will change the layout
//and inside this using the script they can inject js code too
//use always textContent to collect user data
//it also can happen when user can give the image url in the comment and when clcking the photos 
//in the comment the photo stored in malicious server can ask for the user data and cookies and
//can hack your account
// so insrtead we have to use textContent

firstElement.textContent = "it will show as as text so no possible to injet code and change page structure"