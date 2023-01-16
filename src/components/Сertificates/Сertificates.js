import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import './Сertificates.css';
import { arrayCertificates } from '../../constants/arrayPortfolio';
import Image from '../Image/Image';
const handleDragStart = (e) => e.preventDefault();

const Сertificates = ({ onCardClick }) => {

    return (
        <div className='certificates'>
            <div className='certificates__description'>

                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 850,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 1100,
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