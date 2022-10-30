import React, { useEffect, useState } from 'react';
import { More } from './More/More';
import './PortfolioCardList.css';
import Image from '../Image/Image';
import {
    WIDTH_1279,
    WIDTH_767,
    NUMBER_OF_CARDS_OVER_1279,
    NUMBER_OF_CARDS_OVER_767,
    NUMBER_OF_CARDS_LESS_767,
    ADD_NUMBER_CARD_3,
    ADD_NUMBER_CARD_2,
} from '../../constants/index.js';

function PortfolioCardList({ arrayPortfolio, type, onCardClick }) {

    const [counter, setCounter] = useState();
    const [moreCard, setMoreCard] = useState();

    const determiningCountCards = (width) => {
        if (width > WIDTH_1279) {
            setCounter(NUMBER_OF_CARDS_OVER_1279);
            return setMoreCard(ADD_NUMBER_CARD_3);
        } else if (width > WIDTH_767) {
            setCounter(NUMBER_OF_CARDS_OVER_767);
            return setMoreCard(ADD_NUMBER_CARD_2);
        } else setCounter(NUMBER_OF_CARDS_LESS_767);
        return setMoreCard(ADD_NUMBER_CARD_2);
    };

    useEffect(() => {
        const width = window.innerWidth;
        determiningCountCards(width);
    }, []);

    const addCounter = () => setCounter((...prev) => Number(prev) + moreCard);

    useEffect(() => {
        const setTimeOut = (e) => setTimeout(determiningCountCards(e), 3000);
        window.addEventListener('resize', (e) =>
            setTimeOut(e.currentTarget.innerWidth)
        );
        return window.removeEventListener('resize', (e) =>
            setTimeOut(e.currentTarget.innerWidth)
        );
    }, []);


    return (
        <section className='portfolio-card'>
            <ul className='elements'>
                {type === 'all'
                    ? arrayPortfolio.slice(0, counter).map((image, index) => {
                        return (
                            <Image key={index}
                                image={image}
                                onCardClick={onCardClick} />
                        );
                    })
                    : arrayPortfolio.map((image, index) => {
                        return (
                            <Image key={index}
                                src={image.src}
                                image={image}
                                onCardClick={onCardClick}
                            />
                        );
                    })}
            </ul>
            {type === 'all' && arrayPortfolio.length > counter && (
                <More addCounter={addCounter} />
            )}
        </section>
    );
};

export default PortfolioCardList;

