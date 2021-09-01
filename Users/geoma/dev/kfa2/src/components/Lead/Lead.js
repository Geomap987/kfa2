import React from 'react';
import './Lead.css';
import DownloadButton from '../DownloadButton/DownloadButton';
import Icon from '../Icon/Icon';
import wave from '../../image/Vector.svg'
import phone1_1 from '../../image/slide1-1.png'
import phone1_2 from '../../image/slide1-2.png'
import rect from '../../image/white-rectangle.svg'
import rectBlue from '../../image/blue-rectangle.svg'
import circle from '../../image/Ellipse36.svg'
import icon1 from '../../Icons/fan.svg'
import icon2 from '../../Icons/engine.svg'
import icon3 from '../../Icons/sun.svg'
import icon4 from '../../Icons/dashboard.svg'


function Lead() {
    return (
        <section className="lead">
            <img className="lead__background" src={wave} alt="background"></img>
            <img className="lead__phone1" src={phone1_1} alt="background"></img>
            <img className="lead__phone2" src={phone1_2} alt="background"></img>
            <img className="lead__rect1" src={rect} alt="background"></img>
            <img className="lead__rect2" src={rect} alt="background"></img>
            <img className="lead__rect3" src={rectBlue} alt="background"></img>
            <img className="lead__circle1" src={circle} alt="background"></img>
            <img className="lead__circle2" src={circle} alt="background"></img>
            <img className="lead__circle3" src={circle} alt="background"></img>
            <div className="lead__title-container">
                <h2 className="lead__title lead__title_small">ТВОЙ СТИЛЬ ИГРЫ</h2>
                <h1 className="lead__title">XTREME TUNER</h1>
                <p className="lead__content">Приложение Xtreme Tuner для мобильных устройств. Мобильное приложение XtremeTuner позволяет мониторить текущие показатели работы системы и настраивать их по своему желанию с любого устройства на базе iOS и Android</p>
            </div>
            <DownloadButton></DownloadButton>
            <div className="lead__subtitle-container">
                <h3 className="lead__subtitle">Детальная настройка теперь и <span>в мобильном формате!</span></h3>
                <h4 className="lead__text">Всё это - одним движением пальца с устройств iOS и Android в мобильном приложении Xtreme Tuner.</h4>
            </div>
            
            <div className="lead__icon-container">
                <Icon image={icon1} text={'Управление режимами работы вентиляторов!'} />
                <Icon image={icon2} text={'Автоматический и ручной разгон'} />
                <Icon image={icon3} text={'Настройка и синхронизация подсветки'} />
                <Icon image={icon4} text={'Мониторинг показателей в реальном времени'} />
            </div>

        </section>
    );
}

export default Lead;