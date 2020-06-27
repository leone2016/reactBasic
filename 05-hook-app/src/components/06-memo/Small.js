import React, { memo } from 'react'
/**
 * Memo: es una funcion que va regresar la forma memorizada de mi componente
 * y solo se va disparar si las properties cambian 
 *  se puede llamar asi React.memo( .... ) o como se muestra a continuacion
 */
export const Small = memo(({value}) => {
    console.log("llamada a <small/>, es necesario ???? ")
    return (
        <small>
            { value }
        </small>
    )
})
