//In this lecture we are going to learn about the promises

// console.log("Hello world Start");

// code
//github api: https://api.github.com/users

// const p1 = fetch("https://api.github.com/users");

// //we read the data in two cases
// //either promise fulfille
// //or promise rejected

// const p2 = p1.then((response)=>{
//     return response.json();
// })

// p2.then((response)=>{
//     console.log(response);
// })

// console.log("Hello world End");

// promise chaining

// fetch("https://api.github.com/users")
// .then((response) =>{
//     return response.json();
// })
// .then((data)=>{
//     // console.log(data);
//     const parent =  document.getElementById("first");


//     for(let i = 0; i <data.length; i++){
//         const image = document.createElement("img");
//         image.src = data[i].avatar_url;
//         image.style.height = "100px";
//         image.style.width = "100px";
//         parent.append(image);
     
//     }


// })

//Javascript object notations = JSON

//there is difference between json and javascript object

//json is basically as string format and it is not limited only to the javascript
//it can understand by any language
//json not allowed function
//json key and values should always be in string format
//json not allowed the comma to the last keys and values pairs but javascript allows it
// javascript object allowd not quotation in keys and it has functions and at the end of the
//keys and values pairs it allows comma
//json not allowed undefined
//json is universal and any language understand it and eventhought it has name javascript

//converting javascript to the json format

// const j1 = {
//     name: "jen",
//     age:40,
//     address: "mars",
//     c:undefined,
// }

// //convert above js object to the json
// //here it will ignore the undefined casue there is no such thing as 
// //undefined in json

// const a = JSON.stringify(j1);

// console.log(a);

//JSON format
//it should have always double quote and single quote is not allowed
// const jsonFormat = `{
//     "name":"mystic",
//     "age":300,
//     "address":"mars"
// }`;

// console.log(jsonFormat);

// //converting this json into javascript object

// const jsObject = JSON.parse(jsonFormat);

// console.log(jsObject);


//promise chaining with catch

// fetch("https://api.github.com/uers")
// .then((response) =>{
//     // if(response.ok) //it gave u data successfully
//     console.log(response);
//     if(!response.ok) //it gave u error or something so look it and handle it by urself
//     throw new Error("Data is not present in server");
//     return response.json();
// })
// .then((data)=>{
//     // console.log(data);
//     const parent =  document.getElementById("first");


//     for(let i = 0; i <data.length; i++){
//         const image = document.createElement("img");
//         image.src = data[i].avatar_url;
//         image.style.height = "100px";
//         image.style.width = "100px";
//         parent.append(image);
     
//     }
// })
// .catch((error)=>{
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
// });

//Reject conditions
//internet down
//server down
//dns down

//the promise is always filled even if the it has no data error url 
//whever the server response it will alws be a fulfilled promise no matter what the serve responses either error or no data
//cause server has no concept of promise only it is in client that is browser with js
//if the server replie then the promise is fullfilled

//reject happens only when i could not ahle to reach to the server, there was cut and no
//connection bewteen server and me client
//like a server down, no internet, dns down


//creating the promises 
// const p1 = new Promise((resolve, reject)=>{
//     // resolve("Hello promise resolved");

//     // reject("Hello promise rejected");
//     const netWork = false;
//     if(netWork){
//         resolve({
//             name:"mystic",
//             age:40,
    
//         });
//     }
//     else{
//         reject("Hello, promise is rejected");
//     }
// });

// // console.log(p1);

// p1.then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// });


//Here let's se the exmple how we can solve the problem of callback hell

//zomato application

const orderDetail = {
    orderId:44354,
    food:["pizza", "coke", "momo"],
    cost:455,
    customer_name:"enia",
    customer_location:"ktm",
    restaurant_location:"ktnpr",
    status:false,
}

function placedOrder(orderDetail){
    console.log(`${orderDetail.cost} payment is in progress`);

    return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Payment is received and order get place");
            orderDetail.status = true;
            resolve(orderDetail);
        }, 300);
    });
}

function preparingOrder(orderDetail){
    console.log(`your ${orderDetail.food} is being prepared`);

    return new Promise((resolve, reject)=>{
        
    setTimeout(()=>{
        console.log(`your ${orderDetail.food} is  prepared`);
        orderDetail.token = 123;
        resolve(orderDetail);
    },3000);
    });
}

function pickupOrder(orderDetail){
    console.log(`delivery boy is picking ur order from ${orderDetail.restaurant_location}`);

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("I have picked up the order");
            orderDetail.received = true;
            resolve(orderDetail);
        },300);
    });
}

function deliverOrder(orderDetail){
    console.log(`I'm on the way to deliver to ${orderDetail.customer_location}`);

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("I have delivered the order successfully");
            orderDetail.delivery = true;
            resolve(orderDetail);
        }, 3000);
    });
}

//example of call back hell
//call back inside call back so many times is called callback as hell

placedOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail) =>pickupOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.then((orderDetail)=>{
    console.log(orderDetail);
})
.catch((error) =>{
    console.log(`Error: ${error.message}`);
})
.finally(()=>{
    console.log("I am doing cleanup"); //this code will run by any means
})

//finally is used to remove the loader after data is fetched
//it can also be used to diconnect the databse adter work is done