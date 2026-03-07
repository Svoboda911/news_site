import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;