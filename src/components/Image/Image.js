import React from 'react';
import './Image.css';
function Image({ image, onCardClick }) {

    function handleClick() {
        onCardClick(image);
    }

    return (
        <div className='image'>
            <img className='image__img' image={image} src={image.src} onClick={handleClick} />
        </div>
    )
}

export default Image;