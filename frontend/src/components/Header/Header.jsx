import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
        <div className="container header-container">
            <div className="logo">
            <span className="logo-text">NewsToday</span>
            </div>
            <nav className="header-nav">
            <a href="/" className="nav-link active">Главная</a>
            <a href="/" className="nav-link">Политика</a>
            <a href="/" className="nav-link">Экономика</a>
            <a href="/" className="nav-link">Спорт</a>
            <a href="/" className="nav-link">Культура</a>
            <a href="/" className="nav-link">Технологии</a>
            </nav>
        </div>
        </header>
    );
}

export default Header;