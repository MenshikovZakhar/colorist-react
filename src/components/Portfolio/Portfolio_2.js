import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PortfolioCardList from '../PortfolioCardList/PortfolioCardList';
import PortfolioNav from './PortfolioNav/PortfolioNav';
import { arrayPortfolio_2 } from '../../constants/arrayPortfolio';
import { NavLink, Link } from 'react-router-dom';
function Portfolio_2() {
    return (
        <>
            <Header />
            <main className='movies'>
                <>
                    <PortfolioNav />
                </>
                <>
                    <PortfolioCardList arrayPortfolio={arrayPortfolio_2} type={'all'} />

                </>
            </main>
            <Footer />
        </>
    );
}

export default Portfolio_2;