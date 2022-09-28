import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Services.css';

import services from '../../../images/services_1.jpg';

function Services() {
    return (
        <div className='services'>

            <NavLink
                to='/about'
                className={({ isActive }) =>
                    isActive ? 'nav__link active' : 'nav__link'
                }
            >
                <img className='about-me__description-photo' src={services} alt='' />
                <p>Окрашивание</p>
            </NavLink>

        </div>
    );
}

export default Services; 