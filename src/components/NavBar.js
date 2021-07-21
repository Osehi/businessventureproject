import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    return(
        // this holds the navBar container
        <nav className="navbar">
            {/* this handles the image or logo to the left */}
            <div className="navbar-container">
                <img src="./images/logoone.jpeg" alt=""/>
            </div>
            {/* this div handles the links to the right */}
            <div>
                <Link to="/">Home</Link>
                <Link to="/investment">Investment</Link>
                <Link to="/consultancy">Consultancy</Link>
                <Link to="/poket moni">Poket Moni</Link>
                <Link to="/education">Education</Link>
                <Link to="/business support">Business Support</Link>
            </div>
        </nav>
    );
};

export default NavBar;