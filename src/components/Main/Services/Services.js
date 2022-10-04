import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Services.css';

import services from '../../../images/services_1.jpg';

function Services() {
    return (
        <section className='services'>
            <ul className="services__list">
                <li className="services__link services__links"><Link className='img_services_1' to='/services_1'> <img className='img_services' src={services} alt='' />
                    <p className="services__name">Окрашивание</p></Link></li>
                <div>
                    <li className="services__link "><Link className='img_services_1' to='/services_2'> <img className='img_services' src={services} alt='' />
                        <p className="services__name">Тонирование</p></Link></li>
                    <li className="services__link services__links-3"><Link className='img_services_1' to='/services_3'><img className='img_services' src={services} alt='' />
                        <p className="services__name">Женские стрижки</p></Link></li>
                </div>
                <li className="services__link services__links-4"><Link className='img_services_1' to='/services_4'> <img className='img_services' src={services} alt='' />
                    <p className="services__name">Профессиональный уход</p></Link></li>
            </ul>

        </section>
    );
}

export default Services; 