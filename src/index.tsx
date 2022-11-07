import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'App';

const documentWidth = document.documentElement.clientWidth;
const windowWidth = window.innerWidth;
const scrollBarWidth = windowWidth - documentWidth;

document.body.style.paddingRight = scrollBarWidth + "px";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);