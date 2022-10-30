import React from 'react';
import classNames from 'classnames';
import './InfoToolTip.css';

export const InfoToolTip = ({ isOpen, onClose, card }) => {
    const classPopup = classNames(`popup`, {
        popup_opened: isOpen
    });

    const handleMouseDown = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={classPopup} onMouseDown={handleMouseDown}>
            <div className='popup__container'>
                <img className='popup__container' src={card.src} alt="фото" />
                <button
                    aria-label='Close'
                    className='popup__close'
                    type='button'
                    onClick={() => onClose(false)}
                ></button>
            </div>
        </div>
    );
};