let response: any = "32";

let numericLength:number = (response as string).length;

type Book = {
    name:string;
}

let bookString = '{"name":"One thing"}';

let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

// const inputElement = document.getElementById("username") as HTMLInputElement;

let value: unknown;

value = "chai";

value = [1,3,5];

if(typeof value === "string"){
    value.toUpperCase();
}


// try catch block

try{

}catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
}

///
const data:unknown = "coder army"

const strData: string = data as string;

//never

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role:Role):void{
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return
    }
    role; //it holds value unchecked which is superadmin here, otherwise never
}

//when there u dont return anything ever, like server running infinitely

function neverReturn():never{
    while(true){}
}