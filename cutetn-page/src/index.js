import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'

import './assets/fonts/VNF-Comic-Sans.ttf';
import './assets/fonts/r0c0i-Linotte-Semi-Bold.ttf'
import './assets/fonts/r0c0i-Linotte-Heavy.ttf'
import './index.css'

import { palletes } from  './styles/pallete/allPalletes'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
