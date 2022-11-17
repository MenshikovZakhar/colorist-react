import Header from '../Header/Header';
import About from './About/About';
import Footer from '../Footer/Footer';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Сommunication from './Сommunication/Сommunication';
import Partners from './Partners/Partners';
import { Helmet } from 'react-helmet-async';
function Main() {
    return (
        <>
            <Helmet>
                <title>Окрашивание волос в Челябинске</title>
                <meta name="description" content="окрашивание волос, тонирование волос, женские стрижки Челябинск" />
                <link rel="canonical" href="/" />

            </Helmet>
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