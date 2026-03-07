import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [news] = useState([
    {
      id: 1,
      title: 'Новый экологичный проект запущен в городе',
      category: 'Политика',
      date: '15 марта 2024',
      description: 'Внедрение зеленых технологий в городскую инфраструктуру позволит снизить выбросы углекислого газа на 30%.',
      image: null
    },
    {
      id: 2,
      title: 'Экономика: рост инвестиций в зеленую энергетику',
      category: 'Экономика',
      date: '15 марта 2024',
      description: 'Инвестиции в возобновляемую энергетику выросли на 45% по сравнению с прошлым годом.',
      image: null
    },
    {
      id: 3,
      title: 'Технологии: создан новый эко-материал',
      category: 'Технологии',
      date: '14 марта 2024',
      description: 'Ученые разработали биоразлагаемый материал, который может заменить пластик.',
      image: null
    },
    {
      id: 4,
      title: 'Спорт: экологический марафон собрал тысячи участников',
      category: 'Спорт',
      date: '14 марта 2024',
      description: 'Ежегодный зеленый марафон прошел в центральном парке города.',
      image: null
    },
    {
      id: 5,
      title: 'Культура: выставка экологического искусства',
      category: 'Культура',
      date: '13 марта 2024',
      description: 'Художники представили работы из переработанных материалов.',
      image: null
    },
    {
      id: 6,
      title: 'В городе высажено 1000 новых деревьев',
      category: 'Политика',
      date: '13 марта 2024',
      description: 'Масштабная акция по озеленению прошла во всех районах города.',
      image: null
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === 'all' || 
      item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="main">
      <div className="container">
        <div className="search-section">
          <input
            type="text"
            className="search-input"
            placeholder="Поиск новостей..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button">
            Поиск
          </button>
        </div>

        <div className="category-buttons">
          <button
            className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            Все
          </button>
          <button
            className={`category-btn ${selectedCategory === 'политика' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('политика')}
          >
            Политика
          </button>
          <button
            className={`category-btn ${selectedCategory === 'экономика' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('экономика')}
          >
            Экономика
          </button>
          <button
            className={`category-btn ${selectedCategory === 'технологии' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('технологии')}
          >
            Технологии
          </button>
          <button
            className={`category-btn ${selectedCategory === 'спорт' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('спорт')}
          >
            Спорт
          </button>
          <button
            className={`category-btn ${selectedCategory === 'культура' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('культура')}
          >
            Культура
          </button>
        </div>

        <div className="news-grid">
          {filteredNews.map(item => (
            <article key={item.id} className="news-card">
              <div className="news-image">
                {item.image ? (
                  <img src={item.image} alt={item.title} />
                ) : (
                  <div className="image-placeholder">
                    📰
                  </div>
                )}
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-category">{item.category}</span>
                  <span className="news-date">{item.date}</span>
                </div>
                <h2 className="news-title">{item.title}</h2>
                <p className="news-description">{item.description}</p>
                <button className="read-more-btn">
                  Читать далее
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;