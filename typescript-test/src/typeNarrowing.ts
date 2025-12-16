function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai ..`
    }
    return `Chai order ${kind}`;
}

getChai("milk tea");

function serveCha(msg?:string){
    if(msg){
        return `Serving ${msg}`;
    }

    return `Serving default masala chai`;
}

function orderChai(size: "medium" | "small" | "large" | number){

    if(size === 'small'){
        return `small cutting chai`;
    }
    if(size === "medium" || size === "large"){
        return `make extra chai`;
    }

    return `chai order :${size}`;

}


//using the class system

class Expresso {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    serve(): string {
        return `Serving ${this.type} expresso chai`;
    }
}

class Cutting {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    serve(): string {
        return `Serving ${this.type} cutting chai`;
    }
}


const e = new Expresso("strong");
const c = new Cutting("half");


function serveChai(chai: Expresso | Cutting): string {
    if(chai instanceof Expresso){
        return chai.serve();
    }
    return chai.serve();
}

console.log(serveChai(e));
console.log(serveChai(c));

// creating your own data types using type keyword

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj === "object" && obj != null && typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}


function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){ 
        return `serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `serving custom chai: ${item}`;
}

//real life examples

type MasalaChai = {kind:"masala"; spicelevel:number};
type GingerChai = {kind:"ginger"; amount:number};

type Chai = MasalaChai | GingerChai;

function brew(order:Chai){
    if("spicelevel" in order){
        return `Masala chai`
    }

    return `Ginger chai`
}

//unknown in js

function isStringArray(arr:unknown): arr is string[]{
    return Array.isArray(arr) && arr.every(x => typeof x === "string");
}