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

function placedOrder(orderDetail, callback){
    console.log(`${orderDetail.cost} payment is in progress`);

    setTimeout(()=>{
        console.log("Payment is received and order get place");
        orderDetail.status = true;
        callback(orderDetail);
    }, 300);

}

function preparingOrder(orderDetail, callback){
    console.log(`your ${orderDetail.food} is being prepared`);

    setTimeout(()=>{
        console.log(`your ${orderDetail.food} is  prepared`);
        orderDetail.token = 123;
        callback(orderDetail);
    },3000);
}

function pickupOrder(orderDetail, callback){
    console.log(`delivery boy is picking ur order from ${orderDetail.restaurant_location}`);
    setTimeout(()=>{
        console.log("I have picked up the order");
        orderDetail.received = true;
        callback(orderDetail);

    },300);
}

function deliverOrder(orderDetail){
    console.log(`I'm on the way to deliver to ${orderDetail.customer_location}`);

    setTimeout(()=>{
        console.log("I have delivered the order successfully");
        orderDetail.delivery = true;
    }, 3000);
}

//example of call back hell
//call back inside call back so many times is called callback as hell


placedOrder(orderDetail, (orderDetail)=>{
    preparingOrder(orderDetail, (orderDetail)=>{
        pickupOrder(orderDetail, (orderDetail)=>{
            deliverOrder(orderDetail);
        });
    });
});

