import React from 'react';
import './Header.css';
import logo from '../../Icons/logo.svg';


function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип Наша Парикмахерская" />
            <p className="header__title">KFA2 – зарегистрированная торговая марка производственной группы Galaxy Microsystems&nbsp;Limited.</p>
        </header>
    );
}

export default Header;