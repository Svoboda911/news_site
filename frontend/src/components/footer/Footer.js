import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">О нас</h3>
            <p className="footer-text">
              Зеленые новости - ваш источник актуальной информации с фокусом на экологию и устойчивое развитие.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Разделы</h3>
            <ul className="footer-links">
              <li><a href="#">Политика</a></li>
              <li><a href="#">Экономика</a></li>
              <li><a href="#">Технологии</a></li>
              <li><a href="#">Спорт</a></li>
              <li><a href="#">Культура</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Контакты</h3>
            <ul className="footer-contacts">
              <li>📧 info@greenews.ru</li>
              <li>📞 +7 (123) 456-78-90</li>
              <li>📍 Москва, ул. Зеленая, 1</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Подписка</h3>
            <div className="subscribe-form">
              <input
                type="email"
                placeholder="Ваш email"
                className="subscribe-input"
              />
              <button className="subscribe-btn">
                Подписаться
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Зеленые новости. Все права защищены.</p>
          <p>Сделано с ❤️ для экологии</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;