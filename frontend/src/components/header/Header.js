import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="site-title">
            ЗЕЛЕНЫЕ<span className="title-highlight">НОВОСТИ</span>
          </h1>
          <p className="site-description">
            Актуальные новости со всего мира
          </p>
          <div className="date-display">
            {new Date().toLocaleDateString('ru-RU', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;