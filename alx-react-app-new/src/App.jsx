import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Nairobi" age={129} bio="Capital city of Kenya, known for its wildlife and vibrant culture." />
      <UserProfile name="Tokyo" age={500} bio="A high-tech metropolis blending tradition and innovation." />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;

