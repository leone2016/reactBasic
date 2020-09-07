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
           /*  setTimeout(() =>{ */
                if(isMounted.current){
                    setstate({ 
                        loading: false,
                        error: null,
                        data
                    });
                }
                

           /*  },4000); */
           
        }).catch(()=>{
            setstate({
                data: null, 
                loading: false, 
                error: 'No se pudo cargar la info'
            });
        })
    },[url]);

    return  state;
}
