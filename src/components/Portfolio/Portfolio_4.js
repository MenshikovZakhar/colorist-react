import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PortfolioCardList from '../PortfolioCardList/PortfolioCardList';
import PortfolioNav from './PortfolioNav/PortfolioNav';
import { arrayPortfolio_4 } from '../../constants/arrayPortfolio';
import './Portfolio.css';
import Consultation from '../Price/Consultation/Consultation';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
function Portfolio({ onCardClick }) {
    return (
        <>
            <Helmet>
                <title>Портфолио работ окрашивание волос в один тон</title>
                <meta name="description" content="Портфолио работ окрашивание волос в один тон Челябинск" />
                <link rel="canonical" href='/portfolio_4' />
            </Helmet>
            <Header />
            <main className='portfolio'>
                <ScrollToTop smooth className="scrolltop" svgPath="none" />
                <>
                    <PortfolioNav />
                </>
                <>
                    <PortfolioCardList onCardClick={onCardClick} arrayPortfolio={arrayPortfolio_4} type={'all'} />
                </>
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default Portfolio;