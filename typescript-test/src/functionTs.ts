function makeChai(type:string, cups: number){
    console.log(`Making ${cups} cups of ${type} Chai`);
}

makeChai("masala", 3);

// defining return type in function

function getChaiPrice(): number{
    return 3;
}

function makeOrder(order: string){
    if(!order) return null;
    return order;
}

//logger function

function logChai(): void{
    console.log("system is working correctly");
}

//optional

// function orderChai(type?: string){

// }

//another way to make it optional using the default value

function orderChai(type: string  = "Masala"){
    
}

//function with multiple parameters

function createChai(order:{
    type:string;
    sugar:number;
    size: "small" | "large";
}):number{
    return 4;
}