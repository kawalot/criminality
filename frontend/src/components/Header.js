import React, { Component } from "react";
import '../styles/Header.scss'

const Header = () => {
    return <header className="header">

            <div className="header-logo">Criminality map</div>
            <nav className="header-nav">  
                <a className="header-nav__link" href="">Home</a>  
                <a className="header-nav__link" href="">About</a>  
                <a className="header-nav__link" href="">Login</a>  
            </nav>  

    </header>
}

export default Header;