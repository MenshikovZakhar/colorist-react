import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import './Сertificates.css';
import Image from '../Image/Image_3';
import { arrayCertificates } from '../../constants/arrayPortfolio';
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
                    arrows={false}
                    autoCycle={true}
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