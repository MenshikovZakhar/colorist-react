import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Consultation from '../Price/Consultation/Consultation';
import './ServicesMe.css';
import { arrayPortfolio_8 } from '../../constants/arrayPortfolio';
import Image from '../Image/Image_2';
import { Link } from 'react-router-dom';
function ServicesMe_4({ onCardClick }) {
    return (
        <>
            <Header />
            <main className='servicesme'>
                <section className='servicesme__description'>
                    <div>
                        <div>
                            <h2>Профессиональный уход</h2>
                            <p>(стоимость зависит от категории подобранного ухода и расхода материала)</p>
                            <p>Входит: Мытьё головы, профессиональный уход,
                                оформление кончиков (при необходимости), укладка</p>
                        </div>
                        <div>
                            <div className="price__box">
                                <div className="price__value">

                                    <h3 className="price-title">Глубокое увлажнение</h3>
                                </div>
                                <span className="pricelist-title-content">
                                    <span className="pricelist-title">Короткая длинна волос</span>
                                    <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                    <span className="pricelist-price-content"><span className="pricelist-price ">1000 ₽<span className="pricelist-point-zero">
                                    </span></span> </span></span>

                                <span className="pricelist-title-content">
                                    <span className="pricelist-title">Средняя длинна волос</span>
                                    <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                    <span className="pricelist-price-content"><span className="pricelist-price ">1500 ₽<span className="pricelist-point-zero">
                                    </span></span> </span></span>


                                <span className="pricelist-title-content">
                                    <span className="pricelist-title">Длинные волосы</span>
                                    <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                    <span className="pricelist-price-content"><span className="pricelist-price ">2000 ₽<span className="pricelist-point-zero">
                                    </span></span> </span></span>
                            </div>

                            <div className="price__box">
                                <div className="price__value">

                                    <h3 className="price-title">Питание + белок</h3>
                                </div>
                                <span className="pricelist-title-content">
                                    <span className="pricelist-title">Короткая длинна волос</span>
                                    <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                    <span className="pricelist-price-content"><span className="pricelist-price ">1000 ₽<span className="pricelist-point-zero">
                                    </span></span> </span></span>

                                <span className="pricelist-title-content">
                                    <span className="pricelist-title">Средняя длинна волос</span>
                                    <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                    <span className="pricelist-price-content"><span className="pricelist-price ">1500 ₽<span className="pricelist-point-zero">
                                    </span></span> </span></span>


                                <span className="pricelist-title-content">
                                    <span className="pricelist-title">Длинные волосы</span>
                                    <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                    <span className="pricelist-price-content"><span className="pricelist-price "> 2000 ₽<span className="pricelist-point-zero">
                                    </span></span> </span></span>
                            </div>

                            <div className="price__box">
                                <div className="price__value">

                                    <h3 className="price-title">Глоссинг (Glossing)</h3>
                                </div>
                                <span className="pricelist-title-content">
                                    <span className="pricelist-title">Короткая длинна волос</span>
                                    <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                    <span className="pricelist-price-content"><span className="pricelist-price ">1500 ₽<span className="pricelist-point-zero">
                                    </span></span> </span></span>

                                <span className="pricelist-title-content">
                                    <span className="pricelist-title">Средняя длинна волос</span>
                                    <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                    <span className="pricelist-price-content"><span className="pricelist-price ">2000 ₽<span className="pricelist-point-zero">
                                    </span></span> </span></span>


                                <span className="pricelist-title-content">
                                    <span className="pricelist-title">Длинные волосы</span>
                                    <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                    <span className="pricelist-price-content"><span className="pricelist-price ">3000 ₽<span className="pricelist-point-zero">
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
                            <h3 className="servicesme__title">Примеры работ</h3></Link>
                    </div>
                </section>
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default ServicesMe_4;