import React from 'react';
import './Footer.css';

const Footer = ({ language }) => {
  const translations = {
    ru: {
      about: 'О НАС',
      aboutText: 'GreenNews - независимое информационное агентство, освещающее актуальные события в Казахстане и мире с фокусом на экологию и устойчивое развитие.',
      sections: 'РАЗДЕЛЫ',
      politics: 'Политика',
      economy: 'Экономика',
      technology: 'Технологии',
      sports: 'Спорт',
      culture: 'Культура',
      contacts: 'КОНТАКТЫ',
      subscribe: 'ПОДПИСКА',
      subscribeText: 'Будьте в курсе главных событий',
      emailPlaceholder: 'Ваш e-mail',
      subscribeBtn: 'Подписаться',
      copyright: '© 2024 GreenNews. Все права защищены.',
      developed: 'Разработано с заботой о природе'
    },
    kz: {
      about: 'БІЗ ТУРАЛЫ',
      aboutText: 'GreenNews - Қазақстандағы және әлемдегі өзекті оқиғаларды экология және тұрақты дамуға баса назар аудара отырып жариялайтын тәуелсіз ақпарат агенттігі.',
      sections: 'БӨЛІМДЕР',
      politics: 'Саясат',
      economy: 'Экономика',
      technology: 'Технология',
      sports: 'Спорт',
      culture: 'Мәдениет',
      contacts: 'БАЙЛАНЫС',
      subscribe: 'ЖАЗЫЛУ',
      subscribeText: 'Басты оқиғалардан хабардар болыңыз',
      emailPlaceholder: 'Сіздің e-mail',
      subscribeBtn: 'Жазылу',
      copyright: '© 2024 GreenNews. Барлық құқықтар қорғалған.',
      developed: 'Табиғатқа қамқорлықпен жасалған'
    },
    en: {
      about: 'ABOUT US',
      aboutText: 'GreenNews is an independent news agency covering current events in Kazakhstan and the world with a focus on ecology and sustainable development.',
      sections: 'SECTIONS',
      politics: 'Politics',
      economy: 'Economy',
      technology: 'Technology',
      sports: 'Sports',
      culture: 'Culture',
      contacts: 'CONTACTS',
      subscribe: 'SUBSCRIBE',
      subscribeText: 'Stay updated with main events',
      emailPlaceholder: 'Your e-mail',
      subscribeBtn: 'Subscribe',
      copyright: '© 2024 GreenNews. All rights reserved.',
      developed: 'Developed with care for nature'
    }
  };

  const t = translations[language];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-section">
            <h3 className="footer-title">{t.about}</h3>
            <p className="footer-text">{t.aboutText}</p>
            <div className="footer-social">
              <a href="#" className="social-link">📱</a>
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">{t.sections}</h3>
            <ul className="footer-links">
              <li><a href="#politics">{t.politics}</a></li>
              <li><a href="#economy">{t.economy}</a></li>
              <li><a href="#technology">{t.technology}</a></li>
              <li><a href="#sports">{t.sports}</a></li>
              <li><a href="#culture">{t.culture}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">{t.contacts}</h3>
            <ul className="footer-contacts">
              <li>📍 Астана, ул. Достык, 1</li>
              <li>📞 +7 (7172) 123-456</li>
              <li>✉️ info@greenews.kz</li>
              <li>🕒 Пн-Пт: 9:00 - 18:00</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">{t.subscribe}</h3>
            <p className="footer-text">{t.subscribeText}</p>
            <div className="subscribe-form">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="subscribe-input"
              />
              <button className="subscribe-btn">
                {t.subscribeBtn}
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>{t.copyright}</p>
            <p>{t.developed}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;