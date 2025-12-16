type ChaiOrder = {
    type:string;
    sugar:number;
    strong:boolean
};

function makeChai(order:ChaiOrder){
    console.log(order);
}

function serveChai(order:ChaiOrder){
    console.log(order)
}

type TeaRecipe = {
    water: number;
    milk: number;
}

// class MasalaChai implements TeaRecipe{
//     water: number = 100;
//     milk: number = 20;
// }

//interface

interface CupSize{
    size: "small" | "large"
}

class Chai implements CupSize{
    size: "small" | "large" = "large"
}

//

type TeaType = "masala" | "ginger" |"lemon"

function orderChai(t: TeaType){
    console.log(t);
}

//intersection

type BaseChai = {teaLeaves: number}; //this is called object string literal type, cause it has literally exact value

type Extra = {masala:number}

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
    teaLeaves: 3,
    masala: 3,
}

//optional case

type User = {
    username: string;
    bio?: string;
}

const u1: User = {username: "Hitman"}
const u2: User = {username: "Kingsman", bio:"spy"}

//read only values

type Config = {
    readonly appName: string;
    version: number;
}

const cfg: Config = {
    appName: "way left",
    version:1,
}

// cfg.appName = 'avsta' //u cant do this cause once it is assigned u can not assigned it again

