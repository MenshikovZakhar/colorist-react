import Header from '../Header/Header';
import About from './About/About';

function Main() {
    return (
        <>
            <Header />
            <main className='content'>
                <About />
            </main>
        </>
    );
}

export default Main;