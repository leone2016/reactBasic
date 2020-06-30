import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {
    const {setUser} = useContext(UserContext);
    return (
        <div>
            <h2>About Screen</h2>
            <hr/>   

        </div>
    )
}
