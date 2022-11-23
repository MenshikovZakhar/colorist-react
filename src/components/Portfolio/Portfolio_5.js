import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PortfolioCardList from '../PortfolioCardList/PortfolioCardList';
import PortfolioNav from './PortfolioNav/PortfolioNav';
import { arrayPortfolio_5 } from '../../constants/arrayPortfolio';
import './Portfolio.css';
import Consultation from '../Price/Consultation/Consultation';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
function Portfolio({ onCardClick, onAppointment }) {
    return (
        <>
            <Helmet>
                <title>Портфолио работ тонирование волос</title>
                <meta name="description" content="Портфолио работ тонирование волос Челябинск" />
                <link rel="canonical" href='/portfolio_5' />
            </Helmet>
            <Header
                onAppointment={onAppointment}
            />
            <main className='portfolio'>
                <ScrollToTop smooth className="scrolltop" svgPath="none" />
                <>
                    <PortfolioNav />
                </>
                <>
                    <PortfolioCardList onCardClick={onCardClick} arrayPortfolio={arrayPortfolio_5} type={'all'} />
                </>
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default Portfolio;