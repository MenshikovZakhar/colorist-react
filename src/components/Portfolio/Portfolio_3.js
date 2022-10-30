import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PortfolioCardList from '../PortfolioCardList/PortfolioCardList';
import PortfolioNav from './PortfolioNav/PortfolioNav';
import { arrayPortfolio_3 } from '../../constants/arrayPortfolio';
import { NavLink, Link } from 'react-router-dom';
function Portfolio({ onCardClick }) {
    return (
        <>
            <Header />
            <main className='movies'>
                <>
                    <PortfolioNav />
                </>
                <>
                    <PortfolioCardList onCardClick={onCardClick} arrayPortfolio={arrayPortfolio_3} type={'all'} />
                </>
            </main>
            <Footer />
        </>
    );
}

export default Portfolio;