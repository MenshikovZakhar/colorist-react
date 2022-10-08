import valeria__photo from '../../../images/valeria__photo-2.jpg';

import './About.css';

function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me__description">
                <img className='about-me__description-photo' src={valeria__photo} alt='' />
                <div className="about-me__description-text">
                    <h3 className="about-me__description-title">Себя не находят</h3>
                    <p className="about-me__description-subtitle">&sim;&ensp;себя создают!</p>

                    <h3 className="about-me__description-title">Себя не находят</h3>
                    <p className="about-me__description-subtitle">&sim;&ensp;себя создают!</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;