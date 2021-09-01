import React from 'react';
import './DownloadButton.css';
import downloadIcon from '../../Icons/download.svg'


function DownloadButton() {
    return (
        <div className="download-button__container">
<button className="download-button__button">
    <a className="download-button__link-container" href="https://www.kfa2.com/">
<img className="download-button__icon" src={downloadIcon} alt="download icon"></img>
<p className="download-button__label" >Загрузить приложение</p>
    </a>
</button>
<a className="download-button__link" href="https://www.kfa2.com/">Перейти к инструкции</a>
        </div>
    );
}

export default DownloadButton;