import classNames from 'classnames';
import React, { PureComponent } from 'react';
import './Carousel.css';
class Carousel extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            currentIndex: 0
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentIndex: (this.state.currentIndex + 1) % this.props.images.length
            })
        }, 2500)
    }

    render() {
        const { images, radius = 180 } = this.props;
        const { currentIndex } = this.state;
        const len = images.length || 0;
        const angle = 2 * Math.PI / len;

        return (
            <div className="slider">
                <div className="slider__viewport"
                    style={{
                        transform: `translateZ(${-radius}px) rotateY(${-currentIndex * angle}rad)`
                    }}>
                    {images.map((image, index) => {
                        const indexAngle = index * angle;
                        const z = Math.cos(indexAngle) * radius;
                        const x = Math.sin(indexAngle) * radius;

                        return (
                            <div
                                key={image}
                                className={classNames(
                                    'slider__image',
                                    { 'slider__image_active': index === currentIndex }
                                )}
                                style={{
                                    transform: `translateZ(${z}px) translateX(${x}px) rotateY(${indexAngle}rad)`
                                }}
                                src={image}
                            >{image}</div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}
export default Carousel;