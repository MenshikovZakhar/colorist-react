import valeria__photo from '../../../images/valeria__photo-3.png';

import './Haircolor.css';

function Haircolor() {
    return (
        <section className="haircolor-me">
            <div className="haircolor__description">
                <div className="haircolor-me__description">
                    <img className='haircolor__description-photo' src={valeria__photo} alt='' />
                    <div className="haircolor-me__description-text">
                        <p className="haircolor__description-subtitle">Смена цвета волос очень сильно влияет на женщину. Цвет волос становится
                            отражением совершенно новой натуры, значимой и неотразимой. И это чувствуют все: родные, друзья, коллеги по работе, знакомые.
                            Смена цвета волос поможет радикально изменить мироощущение. Цвет волос влияет на характер, меняя наши наклонности, привычки,
                            делает всю жизнь новой. Внезапная смена имиджа – это желание перемен. Решение вопроса в пользу ярких оттенков говорит, что
                            женщина хочет выйти из состояния застоя. Мозг в стрессовой ситуации ищет способ разрядить атмосферу, и изменение внешности
                            – это как раз та самая разрядка. Вы как бы уходите от образа, который находится в стрессовом состоянии. </p>
                    </div>
                </div>
                <div className="haircolor-me__description-text">
                    <p className="haircolor__description-subtitle">По статистике, за последние несколько лет в нашей стране все больше и больше
                        женщин окрашивают волосы. Причины разные: подчеркнуть свою индивидуальность или сменить стиль,  закрасить седину,  стать
                        светлее или темнее. Но в каждом случае женщина хочет стать чуточку красивее. А значит, стать более уверенной в себе.</p>
                    <p className="haircolor__description-subtitle">Я Вам в этом с удовольствием помогу!)</p>
                </div>
                <div className="haircolor-me__description-text">
                    <p className="haircolor__description-subtitle">новые возможности."</p>
                    <p className="haircolor__description-quote">"Валерия Смоленцева"</p>
                </div>
            </div>
        </section>
    )
}

export default Haircolor;