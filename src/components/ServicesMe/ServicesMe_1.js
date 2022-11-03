import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Consultation from '../Price/Consultation/Consultation';
import './ServicesMe.css';
import { arrayPortfolio_6 } from '../../constants/arrayPortfolio';
import Image from '../Image/Image_2';

function ServicesMe_1({ onCardClick }) {
    return (
        <>
            <Header />
            <main className='servicesme'>
                <section className='servicesme__description'>
                    <div>
                        <div>
                            <h2>Сложное окрашивание</h2>
                            <p></p>
                            <p></p>
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
                        <ul className='elements'>
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
                    </div>
                </section>
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default ServicesMe_1;