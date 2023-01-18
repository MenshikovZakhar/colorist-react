import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import './Сertificates.css';
import { useState, useEffect } from 'react';
import slide1 from "../../images/certificates__img-1.jpg"
import slide2 from "../../images/certificates__img-2.jpg"
import slide3 from "../../images/certificates__img-3.jpg"
import slide4 from "../../images/certificates__img-4.jpg"
import slide5 from "../../images/certificates__img-5.jpg"
import slide6 from "../../images/certificates__img-6.jpg"
import slide7 from "../../images/certificates__img-7.jpg"
import slide8 from "../../images/certificates__img-8.jpg"
import slide9 from "../../images/certificates__img-9.jpg"
import slide10 from "../../images/certificates__img-10.jpg"

const Сertificates = ({ onCardClick }) => {

    const [state, setState] = useState(7);

    useEffect(() => {
        setState(7);
    }, []);
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
                    slidesToShow={state}
                    arrows={true}
                    autoCycle={false}
                    pauseOnHover={true}
                    cycleInterval={5000}
                    duration={1000}

                >
                    <div>
                        <img
                            className='image_3'
                            alt=''
                            src={slide1}
                        />
                    </div>
                    <div>
                        <img
                            className='image_3'
                            alt=''
                            src={slide2}
                        />
                    </div>
                    <div>
                        <img
                            className='image_3'
                            alt=''
                            src={slide3}
                        />
                    </div>
                    <div>
                        <img
                            className='image_3'
                            alt=''
                            src={slide4}
                        />
                    </div>
                    <div>
                        <img
                            className='image_3'
                            alt=''
                            src={slide5}
                        />
                    </div>
                    <div>
                        <img
                            className='image_3'
                            alt=''
                            src={slide6}
                        />
                    </div>
                    <div>
                        <img
                            className='image_3'
                            alt=''
                            src={slide7}
                        />
                    </div>
                    <div>
                        <img
                            className='image_3'
                            alt=''
                            src={slide8}
                        />
                    </div>
                    <div>
                        <img
                            className='image_3'
                            alt=''
                            src={slide9}
                        />
                    </div>
                    <div>
                        <img
                            className='image_3'
                            alt=''
                            src={slide10}
                        />
                    </div>
                </InfiniteCarousel>



            </div>
        </div>
    );
}

export default Сertificates;