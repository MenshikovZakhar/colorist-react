import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import price__img_1 from '../../images/price__img-1.png';
import price__img_2 from '../../images/price__img-2.png';
import './Price.css';
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
                            <h3 class="price__title">Окрашивание в 1 тон</h3>
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
                            <h3 class="price__title">Женские стрижки</h3>
                        </div>
                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Короткая длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price "> от 1500 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>

                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Средняя длинна волос</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price "> от 1500 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>


                        <span class="pricelist-title-content">
                            <span class="pricelist-title">Длинные волосы</span>
                            <span class="pricelist-line"><span class="pricelist-line-style-dotted"></span></span>
                            <span class="pricelist-price-content"><span class="pricelist-price "> от 1500 ₽<span class="pricelist-point-zero">
                            </span></span> </span></span>
                    </div>


                </div>
            </main>
            <Footer />
        </>
    );
}

export default Price;
