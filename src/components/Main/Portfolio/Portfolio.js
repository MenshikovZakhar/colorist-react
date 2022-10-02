import React, { useState, useEffect } from "react";
import './Portfolio.css';
import slide1 from '../../../images/slide1.jpg';
import slide2 from '../../../images/slide2.jpg';
import slide3 from '../../../images/slide3.jpg';
import slide4 from '../../../images/slide4.jpg';
import slide5 from '../../../images/slide5.jpg';
import slide6 from '../../../images/slide6.jpg';
import slide7 from '../../../images/slide7.jpg';
import slide8 from '../../../images/slide8.jpg';
import slide9 from '../../../images/slide9.jpg';
import slide10 from '../../../images/slide10.jpg';
import slide11 from '../../../images/slide11.jpg';
import slide12 from '../../../images/slide12.jpg';

const img = [
    <img key={slide1} src={slide1} />,
    <img key={slide2} src={slide2} />,
    <img key={slide3} src={slide3} />,
    <img key={slide4} src={slide4} />,
    <img key={slide5} src={slide5} />,
    <img key={slide6} src={slide6} />,
    <img key={slide7} src={slide7} />,
    <img key={slide8} src={slide8} />,
    <img key={slide9} src={slide9} />,
    <img key={slide10} src={slide10} />,
    <img key={slide11} src={slide11} />,
    <img key={slide12} src={slide12} />,
]

function Portfolio() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const res = current === img.length - 1 ? 0 : current + 1
                return res
            })
        }, 3000)
        return () => clearInterval()
    }, [])

    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
    return (
        <div className="slider">
            <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
                {img[prevImgIndex]}
            </div>
            <div className="slider-img"
                key={activeIndex}>
                {img[activeIndex]}
            </div>
            <div className="slider-img slider-img-next"
                key={nextImgIndex}>
                {img[nextImgIndex]}
            </div>
        </div>
    )
}
export default Portfolio; 
