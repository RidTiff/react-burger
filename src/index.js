import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from '../src/services/store';
import { BrowserRouter as Router } from 'react-router-dom';



ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, 
  document.getElementById('root'));