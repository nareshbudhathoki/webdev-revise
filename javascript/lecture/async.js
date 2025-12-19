//js is single threaded and synchronous language.

//single threaded means one task at a time
//synchronous means one after another step by step no jumping in code

//async await
//async function always retunrs a promise

// async function greet(){
//     // return "Hello world";
//     //above is same as this

//     return new Promise ((resolve, reject) =>{
//         reject("Hello world of promise");
//     })
// }

// const response = greet();

// // console.log(response);
// //right way to consume promise

// response.then((data)=>  console.log(data))
// .catch((error) =>{
//     console.log(error);
// });


// const response = await fetch("https://api.github.com/users");

// const data = await response.json();

// console.log(data);

// console.log("i'm not dependent to the above code now so i dont want it to stop, and i want to execute it immediately");


//now both combining async and await we can do some magic here

async function github() {

    try{
    const response = await fetch("https://api.github.com/users");
    if(!response.ok){
        throw new Error("Data is not present");
    }
    const data = await response.json();
    const parent = document.getElementById("first");
     
    for(let user of data){
        const element = document.createElement("div");
        element.classList.add("user");
        const image = document.createElement("img");
        image.src = user.avatar_url;

        const userName = document.createElement("h2");
        userName.textContent = user.login;
        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.target = "_blank";
        anchor.textContent = "Visit Profile"

        element.append(image, userName, anchor);
        parent.append(element);

    }
}
catch(error){
    console.log("Error occured while fetching the data", error.message);

}
}

github();

console.log("this is not inside async");