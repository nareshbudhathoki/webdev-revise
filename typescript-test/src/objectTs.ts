const chai = {
    name: "Ginger Chai",
    price: 30,
    isHot:true,
}

// {
//     name:string;
//     price:number;
//     isHot:boolean;
// }

let tea:{
    name:string;
    price:number;
    isHot:boolean;
}

tea = {
    name: "Ginger Tea",
    price:25,
    isHot:true,
}

//alias object type

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"],
}

type Cup = {size: string};
let smallCup: Cup = {size: "200ml"};

let bigCup = {size:"500ml", material: "steel"};

smallCup = bigCup;

//another example

type Brew = {brewTime:number};

const coffee = {brewTime: 5, beans: 'Arab'};

// in this case if more properties are there then its okay,
// but properties are less than defined then its a problem
const chaiBrew: Brew = coffee;

type User = {
    username: string;
     password:string;
};

const u: User = {
    username:"Billionare",
    password:"4tgrb"
};

type Item = {name:string, quantity:number};
type Address = {street: string, pin: number};

type Order = {
    id: string;
    items: Item[];
    address: Address;
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai = (updates: Partial<Chai>) =>{
    console.log("updating chai with", updates);
}

updateChai({price:33});
updateChai({name:"mocha"});
updateChai({isHot:false});
updateChai({});

type ChaiOrder = {
    name?:string;
    quantity?:number;
}

const placeOrder = (order:Required<ChaiOrder>) =>{
    console.log(order);
}

placeOrder({
    name:"Masala chai",
    quantity: 3,
})

type Coffee = {
    name:string;
    price:number;
    isHot: boolean;
    ingredients: string[];
}

type BasicChaiInfo = Pick<Coffee, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "lemon",
    price:44,
}

//omit

type ChaiNew = {
    name:string;
    price:number;
    isHot:boolean;
    secretIngredients: string;
};

type PublicChai = Omit<Coffee, "secretIngredients" >;