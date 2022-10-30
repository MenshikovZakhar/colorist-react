import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PortfolioCardList from '../PortfolioCardList/PortfolioCardList';
import PortfolioNav from './PortfolioNav/PortfolioNav';
import { arrayPortfolio } from '../../constants/arrayPortfolio';
import './Portfolio.css';

function Portfolio({ onCardClick }) {
    return (
        <>
            <Header />
            <main className='portfolio'>
                <>
                    <PortfolioNav />
                </>
                <>
                    <PortfolioCardList onCardClick={onCardClick} arrayPortfolio={arrayPortfolio} type={'all'} />
                </>
            </main>
            <Footer />
        </>
    );
}

export default Portfolio;