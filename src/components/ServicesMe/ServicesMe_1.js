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
                    <div>
                        <div>
                            <h2>Сложное окрашивание</h2>
                            <p>(Airtouch, Shatush, Balayage, Мелирование)</p>
                            <p>Входит:Консультация (при необходимости тест-прядь), рассветление техникой, профессиональный уход,
                                тонирование, оформление кончиков (при необходимости), укладка</p>
                        </div>
                        <div>
                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Средняя длинна волос</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price "> от 6000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>


                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Длинные волосы</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price "> от 8000 ₽<span className="pricelist-point-zero">
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
                            <h3 className="servicesme__title">Примеры работ</h3></Link>
                    </div>
                </section>

                <section className='servicesme__description'>
                    <div>
                        <div>
                            <h2>Окрашивание в один тон</h2>
                            <p>(Стоимость зависит от сложности работы и расхода материала)</p>
                            <p>Входит: Консультация,  препигментация (при необходимости), лёгкий уход по типу волос,
                                окрашивание, оформление кончиков (при необходимости), укладка</p>
                        </div>
                        <div>
                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Короткая длинна волос</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price "> от 2000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>

                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Средняя длинна волос</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price "> от 3000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>


                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Длинные волосы</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price "> от 4000 ₽<span className="pricelist-point-zero">
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
                            <h3 className="servicesme__title">Примеры работ</h3></Link>
                    </div>
                </section>
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default ServicesMe_1;