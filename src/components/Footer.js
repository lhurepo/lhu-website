import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <img src='./images/lhulogoclear.png' alt='logo' id="lhu-logo"></img>
                <p>&copy; 2024 Hikaru Un. All rights reserved.</p>
                <p id='email-link'>lucashikaruun@gmail.com</p>
            </div>
        </div>
    );
}

export default Footer;
