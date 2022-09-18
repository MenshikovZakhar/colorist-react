import Header from '../Header/Header';
import About from './About/About';
import Footer from '../Footer/Footer';
function Main() {
    return (
        <>
            <Header />
            <main className='content'>
                <About />
            </main>
            <Footer />
        </>
    );
}

export default Main;