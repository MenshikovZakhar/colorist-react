import "./Portfolio.css";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import slide1 from '../../../images/slide1.jpg';
import slide2 from '../../../images/slide2.jpg';
import slide3 from '../../../images/slide3.jpg';
import slide4 from '../../../images/slide4.jpg';
import slide5 from '../../../images/slide5.jpg';

const images = [slide1, slide2, slide3, slide4, slide5];

function Portfolio() {

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

  const [imgIndex, setImgIndex] = useState(0)

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImgIndex(next),
  };


  return (
    <div className="App">
      <h1>React 3D Slider</h1>
      <Slider {...settings}>
        {images.map((img, idx) => (

          <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>

            <img src={img} alt={idx} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Portfolio;