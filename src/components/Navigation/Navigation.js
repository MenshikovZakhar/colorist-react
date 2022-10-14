import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';
import HiddenMenu from '../HiddenMenu/HiddenMenu';
import menu_icon from '../../images/menu_icon.png';

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
            <nav className='nav__menu'>

                <NavLink
                    to='/about'
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    Обо мне
                </NavLink>

                <NavLink
                    to='/services'
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    <img className='menu_icon' src={menu_icon} alt='' /> Услуги
                </NavLink>
                <ul className="submenu">
                    <li className="submenu__link"><Link className="submenu__link" to="/">Окрашивание</Link></li>
                    <li className="submenu__link"><Link className="submenu__link" to="/">Тонирование</Link></li>
                    <li className="submenu__link"><Link className="submenu__link" to="/">Женские стрижки</Link></li>
                    <li className="submenu__link"><Link className="submenu__link" to="/">Профессиональный уход</Link></li>
                </ul>
                <NavLink
                    to='/price'
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    Стоимость
                </NavLink>
                <NavLink
                    to='/portfolio'
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    Портфолио
                </NavLink>
                <NavLink
                    to='/contacts'
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    Контакты
                </NavLink>

            </nav>
        </>
    );
};

export default Navigation; 