// src/App.js
import React from 'react';
import Header from './Header';
import LikeButton from './LikeButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Bienvenido a la Aplicación</h2>
        <LikeButton />
        <LikeButton />
      </main>
    </div>
  );
}

export default App;
