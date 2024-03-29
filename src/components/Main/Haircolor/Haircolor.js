import valeria__photo from '../../../images/valeria__photo-3.png';
import haircolor__img from '../../../images/haircolor__img.jpg';
import './Haircolor.css';

function Haircolor() {
    return (
        <section className="haircolor-me">
            <div className="haircolor__description">
                <div className="haircolor-me__description">
                    <div className="haircolor-me__name">
                        <img className='haircolor__description-photo' src={valeria__photo} alt='' />
                        <p className="haircolor__name">Валерия Смоленцева</p>
                        <p className="haircolor__name">Парикмахер широкого профиля, колорист</p>
                    </div>
                    <div className="haircolor-me__description-text">
                        <p className="haircolor__description-subtitle">Смена цвета волос очень сильно влияет на женщину. Цвет волос становится
                            отражением совершенно новой натуры, значимой и неотразимой. И это чувствуют все: родные, друзья, коллеги по работе, знакомые.
                            Смена цвета волос поможет радикально изменить мироощущение. Цвет волос влияет на характер, меняя наши наклонности, привычки,
                            делает всю жизнь новой. Внезапная смена имиджа – это желание перемен. Решение вопроса в пользу ярких оттенков говорит, что
                            женщина хочет выйти из состояния застоя. Мозг в стрессовой ситуации ищет способ разрядить атмосферу, и изменение внешности
                            – это как раз та самая разрядка. Вы как бы уходите от образа, который находится в стрессовом состоянии. </p>
                    </div>
                </div>
                <div className="haircolor-me__text">
                    <p className="haircolor__description-subtitle">По статистике, за последние несколько лет в нашей стране все больше и больше
                        женщин окрашивают волосы. Причины разные: подчеркнуть свою индивидуальность или сменить стиль,  закрасить седину,  стать
                        светлее или темнее. Но в каждом случае женщина хочет стать чуточку красивее. А значит, стать более уверенной в себе.</p>
                    <p className="haircolor__description-subtitle">Я Вам в этом с удовольствием помогу!</p>
                </div>
                <div className="haircolor-me__description">
                    <div className='haircolor__description-img'>
                        <img className='haircolor__img' src={haircolor__img} alt='' />
                    </div>
                    <div className="haircolor-me__description-text">
                        <p className="haircolor__description-subtitle">Сегодня можно выбирать не только оттенки, но и способы окрашивания,
                            получая совершенно разные результаты.  Существуют различные техники окрашивания волос.</p>
                        <p className="haircolor__description-subtitle">С помощью  техник  сложного окрашивания (Аиртач, Шатуш, Балаяж,
                            Мелирование)  можно освежить образ, изменить кардинально цвет волос и замаскировать седину. Носится окрашивание в этих
                            техниках в среднем 6-8 месяцев. </p>
                        <p className="haircolor__description-subtitle">Если нет желания воздействовать на пигмент, но хочется попробовать себя в
                            новом образе  на помощь придёт тонирование. Тонирование волос — окрашивание нестойким красителем, который постепенно
                            вымывается во время мытья волос (обычно оттенок значительно тускнеет уже через 1-1,5 месяца). Однако он незаменим для
                            тех, кто хочет сначала проверить, пойдет ли ему тот или иной оттенок, а затем уже принять решение. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Haircolor;