import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-section">
                <h3 className="sidebar-title">Сейчас читают</h3>
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link">Крупнейший саммит G20: детали соглашения</a>
                        <span className="sidebar-views">12.5K просмотров</span>
                    </li>
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link">Курс доллара упал до минимума за полгода</a>
                        <span className="sidebar-views">8.2K просмотров</span>
                    </li>
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link">SpaceX объявила о новой миссии на Марс</a>
                        <span className="sidebar-views">7.8K просмотров</span>
                    </li>
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link">Сборная выходит в финал чемпионата</a>
                        <span className="sidebar-views">6.9K просмотров</span>
                    </li>
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link">Оскар 2024: полный список победителей</a>
                        <span className="sidebar-views">5.4K просмотров</span>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">Рекомендуем</h3>
                <div className="recommended-list">
                    <div className="recommended-item">
                        <img
                            src="https://images.unsplash.com/photo-1569163139599-0f4517e36f51?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                            alt="News"
                            className="recommended-image"
                        />
                        <div className="recommended-content">
                            <a href="/" className="recommended-link">Как изменится климат к 2030 году</a>
                            <span className="recommended-time">2 часа назад</span>
                        </div>
                    </div>
                    <div className="recommended-item">
                        <img
                            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                            alt="News"
                            className="recommended-image"
                        />
                        <div className="recommended-content">
                            <a href="/" className="recommended-link">5 способов сэкономить в 2024 году</a>
                            <span className="recommended-time">5 часов назад</span>
                        </div>
                    </div>
                    <div className="recommended-item">
                        <img
                            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                            alt="News"
                            className="recommended-image"
                        />
                        <div className="recommended-content">
                            <a href="/" className="recommended-link">Новый вид спорта набирает популярность</a>
                            <span className="recommended-time">вчера</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">Топ рубрик</h3>
                <div className="tags">
                    <a href="/" className="tag">Политика</a>
                    <a href="/" className="tag">Экономика</a>
                    <a href="/" className="tag">Спорт</a>
                    <a href="/" className="tag">Технологии</a>
                    <a href="/" className="tag">Наука</a>
                    <a href="/" className="tag">Культура</a>
                    <a href="/" className="tag">Путешествия</a>
                    <a href="/" className="tag">Бизнес</a>
                </div>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">Архив новостей</h3>
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link">Март 2024</a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link">Февраль 2024</a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link">Январь 2024</a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link">Декабрь 2023</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;