import React, {Component} from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral-light.svg" />
        </header>
    )
}

export default Header;