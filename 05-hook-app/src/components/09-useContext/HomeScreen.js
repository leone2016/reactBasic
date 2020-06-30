import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreen = () => {
    const {user} = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <h2>Home Screen</h2>
            <hr/>

            <pre>
                {JSON.stringify(user, null, 4 )}
            </pre>
        </div>
    )
}
