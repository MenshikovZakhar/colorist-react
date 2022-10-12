import Header from '../Header/Header';
import About from './About/About';
import Footer from '../Footer/Footer';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Сommunication from './Сommunication/Сommunication';
function Main() {
    return (
        <>
            <Header />
            <main className='content'>
                <About />
                <Сommunication />
                <Services />

                <Portfolio />
            </main>
            <Footer />
        </>
    );
}

export default Main;