import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ServicesMe.css';
import Services from '../Main/Services/Services';
import Consultation from '../Price/Consultation/Consultation';

function ServicesMe() {
    return (
        <>
            <Header />
            <main className='servicesme'>
                <Services />
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default ServicesMe;