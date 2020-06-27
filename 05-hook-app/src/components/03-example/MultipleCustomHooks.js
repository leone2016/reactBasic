import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter'
/**
 * sirve para que varios hooks interactuen entre si 
 */
export const MultipleCustomHooks = () => {

    const {state:counter, increment } = useCounter(1);
    const stateFetch = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    console.log(stateFetch);
    const { loading, data } = stateFetch;
    const { author, quote } = !!data && data[0]; // !!data: Doble degacion, 1ra: !null 
    return (
        <>
            <h1> Breaking Bad Quotes  </h1>
            <hr />
            {
                loading ? (<div className="loading" >L O A D I N G</div>)
                    :
                    (<blockquote className="blockquote text-right">
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>)

            }

<button onClick={ () => increment(1)}>Siguiente</button>


        </>
    )
}
