import './index.css';
import App from './App';
import React from 'react';
import 'react-mdl/extra/material.js';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
