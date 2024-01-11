import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const TopBarItem = ({ to, children }) => (
    <NavLink to={to} className="top-bar" activeClassName="active">
        {children}
    </NavLink>
);

function Navbar() {
    return (
        <div className="main-container">
            <div className="navbar">
                <TopBarItem to="/gallery">GALLERY</TopBarItem>
                <NavLink to="/" className="hikaru-title">
                    HIKARU UN
                </NavLink>
                <TopBarItem to="/contact">CONTACT</TopBarItem>
            </div>
            <img className="main-image" src="images/DSC09226.png" alt="Main" />
        </div>
    );
}

export default Navbar;
