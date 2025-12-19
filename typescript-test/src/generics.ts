//generics

//here T is the datatype and it can be anything, string, number, custom data types etc
function wrapInArray<T>(item: T):T[]{
    return [item];
}

wrapInArray("masala");

wrapInArray(34);
wrapInArray({flavour: "Ginger"});

//another example

function pair<A, B>(a:A, b:B):[A, B]{
    return [a, b]; //it will not allow [b,a]. cause it is not the generic signature
}

pair("masala", "test");
pair("masala", "43");
pair("ginger", {flavoue:"Adrak"});

//generic interfaces

interface Box<T>{
    content:T
}

const numberBox: Box<number> = {content:4};
const numberCup: Box<string> = {content:"40"};

//generics in api promise


interface ApiPromise<T>{
    status:number,
    data: T,
}

const response:ApiPromise<{flavour:string}> = {
    status:200,
    data:{flavour:"ginger"}
}