import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PortfolioCardList from '../PortfolioCardList/PortfolioCardList';
import PortfolioNav from './PortfolioNav/PortfolioNav';
import { arrayPortfolio_2 } from '../../constants/arrayPortfolio';
import './Portfolio.css';
import Consultation from '../Price/Consultation/Consultation';
import { Helmet } from 'react-helmet-async';
function Portfolio_2({ onCardClick }) {
    return (
        <>
            <Helmet>
                <title>Портфолио работ сложное окрашивание волос</title>
                <meta name="description" content="Портфолио работ Airtouch, Shatush, Balayage, Мелирование" />
                <link rel="canonical" href='/portfolio_2' />
            </Helmet>
            <Header />
            <main className='portfolio'>
                <>
                    <PortfolioNav />
                </>
                <>
                    <PortfolioCardList onCardClick={onCardClick} arrayPortfolio={arrayPortfolio_2} type={'all'} />
                </>
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default Portfolio_2;