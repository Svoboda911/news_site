import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const Main = ({ language, newsData }) => {
  const sectionTitles = {
    important: { ru: 'ГЛАВНЫЕ НОВОСТИ', kz: 'БАС ЖАҢАЛЫҚТАР', en: 'TOP STORIES' },
    politics: { ru: 'ПОЛИТИКА', kz: 'САЯСАТ', en: 'POLITICS' },
    economy: { ru: 'ЭКОНОМИКА', kz: 'ЭКОНОМИКА', en: 'ECONOMY' },
    technology: { ru: 'ТЕХНОЛОГИИ', kz: 'ТЕХНОЛОГИЯ', en: 'TECHNOLOGY' },
    sports: { ru: 'СПОРТ', kz: 'СПОРТ', en: 'SPORTS' },
    culture: { ru: 'КУЛЬТУРА', kz: 'МӘДЕНИЕТ', en: 'CULTURE' }
  };

  const sections = ['important', 'politics', 'economy', 'technology', 'sports', 'culture'];

  // Функция для транслитерации заголовка в URL
  const createSlug = (title) => {
    return title[language]
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-');
  };

  return (
    <main className="main">
      <div className="container">
        {sections.map(sectionId => {
          const sectionNews = newsData[sectionId] || [];
          if (sectionNews.length === 0) return null;

          return (
            <section key={sectionId} id={sectionId} className="news-section">
              <div className="section-header">
                <h2 className="section-title">{sectionTitles[sectionId][language]}</h2>
                <span className="section-count">{sectionNews.length} материалов</span>
              </div>
              
              <div className="news-grid">
                {sectionNews.map(item => (
                  <article key={item.id} className={`news-card ${item.category === 'important' ? 'important-card' : ''}`}>
                    <div className="news-image">
                      {item.image ? (
                        <img src={item.image} alt={item.title[language]} />
                      ) : (
                        <div className="image-placeholder">
                          {item.category === 'important' ? '📰🔥' : '📰'}
                        </div>
                      )}
                    </div>
                    
                    <div className="news-content">
                      <div className="news-meta">
                        <span className="news-category">
                          {sectionTitles[item.category][language]}
                        </span>
                        <div className="news-time">
                          <span className="news-date">{item.date}</span>
                          <span className="news-time-icon">🕒 {item.time}</span>
                        </div>
                      </div>
                      
                      <h3 className="news-title">{item.title[language]}</h3>
                      <p className="news-description">{item.description[language]}</p>
                      
                      <div className="news-footer">
                        <div className="news-stats">
                          <span className="stat-item">👁 {item.views}</span>
                          <span className="stat-item">💬 {item.comments}</span>
                        </div>
                        <Link 
                          to={`/news/${item.id}-${createSlug(item.title)}`}
                          className="read-more-link"
                        >
                          <button className="read-more-btn">
                            {language === 'ru' && 'Подробнее'}
                            {language === 'kz' && 'Толығырақ'}
                            {language === 'en' && 'Read more'}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default Main;