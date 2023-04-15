import React from 'react';
import {Link} from "react-router-dom";
import "../css/style.css"

const Header = () => {
    return (
        <header className="header">
            <img className="rm-img" src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png" alt=""/>
            <nav className="nav-sec">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/heroes">Heroes</Link>
                <Link className="nav-link" to="/episodes">Episode</Link>
            </nav>
        </header>
    )
};

export default Header;