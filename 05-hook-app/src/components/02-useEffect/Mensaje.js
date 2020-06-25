import React, { useEffect, useState } from 'react'

export const Mensaje = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const { x, y } = coords;

    useEffect(() => {
        // cuerpo del efecto
        console.log('componente montado');

        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords);
            console.log(":D");
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            // face de limpieza
            console.log('componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }

        // [ here ] dependencias que se quieren escuchar
    }, [])
    return (
        <div>
            <h3>eres genial</h3>
            <p>x: {x} y: {y}</p>
        </div>
    )
}
