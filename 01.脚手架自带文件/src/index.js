import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//  主要是用来记录页面上的性能
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//  React.StrictMode 标签包括起来 App 组件 主要是用来检查 APP 组件里的代码是否合理；
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
