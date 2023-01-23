import Header from '../Header/Header';
import About from './About/About';
import Footer from '../Footer/Footer';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Сommunication from './Сommunication/Сommunication';

import Haircolor from './Haircolor/Haircolor';
import './Main.css';

import ScrollToTop from "react-scroll-to-top";

function Main({ onAppointment }) {
    return (
        <>
            <Header
                onAppointment={onAppointment}
            />
            <main className='content'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
                <About />
                <Services />
                <Сommunication />
                <Portfolio />
                <Haircolor />

            </main>
            <Footer />

        </>
    );
}

export default Main;