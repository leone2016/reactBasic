import React, { memo } from 'react'
/**
 * Recibe con parametro un callback
 * @param {*} param0 
 */
export const ShowIncrement = memo(({ incrementar }) => {
    console.log("me volvi a generar :-(");
    return (
        <button
        onClick={() => incrementar(5)}
        >
            Incrementar
        </button>
    )
})
