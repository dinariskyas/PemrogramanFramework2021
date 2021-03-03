import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import reportWebVitals from "./reportWebVitals";

ReactDom.render (
   <React.StrictMode>
     {/* <App /> */}
     <Login />
   </React.StrictMode>,
   document.getElementById("root")
);

reportWebVitals();
