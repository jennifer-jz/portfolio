import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import RouterComponent from './modules/common/Router';
import './public/stylesheets/mystyle.css';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <RouterComponent />
  </Router>,
  document.getElementById('root')
);

module.hot.accept();
