import consultation from '../../../images/consultation.jpg';
import instagram from '../../../images/instagram.svg';
import telegram from '../../../images/telegram.svg';
import vk from '../../../images/vk.svg';
import phone from '../../../images/phone.svg';
import whatsapp from '../../../images/whatsapp.svg';
import location from '../../../images/location.png';
import email from '../../../images/email.png';
import './Consultation.css';

function Consultation() {
    return (
        <section className="consultation">

            <div className='consultation__description'>

                <div className='consultation-title'>
                    <h2 className="consultation__title">Не знаешь что выбрать?</h2>
                </div>
                <p className="consultation__phone">Запишись на предварительную консультацию. Это просто и бесплатно</p>
                <p className="consultation__phone">Тел: +7(951)484-00-77</p>

                <div className='iqons__consultation'>
                    <a href="tel:+79514840077">
                        <img className='consultation__logo' src={phone} alt='logo' />
                    </a>
                    <a href="https://wa.me/79514840077" target="_blank" rel="noreferrer">
                        <img className='consultation__logo' src={whatsapp} alt='logo' />
                    </a>
                    <a href="https://instagram.com/valeria_colorist?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                        <img className='consultation__logo' src={instagram} alt='logo' />
                    </a>
                    <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
                        <img className='consultation__logo' src={telegram} alt='logo' />
                    </a>
                    <a href="https://vk.com/public200598040" target="_blank" rel="noreferrer">
                        <img className='consultation__logo' src={vk} alt='logo' />
                    </a>
                </div>
            </div>
            <img className='consultation__description-photo' src={consultation} alt='' />

        </section>
    )
}

export default Consultation;