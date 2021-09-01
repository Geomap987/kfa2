import React from 'react';
import './Slider.css';
import MultipleItems from '../Carousel/Carousel1';

function Slider() {
    return (
        <section className="slider">
            <h3 className="slider__title">КЛИК! <span>ГОТОВО!</span></h3>
            <MultipleItems></MultipleItems>
        </section>
        
    );
}

export default Slider;