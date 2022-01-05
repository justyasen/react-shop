import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Importing components for reusability
import ProductSearch from './components/ProductSearch'; 
import ProductCategory from './components/ProductCategory'; 
import ShoppingCart from './components/ShoppingCart'; 
import Comments from './components/Comments'; 
import Ratings from './components/Ratings'; 
import Contacts from './components/Contacts'; 
import Help from './components/Help'; 

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
