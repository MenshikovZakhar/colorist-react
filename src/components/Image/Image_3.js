import React from 'react';
import './Image.css';
function Image({ image, onCardClick }) {

    function handleClick() {
        onCardClick(image);
    }

    return (
        <div>
            <img className="image_3" image={image} src={image.src} onClick={handleClick} />
        </div>
    )
}

export default Image;