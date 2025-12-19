import { useState, useEffect } from "react";

interface FetchState<T>{
    data: T | null;
    loading: boolean;
    error: string | null;
}

function useFetch<T>(url:string): FetchState<T>{
    const [state, setState] = useState<FetchState<T>>(
        {
            data:null,
            loading: true,
            error: null,
        }
    );

    //useeffect to make fetch request

    return state;

}

export default useFetch;
