import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Consultation from '../Price/Consultation/Consultation';
import './ServicesMe.css';
import { arrayPortfolio_9 } from '../../constants/arrayPortfolio';
import Image from '../Image/Image_2';
import { Link } from 'react-router-dom';
function ServicesMe_3({ onCardClick }) {
    return (
        <>
            <Header />
            <main className='servicesme'>
                <section className='servicesme__description'>
                    <div>
                        <div>
                            <h2>Женские стрижки</h2>
                            <p>(стоимость зависит от сложности работы и длины волосы)</p>
                            <p>Входит:Мытьё головы, лёгкий уход,
                                стрижка, укладка</p>
                        </div>
                        <div>
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
                            <h3 className="servicesme__title">Примеры работ</h3></Link>
                    </div>
                </section>
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default ServicesMe_3;