import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './main.css'
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {BrowserRouter} from 'react-router-dom';

const root =createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
