import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-info">
                    <div className="footer-logo">
                        <span className="footer-logo-text">NewsToday</span>
                    </div>
                    <p className="footer-description">
                        Актуальные новости со всего мира. Будьте в курсе событий.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="footer-section">
                        <h4 className="footer-title">Разделы</h4>
                        <ul className="footer-list">
                            <li><a href="/" className="footer-link">Политика</a></li>
                            <li><a href="/" className="footer-link">Экономика</a></li>
                            <li><a href="/" className="footer-link">Спорт</a></li>
                            <li><a href="/" className="footer-link">Культура</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Информация</h4>
                        <ul className="footer-list">
                            <li><a href="/" className="footer-link">О нас</a></li>
                            <li><a href="/" className="footer-link">Контакты</a></li>
                            <li><a href="/" className="footer-link">Реклама</a></li>
                            <li><a href="/" className="footer-link">Вакансии</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">© 2024 NewsToday. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;