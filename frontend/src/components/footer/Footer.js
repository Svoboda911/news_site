import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Новости': ['Политика', 'Экономика', 'Технологии', 'Спорт', 'Культура'],
    'Ресурсы': ['О нас', 'Контакты', 'Реклама', 'Вакансии', 'Правила'],
    'Социальные сети': ['Facebook', 'Twitter', 'Instagram', 'Telegram', 'YouTube']
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">NewsPortal</h3>
            <p className="footer-description">
              Ваш надежный источник актуальных новостей со всего мира. 
              Мы предоставляем качественную и проверенную информацию 24/7.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📱</a>
              <a href="#" className="social-link">💬</a>
              <a href="#" className="social-link">📧</a>
              <a href="#" className="social-link">📺</a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-section">
              <h4 className="footer-subtitle">{category}</h4>
              <ul className="footer-links">
                {links.map(link => (
                  <li key={link} className="footer-link-item">
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <span>© {currentYear} NewsPortal. Все права защищены.</span>
            <span className="footer-separator">|</span>
            <span>Разработано с ❤️ для новостей</span>
          </div>
          
          <div className="footer-legal">
            <a href="#" className="legal-link">Политика конфиденциальности</a>
            <span className="footer-separator">|</span>
            <a href="#" className="legal-link">Условия использования</a>
            <span className="footer-separator">|</span>
            <a href="#" className="legal-link">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;