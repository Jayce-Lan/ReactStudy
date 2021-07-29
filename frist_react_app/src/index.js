import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import ClickCount from './ClickCounter';
// import ReactUl from "./ReactUl";
import ReactLift from "./ReactLift";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <ReactLift/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
