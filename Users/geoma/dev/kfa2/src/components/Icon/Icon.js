import React from 'react';
import './Icon.css';

function Icon({image, text}) {
    return (
        <div className="icon">
            <img className="icon__image" src={image} alt="icon"></img>
            <p className="icon__label">{text}</p>
        </div>
    );
}

export default Icon;