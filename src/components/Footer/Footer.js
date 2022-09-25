import './Footer.css'
import logo from '../../images/logo_2.png';
import instagram from '../../images/instagram_2.svg';
import telegram from '../../images/telegram_2.svg';
import vk from '../../images/vk_2.svg';
import phone from '../../images/phone_2.png';

function Footer() {
    return (
        <footer className='footer'>
            <h1 className='footer__title'>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h1>
            <div className='footer__info'>
                <p className='footer__year'>&copy; 2022</p>
                <ul className='footer__list'>

                    <li className='footer__list-item'>
                        <a href="tel:+79514840077">
                            <img className='iqon__logo' src={phone} alt='logo' />
                        </a>
                    </li>
                    <li className='footer__list-item'>
                        <a href="https://instagram.com/valeria_colorist?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                            <img className='iqon__logo' src={instagram} alt='logo' />
                        </a>
                    </li>

                    <li className='footer__list-item'>
                        <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
                            <img className='iqon__logo' src={telegram} alt='logo' />
                        </a>
                    </li>
                    <li className='footer__list-item'>
                        <a href="https://vk.com/public200598040" target="_blank" rel="noreferrer">
                            <img className='iqon__logo' src={vk} alt='logo' />
                        </a>
                    </li>

                </ul>
            </div>
        </footer>
    );
}

export default Footer;