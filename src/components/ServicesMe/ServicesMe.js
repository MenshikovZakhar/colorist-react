import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ServicesMe.css';
import Services from '../Main/Services/Services';

function ServicesMe() {
    return (
        <>
            <Header />
            <main className='servicesme'>
                <Services />
            </main>
            <Footer />
        </>
    );
}

export default ServicesMe;