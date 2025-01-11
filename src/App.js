import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Gallery from './components/Gallery';
import Reels from './components/Reels';
import Biography from './components/Biography';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router basename="/AlexWebsite">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
