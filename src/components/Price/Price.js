import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import price__img_1 from '../../images/price__img-1.png';
import price__img_2 from '../../images/price__img-2.png';
import price__img_3 from '../../images/price__img-3.png';
import './Price.css';
import Consultation from './Consultation/Consultation';

function Price() {
    return (
        <>
            <Header />
            <main className='price'>
                <div className='price__description'>
                    <h2 className="price__title">Прайс на услуги</h2>

                    <div class="price__box">
                        <div class="price__value">
                            <img className='price__iqons' src={price__img_1} alt='logo' />
                            <h3 class="price-title">Окрашивание в 1 тон</h3>
                        </div>
                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Короткая длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price "> от 2000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>

                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Средняя длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price "> от 3000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>


                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Длинные волосы</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price "> от 4000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>
                    </div>

                    <div class="price__box">
                        <div class="price__value">
                            <img className='price__iqons' src={price__img_2} alt='logo' />
                            <h3 class="price-title">Женские стрижки</h3>
                        </div>
                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Короткая длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">1500 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>

                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Средняя длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">1500 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>


                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Длинные волосы</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">1500 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>
                    </div>

                    <div class="price__box">
                        <div class="price__value">
                            <img className='price__iqons' src={price__img_1} alt='logo' />
                            <h3 class="price-title">Окрашивание корней + Тонирование длинны</h3>
                        </div>
                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Короткая длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">2000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>

                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Средняя длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">2500 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>


                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Длинные волосы</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">3000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>
                    </div>

                    <div class="price__box">
                        <div class="price__value">
                            <img className='price__iqons' src={price__img_1} alt='logo' />
                            <h3 class="price-title">Контуринг волос</h3>
                        </div>
                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Короткая длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">4000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>

                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Средняя длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">5000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>


                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Длинные волосы</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">6000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>
                    </div>

                    <div class="price__box">
                        <div class="price__value">
                            <img className='price__iqons' src={price__img_1} alt='logo' />
                            <h3 class="price-title">Cложное окрашивание волос: Airtouch</h3>
                        </div>
                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Средняя длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price "> от 6000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>


                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Длинные волосы</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price "> от 8000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>
                    </div>
                    <div class="price__box">
                        <div class="price__value">
                            <img className='price__iqons' src={price__img_1} alt='logo' />
                            <h3 class="price-title">Cложное окрашивание волос: Мелирование</h3>
                        </div>
                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Средняя длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price "> от 6000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>


                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Длинные волосы</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price "> от 8000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>
                    </div>

                    <div class="price__box">
                        <div class="price__value">
                            <img className='price__iqons' src={price__img_1} alt='logo' />
                            <h3 class="price-title">Cложное окрашивание волос: Балаяж, Шатуш</h3>
                        </div>
                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Средняя длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price "> от 6000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>


                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Длинные волосы</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price "> от 8000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>
                    </div>

                    <h2 className="price__title_2">Профессиональный уход за волосами</h2>

                    <div class="price__box">
                        <div class="price__value">
                            <img className='price__iqons' src={price__img_3} alt='logo' />
                            <h3 class="price-title">Глубокое увлажнение</h3>
                        </div>
                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Короткая длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">1000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>

                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Средняя длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">1500 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>


                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Длинные волосы</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">2000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>
                    </div>

                    <div class="price__box">
                        <div class="price__value">
                            <img className='price__iqons' src={price__img_3} alt='logo' />
                            <h3 class="price-title">Питание + белок</h3>
                        </div>
                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Короткая длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">1000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>

                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Средняя длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">1500 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>


                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Длинные волосы</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price "> 2000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>
                    </div>

                    <div class="price__box">
                        <div class="price__value">
                            <img className='price__iqons' src={price__img_3} alt='logo' />
                            <h3 class="price-title">Глоссинг (Glossing)</h3>
                        </div>
                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Короткая длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">1500 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>

                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Средняя длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">2000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>


                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Длинные волосы</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price ">3000 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>
                    </div>
                </div>
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default Price;
