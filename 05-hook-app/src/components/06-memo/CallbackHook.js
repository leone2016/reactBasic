import React, { useState, useCallback, useEffect } from 'react'
import { ShowIncrement } from './ShowIncrement';
/**
 * Problema: en este ejemplo se envia un callback a un componente llamado <ShowIncrement/>
 * pero dicho componente siempre se ejecutará aun que se utilice la funcion React.memo();
 */
export const CallbackHook = () => {

    const [counter, setcounter] = useState(10);
    /* const increment = ()=>{
        setcounter( counter + 1);
    } */
     /* USO 1
     recibe dos parametros primero un callBakc y segundo una dependencia
     1ro el callBack en este caso es la funcion que actualiza el contador
     2do dependencia: si la dependencia no ha cambiado, se utiliza solo setcounter, ya que counter 
     tiene como dependencia setcounter */
    const increment = useCallback(
        (num) => {
            setcounter( c=> c + num);
        },
        [setcounter],
    ); 

     /* USO 2
     USO 2
     USO 2
     cuando se tiene un useEffect y se tiene como dependencia una funcion, es recomendable 
     usar useCallback, sin el usecallBack esta funcion se renderizaria cada que se construya la funcion */
   /*  useEffect(() => {
        // do somethig
        
    }, [increment]) */
    return (
        <>
            <h2>useCallback hook: {counter}</h2>
            <hr/>
            <ShowIncrement  incrementar={increment}/>
        </>
    )
}
