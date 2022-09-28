import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Services.css';

import services from '../../../images/services_1.jpg';

function Services() {
    return (
        <div className='services'>

            <ul className="services">
                <li className="submenu__link"><Link to='/services_1'> <img className='img_services' src={services} alt='' />
                    <p>Окрашивание</p></Link></li>
                <li className="submenu__link"><Link to='/services_2'> <img className='img_services' src={services} alt='' />
                    <p>Тонирование</p></Link></li>
                <li className="submenu__link"><Link to='/services_3'><img className='img_services' src={services} alt='' />
                    <p>Женские стрижки</p></Link></li>
                <li className="submenu__link"><Link to='/services_4'> <img className='img_services' src={services} alt='' />
                    <p>Профессиональный уход</p></Link></li>
            </ul>



        </div>
    );
}

export default Services; 