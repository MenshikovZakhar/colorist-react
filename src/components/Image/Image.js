import React from 'react';
function Image({ image, onCardClick }) {

    function handleClick() {
        onCardClick(image);
    }

    return (

        <img className="slider" image={image} src={image.src} onClick={handleClick} />

    )
}

export default Image;