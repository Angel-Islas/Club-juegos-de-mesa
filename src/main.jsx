import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom'; // <- Cambia esta línea
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>  {/* Usa HashRouter en lugar de BrowserRouter */}
    <App />
  </HashRouter>
);