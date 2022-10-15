import Header from '../Header/Header';
import About from './About/About';
import Footer from '../Footer/Footer';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Сommunication from './Сommunication/Сommunication';
import Partners from './Partners/Partners';

function Main() {
    return (
        <>
            <Header />
            <main className='content'>
                <About />
                <Services />
                <Сommunication />
                <Portfolio />
                <Partners />
            </main>
            <Footer />
        </>
    );
}

export default Main;