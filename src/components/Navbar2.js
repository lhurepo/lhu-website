import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar2.css';

const TopBarItem = ({ to, children }) => (
    <NavLink to={to} className="top-bar2" activeClassName="active">
        {children}
    </NavLink>
);

function Navbar2() {
    return (
        <div className="main-container2">
            <div className="navbar2">
                <TopBarItem to="/gallery">GALLERY</TopBarItem>
                <NavLink to="/" className="hikaru-title2">
                    HIKARU UN
                </NavLink>
                <TopBarItem to="/contact">CONTACT</TopBarItem>
            </div>
        </div>
    );
}

export default Navbar2;
