import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import LinksPage from './pages/LinksPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/link" element={<LinksPage />} />
      <Route path="/links" element={<LinksPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
