import React from 'react';
import logo from "../Images/green1.png"

const NavbarComponent = () => {

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="logo.png" />
            </div>
            <div>
                <p className='nav_right'>Are You A Business?</p>
                <p className='hamburger'>
                    <svg width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.33325 9H17.3333" stroke="#737288" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.33337 1H22.6667" stroke="#737288" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </p>
            </div>
        </div>
    );
};

export default NavbarComponent;