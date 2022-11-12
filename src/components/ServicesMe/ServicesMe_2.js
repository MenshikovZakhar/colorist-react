import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Consultation from '../Price/Consultation/Consultation';
import './ServicesMe.css';
import { arrayPortfolio_8 } from '../../constants/arrayPortfolio';
import Image from '../Image/Image_2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
function ServicesMe_2({ onCardClick }) {
    return (
        <>
            <Helmet>
                <title>Тонирование волос в Челябинске</title>
                <meta name="description" content="Тонирование волос Челябинск" />
                <link rel="canonical" href="/services_2" />
            </Helmet>
            <Header />
            <main className='servicesme'>
                <section className='servicesme__description'>
                    <div className='servicesme-description'>
                        <div className='servicesme-title'>
                            <h2 className='servicesme__title'>Тонирование</h2>
                            <p className='servicesme__text'>Входит: Профессиональный уход, тонирование,
                                оформление кончиков (при необходимости), укладка</p>
                        </div>
                        <div className="servicesme__content">
                            <span className="servicesme-title-content">
                                <span className="serv-title">Короткая длинна волос</span>
                                <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                <span className="servicesme-price-content"><span className="servicesme-price ">2000 ₽<span className="servicesme-point-zero">
                                </span></span> </span></span>

                            <span className="servicesme-title-content">
                                <span className="serv-title">Средняя длинна волос</span>
                                <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                <span className="servicesme-price-content"><span className="servicesme-price">2500 ₽<span className="servicesmet-point-zero">
                                </span></span> </span></span>


                            <span className="servicesme-title-content">
                                <span className="serv-title">Длинные волосы</span>
                                <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                <span className="servicesme-price-content"><span className="servicesme-price ">3000 ₽<span className="servicesme-point-zero">
                                </span></span> </span></span>
                        </div>
                    </div>
                    <div>
                        <ul className='servicesme__elements'>
                            {arrayPortfolio_8.map((image, index) => {
                                return (
                                    <Image key={index}
                                        src={image.src}
                                        image={image}
                                        onCardClick={onCardClick}
                                    />
                                );
                            })}
                        </ul>
                        <Link className="servicesme-title" to='/portfolio_5'>
                            <h3 className="servicesme__title2">Примеры работ</h3></Link>
                    </div>
                </section>
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default ServicesMe_2;