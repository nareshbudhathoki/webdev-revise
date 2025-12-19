const chaiFlavours: string[] = ["Masala", "Adrak"];

const chaiPrice: number[] = [10,29];

const rating: Array<number> = [3.4, 5,2];


//array of object

type Chai = {
    name: string;
    price: number;
}

const menu: Chai[] =[
    {name:"masala", price: 4},
    {name:"adrak", price:24},
    {price:45, name:"lemon"}
]

//readonly array

const cities: readonly string[] = ["Delhi", "Jaipur"];
//you can not push in the array cause it is a readonly memory

// cities.push("pune") --> not allowed

//multi dimensional array
const table: number[][] = [
    [1,2,3],
    [4,5,6],
]

//tuples

let chaiTuple: [string, number];

chaiTuple = ["Masala", 20];

// chaiTuple = [20, "masala"] ; not allowed to change the order

let userInfo: [string, number, boolean?];

userInfo = ["kingmans", 100];
userInfo = ["Batman", 300, true];

//readonly tuples

const location: readonly [number, number] = [28.4, 434];

//named tuples

const chaiItems: [name:string, price:number] = ["masala", 34];


//enum in ts

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE,
};

const size = CupSize.LARGE;

enum Status {
    PENDING = 100, //later on value will automatically increased
    SERVED, //101
    CANCELLED, //102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
}

function makeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER);
// makeChai("ginger") --> you can not do this, cause it do not know what this is, you have to take value inside from enum

//usually enum has homogeneous value, either all have string, num but not mix
//but sometimes we can define heteregenous value but it is not a good practice

//heteregenous value example in enum
//enum are normally in capital letters
//it is not a standard and good practice
enum RandomEnum{
    ID = 1,
    NAME= "Batman",
}

//enum const

const enum Sugars{
    LOW = 1,
    MEDIUM = 2,
    HIGH = 4,
};

const s = Sugars.HIGH;

let t: [string, number] = ["chai", 3];

t.push("extra");