import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './PortfolioNav.css';



function PortfolioNav() {

    return (
        <>
            <nav className='nav__menu'>

                <NavLink
                    to='/portfolio'
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    Сложное окрашевание
                </NavLink>

                <NavLink
                    to='/portfolio_2'
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    Креативные
                </NavLink>
                <NavLink
                    to='/portfolio_3'
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    Стрижки
                </NavLink>
                <NavLink
                    to='/portfolio_4'
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    Тонирование и уход
                </NavLink>

            </nav>

        </>
    );
};

export default PortfolioNav; 