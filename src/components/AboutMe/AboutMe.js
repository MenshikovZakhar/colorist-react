import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './AboutMe.css';
import valeria__photo from '../../images/valeria__photo-3.png';
import email from '../../images/email.png';
import location from '../../images/location.png';
import location_2 from '../../images/location-2.png';
import instagram from '../../images/instagram_2.svg';
import telegram from '../../images/telegram_2.svg';
import vk from '../../images/vk_2.svg';
import phone from '../../images/phone_2.png';
import whatsapp from '../../images/whatsapp_2.svg';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";

function AboutMe({ onAppointment }) {
    return (
        <>
            <Helmet>
                <title>Валерия Смоленцева парикмахер колорист</title>
                <meta name="description" content="Валерия Смоленцева Парикмахер широкого профиля, колорист Челябинск" />
                <link rel="canonical" href="/about" />
            </Helmet>
            <Header
                onAppointment={onAppointment}
            />
            <main className='aboutme'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
                <section className="about">
                    <div className="about__description-text">
                        <p className="about__description-paragraph">
                            Меня зовут Валерия, я колорист с опытом работы с волосами и оттенками более 10 лет.
                        </p>
                        <p className="about__description-paragraph">
                            Для меня, наиболее важное место в парикмахерском деле занимает колористика! Колористика- это наука о цветах. Так кто же такой колорист и чем он занимается? В первую очередь - это человек с особым складом ума, объединяющим креативность и практичность в одно целое. Так как работа должна быть не только красивой, но и радовать Вас долгое время)
                            Парикмахер-колорист, изучивший тонкости работы с цветовыми сочетаниями в теории и на практике — это более узкая специализация парикмахера-универсала.
                        </p>
                        <p className="about__description-paragraph">
                            В общем, я умею не только стричь и укладывать локоны, моя основная сфера — окрашивание.
                            Я знаю плюсы и минусы разных брендов красителей и как работает тот или иной пигмент, досконально разбираюсь в сложных техниках окрашивания (Airtouch, Shatush, Balayage) и принципах мелирования, создаю на волосах любые оттенки, блики и цветовые эффекты.
                            Так же помогу подобрать грамотный и правильный домашний уход именно для Ваших волос!
                            Подберу для Вас индивидуальный образ с учетом особенностей внешности, образа жизни и личных пожеланий!
                        </p>
                    </div>
                    <div className="about__description">
                        <img src={valeria__photo} alt="фото" className="about__description-photo" />
                        <div className="about__text">
                            <h3 className="about__description-title">Валерия Смоленцева, 35 лет</h3>
                            <p className="about__description-subtitle">Парикмахер широкого профиля, колорист</p>
                            <p className='about__description-subtitle'><img className='about__location' src={location} alt='logo' />Челябинск, Образцова 13</p>
                            <p className='about__description-subtitle'> <img className='about__phone' src={location_2} alt='logo' />+7(951)484-00-77</p>
                            <p className='about__description-subtitle'><img className='about__email' src={email} alt='logo' />colorist@yandex.ru</p>

                            <ul className='about__list'>

                                <li className='footer__list-item'>
                                    <a href="tel:+79514840077">
                                        <img className='iqon__logo' src={phone} alt='logo' />
                                    </a>
                                </li>
                                <li className='footer__list-item'>
                                    <a href="https://wa.me/79514840077" target="_blank" rel="noreferrer">
                                        <img className='about__logo' src={whatsapp} alt='logo' />
                                    </a>
                                </li>
                                <li className='footer__list-item'>
                                    <a href="https://instagram.com/valeria_colorist?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                                        <img className='about__logo' src={instagram} alt='logo' />
                                    </a>
                                </li>

                                <li className='footer__list-item'>
                                    <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
                                        <img className='about__logo' src={telegram} alt='logo' />
                                    </a>
                                </li>
                                <li className='footer__list-item'>
                                    <a href="https://vk.com/public200598040" target="_blank" rel="noreferrer">
                                        <img className='about__logo' src={vk} alt='logo' />
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
}
export default AboutMe;