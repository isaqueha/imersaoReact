import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import RegisterGame from './pages/registration/game';
import RegisterCategory from './pages/registration/category';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/game" component={RegisterGame} />
      <Route path="/register/category" component={RegisterCategory} />
      <Route component={() => (<div>Not Found</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
