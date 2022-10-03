import React, { PureComponent } from 'react';
import Carousel from './Carousel/Carousel';
import slide1 from '../../../images/slide1.jpg';
class Portfolio extends React.PureComponent {
  render() {
    return (
      <Carousel
        images={[<img className="slider" src={slide1} alt="1" />,
        <img className="slider" src={slide1} alt="2" />,
        <img className="slider" src={slide1} alt="3" />,
        <img className="slider" src={slide1} alt="4" />,
        <img className="slider" src={slide1} alt="5" />]}
        radius={360}
      />
    )
  }
}

export default Portfolio;