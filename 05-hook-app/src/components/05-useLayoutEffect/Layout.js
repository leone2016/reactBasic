import React, { useLayoutEffect, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import './layout.css'; 
/**
 * sirve para que varios hooks interactuen entre si 
 */
export const Layout = () => {

    const { state: counter, increment } = useCounter(1);
    console.log(counter);
    const stateFetch = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    console.log(stateFetch);
    const { data } = stateFetch;
    const { author, quote } = !!data && data[0]; // !!data: Doble degacion, 1ra: !null 

    const parrafo = useRef() // en el parentesis se utiliza la inicializacion

    // el useLayoutEffect es igual al useEffect y tiene un arreglo de dependencias
    // puede servir para sacar mediciones cuando el layout se aya renderizado o sufra algun cambio 
    /**
     * quote : es una dependencia, quiere decir que esta pendiente a los cambios  
     */
    useLayoutEffect(()=>{
        console.log("useLayotEffect");
        console.log(parrafo.current.getBoundingClientRect());
    },[quote]);
    return (
        <>
            <small>useLayoutEffect</small><h1> Breaking Bad Quotes  </h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p ref={parrafo} className="mb-0">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <button onClick={() => increment(1)}>Siguiente</button>


        </>
    )
}
