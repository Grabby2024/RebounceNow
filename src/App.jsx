import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MathModulePage from './pages/MathModulePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/math/:module" element={<MathModulePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;