import './ImagePopup.css';


function ImagePopup({ card, onClose }) {
    return (
        <section className={`popup popup-image popup_image-opened ${card.image && "popup_opened"}`}>
            <div className="popup__figure-container">
                <figure className="popup__figure">
                    <div
                        className="popup__image"
                    >{card.image}</div>

                </figure>
                <button onClick={onClose} className="popup__close-button" type="button" aria-label="Выйти"></button>
            </div>
        </section>
    );
}

export default ImagePopup;