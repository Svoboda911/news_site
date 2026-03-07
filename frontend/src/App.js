import React, { useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [language, setLanguage] = useState('ru');
  const [currencyRates, setCurrencyRates] = useState({
    usd: 450.50,
    rub: 4.85,
    eur: 490.30
  });

  return (
    <div className="app">
      <Header language={language} setLanguage={setLanguage} currencyRates={currencyRates} />
      <Main language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;