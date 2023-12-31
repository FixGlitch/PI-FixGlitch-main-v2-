import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/Store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Provider store={store}><App /></Provider>
  </BrowserRouter>
  
);
