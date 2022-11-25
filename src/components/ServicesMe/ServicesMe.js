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
            <Helmet>
                <title>Услуги</title>
                <meta name="description" content="окрашивание волос, тонирование волос, женские стрижки Челябинск" />
                <link rel="canonical" href="/services" />
            </Helmet>
            <Header
                onAppointment={onAppointment}
            />
            <main className='servicesme'>

                <Services />
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default ServicesMe;