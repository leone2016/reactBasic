import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const {setUser} = useContext(UserContext);
    return (
        <div>
            <h2>Login Screen</h2>
            <hr/>
            <button className="btn btn-primary" onClick={()=> setUser({
                id: 1991,
                name: 'Patricio',
                email: 'leoz.31@hotmail.com',
            })}> LOGIN </button>
        </div>
    )
}
