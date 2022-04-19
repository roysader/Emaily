import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

// create a Redux Store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk)); 
// and hooked up to our React side of our application by placing the <Provider> tag
// Proivder tag is a React component that knows how to read changes from our Redux Store
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.querySelector('#root')
);

console.log('STRIPE KEY is', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is', process.env.NODE_ENV);