import React, { useState } from 'react'
import { useCounter }  from '../../hooks/useCounter';
import { Small } from './Small';
export const Memorize = () => {

    const {state:counter, increment} = useCounter(10);
    const [show, setshow] = useState(true)
    return (
        <div>
            <h3>Counter: <Small value={counter} /> </h3>
            <hr />
            <button onClick={() => increment(1)}>+ 1</button>
            <button onClick={() => setshow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div> 
    )
}
