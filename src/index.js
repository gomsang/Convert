import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRouter from "./router/MainRouter";

ReactDOM.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
  document.getElementById('root')
);