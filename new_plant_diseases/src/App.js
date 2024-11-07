// src/App.js

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import DamagedPlants from './pages/DamagedPlants'; // Import the new page
import Home from './pages/Home';
import ImageUpload from './pages/Predict';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/predict" element={<ImageUpload />} />
            <Route path="/about" element={<About />} />
            <Route path="/damaged-plants" element={<DamagedPlants />} /> {/* Add new route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
