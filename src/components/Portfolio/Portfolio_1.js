import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PortfolioCardList from '../PortfolioCardList/PortfolioCardList';
import PortfolioNav from './PortfolioNav/PortfolioNav';
import { arrayPortfolio_1 } from '../../constants/arrayPortfolio';
import './Portfolio.css';
import Consultation from '../Price/Consultation/Consultation';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
function Portfolio({ onCardClick, onAppointment }) {
    return (
        <>
            <Helmet>
                <title>Портфолио работ сложное окрашивание волос</title>
                <meta name="description" content="Портфолио работ Airtouch, Shatush, Balayage, Мелирование" />
                <link rel="canonical" href='/portfolio_1' />
            </Helmet>
            <Header
                onAppointment={onAppointment}
            />
            <main className='portfolio'>

                <>
                    <PortfolioNav />
                </>
                <>
                    <PortfolioCardList onCardClick={onCardClick} arrayPortfolio={arrayPortfolio_1} type={'all'} />
                </>
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default Portfolio;