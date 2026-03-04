import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>NewsPortal</h1>
          <span className="logo-badge">24/7</span>
        </div>
        
        <div className="header-right">
          <div className="date-time">
            <span className="date">{new Date().toLocaleDateString('ru-RU', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            <span className="time">{new Date().toLocaleTimeString('ru-RU', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}</span>
          </div>
          
          <div className="weather-widget">
            <span className="weather-icon">☀️</span>
            <span className="weather-temp">+18°C</span>
          </div>
          
          <button className="search-btn">
            <span className="search-icon">🔍</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;