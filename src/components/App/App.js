import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import AboutMe from '../AboutMe/AboutMe';
import Price from '../Price/Price';
import Portfolio from '../Portfolio/Portfolio';
import Portfolio_2 from '../Portfolio/Portfolio_2';
import Portfolio_3 from '../Portfolio/Portfolio_3';
import Portfolio_4 from '../Portfolio/Portfolio_4';
import Portfolio_5 from '../Portfolio/Portfolio_5';
import Contacts from '../Contacts/Contacts';
import ServicesMe from '../ServicesMe/ServicesMe';
import ImagePopup from '../ImagePopup/ImagePopup';
import { useState } from 'react';
import { InfoToolTip } from '../InfoToolTip/InfoToolTip';

function App() {
  const [selectedCard, setSelectedCard] = useState({
    src: "",
    image: "",
  });
  const [messageAcceptAuth, setMessageAcceptAuth] = useState('');
  const [isAccept, setIsAccept] = useState(true);
  const [isInfoTooltipOpen, setInfoTooltip] = useState(false);

  const openPopupsMessage = (message) => {
    setMessageAcceptAuth(message);
    setInfoTooltip(true);
  };


  const closePopupsMessage = () => {
    setInfoTooltip(false);
    setMessageAcceptAuth('');
  };

  //открытие попапа с картинкой
  const handleCardClick = (card) => {
    setInfoTooltip(true);
  };
  //закрытие попапов
  const closeAllPopups = () => {
    setSelectedCard({});
  }
  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/about'>
          <AboutMe />
        </Route>
        <Route exact path='/services'>
          <ServicesMe />
        </Route>
        <Route exact path='/price'>
          <Price />
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio
            onCardClick={handleCardClick} />
        </Route>
        <Route exact path='/portfolio_2'>
          <Portfolio_2
            onCardClick={handleCardClick} />
        </Route>
        <Route exact path='/portfolio_3'>
          <Portfolio_3
            onCardClick={handleCardClick} />
        </Route>
        <Route exact path='/portfolio_4'>
          <Portfolio_4
            onCardClick={handleCardClick} />
        </Route>
        <Route exact path='/portfolio_5'>
          <Portfolio_5
            onCardClick={handleCardClick} />
        </Route>
        <Route exact path='/contacts'>
          <Contacts />
        </Route>
      </Switch>


      <InfoToolTip
        isOpen={isInfoTooltipOpen}
        onClose={closePopupsMessage}
        isAccept={isAccept}
        messageAcceptAuth={messageAcceptAuth}
      />
    </div>
  )
}

export default App;