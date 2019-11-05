import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Favicon from 'react-favicon';
import { rootDirectory } from './siteConfig.json';
import RouterComponent from './modules/common/Router';
import './public/stylesheets/mystyle.css';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Favicon
      url={`${rootDirectory}/favicon.png`}
    />
    <RouterComponent />
  </Router>,
  document.getElementById('root')
);

module.hot.accept();
