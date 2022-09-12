import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(root);


const page = (
  <div>
    <h1>My awesome website in React</h1>
    <p>Reasons I love React</p>
    <ol>
      <li>Its composable</li>
      <li>Its is declarative</li>
      <li>Its a hirable skill</li>
      <li>Its actively maintained by skilled people</li>
    </ol>
  </div>
)

ReactDOM.render(page, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

