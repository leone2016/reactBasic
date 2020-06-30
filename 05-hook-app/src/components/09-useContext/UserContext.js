import {createContext} from 'react';

/**
 * UserContext es un high order component, quiere decir todo lo que tenga componentes dentro, ejemplo 
 * en AppRouter.js el <Router> contiene al <Switch/> y este a su vez tiene al <Route>, por ende, Route y Switch 
 * sin high order component
 *  
 * Se le puede asignar componentes hijos dentro de el
 */
export const UserContext = createContext(null)