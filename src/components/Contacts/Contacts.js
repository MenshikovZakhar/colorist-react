import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Maps from './Map/Map';

function Contacts() {
    return (
        <>
            <Header />
            <main className='content'>
                <Maps />
            </main>
            <Footer />
        </>
    );
}

export default Contacts;