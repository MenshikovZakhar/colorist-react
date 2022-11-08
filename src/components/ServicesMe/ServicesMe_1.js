import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Consultation from '../Price/Consultation/Consultation';
import './ServicesMe.css';
import { arrayPortfolio_6 } from '../../constants/arrayPortfolio';
import { arrayPortfolio_7 } from '../../constants/arrayPortfolio';
import Image from '../Image/Image_2';
import { Link } from 'react-router-dom';
function ServicesMe_1({ onCardClick }) {
    return (
        <>
            <Header />
            <main className='servicesme'>
                <section className='servicesme__description'>
                    <div className='servicesme-description'>
                        <div className='servicesme-title'>
                            <h2 className='servicesme__title'>Сложное окрашивание</h2>
                            <p className='servicesme__text'>(Airtouch, Shatush, Balayage, Мелирование)</p>
                            <p className='servicesme__text'>Входит: Консультация (при необходимости тест-прядь), рассветление техникой, профессиональный уход,
                                тонирование, оформление кончиков (при необходимости), укладка</p>
                        </div>
                        <div className="servicesme__content">
                            <span className="servicesme-title-content">
                                <span className="serv-title">Средняя длинна волос</span>
                                <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                <span className="servicesme-price-content"><span className="servicesme-price "> от 6000 ₽<span className="servicesme-point-zero">
                                </span></span> </span></span>


                            <span className="servicesme-title-content">
                                <span className="serv-title">Длинные волосы</span>
                                <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                <span className="servicesme-price-content"><span className="servicesme-price "> от 8000 ₽<span className="servicesme-point-zero">
                                </span></span> </span></span>
                        </div>
                    </div>
                    <div>
                        <ul className='servicesme__elements'>
                            {arrayPortfolio_6.map((image, index) => {
                                return (
                                    <Image key={index}
                                        src={image.src}
                                        image={image}
                                        onCardClick={onCardClick}
                                    />
                                );
                            })}
                        </ul>
                        <Link className="servicesme-title" to='/portfolio'>
                            <h3 className="servicesme__title2">Примеры работ</h3></Link>
                    </div>
                </section>

                <section className='servicesme__description'>
                    <div className='servicesme-description'>
                        <div className='servicesme-title'>
                            <h2 className='servicesme__title'>Окрашивание в один тон</h2>
                            <p className='servicesme__text'>(Стоимость зависит от сложности работы и расхода материала)</p>
                            <p className='servicesme__text'>Входит: Консультация,  препигментация (при необходимости), лёгкий уход по типу волос,
                                окрашивание, оформление кончиков (при необходимости), укладка</p>
                        </div>
                        <div className="servicesme__content">
                            <span className="servicesme-title-content">
                                <span className="serv-title">Короткая длинна волос</span>
                                <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                <span className="servicesme-price-content"><span className="servicesme-price "> от 2000 ₽<span className="servicesme-point-zero">
                                </span></span> </span></span>

                            <span className="servicesme-title-content">
                                <span className="serv-title">Средняя длинна волос</span>
                                <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                <span className="servicesme-price-content"><span className="servicesme-price "> от 3000 ₽<span className="servicesme-point-zero">
                                </span></span> </span></span>


                            <span className="servicesme-title-content">
                                <span className="serv-title">Длинные волосы</span>
                                <span className="servicesme-line"><span className="servicesme-line-style-dotted"></span></span>
                                <span className="servicesme-price-content"><span className="servicesme-price"> от 4000 ₽<span className="servicesme-point-zero">
                                </span></span> </span></span>
                        </div>
                    </div>
                    <div>
                        <ul className='servicesme__elements'>
                            {arrayPortfolio_7.map((image, index) => {
                                return (
                                    <Image key={index}
                                        src={image.src}
                                        image={image}
                                        onCardClick={onCardClick}
                                    />
                                );
                            })}
                        </ul>
                        <Link className="servicesme-title" to='/portfolio_4'>
                            <h3 className="servicesme__title2">Примеры работ</h3></Link>
                    </div>
                </section>
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default ServicesMe_1;