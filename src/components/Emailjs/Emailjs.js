import './Emailjs.css';
import { useState } from 'react';
import { send } from 'emailjs-com';
import classNames from 'classnames';
import {
    NOT_FOUND_MESSAGE,
    SAVE_MOVIE_MESSAGE,
} from '../../constants/index';
function Emailjs({ isOpen, onClose, }) {
    const classPopup = classNames(`popup`, {
        popup_opened: isOpen
    });
    const [isEmailjsOpen, setEmailjsOpen] = useState(false);
    const [toSend, setToSend] = useState({
        name: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [messageAcceptAuth, setMessageAcceptAuth] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_ap6gpqg',
            'template_ity9nob',
            toSend,
            'Z6le3YMDE9ovmwfTV'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessageAcceptAuth(SAVE_MOVIE_MESSAGE);
            })
            .catch((err) => {
                console.log('FAILED...', err);
                setMessageAcceptAuth(NOT_FOUND_MESSAGE);
            });

        setToSend('');
        setEmailjsOpen(true)
    };


    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
        setIsFormValid(e.target.closest('form').checkValidity());
    };

    const handleMouseDown = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={classPopup} onMouseDown={handleMouseDown}>
            {isEmailjsOpen ? (<h1 className='emailjs__message'>{messageAcceptAuth}</h1>) :
                (<div className="emailjs">
                    <form onSubmit={onSubmit}>
                        <input
                            type='text'
                            name='name'
                            placeholder='from name'
                            value={toSend.name || ''}
                            onChange={handleChange}
                            pattern="[а-яА-Яa-zA-ZёË\- ]{2,}"
                            required
                        />
                        <span className="register__error auth__error">{errors.name}</span>

                        <input
                            type="tel"
                            name='phone'
                            placeholder='tel'
                            value={toSend.phone || ''}
                            onChange={handleChange}
                            pattern="[0-9]{11}"
                            required
                        />
                        <span className="register__error auth__error">{errors.phone}</span>
                        <textarea
                            type='text'
                            name='message'
                            value={toSend.message || ''}
                            onChange={handleChange}
                            placeholder='Your message'
                        />
                        <button disabled={!isFormValid} type="submit"
                            className={`register__submit-button auth__submit-button ${isFormValid ? '' : 'auth__submit-button_disabled'}`}>
                            Отправить</button>

                    </form>

                </div>)
            }

            <button
                aria-label='Close'
                className='emailjs__close'
                type='button'
                onClick={() => { setEmailjsOpen(false); onClose(false) }}
            ></button>

        </div>
    );
}

export default Emailjs;