import React from 'react'
import { Link, NavLink } from 'react-router-dom';

/**
 * la diferencia entre el nav y NavLink, es que este ultimo me va permitir 
 *  activar una clase css dependiendo donde se encuentre
 */
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact activeClassNamse="active" className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassNamse="active" className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassNamse="active" className="nav-link" to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
