import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo_1.png';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <header className='header'>
            <Link to='/' className='header__link'>
                <img className='header__logo' src={logo} alt='logo' />
            </Link>
            <Navigation />
        </header>
    );
};

export default Header;