import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter';
import {procesoPesado} from '../../helpers/procesoPesado';
export const MemoHook = () => {

    const { state: counter, increment } = useCounter(5000);
    const [show, setshow] = useState(true);

   
    /**
     * useMemo: momoriza un valor, de tal manera que no ejecute eecute precesos innecesarios 
     * recibe una function (tambien conocido como callBack ), luego un input que son las dependencias
     * muy similar a los effectos que se le indica que este pendiente cuando algo cambia
     * 
     * Eg. si el counter cambia,se ejecuta de nuevo prosesoPesado ()
     */
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h3>MemoHook: <small>{counter} </small></h3>
            <hr />
            {/* <p>{procesoPesado(counter)}</p> */}
            <p>{memoProcesoPesado}</p>
            <button onClick={() => increment(1)}>+ 1</button>
            <button onClick={() => setshow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
