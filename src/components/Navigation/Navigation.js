import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import HiddenMenu from '../HiddenMenu/HiddenMenu';

function Navigation() {
    const [toggle, setToggle] = useState(true);

    const onClickOpenMenu = () => {
        setToggle(false);
    };

    const onClickCloseMenu = () => {
        setToggle(true);
    };

    return (
        <>
            {toggle ? (
                <div className='nav-menu__menu-adapt' onClick={onClickOpenMenu}></div>
            ) : (
                <HiddenMenu onClickCloseMenu={onClickCloseMenu} />
            )}
            <nav className='nav-movie__menu'>
                <div className='nav-movie__movie'>
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            isActive ? 'nav__link active' : 'nav__link'
                        }
                    >
                        Обо мне
                    </NavLink>
                </div>
                <div className='nav-movie__movie'>
                    <NavLink
                        to='/saved-movies'
                        className={({ isActive }) =>
                            isActive ? 'nav__link active' : 'nav__link'
                        }
                    >
                        Услуги
                    </NavLink>
                </div>
                <div className='nav__link'>
                    <NavLink to='/profile' className='navigation__profile-link'>
                        Портфолио
                    </NavLink>
                </div>
                <div className='nav__link'>
                    <NavLink to='/profile' className='navigation__profile-link'>
                        Контакты
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default Navigation; 