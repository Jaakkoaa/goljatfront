import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <div style={{background:"grey", padding:10, paddingBottom:1000}}>
  <BrowserRouter>
  <React.StrictMode>
    <App  style={{fontFamily: "Arial"}}/>
  </React.StrictMode>
  </BrowserRouter>
  </div>,
  document.getElementById('root')
);


reportWebVitals();
