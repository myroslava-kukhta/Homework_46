//library imports
import React from 'react';
import ReactDOM from 'react-dom/client';
//local imports
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
