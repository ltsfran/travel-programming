import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Routes } from "./config/routes";

import './index.css';

ReactDOM.render(
  <Router>
    {renderRoutes(Routes)}
  </Router>, 
  document.getElementById('root')
);
