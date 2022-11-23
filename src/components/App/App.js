import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import AboutMe from '../AboutMe/AboutMe';
import Price from '../Price/Price';
import Portfolio from '../Portfolio/Portfolio';
import Portfolio_1 from '../Portfolio/Portfolio_1';
import Portfolio_2 from '../Portfolio/Portfolio_2';
import Portfolio_3 from '../Portfolio/Portfolio_3';
import Portfolio_4 from '../Portfolio/Portfolio_4';
import Portfolio_5 from '../Portfolio/Portfolio_5';
import Contacts from '../Contacts/Contacts';
import ServicesMe from '../ServicesMe/ServicesMe';
import ServicesMe_1 from '../ServicesMe/ServicesMe_1';
import ServicesMe_2 from '../ServicesMe/ServicesMe_2';
import ServicesMe_3 from '../ServicesMe/ServicesMe_3';
import ServicesMe_4 from '../ServicesMe/ServicesMe_4';
import { useState } from 'react';
import { ImagePopup } from '../ImagePopup/ImagePopup';
import PageNotFound from '../PageNotFound/PageNotFound';
import Emailjs from '../Emailjs/Emailjs';
function App() {
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopup, setImagePopup] = useState(false);
  const [isAppointmentpOpen, setAppointmentpOpen] = useState(false);

  const closePopupsMessage = () => {
    setImagePopup(false);
    setAppointmentpOpen(false);
  };

  //открытие попапа с картинкой
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setImagePopup(true);
  };

  //открытие попапа онлайн записи
  const handleAppointment = () => {
    setAppointmentpOpen(true)
  }

  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <Main
            onAppointment={handleAppointment}
          />
        </Route>
        <Route exact path='/about'>
          <AboutMe onAppointment={handleAppointment} />
        </Route>
        <Route exact path='/services'>
          <ServicesMe onAppointment={handleAppointment} />
        </Route>
        <Route exact path='/services_1'>
          <ServicesMe_1 onCardClick={handleCardClick} onAppointment={handleAppointment} />
        </Route>
        <Route exact path='/services_2'>
          <ServicesMe_2 onCardClick={handleCardClick} onAppointment={handleAppointment} />
        </Route>
        <Route exact path='/services_3'>
          <ServicesMe_3 onCardClick={handleCardClick} onAppointment={handleAppointment} />
        </Route>
        <Route exact path='/services_4'>
          <ServicesMe_4 onCardClick={handleCardClick} onAppointment={handleAppointment} />
        </Route>
        <Route exact path='/price'>
          <Price onAppointment={handleAppointment} />
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio
            onCardClick={handleCardClick} onAppointment={handleAppointment} />
        </Route>
        <Route exact path='/portfolio_1'>
          <Portfolio_1
            onCardClick={handleCardClick} onAppointment={handleAppointment} />
        </Route>
        <Route exact path='/portfolio_2'>
          <Portfolio_2
            onCardClick={handleCardClick} onAppointment={handleAppointment} />
        </Route>
        <Route exact path='/portfolio_3'>
          <Portfolio_3
            onCardClick={handleCardClick} onAppointment={handleAppointment} />
        </Route>
        <Route exact path='/portfolio_4'>
          <Portfolio_4
            onCardClick={handleCardClick} onAppointment={handleAppointment} />
        </Route>
        <Route exact path='/portfolio_5'>
          <Portfolio_5
            onCardClick={handleCardClick} onAppointment={handleAppointment} />
        </Route>
        <Route exact path='/contacts'>
          <Contacts onAppointment={handleAppointment} />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
      <Emailjs
        isOpen={isAppointmentpOpen}
        onClose={closePopupsMessage}
      />
      <ImagePopup
        isOpen={isImagePopup}
        onClose={closePopupsMessage}
        card={selectedCard}
      />
    </div>
  )
}

export default App;