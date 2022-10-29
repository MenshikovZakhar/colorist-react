import React from 'react';
function Image({ image, onCardClick, index }) {

    function handleClick() {
        onCardClick(image);
    }

    return (
        <div
            onClick={handleClick}
            key={index}
            src={image}
        >{image}</div>
    );
}

export default Image;