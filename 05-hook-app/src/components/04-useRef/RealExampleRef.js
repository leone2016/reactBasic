import React, { useState} from 'react'
import { MultipleCustomHooks } from '../03-example/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

   
    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />
            {show && <MultipleCustomHooks />}

            <button onClick={() => setShow(!show)}> {show ? 'ocultar' : 'ver'}</button>
        </div>
    )
}
