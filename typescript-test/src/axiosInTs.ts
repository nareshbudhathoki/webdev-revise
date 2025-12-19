//web request in typescript

//.d.ts ..> declaration files that gives the hints in typescript
//hints and errors
//lib.dom.d.ts
//useful for syntax highlights, suggestions, errors

import axios, {type AxiosResponse} from "axios";

//type import
//functionality import

interface Todo{
    userId: number;
    id:number;
    title:string;
    completed:boolean;
};

const fetchData = async()=>{
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo", response.data);
    } catch (error:any) {
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}


//if error comes of type use this commnad below to install
//npm i -D @types/axios


// axios.get("https://example.com/data")
// .then(response =>{
//     console.log(response.data);
// })

// {
//     "userId":1,
//     "id":1,
//     "title":"delectus aut autem",
//     "completed":false,
// }