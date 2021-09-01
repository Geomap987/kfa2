import React from 'react';
import './SliderCard.css';

function SliderCard({title, subtitle, image, imageSelector, theme}) {
    return (
        <div className="card__wrapper">
            <article className={`card card_${theme}`}>
                <div className="card__text-container">
                    <h3 className="card__title">{title}</h3>
                    <p className="card__subtitle">{subtitle}</p>
                </div>
                <img className={`card__${imageSelector}`} src={image} alt="pic"></img>
            </article>
            </div>
    );
}

export default SliderCard;