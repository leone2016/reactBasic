import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { AboutScreen } from "./AboutScreen.js"
import { LoginScreen } from "./LoginScreen.js"
import { HomeScreen } from "./HomeScreen.js"
import { NavBar } from './NavBar.js';
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                {/*tienen la misma funcion del switch de Js, dependiendo de la funcion muestra algo */}
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/about" component={AboutScreen} /> 
                    <Route exact path="/login" component={LoginScreen} />
                    <Route component={HomeScreen} /> {/* path por defecto, se puede mostrar 404 */}
                </Switch>
            </div>
        </Router>
    )
}
