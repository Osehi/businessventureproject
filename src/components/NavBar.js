import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar= () =>  {
    
    return(
        // this holds the navBar container
        <nav className="navbar">
            {/* this handles the image or logo to the left */}
            <div className="navbar-container">
                <img className="logo" src="./images/logoone.jpeg" alt=""/>
            </div>
            {/* this div handles the links to the right */}
            <div className="navbar-links">
                <Link className="navbar-item-link" to="/">Home</Link>
                <Link className="navbar-item-link" to="/investment">Investment</Link>
                <Link className="navbar-item-link" to="/consultancy">Consultancy</Link>
                <Link className="navbar-item-link" to="/poket moni">Poket Moni</Link>
                <Link className="navbar-item-link" to="/education">Education</Link>
                <Link className="navbar-item-link" to="/business support">Business Support</Link>
            </div>
        </nav>
    );
};

export default NavBar;