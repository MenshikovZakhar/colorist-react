import './Сommunication.css';
import instagram from '../../../images/instagram.svg';
import telegram from '../../../images/telegram.svg';
import vk from '../../../images/vk.svg';
import phone from '../../../images/phone.svg';
import whatsapp from '../../../images/whatsapp.svg';

function Сommunication() {
    return (
        <section className='communication'>
            <div className='communication__description'>
                <h2 class="communication__title">По вопросам стоимости и записи обращайтесь</h2>

                <div className='iqons'>
                    <a href="tel:+79514840077">
                        <img className='iqons__logo' src={phone} alt='logo' />
                    </a>
                    <a href="https://wa.me/79514840077" target="_blank" rel="noreferrer">
                        <img className='iqons__logo' src={whatsapp} alt='logo' />
                    </a>
                    <a href="https://instagram.com/valeria_colorist?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                        <img className='iqons__logo' src={instagram} alt='logo' />
                    </a>
                    <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
                        <img className='iqons__logo' src={telegram} alt='logo' />
                    </a>
                    <a href="https://vk.com/public200598040" target="_blank" rel="noreferrer">
                        <img className='iqons__logo' src={vk} alt='logo' />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Сommunication;