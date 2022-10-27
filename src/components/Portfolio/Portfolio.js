import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PortfolioCardList from '../PortfolioCardList/PortfolioCardList';
import { arrayMovie } from '../../constants/arrayMovie';
function Portfolio() {
    return (
        <>
            <Header />
            <main className='movies'>

                <>
                    <PortfolioCardList arrayMovie={arrayMovie} type={'all'} />

                </>
            </main>
            <Footer />
        </>
    );
}

export default Portfolio;