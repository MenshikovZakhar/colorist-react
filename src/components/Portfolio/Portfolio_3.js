import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PortfolioCardList from '../PortfolioCardList/PortfolioCardList';
import PortfolioNav from './PortfolioNav/PortfolioNav';
import { arrayPortfolio_3 } from '../../constants/arrayPortfolio';
import './Portfolio.css';
import Consultation from '../Price/Consultation/Consultation';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
function Portfolio({ onCardClick, onAppointment }) {
    return (
        <>
            <Helmet>
                <title>Портфолио работ Женские стрижки</title>
                <meta name="description" content="Портфолио работ Женские стрижки Челябинск" />
                <link rel="canonical" href='/portfolio_3' />
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
                    <PortfolioCardList onCardClick={onCardClick} arrayPortfolio={arrayPortfolio_3} type={'all'} />
                </>
                <Consultation />
            </main>
            <Footer />
        </>
    );
}

export default Portfolio;