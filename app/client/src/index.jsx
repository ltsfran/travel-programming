import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Routes } from "./config/routes";
import configureStore from '@app/src/store/configureStore';

import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>      
      {renderRoutes(Routes)}
    </Router>
  </Provider>, 
  document.getElementById('root')
);
