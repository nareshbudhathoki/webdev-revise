//intereface in typescript

interface Chai{
    flavour: string;
    price: number;
    milk?:boolean;
}

const masala: Chai = {
    flavour: "masala",
    price: 345,
};

interface Shop{
    readonly id: number;
    name: string;
}

const s: Shop = {
    id:1,
    name:"coffe cafe",
}

// s.id = 4; //can not change cause it is readonly

//interface in the function

interface Discount{
    (price: number):number
}

const apply50: Discount = (p) => p *0.5;

interface TeaMachine{
    start():void;
    stop():void;
}

const machine:TeaMachine = {
    start(){
        console.log("start");
    },

    stop(){
        console.log("stop");
    }
}

//index signature in typescript

interface ChaiRatings{
    [flavour: string]: number;
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4,
}

//unique feature of interface

//u can define same interface multiple time and there will be no error
//while creating the object from it u have to assign the all properties of the same interface u defined everywhere
//interface merged
interface User{
    name:string;
}

interface User{
    age:number;
}

const u:User = {
    name:"Kingsman",
    age:43,

}

//extending the interface

interface A {a:string};
interface B {b:string};

interface C extends A, B{
}

const name:C ={
    a:"Kingsman",
    b:"Batman",
}

//generics in typescript

