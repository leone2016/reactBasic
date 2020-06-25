import React, { useRef } from 'react'

export const FocusScreen = () => {

    // se lo puede utilizar para una referencia mutable
    // con el ref se puede cambiar a lo que este este apuntando sin necesidad de hacer una renderización
    const inputRef = useRef()
    const handleClick = () => {
        /*         document.querySelector('input').select(); */ // esto es lo mismo de abajo pero con ref
        inputRef.current.select();
    }


    return (
        <div>
            <h3>Focus Screen</h3>
            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
            />

            <button onClick={handleClick}>Focus</button>
        </div>
    )
}
