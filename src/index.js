import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div style={{background:"grey", padding:10, paddingBottom:1000}}>
  <React.StrictMode>
    <App  />
  </React.StrictMode>
  </div>,
  document.getElementById('root')
);


reportWebVitals();
