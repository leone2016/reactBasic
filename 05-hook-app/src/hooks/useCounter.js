import { useState } from "react"
/**
 * TEst
 * @param {*} initialState 
 * @returns {state,
        increment,
        decrement,
        resetear}
 */
export const useCounter = (initialState = 10 ) => {
    const [state, setstate] = useState(initialState);

    const increment = (factor = 1)=>{
        setstate( state + factor);
    }
    const decrement = (factor = 1)=>{
        setstate( state - factor);
    }
    const resetear = ()=>{
        setstate( initialState );
    }

    //useCounter
    return {
        state,
        increment,
        decrement,
        resetear
    }
}
