import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    'Все новости',
    'Политика',
    'Экономика',
    'Технологии',
    'Спорт',
    'Культура'
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-menu">
          {categories.map((category, index) => (
            <li key={index} className="nav-item">
              <button
                className={`nav-link ${activeCategory === category.toLowerCase() ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.toLowerCase())}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;