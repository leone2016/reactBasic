import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
const user = {
    id: 1234,
    name: 'Leonardo',
    email: 'leoz.31@hotmail.com'
}
    return (
        <div>
            {/*   <h2>MAin Screen</h2>
            <hr/> */}
            <UserContext.Provider value={ user }>
                <AppRouter />
            </UserContext.Provider>

        </div>
    )
}
