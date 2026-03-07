import React, { useState } from 'react';
import './Header.css';

const Header = ({ language, setLanguage, currencyRates }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('important');

  const menuItems = [
    { id: 'important', label: { ru: 'Главное', kz: 'Бас мәселе', en: 'Top Stories' } },
    { id: 'politics', label: { ru: 'Политика', kz: 'Саясат', en: 'Politics' } },
    { id: 'economy', label: { ru: 'Экономика', kz: 'Экономика', en: 'Economy' } },
    { id: 'technology', label: { ru: 'Технологии', kz: 'Технология', en: 'Technology' } },
    { id: 'sports', label: { ru: 'Спорт', kz: 'Спорт', en: 'Sports' } },
    { id: 'culture', label: { ru: 'Культура', kz: 'Мәдениет', en: 'Culture' } }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const translations = {
    ru: {
      currency: 'Валюта',
      usd: 'Доллар',
      rub: 'Рубль',
      eur: 'Евро'
    },
    kz: {
      currency: 'Валюта',
      usd: 'Доллар',
      rub: 'Рубль',
      eur: 'Евро'
    },
    en: {
      currency: 'Currency',
      usd: 'USD',
      rub: 'RUB',
      eur: 'EUR'
    }
  };

  const t = translations[language];

  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-container">
          <div className="header-left">
            <button 
              className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <div className="logo">
              <span className="logo-icon">🌿</span>
              <div className="logo-text">
                <h1>GREEN<span>NEWS</span></h1>
                <p>Актуальные новости Казахстана и мира</p>
              </div>
            </div>
          </div>

          <div className="header-right">
            <div className="currency-widget">
              <span className="currency-label">{t.currency}:</span>
              <div className="currency-rates">
                <span className="currency-item" title={t.usd}>USD {currencyRates.usd} ₸</span>
                <span className="currency-item" title={t.rub}>RUB {currencyRates.rub} ₸</span>
                <span className="currency-item" title={t.eur}>EUR {currencyRates.eur} ₸</span>
              </div>
            </div>

            <div className="language-selector">
              <button 
                className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
                onClick={() => setLanguage('ru')}
              >
                RU
              </button>
              <button 
                className={`lang-btn ${language === 'kz' ? 'active' : ''}`}
                onClick={() => setLanguage('kz')}
              >
                KZ
              </button>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Навигационное меню */}
      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <ul className="nav-list">
            {menuItems.map(item => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label[language]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Оверлей для мобильного меню */}
      {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
    </header>
  );
};

export default Header;