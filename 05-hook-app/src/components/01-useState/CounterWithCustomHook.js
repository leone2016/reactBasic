import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { state: counter, increment, decrement, resetear } = useCounter(1000);
     
    return (
        <>
         <h1>Counter with  hook: { counter }</h1> 
         <button onClick={ () => increment(2) }> + 1</button>
         <button onClick={ resetear }> resetear </button>
        <button onClick={ () => decrement(2) }> - 1</button>
        </>
        
    )
}
