import React, { Component } from "react";
import '../styles/Header.scss'
import {Route, Link, NavLink, BrowserRouter as Router, Switch} from 'react-router-dom'

const Header = () => {
    return <header className="header">

            <div className="header-logo">Criminality map</div>
            <nav className="header-nav">
                <NavLink to='/' exact activeClassName="active" className="header-nav__link">Map</NavLink>
                <NavLink to='/about' className="header-nav__link">About</NavLink>
                <NavLink to='/login' className="header-nav__link">Login</NavLink>

            </nav>

    </header>
}

export default Header;
