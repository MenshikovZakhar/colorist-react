import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import './Сertificates.css';
import Image from '../Image/Image_3';
import { arrayCertificates } from '../../constants/arrayPortfolio';
const handleDragStart = (e) => e.preventDefault();

const Сertificates = ({ onCardClick }) => {
    return (
        <div className='partners'>
            <div className='partners__description'>
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
                    pauseOnHover={true}
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