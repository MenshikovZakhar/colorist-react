import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Consultation from '../Price/Consultation/Consultation';
import './ServicesMe.css';
import { arrayPortfolio_8 } from '../../constants/arrayPortfolio';
import Image from '../Image/Image_2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
function ServicesMe_4({ onCardClick, onAppointment }) {
    return (
        <>
            <Helmet>
                <title>Профессиональный уход за волосами Челябинск</title>
                <meta name="description" content="Профессиональный уход за волосами, Глоссинг, Glossing, Глубокое увлажнение Челябинск" />
                <link rel="canonical" href="/services_4" />
            </Helmet>

            <Header
                onAppointment={onAppointment}
            />
            <main className='servicesme'>

                <section className='servicesme__description'>
                    <div className='servicesme-description'>
                        <div className='servicesme-title'>
                            <h2 className='servicesme__title'>Профессиональный уход</h2>
                            <p className='servicesme__text'>(стоимость зависит от категории подобранного ухода и расхода материала)</p>
                            <p className='servicesme__text'>Входит: Мытьё головы, профессиональный уход,
                                оформление кончиков (при необходимости), укладка</p>
                        </div>
                        <div>
                            <div className="price__box">
                                <div className="servicesme__value">

                                    <h3 className="servicesme__title3">Глубокое увлажнение</h3>
                                </div>
                                <span className="servicesme-title-content">
                                    <span className="serv-title">Короткая длинна волос</span>
                                    <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                    <span className="servicesme-price-content"><span className="servicesme-price ">1000 ₽<span className="servicesme-point-zero">
                                    </span></span> </span></span>

                                <span className="servicesme-title-content">
                                    <span className="serv-title">Средняя длинна волос</span>
                                    <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                    <span className="servicesme-price-content"><span className="servicesme-price ">1500 ₽<span className="servicesme-point-zero">
                                    </span></span> </span></span>


                                <span className="servicesme-title-content">
                                    <span className="serv-title">Длинные волосы</span>
                                    <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                    <span className="servicesme-price-content"><span className="servicesme-price ">2000 ₽<span className="servicesme-point-zero">
                                    </span></span> </span></span>
                            </div>

                            <div className="price__box">
                                <div className="servicesme__value">

                                    <h3 className="servicesme__title3">Питание + белок</h3>
                                </div>
                                <span className="servicesme-title-content">
                                    <span className="serv-title">Короткая длинна волос</span>
                                    <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                    <span className="servicesme-price-content"><span className="servicesme-price ">1000 ₽<span className="servicesme-point-zero">
                                    </span></span> </span></span>

                                <span className="servicesme-title-content">
                                    <span className="serv-title">Средняя длинна волос</span>
                                    <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                    <span className="servicesme-price-content"><span className="servicesme-price ">1500 ₽<span className="servicesme-point-zero">
                                    </span></span> </span></span>


                                <span className="servicesme-title-content">
                                    <span className="serv-title">Длинные волосы</span>
                                    <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                    <span className="servicesme-price-content"><span className="servicesme-price "> 2000 ₽<span className="servicesme-point-zero">
                                    </span></span> </span></span>
                            </div>

                            <div className="price__box">
                                <div className="servicesme__value">

                                    <h3 className="servicesme__title3">Глоссинг (Glossing)</h3>
                                </div>
                                <span className="servicesme-title-content">
                                    <span className="serv-title">Короткая длинна волос</span>
                                    <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                    <span className="servicesme-price-content"><span className="servicesme-price ">1500 ₽<span className="servicesme-point-zero">
                                    </span></span> </span></span>

                                <span className="servicesme-title-content">
                                    <span className="serv-title">Средняя длинна волос</span>
                                    <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                    <span className="servicesme-price-content"><span className="servicesme-price ">2000 ₽<span className="servicesme-point-zero">
                                    </span></span> </span></span>


                                <span className="servicesme-title-content">
                                    <span className="serv-title">Длинные волосы</span>
                                    <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                    <span className="servicesme-price-content"><span className="servicesme-price ">3000 ₽<span className="servicesme-point-zero">
                                    </span></span> </span></span>
                            </div>
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

export default ServicesMe_4;