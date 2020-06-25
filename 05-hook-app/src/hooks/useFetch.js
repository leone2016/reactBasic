import  { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const initialState = { data: null, loading:true, error: null};
    const [state, setstate] = useState(initialState);

    useEffect(() => {
        return () => {
            isMounted.current = false; // este cambio no realiza la renderizacion del componente, solo la referencia del mismo 
        }
    }, [])


    useEffect(() => {
        setstate(initialState);
        fetch(url)
        .then( resp => resp.json() )
        .then( data => {
            setTimeout(() =>{
                if(isMounted.current){
                    setstate({ 
                        loading: false,
                        error: null,
                        data
                    });
                }else{
                    console.warn('setState no se llamo');
                }
                

            },4000);
           
        })
    },[url]);

    return  state;
}
