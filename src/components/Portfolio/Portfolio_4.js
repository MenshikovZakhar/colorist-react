import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PortfolioCardList from '../PortfolioCardList/PortfolioCardList';
import PortfolioNav from './PortfolioNav/PortfolioNav';
import { arrayPortfolio_4 } from '../../constants/arrayPortfolio';
import { NavLink, Link } from 'react-router-dom';
function Portfolio() {
    return (
        <>
            <Header />
            <main className='movies'>
                <>
                    <PortfolioNav />
                </>
                <>
                    <PortfolioCardList arrayPortfolio={arrayPortfolio_4} type={'all'} />
                </>
            </main>
            <Footer />
        </>
    );
}

export default Portfolio;