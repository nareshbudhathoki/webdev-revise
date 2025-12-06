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

async function ordering(){
    try{
    const response1 = await placedOrder(orderDetail);
    const response2 = await preparingOrder(response1);
    const response3 = await pickupOrder(response2);
    const response4 = await deliverOrder(response3);
    console.log("your order details:", response4);

}
catch(error){
    console.log('something went wrong', error); 
}
}

ordering();

//what if in the case of fetching userdetails which are not dependent to each other
//how can we solve this? below is the problem and solutions
//these are not dpendent so following one after another is wrong way to do
//so we have Promise.all to resolve all at once then solve it

async function userDetail(){

    //not the right way

    // const comment = await fetch("userComment");
    // const photos = await fetch("userPhotos");
    // const chat = await fetch("chat");

    //right way to solve this problem

    const [comment, photos, chat] = await Promise.all([fetch("useromment"), fetch("userPhotos"), fetch("chat")]);
}