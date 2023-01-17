import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import './Сertificates.css';
import { arrayCertificates } from '../../constants/arrayPortfolio';
import Image from '../Image/Image_3';
const handleDragStart = (e) => e.preventDefault();

const Сertificates = ({ onCardClick }) => {

    return (
        <div className='certificates'>
            <div className='certificates__description'>

                <InfiniteCarousel
                    breakpoints={[

                        {
                            breakpoint: 421,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            },
                        },

                        {
                            breakpoint: 451,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },

                        {
                            breakpoint: 501,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },

                        {
                            breakpoint: 591,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },

                        {
                            breakpoint: 631,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },


                        {
                            breakpoint: 691,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },

                        {
                            breakpoint: 741,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },

                        {
                            breakpoint: 801,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },

                        {
                            breakpoint: 851,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 1051,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 1231,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 1,
                            },
                        },
                    ]}

                    slidesToScroll={1}
                    slidesToShow={7}
                    arrows={true}
                    autoCycle={false}
                    pauseOnHover={false}
                    cycleInterval={3000}
                    duration={1000}
                    adaptiveHeight={true}

                >

                    {arrayCertificates.map((image, index) => {


                        return (

                            <Image key={index}
                                src={image.src}
                                image={image}
                                onCardClick={onCardClick}
                            />
                        )
                    })
                    }


                </InfiniteCarousel>
            </div>
        </div>
    );
}

export default Сertificates;