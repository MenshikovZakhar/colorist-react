import Header from '../Header/Header';
import About from './About/About';
import Footer from '../Footer/Footer';
import Services from './Services/Services';
function Main() {
    return (
        <>
            <Header />
            <main className='content'>
                <About />
                <Services />
            </main>
            <Footer />
        </>
    );
}

export default Main;