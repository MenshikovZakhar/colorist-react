import Carousel from './Carousel/Carousel';
import slide from '../../../images/slide2.jpg';
export default function Portfolio() {
    return (
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Carousel>
                <img src={slide} alt='' />
                <img src={slide} alt='' />
                <img src={slide} alt='' />
                <img src={slide} alt='' />
                <img src={slide} alt='' />
                <img src={slide} alt='' />

            </Carousel>
        </div>
    );
}


