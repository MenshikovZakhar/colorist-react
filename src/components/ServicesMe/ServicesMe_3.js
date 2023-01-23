import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Consultation from '../Price/Consultation/Consultation';
import './ServicesMe.css';
import { arrayPortfolio_9 } from '../../constants/arrayPortfolio';
import Image from '../Image/Image_2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
function ServicesMe_3({ onCardClick, onAppointment }) {
    return (
        <>
            <Header
                onAppointment={onAppointment}
            />
            <main className='servicesme'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
                <section className='servicesme__description'>
                    <div className='servicesme-description'>
                        <div className='servicesme-title'>
                            <h2 className='servicesme__title'>Женские стрижки</h2>
                            <p className='servicesme__text'>(стоимость зависит от сложности работы и длины волосы)</p>
                            <p className='servicesme__text'>Входит: Мытьё головы, лёгкий уход,
                                стрижка, укладка</p>
                        </div>
                        <div className="servicesme__content">
                            <span className="servicesme-title-content">
                                <span className="serv-title">Короткая длинна волос</span>
                                <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                <span className="servicesme-price-content"><span className="servicesme-price ">1500 ₽<span className="servicesme-point-zero">
                                </span></span> </span></span>

                            <span className="servicesme-title-content">
                                <span className="serv-title">Средняя длинна волос</span>
                                <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                <span className="servicesme-price-content"><span className="servicesme-price ">1500 ₽<span className="servicesme-point-zero">
                                </span></span> </span></span>


                            <span className="servicesme-title-content">
                                <span className="serv-title">Длинные волосы</span>
                                <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                <span className="servicesme-price-content"><span className="servicesme-price ">1500 ₽<span className="servicesme-point-zero">
                                </span></span> </span></span>
                        </div>
                    </div>
                    <div>
                        <ul className='servicesme__elements'>
                            {arrayPortfolio_9.map((image, index) => {
                                return (
                                    <Image key={index}
                                        src={image.src}
                                        image={image}
                                        onCardClick={onCardClick}
                                    />
                                );
                            })}
                        </ul>
                        <Link className="servicesme-title" to='/portfolio_3'>
                            <h3 className="servicesme__title2">Примеры работ</h3></Link>
                    </div>
                </section>
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default ServicesMe_3;