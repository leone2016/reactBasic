import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    /**
     * useEffect: se utiliza para evitar que se realice una peticion fetch
     * cada que el estado del componente cambia, ademas
     * Los efectos NO puedes ser async 
     * SOLUCION, add in the [ category ]
     * 
     * React Hook useEffect has a missing dependency: 'getGifs'. 
     * Either include it or remove the dependency array  react-hooks/exhaustive-deps
     */
    useEffect(() => {
        getGifs(category).then(imgs => {
            setState({
                data: imgs,
                loading: false
            })
        });
    }, [category]);



    return state;
}
