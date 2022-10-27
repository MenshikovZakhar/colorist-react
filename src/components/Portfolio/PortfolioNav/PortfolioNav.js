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
                        isActive ? 'portfolionav__link active' : 'portfolionav__link'
                    }
                >
                    Сложное окрашевание
                </NavLink>

                <NavLink
                    to='/portfolio_2'
                    className={({ isActive }) =>
                        isActive ? 'portfolionav__link active' : 'portfolionav__link'
                    }
                >
                    Креативные
                </NavLink>
                <NavLink
                    to='/portfolio_3'
                    className={({ isActive }) =>
                        isActive ? 'portfolionav__link active' : 'portfolionav__link'
                    }
                >
                    Стрижки
                </NavLink>
                <NavLink
                    to='/portfolio_4'
                    className={({ isActive }) =>
                        isActive ? 'portfolionav__link active' : 'portfolionav__link'
                    }
                >
                    Это окрашивание в один тон
                </NavLink>
                <NavLink
                    to='/portfolio_5'
                    className={({ isActive }) =>
                        isActive ? 'portfolionav__link active' : 'portfolionav__link'
                    }
                >
                    Тонирование и уход
                </NavLink>

            </nav>

        </>
    );
};

export default PortfolioNav; 