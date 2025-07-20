// src/App.jsx
import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Nairobi" age={129} bio="Capital city of Kenya, known for its wildlife and vibrant culture." />
      <UserProfile name="Tokyo" age={500} bio="A high-tech metropolis blending tradition and innovation." />
      <Footer />
    </div>
  );
}

export default App;
