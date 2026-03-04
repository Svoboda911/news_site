import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все новости', icon: '📰' },
    { id: 'politics', name: 'Политика', icon: '🏛️' },
    { id: 'economics', name: 'Экономика', icon: '📊' },
    { id: 'technology', name: 'Технологии', icon: '💻' },
    { id: 'science', name: 'Наука', icon: '🔬' },
    { id: 'culture', name: 'Культура', icon: '🎭' },
    { id: 'sports', name: 'Спорт', icon: '⚽' },
    { id: 'world', name: 'В мире', icon: '🌍' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className="hamburger-icon">☰</span>
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {categories.map(category => (
            <li key={category.id} className="nav-item">
              <a 
                href={`#${category.id}`}
                className={`nav-link ${activeCategory === category.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory(category.id);
                  setIsMenuOpen(false);
                }}
              >
                <span className="nav-icon">{category.icon}</span>
                <span className="nav-text">{category.name}</span>
              </a>
            </li>
          ))}
        </ul>
        
        <div className="nav-right">
          <button className="subscribe-btn">Подписаться</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;