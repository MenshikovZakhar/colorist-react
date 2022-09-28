import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Services.css';

import services from '../../../images/services_1.jpg';

function Services() {
    return (
        <div className='services'>

            <NavLink
                to='/services_1'
                className='services_1'
            >
                <img className='img_services' src={services} alt='' />
                <p>Окрашивание</p>
            </NavLink>
            <NavLink
                to='/services_2'
                className='services'
            >
                <img className='img_services' src={services} alt='' />
                <p>Тонирование</p>
            </NavLink>

            <NavLink
                to='/services_3'
                className='services'
            >
                <img className='img_services' src={services} alt='' />
                <p>Женские стрижки</p>
            </NavLink>

            <NavLink
                to='/services_4'
                className='services'
            >
                <img className='img_services' src={services} alt='' />
                <p>Профессиональный уход</p>
            </NavLink>

        </div>
    );
}

export default Services; 