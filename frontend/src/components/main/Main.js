import React, { useState, useEffect } from 'react';
import './Main.css';

const Main = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 9;

  // Mock data для демонстрации
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Имитация загрузки данных
        const mockNews = [
          {
            id: 1,
            title: "Новый прорыв в области искусственного интеллекта",
            description: "Ученые представили новую модель AI, способную решать сложные задачи...",
            category: "technology",
            image: "https://via.placeholder.com/300x200",
            date: "2024-01-15",
            author: "Иван Петров",
            views: 1234
          },
          {
            id: 2,
            title: "Международный саммит по климату начался в Женеве",
            description: "Лидеры стран обсуждают меры по борьбе с изменением климата...",
            category: "world",
            image: "https://via.placeholder.com/300x200",
            date: "2024-01-14",
            author: "Анна Смирнова",
            views: 892
          },
          {
            id: 3,
            title: "Рынок акций достиг исторического максимума",
            description: "Инвесторы оптимистично настроены относительно экономического роста...",
            category: "economics",
            image: "https://via.placeholder.com/300x200",
            date: "2024-01-13",
            author: "Михаил Сидоров",
            views: 2156
          },
          {
            id: 4,
            title: "Открытие новой галереи современного искусства",
            description: "В центре города открылась выставка работ молодых художников...",
            category: "culture",
            image: "https://via.placeholder.com/300x200",
            date: "2024-01-12",
            author: "Елена Волкова",
            views: 567
          },
          {
            id: 5,
            title: "Сборная страны выиграла чемпионат мира",
            description: "В финале наши спортсмены одержали убедительную победу...",
            category: "sports",
            image: "https://via.placeholder.com/300x200",
            date: "2024-01-11",
            author: "Алексей Козлов",
            views: 3421
          },
          {
            id: 6,
            title: "Новые законы в сфере образования",
            description: "Парламент принял пакет законов о модернизации образования...",
            category: "politics",
            image: "https://via.placeholder.com/300x200",
            date: "2024-01-10",
            author: "Дмитрий Новиков",
            views: 1456
          }
        ];

        setTimeout(() => {
          setNews(mockNews);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Ошибка при загрузке новостей');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filteredNews = selectedCategory === 'all' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return <div className="loading">Загрузка новостей...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <main className="main">
      <div className="main-container">
        <div className="main-header">
          <h2 className="main-title">
            {selectedCategory === 'all' ? 'Все новости' : `Новости ${selectedCategory}`}
          </h2>
          <div className="category-tabs">
            <button 
              className={`category-tab ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              Все
            </button>
            <button 
              className={`category-tab ${selectedCategory === 'technology' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('technology')}
            >
              Технологии
            </button>
            <button 
              className={`category-tab ${selectedCategory === 'world' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('world')}
            >
              В мире
            </button>
            <button 
              className={`category-tab ${selectedCategory === 'sports' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('sports')}
            >
              Спорт
            </button>
          </div>
        </div>

        <div className="news-grid">
          {currentNews.map(newsItem => (
            <article key={newsItem.id} className="news-card">
              <div className="news-card-image">
                <img src={newsItem.image} alt={newsItem.title} />
                <span className="news-category-badge">{newsItem.category}</span>
              </div>
              <div className="news-card-content">
                <h3 className="news-card-title">{newsItem.title}</h3>
                <p className="news-card-description">{newsItem.description}</p>
                <div className="news-card-meta">
                  <span className="news-date">{newsItem.date}</span>
                  <span className="news-author">{newsItem.author}</span>
                  <span className="news-views">👁 {newsItem.views}</span>
                </div>
                <button className="read-more-btn">Читать далее</button>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button 
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ←
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button 
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;