import './Carousel.css'
import '../../../node_modules/slick-carousel/slick/slick.css';
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import '../SliderCard/SliderCard.css'
import SliderCard from '../SliderCard/SliderCard';
import React, { Component } from "react";
import Slider from "react-slick";
import image1 from '../../image/1-1920.png'
import image2 from '../../image/2-1920.png'
import image3 from '../../image/3-1920.png'
import image4 from '../../image/4-1920.png'


export default class MultipleItems extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        const textArray = ['Разгон 1-Click OC', 'Настройка RGB', 'Работа вентиляторов', 'Мониторинг']
        const settings = {
            // className: "center",
    //   centerMode: true,
            dots: true,
            dotsClass: "slick-dots",
            infinite: true,
            speed: 500,
            slidesToShow: 2.05,
            slidesToScroll: 1,
            appendDots: dots => (
                <div className="dots-container">
                    <ul className="dots-list"> {dots} </ul>
                </div>
            ),
            customPaging: i => (
                <label
                    className="dot" 
                >
                    {textArray[i]}<input type="radio" value={i} className="slider__button"></input>
                </label>
            ),
            responsive: [
                {
                  breakpoint: 1600,
                  settings: {
                    slidesToShow: 1.8,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 1350,
                  settings: {
                    slidesToShow: 1.4,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            
        };
        return (
            <div className="carousel__container">
                <Slider asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)} {...settings}>
                    <SliderCard
                        title='Разгон 1-Click OC'
                        subtitle='Разгон видеокарты в один клик в безопасных пределах. Простой способ увеличить игровую производительность без необходимости изучения тонкостей оверклокинга. Ручной разгон по-прежнему доступен для профессионалов.'
                        image={image1}
                        imageSelector='image1'
                        theme='blue' />
                    <SliderCard
                        title='Настройка RGB'
                        subtitle='Кастомизация системы под себя – управление режимами и цветовыми схемами подсветки вентиляторов и прочих зон с RGB элементами (в зависимости от модели видеокарты), синхронизация режимов подсветки с другими продуктами KFA2/GALAX и фирменным маскотом HOF Links.'
                        image={image2}
                        imageSelector='image2'
                        theme='black' />
                    <SliderCard
                        title='Работа вентиляторов'
                        subtitle='Раздельное управление кривыми вентиляторов для продвинутых пользователей.'
                        image={image3}
                        imageSelector='image3'
                        theme='blue' />
                    <SliderCard
                        title='Мониторинг'
                        subtitle='Отслеживание параметров системы с мобильного устройства позволяет точно определить и зафиксировать показатели в конкретный момент времени без необходимости свёртывания активных приложений.'
                        image={image4}
                        imageSelector='image4'
                        theme='black' />
                </Slider>
                <div className="slider__wrapper">
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={4}
                        swipeToSlide={true}
                        focusOnSelect={true}
                    >
                        <label className="slider__line"><input type="radio" className="slider__button" >
                        </input></label>
                        <label className="slider__line"><input type="radio" className="slider__button" >
                        </input></label>
                        <label className="slider__line"><input type="radio" className="slider__button">
                        </input></label>
                        <label className="slider__line"><input type="radio" className="slider__button" >
                        </input></label>
                    </Slider>
                </div>

            </div>
        );
    }
}