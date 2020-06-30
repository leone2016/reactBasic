import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({});

    return (
        <div>
            {/*   <h2>MAin Screen</h2>
            <hr/> */}
            <UserContext.Provider value={{
                user,
                setUser,
                temporal: 1234
            }}>
                <AppRouter />
            </UserContext.Provider>

        </div>
    )
}
