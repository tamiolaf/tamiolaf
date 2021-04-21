import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as routes from './routes';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Playground from './components/Playground';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path={routes.PORTFOLIO} component={Portfolio} />
        <Route path={routes.BLOG} component={Blog} />
        <Route path={routes.ABOUT_ME} component={AboutMe} />
        <Route path={routes.CONTACT} component={Contact} />
        <Route path={routes.RESUME} component={Resume} />
        <Route path={routes.PLAYGROUND} component={Playground} />
        <Route exact path='/' component={App} />
      </Switch>
    </Router>
  </React.StrictMode>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
