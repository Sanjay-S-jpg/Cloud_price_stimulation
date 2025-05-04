import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import History from './History.jsx';
import Dashboard from './Dashboard.jsx'; // Import the Dashboard component
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/history" element={<History />} />
      <Route path="/dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}
    </Routes>
  </BrowserRouter>
);
