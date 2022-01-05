import React from 'react';
import './index.css';
import App from './App';
//Importing components for reusability
import ProductSearch from './components/ProductSearch'; 
import ProductCategory from './components/ProductCategory'; 
import ShoppingCart from './components/ShoppingCart'; 
import Comments from './components/Comments'; 
import Ratings from './components/Ratings'; 
import Contacts from './components/Contacts'; 
import Help from './components/Help'; 
import { render } from '@testing-library/react';

render(<ProductSearch />, document.querySelector('#main'))
