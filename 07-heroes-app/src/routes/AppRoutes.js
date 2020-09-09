import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';

export const AppRoutes = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Router exact path="/login" component={LoginScreen}></Router>
                    <Router exact path="/" component={MarvelScreen}></Router>
                </Switch>
            </div>
        </Router>
    )
}
