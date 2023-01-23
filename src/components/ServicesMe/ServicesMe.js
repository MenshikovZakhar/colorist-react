import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ServicesMe.css';
import Services from '../Main/Services/Services';
import Consultation from '../Price/Consultation/Consultation';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
function ServicesMe({ onAppointment }) {
    return (
        <>
            <Header
                onAppointment={onAppointment}
            />
            <main className='servicesme'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
                <Services />
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default ServicesMe;