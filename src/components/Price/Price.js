import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import price__img_1 from '../../images/price__img-1.png';
import price__img_2 from '../../images/price__img-2.png';
import price__img_3 from '../../images/price__img-3.png';
import './Price.css';
import Consultation from './Consultation/Consultation';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
function Price({ onAppointment }) {
    return (
        <>
            <Helmet>
                <title> Валерия Смоленцева Стоимость услуг</title>
                <meta name="description" content="cтоимость окрашивания волос, cтоимость тонирования волос, cтоимость женские стрижки Челябинск" />
                <link rel="canonical" href='/price' />
            </Helmet>
            <Header
                onAppointment={onAppointment}
            />
            <main className='price'>
                <ScrollToTop smooth className="scrolltop" svgPath="none" />
                <div className='price-description'>
                    <div className='price__description'>

                        <h2 className="price__title">Прайс на услуги</h2>

                        <div className="price__box">
                            <div className="price__value">
                                <img className='price__iqons' src={price__img_1} alt='logo' />
                                <h3 className="price-title">Окрашивание в 1 тон</h3>
                            </div>
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

                        <div className="price__box">
                            <div className="price__value">
                                <img className='price__iqons' src={price__img_2} alt='logo' />
                                <h3 className="price-title">Женские стрижки</h3>
                            </div>
                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Короткая длинна волос</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price ">1500 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>

                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Средняя длинна волос</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price ">1500 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>


                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Длинные волосы</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price ">1500 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>
                        </div>

                        <div className="price__box">
                            <div className="price__value">
                                <img className='price__iqons' src={price__img_1} alt='logo' />
                                <h3 className="price-title">Окрашивание корней + Тонирование длинны</h3>
                            </div>
                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Короткая длинна волос</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price ">2000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>

                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Средняя длинна волос</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price ">2500 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>


                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Длинные волосы</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price ">3000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>
                        </div>

                        <div className="price__box">
                            <div className="price__value">
                                <img className='price__iqons' src={price__img_1} alt='logo' />
                                <h3 className="price-title">Контуринг</h3>
                            </div>
                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Короткая длинна волос</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price ">4000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>

                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Средняя длинна волос</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price ">5000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>


                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Длинные волосы</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price ">6000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>
                        </div>

                        <div className="price__box">
                            <div className="price__value">
                                <img className='price__iqons' src={price__img_1} alt='logo' />
                                <h3 className="price-title">Cложное окрашивание волос: Airtouch</h3>
                            </div>
                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Средняя длинна волос</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price "> от 8000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>


                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Длинные волосы</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price "> от 10000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>
                        </div>
                        <div className="price__box">
                            <div className="price__value">
                                <img className='price__iqons' src={price__img_1} alt='logo' />
                                <h3 className="price-title">Cложное окрашивание волос: Мелирование</h3>
                            </div>
                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Средняя длинна волос</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price "> от 8000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>


                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Длинные волосы</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price "> от 10000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>
                        </div>

                        <div className="price__box">
                            <div className="price__value">
                                <img className='price__iqons' src={price__img_1} alt='logo' />
                                <h3 className="price-title">Cложное окрашивание волос: Balayage</h3>
                            </div>
                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Средняя длинна волос</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price "> от 8000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>

                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Длинные волосы</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price "> от 10000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>
                        </div>

                        <div className="price__box">
                            <div className="price__value">
                                <img className='price__iqons' src={price__img_1} alt='logo' />
                                <h3 className="price-title">Cложное окрашивание волос: Shatush</h3>
                            </div>
                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Средняя длинна волос</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price "> от 8000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>

                            <span className="pricelist-title-content">
                                <span className="pricelist-title">Длинные волосы</span>
                                <span className="pricelist-line"><span className="pricelist-line-style-dotted"></span></span>
                                <span className="pricelist-price-content"><span className="pricelist-price "> от 10000 ₽<span className="pricelist-point-zero">
                                </span></span> </span></span>
                        </div>

                        <h2 className="price__title_2">Профессиональный уход за волосами</h2>

                        <div className="price__box">
                            <div className="price__value">
                                <img className='price__iqons' src={price__img_3} alt='logo' />
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
                                <img className='price__iqons' src={price__img_3} alt='logo' />
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
                                <img className='price__iqons' src={price__img_3} alt='logo' />
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
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default Price;
