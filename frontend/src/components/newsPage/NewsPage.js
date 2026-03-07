import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './NewsPage.css';

const NewsPage = ({ language, newsData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Извлекаем числовой ID из параметра (формат: "id-заголовок")
  const newsId = parseInt(id.split('-')[0]);
  
  // Поиск новости по ID во всех категориях
  const findNewsById = () => {
    for (const category in newsData) {
      const found = newsData[category].find(item => item.id === newsId);
      if (found) return found;
    }
    return null;
  };

  const news = findNewsById();

  useEffect(() => {
    // Если новость не найдена, перенаправляем на главную
    if (!news) {
      navigate('/');
    }
    
    // Прокрутка страницы вверх при загрузке
    window.scrollTo(0, 0);
  }, [news, navigate, id]);

  if (!news) {
    return null;
  }

  const sectionTitles = {
    important: { ru: 'Главные новости', kz: 'Бас жаңалықтар', en: 'Top stories' },
    politics: { ru: 'Политика', kz: 'Саясат', en: 'Politics' },
    economy: { ru: 'Экономика', kz: 'Экономика', en: 'Economy' },
    technology: { ru: 'Технологии', kz: 'Технология', en: 'Technology' },
    sports: { ru: 'Спорт', kz: 'Спорт', en: 'Sports' },
    culture: { ru: 'Культура', kz: 'Мәдениет', en: 'Culture' }
  };

  // Разбиваем полный текст на абзацы
  const paragraphs = news.fullContent[language].split('\n\n');

  return (
    <main className="news-page">
      <div className="container">
        <div className="news-page-content">
          {/* Навигационная цепочка */}
          <div className="breadcrumbs">
            <Link to="/" className="breadcrumb-link">Главная</Link>
            <span className="breadcrumb-separator">›</span>
            <Link to={`/#${news.category}`} className="breadcrumb-link">
              {sectionTitles[news.category][language]}
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">
              {news.title[language].substring(0, 50)}...
            </span>
          </div>

          {/* Заголовок новости */}
          <h1 className="news-page-title">{news.title[language]}</h1>

          {/* Мета-информация */}
          <div className="news-page-meta">
            <div className="meta-left">
              <span className="meta-category">{sectionTitles[news.category][language]}</span>
              <span className="meta-date">{news.date}</span>
              <span className="meta-time">{news.time}</span>
            </div>
            <div className="meta-right">
              <span className="meta-author">✎ {news.author}</span>
              <span className="meta-source">📌 {news.source}</span>
            </div>
          </div>

          {/* Изображение (заглушка) */}
          <div className="news-page-image">
            {news.image ? (
              <img src={news.image} alt={news.title[language]} />
            ) : (
              <div className="page-image-placeholder">
                <span className="placeholder-icon">📰</span>
                <span className="placeholder-text">{news.title[language]}</span>
              </div>
            )}
          </div>

          {/* Полный текст новости */}
          <div className="news-page-body">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="news-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Статистика и кнопки */}
          <div className="news-page-footer">
            <div className="news-stats-large">
              <div className="stat-block">
                <span className="stat-label">Просмотры:</span>
                <span className="stat-value">{news.views}</span>
              </div>
              <div className="stat-block">
                <span className="stat-label">Комментарии:</span>
                <span className="stat-value">{news.comments}</span>
              </div>
            </div>

            <div className="share-buttons">
              <button className="share-btn facebook">📘</button>
              <button className="share-btn twitter">🐦</button>
              <button className="share-btn telegram">📱</button>
              <button className="share-btn whatsapp">💬</button>
            </div>
          </div>

          {/* Кнопка "Назад к новостям" */}
          <div className="back-to-news">
            <Link to="/" className="back-button">
              ← {language === 'ru' && 'Вернуться к новостям'}
              {language === 'kz' && 'Жаңалықтарға оралу'}
              {language === 'en' && 'Back to news'}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsPage;