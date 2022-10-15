import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

import './Partners.css';

import slide1 from "../../../images/brands__img-1.svg"
import slide2 from "../../../images/brands__img-2.svg"
import slide3 from "../../../images/brands__img-3.png"
import slide4 from "../../../images/brands__img-4.png"
import slide5 from "../../../images/brands__img-5.svg"

const handleDragStart = (e) => e.preventDefault();



const Partners = () => {
    return (
        <div className='partners__description'>
            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    },
                ]}

                slidesToScroll={4}
                slidesToShow={4}

                autoCycle={true}
                pauseOnHover={false}
                cycleInterval={2000}
            >
                <div>
                    <img
                        className='partners__img'
                        alt=''
                        src={slide1}
                    />
                </div>
                <div>
                    <img
                        className='partners__img'
                        alt=''
                        src={slide2}
                    />
                </div>
                <div>
                    <img
                        className='partners__img'
                        alt=''
                        src={slide3}
                    />
                </div>
                <div>
                    <img
                        className='partners__img'
                        alt=''
                        src={slide4}
                    />
                </div>
                <div>
                    <img
                        className='partners__img'
                        alt=''
                        src={slide5}
                    />
                </div>
            </InfiniteCarousel>
        </div>
    );
}

export default Partners;