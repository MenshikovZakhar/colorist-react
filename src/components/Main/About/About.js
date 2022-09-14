import valeria__photo from '../../../images/valeria__photo.jpg';
import './About.css';

function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me__description">
                <img src={valeria__photo} alt="фото" className="about-me__description-photo" />
                <div className="about-me__description-text">
                    <h3 className="about-me__description-title">Испытай лучший</h3>
                    <p className="about-me__description-subtitle">Beauty сервис!</p>
                    <p className="about-me__description-paragraph">
                        Мы являемся ведущим салоном красоты в Челябинске, предоставляющим высококачественные парикмахерские услуги, колористикаи услуги по уходу за волосами для всех.

                        Наши клиенты ценят наш уровень обслуживания, навыки наших парикмахеров и колористов, а также наш профессиональный подход ко всему, что мы делаем.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;