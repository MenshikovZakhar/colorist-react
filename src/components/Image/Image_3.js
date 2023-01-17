import React from 'react';
import './Image.css';
function Image({ image, onCardClick }) {

    function handleClick() {
        onCardClick(image);
    }

    return (
        <img className="image_3" image={image} src={image.src} onClick={handleClick} />
    )
}

export default Image;