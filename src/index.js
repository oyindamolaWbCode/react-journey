//import React from 'react';
//import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client';
//import './index.css';

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <React.StrictMode>
      <App />
    </React.StrictMode>
 
);

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(root);

// const page = (
//   <div>
//     <h1>My awesome website in React</h1>
//     <p>Reasons I love React</p>
//     <ol>
//       <li>Its composable</li>
//       <li>Its is declarative</li>
//       <li>Its a hirable skill</li>
//       <li>Its actively maintained by skilled people</li>
//     </ol>
//   </div>

// )

//const root = createRoot.render(page, document.getElementById('root'));
//ReactDOM.render(page, document.getElementById('root'));

//react props

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
