// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // Update import statement to match the correct filename and extension

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
